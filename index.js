const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto'); // Explicitly import built-in crypto module

// Polyfill global crypto for Mongoose 9 running on Node 18
if (!globalThis.crypto) {
  globalThis.crypto = crypto.webcrypto || crypto;
}

require('dotenv').config();

// ==========================================
// DATABASE CONFIG
// ==========================================
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Seed Admin User
    await seedAdmin();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const seedAdmin = async () => {
  try {
    const adminEmail = 'ascollege82@gmail.com';
    const existingAdmin = await User.findOne({ email: adminEmail });
    
    if (!existingAdmin) {
      await User.create({
        name: 'Admin',
        email: adminEmail,
        password: '123',
        role: 'admin'
      });
      console.log('Admin user seeded successfully!');
    }
  } catch (err) {
    console.error('Error seeding admin:', err.message);
  }
};

// ==========================================
// MODELS
// ==========================================

// User Model
const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please add a name'] },
  email: {
    type: String, required: [true, 'Please add an email'], unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email']
  },
  password: { type: String, required: [true, 'Please add a password'], minlength: 3, select: false },
  role: { type: String, enum: ['student', 'recruiter', 'admin'], default: 'student' },
  skills: { type: [String], default: [] },
  resume: { type: String, default: '' },
  company: { type: mongoose.Schema.ObjectId, ref: 'Company' },
  createdAt: { type: Date, default: Date.now }
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) { next(); }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
};
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const User = mongoose.model('User', UserSchema);

// Company Model
const CompanySchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Please add a company name'], unique: true, trim: true, maxlength: 50 },
  description: { type: String, required: [true, 'Please add a description'], maxlength: 500 },
  website: { type: String, match: [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 'Please use a valid URL'] },
  location: { type: String, required: [true, 'Please add a location'] },
  logo: { type: String, default: 'no-photo.jpg' },
  createdAt: { type: Date, default: Date.now }
});
const Company = mongoose.model('Company', CompanySchema);

// Job Model
const JobSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: [true, 'Please add a job title'] },
  description: { type: String, required: [true, 'Please add a description'] },
  requirements: { type: [String], required: [true, 'Please add requirements'] },
  type: { type: String, enum: ['Full-time', 'Part-time', 'Internship', 'Contract'], default: 'Full-time' },
  location: { type: String, required: [true, 'Please add a location'] },
  salary: { type: String, default: 'Not disclosed' },
  deadline: { type: Date, required: [true, 'Please add an application deadline'] },
  company: { type: mongoose.Schema.ObjectId, ref: 'Company', required: true },
  postedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});
const Job = mongoose.model('Job', JobSchema);

// Application Model
const ApplicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.ObjectId, ref: 'Job', required: true },
  student: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['Applied', 'Shortlisted', 'Interviewing', 'Selected', 'Rejected'], default: 'Applied' },
  resume: { type: String, required: [true, 'Please provide a resume for this application'] },
  appliedAt: { type: Date, default: Date.now }
});
ApplicationSchema.index({ job: 1, student: 1 }, { unique: true });
const Application = mongoose.model('Application', ApplicationSchema);

// Initialize DB after models are defined
connectDB();


// ==========================================
// MIDDLEWARE
// ==========================================
const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) { return res.status(401).json({ success: false, message: 'Not authorized to access this route' }); }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    if (!req.user) { return res.status(401).json({ success: false, message: 'Not authorized to access this route' }); }
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Not authorized to access this route' });
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ success: false, message: `User role ${req.user.role} is not authorized` });
    }
    next();
  };
};

const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ success: true, token });
};


// ==========================================
// EXPRESS SETUP
// ==========================================
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==========================================
// ROUTES
// ==========================================

// --- Health Check ---
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'Server is healthy and running', timestamp: new Date().toISOString() });
});

app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// --- Auth Routes ---
app.post('/api/v1/auth/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await User.create({ name, email, password, role });
    sendTokenResponse(user, 200, res);
  } catch (err) { res.status(400).json({ success: false, error: err.message }); }
});

app.post('/api/v1/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ success: false, message: 'Please provide an email and password' });
    const user = await User.findOne({ email }).select('+password');
    if (!user) return res.status(401).json({ success: false, message: 'Invalid credentials' });
    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(401).json({ success: false, message: 'Invalid credentials' });
    sendTokenResponse(user, 200, res);
  } catch (err) { res.status(400).json({ success: false, error: err.message }); }
});

app.get('/api/v1/auth/me', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({ success: true, data: user });
  } catch (err) { res.status(400).json({ success: false, error: err.message }); }
});

// --- User Routes ---
app.put('/api/v1/users/updateDetails', protect, async (req, res) => {
  try {
    const fieldsToUpdate = { name: req.body.name, email: req.body.email, skills: req.body.skills, resume: req.body.resume, company: req.body.company };
    Object.keys(fieldsToUpdate).forEach(key => fieldsToUpdate[key] === undefined && delete fieldsToUpdate[key]);
    const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, { new: true, runValidators: true });
    res.status(200).json({ success: true, data: user });
  } catch (err) { res.status(400).json({ success: false, error: err.message }); }
});

app.get('/api/v1/users', protect, authorize('admin'), async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, count: users.length, data: users });
  } catch (err) { res.status(400).json({ success: false, error: err.message }); }
});

// --- Company Routes ---
app.get('/api/v1/companies', async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json({ success: true, count: companies.length, data: companies });
  } catch (err) { res.status(400).json({ success: false, error: err.message }); }
});

app.post('/api/v1/companies', protect, authorize('recruiter', 'admin'), async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json({ success: true, data: company });
  } catch (err) { res.status(400).json({ success: false, error: err.message }); }
});

app.get('/api/v1/companies/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ success: false, message: 'Company not found' });
    res.status(200).json({ success: true, data: company });
  } catch (err) { res.status(400).json({ success: false, error: err.message }); }
});

app.put('/api/v1/companies/:id', protect, authorize('recruiter', 'admin'), async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!company) return res.status(404).json({ success: false, message: 'Company not found' });
    res.status(200).json({ success: true, data: company });
  } catch (err) { res.status(400).json({ success: false, error: err.message }); }
});

// --- Job Routes ---
app.get('/api/v1/jobs', async (req, res) => {
  try {
    const reqQuery = { ...req.query };
    ['select', 'sort', 'page', 'limit'].forEach(param => delete reqQuery[param]);
    let queryStr = JSON.stringify(reqQuery).replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
    const jobs = await Job.find(JSON.parse(queryStr)).populate({ path: 'company', select: 'name location logo' });
    res.status(200).json({ success: true, count: jobs.length, data: jobs });
  } catch (err) { res.status(400).json({ success: false, error: err.message }); }
});

app.post('/api/v1/jobs', protect, authorize('recruiter', 'admin'), async (req, res) => {
  try {
    req.body.postedBy = req.user.id;
    if (!req.body.company) {
      if (req.user.company) { req.body.company = req.user.company; }
      else { return res.status(400).json({ success: false, message: 'Company ID is required' }); }
    }
    const job = await Job.create(req.body);
    res.status(201).json({ success: true, data: job });
  } catch (err) { res.status(400).json({ success: false, error: err.message }); }
});

app.get('/api/v1/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate({ path: 'company', select: 'name location logo description' });
    if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
    res.status(200).json({ success: true, data: job });
  } catch (err) { res.status(400).json({ success: false, error: err.message }); }
});

app.put('/api/v1/jobs/:id', protect, authorize('recruiter', 'admin'), async (req, res) => {
  try {
    let job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
    if (job.postedBy.toString() !== req.user.id && req.user.role !== 'admin') return res.status(401).json({ success: false, message: 'User not authorized to update this job' });
    job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json({ success: true, data: job });
  } catch (err) { res.status(400).json({ success: false, error: err.message }); }
});

app.delete('/api/v1/jobs/:id', protect, authorize('recruiter', 'admin'), async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
    if (job.postedBy.toString() !== req.user.id && req.user.role !== 'admin') return res.status(401).json({ success: false, message: 'User not authorized to delete this job' });
    await job.deleteOne();
    res.status(200).json({ success: true, data: {} });
  } catch (err) { res.status(400).json({ success: false, error: err.message }); }
});

// --- Application Routes ---
app.get('/api/v1/applications/me', protect, authorize('student'), async (req, res) => {
  try {
    const applications = await Application.find({ student: req.user.id }).populate({ path: 'job', select: 'title company location type' });
    res.status(200).json({ success: true, count: applications.length, data: applications });
  } catch (err) { res.status(400).json({ success: false, error: err.message }); }
});

app.put('/api/v1/applications/:id', protect, authorize('recruiter', 'admin'), async (req, res) => {
  try {
    const application = await Application.findById(req.params.id).populate('job');
    if (!application) return res.status(404).json({ success: false, message: 'Application not found' });
    if (application.job.postedBy.toString() !== req.user.id && req.user.role !== 'admin') return res.status(401).json({ success: false, message: 'Not authorized to update this application' });
    application.status = req.body.status;
    await application.save();
    res.status(200).json({ success: true, data: application });
  } catch (err) { res.status(400).json({ success: false, error: err.message }); }
});

app.post('/api/v1/jobs/:jobId/applications', protect, authorize('student'), async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
    const applicationData = { job: req.params.jobId, student: req.user.id, resume: req.body.resume || req.user.resume };
    if (!applicationData.resume) return res.status(400).json({ success: false, message: 'Please provide a resume' });
    const application = await Application.create(applicationData);
    res.status(201).json({ success: true, data: application });
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ success: false, message: 'You have already applied for this job' });
    res.status(400).json({ success: false, error: err.message });
  }
});

app.get('/api/v1/jobs/:jobId/applications', protect, authorize('recruiter', 'admin'), async (req, res) => {
  try {
    const job = await Job.findById(req.params.jobId);
    if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
    if (job.postedBy.toString() !== req.user.id && req.user.role !== 'admin') return res.status(401).json({ success: false, message: 'Not authorized to view applications for this job' });
    const applications = await Application.find({ job: req.params.jobId }).populate({ path: 'student', select: 'name email skills' });
    res.status(200).json({ success: true, count: applications.length, data: applications });
  } catch (err) { res.status(400).json({ success: false, error: err.message }); }
});

// ==========================================
// START SERVER
// ==========================================
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
