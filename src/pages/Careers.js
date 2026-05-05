import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiMapPin, FiClock, FiDollarSign, FiUsers } from 'react-icons/fi';

const CareersContainer = styled.div`
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
    background: radial-gradient(circle at 30% 70%, rgba(0, 255, 136, 0.1) 0%, transparent 50%);
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

const CultureSection = styled.section`
  padding: 6rem 0;
  background: var(--surface);
`;

const CultureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CultureCard = styled(motion.div)`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-glow);
    border-color: var(--primary);
  }
`;

const CultureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
`;

const CultureTitle = styled.h3`
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const CultureDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const JobsSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background) 0%, var(--surface) 100%);
`;

const JobCard = styled(motion.div)`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
    border-color: var(--primary);
  }
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const JobTitle = styled.h3`
  color: var(--text-primary);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const JobLocation = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const JobType = styled.span`
  background: var(--gradient-primary);
  color: var(--background);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const JobDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const JobMeta = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const JobMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.9rem;
`;

const ApplyButton = styled.button`
  background: var(--gradient-primary);
  color: var(--background);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 255, 136, 0.4);
  }
`;

const Careers = () => {
  const cultureItems = [
    {
      icon: <FiUsers />,
      title: 'Student-Focused Mission',
      description: 'Work with a team dedicated to transforming students\' lives through education and career success.'
    },
    {
      icon: <FiClock />,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and work-life balance.'
    },
    {
      icon: <FiDollarSign />,
      title: 'Competitive Benefits',
      description: 'Comprehensive health coverage, equity, and competitive compensation.'
    },
    {
      icon: <FiMapPin />,
      title: 'Global Impact',
      description: 'Join our diverse team helping students worldwide achieve their career dreams.'
    }
  ];

  const jobs = [
    {
      title: 'Career Development Specialist',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help students develop career paths and connect with job opportunities.',
      salary: '$70k - $100k',
      experience: '3+ years'
    },
    {
      title: 'Curriculum Developer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create industry-aligned training programs and skill development courses.',
      salary: '$65k - $95k',
      experience: '4+ years'
    },
    {
      title: 'Job Placement Coordinator',
      location: 'Remote',
      type: 'Full-time',
      description: 'Connect students with partner companies and manage placement programs.',
      salary: '$60k - $85k',
      experience: '3+ years'
    },
    {
      title: 'Education Technology Specialist',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop and maintain our learning platform and educational technology solutions.',
      salary: '$80k - $120k',
      experience: '4+ years'
    }
  ];

  return (
    <CareersContainer>
      <Helmet>
        <title>Careers - Join Maven Education</title>
        <meta name="description" content="Join our team of education innovators and help shape the future of career development at Maven." />
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
              Join Our <span>Team</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Be part of a team that's transforming education into career success. 
              We're looking for passionate individuals who want to make a difference in students' lives.
            </motion.p>
          </HeroContent>
        </SectionContainer>
      </HeroSection>

      <CultureSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Why Work With Us?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Discover what makes Maven an exceptional place to grow your career
            </p>
          </motion.div>

          <CultureGrid>
            {cultureItems.map((item, index) => (
              <CultureCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <CultureIcon>{item.icon}</CultureIcon>
                <CultureTitle>{item.title}</CultureTitle>
                <CultureDescription>{item.description}</CultureDescription>
              </CultureCard>
            ))}
          </CultureGrid>
        </SectionContainer>
      </CultureSection>

      <JobsSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Open Positions</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Explore our current opportunities and find your perfect role
            </p>
          </motion.div>

          {jobs.map((job, index) => (
            <JobCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <JobHeader>
                <div>
                  <JobTitle>{job.title}</JobTitle>
                  <JobLocation>
                    <FiMapPin />
                    {job.location}
                  </JobLocation>
                </div>
                <JobType>{job.type}</JobType>
              </JobHeader>
              
              <JobDescription>{job.description}</JobDescription>
              
              <JobMeta>
                <JobMetaItem>
                  <FiDollarSign />
                  {job.salary}
                </JobMetaItem>
                <JobMetaItem>
                  <FiUsers />
                  {job.experience} experience
                </JobMetaItem>
              </JobMeta>
              
              <ApplyButton>Apply Now</ApplyButton>
            </JobCard>
          ))}
        </SectionContainer>
      </JobsSection>
    </CareersContainer>
  );
};

export default Careers; 