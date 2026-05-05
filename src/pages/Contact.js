import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiMail, FiPhone, FiMapPin, FiSend, FiMessageSquare } from 'react-icons/fi';
import { FaDiscord, FaTwitter, FaLinkedin } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
`;

const HeroSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background) 0%, var(--surface) 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const SectionContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 900;
    margin-bottom: 1.5rem;
    color: white;
    
    span {
      color: white;
    }
  }
  
  p {
    font-size: 1.2rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const ContactSection = styled.section`
  padding: 6rem 0;
  background: var(--surface);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 2rem;
    color: white;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary);
    box-shadow: var(--shadow-glow);
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

const ContactDetails = styled.div`
  h4 {
    color: var(--text-primary);
    margin-bottom: 0.25rem;
    font-size: 1.1rem;
  }
  
  p {
    color: var(--text-secondary);
    margin: 0;
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: var(--surface-light);
    border: 1px solid var(--border);
    border-radius: 12px;
    color: var(--text-secondary);
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--primary);
      border-color: var(--primary);
      box-shadow: var(--shadow-glow);
      transform: translateY(-2px);
    }
  }
`;

const ContactForm = styled.form`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 1rem;
    background: var(--background);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
    }
    
    &::placeholder {
      color: var(--text-muted);
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SubmitButton = styled.button`
  background: var(--gradient-primary);
  color: var(--background);
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  width: 100%;
  justify-content: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 255, 136, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const MapSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, var(--background) 0%, var(--surface) 100%);
`;

const MapContainer = styled.div`
  height: 400px;
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, var(--primary) 0%, transparent 50%);
    opacity: 0.1;
  }
`;

const MapPlaceholder = styled.div`
  text-align: center;
  color: var(--text-secondary);
  
  h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 0;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      details: 'shekhar@maveninc.in',
      description: 'Send us an email anytime'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      details: '+91 98724 03977',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: <FiMapPin />,
      title: 'Office',
      details: 'Sector-22D, Chandigarh',
      description: 'TCIL-IT (ICS) Manoj Rangi Dhiman'
    },
    {
      icon: <FiMessageSquare />,
      title: 'Live Chat',
      details: 'Available 24/7',
      description: 'Get instant support'
    }
  ];

  return (
    <ContactContainer>
      <Helmet>
        <title>Contact Maven - Education & Career Services</title>
        <meta name="description" content="Get in touch with Maven. We're here to help you transform your education into career success with skill-based training and job placement." />
      </Helmet>

      <HeroSection>
        <SectionContainer>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Get In <span>Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to transform your career? Let's discuss how our education and job placement services can help you achieve your career goals.
            </motion.p>
          </HeroContent>
        </SectionContainer>
      </HeroSection>

      <ContactSection>
        <SectionContainer>
          <ContactGrid>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactInfo>
                <h2>Let's Start Your Career Journey</h2>
                <p>
                  Whether you're looking for skill-based training, job placement, or career guidance, 
                  we're here to help. Our team of education and career experts is ready to discuss your 
                  goals and find the perfect pathway to your dream career.
                </p>
                
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ContactItem>
                      <ContactIcon>{item.icon}</ContactIcon>
                      <ContactDetails>
                        <h4>{item.title}</h4>
                        <p>{item.details}</p>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                          {item.description}
                        </p>
                      </ContactDetails>
                    </ContactItem>
                  </motion.div>
                ))}
                
                <SocialLinks>
                  <a href="#" aria-label="Discord">
                    <FaDiscord />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                </SocialLinks>
              </ContactInfo>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactForm onSubmit={handleSubmit}>
                <FormRow>
                  <FormGroup>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <label htmlFor="company">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98724 03977"
                    />
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a service</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="cloud">Cloud Infrastructure</option>
                    <option value="security">Security Solutions</option>
                    <option value="development">Custom Development</option>
                    <option value="consulting">Technology Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </FormGroup>

                <FormGroup>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your project or requirements..."
                  />
                </FormGroup>

                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <FiSend />
                </SubmitButton>
              </ContactForm>
            </motion.div>
          </ContactGrid>
        </SectionContainer>
      </ContactSection>

      <MapSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Visit Our Office</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8' }}>
              TCIL-IT (ICS) Manoj Rangi Dhiman<br />
              S.C.O. 3017-18, Second Floor<br />
              Opp. Kisan Bhavan (Bijwara Market)<br />
              Sector-22D, Chandigarh - 160 022
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <MapContainer>
              <MapPlaceholder>
                <h3>Maven Headquarters</h3>
                <p>
                  TCIL-IT (ICS) Manoj Rangi Dhiman<br />
                  S.C.O. 3017-18, Second Floor<br />
                  Opp. Kisan Bhavan (Bijwara Market)<br />
                  Sector-22D, Chandigarh - 160 022<br />
                  India
                </p>
              </MapPlaceholder>
            </MapContainer>
          </motion.div>
        </SectionContainer>
      </MapSection>
    </ContactContainer>
  );
};

export default Contact; 