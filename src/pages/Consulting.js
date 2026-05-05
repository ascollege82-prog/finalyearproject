import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiTrendingUp, FiTarget, FiUsers, FiGlobe, FiAward, FiClock } from 'react-icons/fi';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  padding-top: 100px;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 204, 255, 0.1) 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,255,136,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  color: white;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  position: relative;
  z-index: 1;
`;

const ContentSection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  color: white;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ServiceCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #00ff88 0%, #00ccff 50%, #ff0066 100%);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);
    border-color: rgba(0, 255, 136, 0.3);
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.2) 0%, rgba(0, 204, 255, 0.2) 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: var(--primary);
  animation: ${float} 3s ease-in-out infinite;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProcessSection = styled.section`
  margin: 4rem 0;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 204, 255, 0.05) 100%);
  border-radius: 20px;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProcessCard = styled.div`
  text-align: center;
  padding: 2rem;
  
  .step-number {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #00ff88 0%, #00ccff 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    color: #000;
    font-weight: 900;
    font-size: 1.5rem;
  }
  
  h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: 700;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #00ff88 0%, #00ccff 100%);
  color: #000;
  text-decoration: none;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 255, 136, 0.4);
  }
`;

const Consulting = () => {
  const services = [
    {
      id: 1,
      title: 'Technology Strategy',
      description: 'Develop comprehensive technology roadmaps aligned with your business objectives and growth plans.',
      icon: <FiTarget />
    },
    {
      id: 2,
      title: 'Digital Transformation',
      description: 'Guide your organization through digital transformation initiatives to improve efficiency and competitiveness.',
      icon: <FiTrendingUp />
    },
    {
      id: 3,
      title: 'Process Optimization',
      description: 'Analyze and optimize your business processes to increase productivity and reduce operational costs.',
      icon: <FiUsers />
    },
    {
      id: 4,
      title: 'Technology Assessment',
      description: 'Evaluate your current technology stack and provide recommendations for improvements and modernization.',
      icon: <FiGlobe />
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We analyze your current state, challenges, and objectives to understand your unique needs.'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Develop a comprehensive technology strategy tailored to your business goals and requirements.'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Execute the strategy with expert guidance and support throughout the transformation process.'
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuously monitor and optimize solutions to ensure maximum value and performance.'
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle>Technology Consulting</HeroTitle>
        <HeroSubtitle>
          Strategic technology consulting services to help your business make informed decisions, 
          achieve digital transformation goals, and stay ahead of the competition.
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <SectionTitle>Our Consulting Services</SectionTitle>
        <ServiceGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServiceGrid>

        <ProcessSection>
          <SectionTitle>Our Consulting Process</SectionTitle>
          <ProcessGrid>
            {processSteps.map((step, index) => (
              <ProcessCard key={index}>
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </ProcessCard>
            ))}
          </ProcessGrid>
        </ProcessSection>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <CTAButton to="/contact">
            Start Your Consultation <FiArrowRight />
          </CTAButton>
        </div>
      </ContentSection>
    </PageContainer>
  );
};

export default Consulting; 