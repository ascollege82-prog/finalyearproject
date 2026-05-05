import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiZap, FiTrendingUp, FiShield, FiGlobe } from 'react-icons/fi';
import { FaBrain, FaCloud, FaRocket } from 'react-icons/fa';

const TechnologyContainer = styled.div`
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
    
    span {
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
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

const TechSection = styled.section`
  padding: 6rem 0;
  background: var(--surface);
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const TechCard = styled(motion.div)`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-glow);
    border-color: var(--primary);
  }
`;

const TechIcon = styled.div`
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--background);
  font-size: 1.5rem;
`;

const TechTitle = styled.h3`
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const TechDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Technology = () => {
  const technologies = [
    {
      icon: <FaBrain />,
      title: 'Artificial Intelligence',
      description: 'Advanced machine learning algorithms and neural networks for intelligent automation and decision-making.'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure and microservices architecture for high-performance applications.'
    },
    {
      icon: <FiShield />,
      title: 'Cybersecurity',
      description: 'Multi-layered security protocols and advanced threat detection systems.'
    },
    {
      icon: <FiZap />,
      title: 'Edge Computing',
      description: 'Distributed computing infrastructure for real-time data processing and low-latency applications.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Data Analytics',
      description: 'Big data processing and real-time analytics for actionable business insights.'
    },
    {
      icon: <FaRocket />,
      title: 'DevOps & Automation',
      description: 'Continuous integration, deployment, and infrastructure automation for rapid development.'
    }
  ];

  return (
    <TechnologyContainer>
      <Helmet>
        <title>Technology - Maven Innovation</title>
        <meta name="description" content="Explore the cutting-edge technologies and innovations that power Maven's solutions." />
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
              Our <span>Technology</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Cutting-edge technologies and innovative solutions that drive digital transformation.
            </motion.p>
          </HeroContent>
        </SectionContainer>
      </HeroSection>

      <TechSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Technologies We Master</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              From AI to cloud computing, we leverage the latest technologies to deliver exceptional results
            </p>
          </motion.div>

          <TechGrid>
            {technologies.map((tech, index) => (
              <TechCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <TechIcon>{tech.icon}</TechIcon>
                <TechTitle>{tech.title}</TechTitle>
                <TechDescription>{tech.description}</TechDescription>
              </TechCard>
            ))}
          </TechGrid>
        </SectionContainer>
      </TechSection>
    </TechnologyContainer>
  );
};

export default Technology; 