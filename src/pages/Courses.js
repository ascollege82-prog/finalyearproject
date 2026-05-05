import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaHeart, FaRegHeart, FaSearch, FaPlay } from 'react-icons/fa';

const coursesData = [
  {
    id: 1,
    title: 'Data Science & Analytics',
    category: 'Technology',
    level: 'Advanced',
    duration: 390,
    lectures: 54,
    description: 'Comprehensive data science training with Python, SQL, and machine learning for high-demand careers.',
    image: '',
    preview: 'https://www.youtube.com/embed/aircAruvnKk',
  },
  {
    id: 2,
    title: 'Full Stack Web Development',
    category: 'Technology',
    level: 'Advanced',
    duration: 450,
    lectures: 60,
    description: 'Master modern web development with React, Node.js, and cloud deployment for job-ready skills.',
    image: '',
    preview: 'https://www.youtube.com/embed/2ePf9rue1Ao',
  },
  {
    id: 3,
    title: 'Digital Marketing & SEO',
    category: 'Marketing',
    level: 'Advanced',
    duration: 280,
    lectures: 40,
    description: 'Complete digital marketing course with SEO, social media, and analytics for career success.',
    image: '',
    preview: 'https://www.youtube.com/embed/pQN-pnXPaVg',
  },
  {
    id: 4,
    title: 'Business Analytics & Excel',
    category: 'Business',
    level: 'Intermediate',
    duration: 200,
    lectures: 30,
    description: 'Master Excel, Power BI, and business analytics for data-driven decision making.',
    image: '',
    preview: 'https://www.youtube.com/embed/2ePf9rue1Ao',
  },
  {
    id: 5,
            title: 'Cloud Computing',
    category: 'Technology',
    level: 'Advanced',
    duration: 320,
    lectures: 45,
            description: 'AWS, Azure, and cloud practices for modern cloud infrastructure careers.',
    image: '',
    preview: 'https://www.youtube.com/embed/ysz5S6PUM-U',
  },
  {
    id: 6,
    title: 'Professional Communication',
    category: 'Professional',
    level: 'Intermediate',
    duration: 120,
    lectures: 20,
    description: 'Essential communication skills for workplace success and career advancement.',
    image: '',
    preview: 'https://www.youtube.com/embed/2ePf9rue1Ao',
  },
  {
    id: 7,
    title: 'Global Business Skills',
    category: 'Professional',
    level: 'Intermediate',
    duration: 150,
    lectures: 25,
    description: 'Cross-cultural communication and international business practices for global careers.',
    image: '',
    preview: 'https://www.youtube.com/embed/ysz5S6PUM-U',
  },
  {
    id: 8,
    title: 'Leadership & Management',
    category: 'Professional',
    level: 'Advanced',
    duration: 180,
    lectures: 30,
    description: 'Leadership skills, team management, and strategic thinking for career growth.',
    image: '',
    preview: 'https://www.youtube.com/embed/aircAruvnKk',
  },
  {
    id: 9,
    title: 'AI & Machine Learning',
    category: 'Technology',
    level: 'Advanced',
    duration: 400,
    lectures: 55,
    description: 'Cutting-edge AI/ML training with TensorFlow, PyTorch, and real-world applications.',
    image: '',
    preview: 'https://www.youtube.com/embed/pQN-pnXPaVg',
  },
];

const categories = ['All', ...Array.from(new Set(coursesData.map(c => c.category)))];
const levels = ['All', ...Array.from(new Set(coursesData.map(c => c.level)))];

const CoursesContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  color: #fff;
  padding-top: 80px;
`;

const Hero = styled.div`
  text-align: center;
  padding: 60px 20px 30px 20px;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 600px;
  margin: 0 auto 30px;
`;

const FiltersBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
`;

const FilterSelect = styled.select`
  background: rgba(255,255,255,0.05);
  color: #fff;
  border: 1px solid #222;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border: 1px solid #00d4ff;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.05);
  border-radius: 25px;
  padding: 8px 20px;
  margin: 0 auto 30px auto;
  max-width: 400px;
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1rem;
  flex: 1;
  outline: none;
  &::placeholder {
    color: #888;
  }
`;

const CoursesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const CourseCard = styled(motion.div)`
  background: rgba(255,255,255,0.05);
  border-radius: 20px;
  padding: 30px 20px 20px 20px;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 8px 32px 0 rgba(0,212,255,0.08);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  transition: all 0.3s;
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,212,255,0.15);
    border-color: #00d4ff;
  }
`;

const CourseTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #fff;
`;

const CourseMeta = styled.div`
  display: flex;
  gap: 15px;
  font-size: 0.95rem;
  color: #7c3aed;
  margin-bottom: 10px;
`;

const CourseDesc = styled.p`
  color: #a0a0a0;
  margin-bottom: 15px;
  font-size: 1rem;
`;

const CardActions = styled.div`
  display: flex;
  gap: 15px;
  margin-top: auto;
`;

const WishlistBtn = styled.button`
  background: none;
  border: none;
  color: #00d4ff;
  font-size: 1.3rem;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #7c3aed;
  }
`;

const PreviewBtn = styled.button`
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 8px 18px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(135deg, #7c3aed 0%, #00d4ff 100%);
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(10,10,30,0.85);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(motion.div)`
  background: #18182f;
  border-radius: 20px;
  padding: 40px 30px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 8px 32px 0 rgba(0,212,255,0.18);
  color: #fff;
  position: relative;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Courses = () => {
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('All');
  const [search, setSearch] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [previewCourse, setPreviewCourse] = useState(null);

  const filteredCourses = coursesData.filter(course => {
    const matchCategory = category === 'All' || course.category === category;
    const matchLevel = level === 'All' || course.level === level;
    const matchSearch = course.title.toLowerCase().includes(search.toLowerCase()) || course.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchLevel && matchSearch;
  });

  const toggleWishlist = (id) => {
    setWishlist(wishlist.includes(id) ? wishlist.filter(w => w !== id) : [...wishlist, id]);
  };

  return (
    <>
      <Helmet>
        <title>Courses - Maven</title>
        <meta name="description" content="Explore Maven's skill-based, job-oriented courses in AI/ML, Data Analytics, Web Design, Digital Marketing, and more. Filter, preview, and add to wishlist." />
      </Helmet>
      <CoursesContainer>
        <Hero>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Courses & Programs
          </Title>
          <Subtitle>
            Skill-based, job-oriented training with global exposure and industry collaboration
          </Subtitle>
        </Hero>
        <FiltersBar>
          <FilterSelect value={category} onChange={e => setCategory(e.target.value)}>
            {categories.map(cat => <option key={cat}>{cat}</option>)}
          </FilterSelect>
          <FilterSelect value={level} onChange={e => setLevel(e.target.value)}>
            {levels.map(lvl => <option key={lvl}>{lvl}</option>)}
          </FilterSelect>
        </FiltersBar>
        <SearchBar>
          <FaSearch style={{ color: '#00d4ff', marginRight: 10 }} />
          <SearchInput
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </SearchBar>
        <CoursesGrid>
          {filteredCourses.map(course => (
            <CourseCard
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <CourseTitle>{course.title}</CourseTitle>
              <CourseMeta>
                <span>{course.category}</span>
                <span>{course.level}</span>
                <span>{course.duration} Hours</span>
                <span>{course.lectures} Lectures</span>
              </CourseMeta>
              <CourseDesc>{course.description}</CourseDesc>
              <CardActions>
                <WishlistBtn onClick={() => toggleWishlist(course.id)}>
                  {wishlist.includes(course.id) ? <FaHeart /> : <FaRegHeart />}
                </WishlistBtn>
                <PreviewBtn onClick={() => setPreviewCourse(course)}>
                  <FaPlay /> Preview
                </PreviewBtn>
              </CardActions>
            </CourseCard>
          ))}
        </CoursesGrid>
        <AnimatePresence>
          {previewCourse && (
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewCourse(null)}
            >
              <ModalContent
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <CloseBtn onClick={() => setPreviewCourse(null)}>&times;</CloseBtn>
                <h2 style={{ marginBottom: 10 }}>{previewCourse.title}</h2>
                <p style={{ color: '#a0a0a0', marginBottom: 20 }}>{previewCourse.description}</p>
                <div style={{ marginBottom: 20 }}>
                  <strong>Category:</strong> {previewCourse.category} | <strong>Level:</strong> {previewCourse.level} <br />
                  <strong>Duration:</strong> {previewCourse.duration} Hours | <strong>Lectures:</strong> {previewCourse.lectures}
                </div>
                <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px #00d4ff33' }}>
                  <iframe
                    width="100%"
                    height="315"
                    src={previewCourse.preview}
                    title={previewCourse.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </ModalContent>
            </ModalOverlay>
          )}
        </AnimatePresence>
      </CoursesContainer>
    </>
  );
};

export default Courses; 