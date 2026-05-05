import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight, FiUsers, FiTarget, FiAward, FiGlobe, FiTrendingUp, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaGraduationCap, FaBriefcase, FaHandshake, FaChartLine, FaRocket } from 'react-icons/fa';
import LImage from '../assets/L.png';
import ManojImage from '../assets/p.png';

const AboutContainer = styled.div`
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
    max-width: 800px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }
`;

const MissionSection = styled.section`
  padding: 6rem 0;
  background: var(--surface);
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const MissionContent = styled.div`
  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 1.5rem;
    color: white;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

const MissionVisual = styled.div`
  position: relative;
  height: 400px;
  background: var(--surface-light);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  
  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 20%;
    width: 60%;
    height: 60%;
    background: var(--gradient-primary);
    opacity: 0.1;
    border-radius: 50%;
    animation: pulse 3s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.1; }
    50% { transform: scale(1.1); opacity: 0.2; }
  }
`;

const ValuesSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background) 0%, var(--surface) 100%);
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ValueCard = styled(motion.div)`
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

const ValueIcon = styled.div`
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

const ValueTitle = styled.h3`
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const ValueDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const TeamSection = styled.section`
  padding: 6rem 0;
  background: var(--surface);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamCard = styled(motion.div)`
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

const TeamAvatar = styled.div`
  width: 100px;
  height: 100px;
  background: var(--gradient-primary);
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const TeamName = styled.h3`
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const TeamRole = styled.p`
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 600;
`;

const TeamBio = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const TeamSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  a {
    color: var(--text-muted);
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary);
    }
  }
`;



const About = () => {
  const values = [
    {
      icon: <FaGraduationCap />,
      title: 'Skill Development',
      description: 'Practical, skill-based learning directly applicable to industry demands, ensuring students are job-ready.'
    },
    {
      icon: <FaBriefcase />,
      title: 'Job Placement',
      description: 'Strong partnerships with national and international companies offering direct employment opportunities.'
    },
    {
      icon: <FiUsers />,
      title: 'Expert Mentorship',
      description: 'Personalized guidance from industry professionals who help shape careers and ensure success.'
    },
    {
      icon: <FiAward />,
      title: 'Career Transition',
      description: 'Seamless pathway from education to employment with certifications and job placements.'
    },
    {
      icon: <FiGlobe />,
      title: 'Global Opportunities',
      description: 'Access to international job markets through our extensive network of partner companies.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Career Growth',
      description: 'Continuous support and development programs to accelerate career progression and unlock potential.'
    }
  ];

  const team = [
    {
      name: 'Shekhar Gharu',
      role: 'CEO & Founder',
      bio: 'Education innovator with 20+ years experience in career development and industry partnerships.',
      image: LImage,
      social: {
        linkedin: 'https://www.linkedin.com/in/shekhar-gharu-b3354734?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        email: 'sarah@maven.com'
      }
    },
    {
      name: 'Manoj Dhiman',
      role: 'Director of Learning',
      bio: 'Specialist in skill-based curriculum development and industry-aligned training programs.',
      image: ManojImage,
      social: {
        linkedin: 'https://www.linkedin.com/in/manoj-dhiman-25684564?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        email: 'emily@maven.com'
      }
    }
  ];



  return (
    <AboutContainer>
      <Helmet>
        <title>About Maven - Transforming Education into Career Success</title>
        <meta name="description" content="Learn about Maven's mission to bridge the gap between education and employment through skill-based learning, job placement, and expert mentorship." />
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
              About <span>Maven</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We're transforming education into a career-ready experience by bridging the gap between academic learning and real-world employment. 
              Our mission is to empower students with industry-recognized skills and certifications, facilitating a smooth transition from education to employment.
            </motion.p>
          </HeroContent>
        </SectionContainer>
      </HeroSection>

      <MissionSection>
        <SectionContainer>
          <MissionGrid>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <MissionContent>
                <h2>Our Mission</h2>
                <p>
                  At Maven, we believe that education should be a direct pathway to career success. We've created a comprehensive 
                  ecosystem that connects students with industry leaders, provides practical skill development, and ensures 
                  successful job placement.
                </p>
                <p>
                  Through our innovative approach, we've helped thousands of students unlock their full potential in the job market, 
                  providing them with the skills, certifications, and opportunities they need to thrive in their chosen careers.
                </p>
              </MissionContent>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <MissionVisual>
                <FiGlobe style={{ fontSize: '4rem', color: 'var(--primary)' }} />
              </MissionVisual>
            </motion.div>
          </MissionGrid>
        </SectionContainer>
      </MissionSection>

      <ValuesSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Vision</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Creating an ecosystem where education is directly tied to career success
            </p>
          </motion.div>

          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </SectionContainer>
      </ValuesSection>

      <TeamSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Meet Our Leadership</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              The experts dedicated to transforming education into career success
            </p>
          </motion.div>

          <TeamGrid>
            {team.map((member, index) => (
              <TeamCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <TeamAvatar>
                  {member.image ? (
                    <img src={member.image} alt={member.name} />
                  ) : (
                    member.name.split(' ').map(n => n[0]).join('')
                  )}
                </TeamAvatar>
                <TeamName>{member.name}</TeamName>
                <TeamRole>{member.role}</TeamRole>
                <TeamBio>{member.bio}</TeamBio>
                <TeamSocial>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FiLinkedin />
                  </a>
                  <a href={`mailto:${member.social.email}`}>
                    <FiMail />
                  </a>
                </TeamSocial>
              </TeamCard>
            ))}
          </TeamGrid>
        </SectionContainer>
      </TeamSection>


    </AboutContainer>
  );
};

export default About; 