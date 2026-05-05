import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import LImage from '../assets/L.png';
import ManojImage from '../assets/p.png';

const TeamContainer = styled.div`
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

const TeamSection = styled.section`
  padding: 6rem 0;
  background: var(--surface);
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  width: 150px;
  height: 150px;
  background: var(--gradient-primary);
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--background);
  font-size: 3.5rem;
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
  font-size: 1.3rem;
`;

const TeamRole = styled.p`
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 600;
`;

const TeamBio = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
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

const Team = () => {
  const teamMembers = [
    {
      name: 'Shekhar Gharu',
      role: 'CEO & Founder',
      bio: 'Education innovator with 20+ years experience in career development and industry partnerships.',
      image: LImage,
      social: {
        linkedin: 'https://www.linkedin.com/in/shekhar-gharu-b3354734?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        // twitter: '#',
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
        // twitter: '#',
        email: 'emily@maven.com'
      }
    }
  ];

  return (
    <TeamContainer>
      <Helmet>
        <title>Team - Maven Education Leadership</title>
        <meta name="description" content="Meet the brilliant minds behind Maven's innovative education and career development solutions." />
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
              Meet Our <span>Team</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The brilliant minds behind our innovative education and career development solutions.
            </motion.p>
          </HeroContent>
        </SectionContainer>
      </HeroSection>

      <TeamSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Leadership Team</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Experienced leaders driving education innovation and career transformation
            </p>
          </motion.div>

          <TeamGrid>
            {teamMembers.map((member, index) => (
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
    </TeamContainer>
  );
};

export default Team; 