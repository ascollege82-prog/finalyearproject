import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiShield, FiClock, FiUsers, FiZap, FiMonitor } from 'react-icons/fi';

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

const ServiceFeatures = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  
  svg {
    color: var(--primary);
    font-size: 0.8rem;
  }
`;

const SupportLevelsSection = styled.section`
  margin: 4rem 0;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 204, 255, 0.05) 100%);
  border-radius: 20px;
`;

const LevelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const LevelCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  
  h3 {
    color: var(--primary);
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 700;
  }
  
  .response-time {
    background: linear-gradient(135deg, #00ff88 0%, #00ccff 100%);
    color: #000;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    margin: 1rem 0;
    display: inline-block;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
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

const Support = () => {
  const services = [
    {
      id: 1,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems are always running smoothly.',
      features: [
        '24/7 Help Desk',
        'Emergency Response',
        'Remote Support',
        'On-site Support'
      ],
      icon: <FiClock />
    },
    {
      id: 2,
      title: 'System Maintenance',
      description: 'Proactive maintenance services to prevent issues and optimize system performance.',
      features: [
        'Regular Updates',
        'Performance Monitoring',
        'Security Patches',
        'System Optimization'
      ],
      icon: <FiMonitor />
    },
    {
      id: 3,
      title: 'Troubleshooting',
      description: 'Expert problem-solving and issue resolution to get your systems back online quickly.',
      features: [
        'Root Cause Analysis',
        'Quick Resolution',
        'Prevention Strategies',
        'Documentation'
      ],
      icon: <FiZap />
    },
    {
      id: 4,
      title: 'Performance Monitoring',
      description: 'Continuous monitoring and analysis to ensure optimal system performance and reliability.',
      features: [
        'Real-time Monitoring',
        'Performance Analytics',
        'Alert Systems',
        'Capacity Planning'
      ],
      icon: <FiShield />
    }
  ];

  const supportLevels = [
    {
      level: 'Basic Support',
      responseTime: '24 Hours',
      description: 'Standard support for routine issues and general inquiries.',
      features: ['Email Support', 'Basic Troubleshooting', 'Documentation Access']
    },
    {
      level: 'Premium Support',
      responseTime: '4 Hours',
      description: 'Enhanced support with faster response times and priority handling.',
      features: ['Phone Support', 'Priority Queue', 'Dedicated Support Team']
    },
    {
      level: 'Enterprise Support',
      responseTime: '1 Hour',
      description: 'Premium support for critical systems with immediate response.',
      features: ['24/7 Phone Support', 'Dedicated Engineer', 'SLA Guarantee']
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle>Technical Support</HeroTitle>
        <HeroSubtitle>
          Comprehensive technical support and maintenance services to ensure your systems run smoothly. 
          From 24/7 monitoring to emergency response, we've got you covered.
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <SectionTitle>Our Support Services</SectionTitle>
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
              <ServiceFeatures>
                {service.features.map((feature, idx) => (
                  <ServiceFeature key={idx}>
                    <FiCheck />
                    {feature}
                  </ServiceFeature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServiceGrid>

        <SupportLevelsSection>
          <SectionTitle>Support Levels</SectionTitle>
          <LevelsGrid>
            {supportLevels.map((level, index) => (
              <LevelCard key={index}>
                <h3>{level.level}</h3>
                <div className="response-time">{level.responseTime}</div>
                <p>{level.description}</p>
                <ServiceFeatures>
                  {level.features.map((feature, idx) => (
                    <ServiceFeature key={idx}>
                      <FiCheck />
                      {feature}
                    </ServiceFeature>
                  ))}
                </ServiceFeatures>
              </LevelCard>
            ))}
          </LevelsGrid>
        </SupportLevelsSection>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <CTAButton to="/contact">
            Get Support <FiArrowRight />
          </CTAButton>
        </div>
      </ContentSection>
    </PageContainer>
  );
};

export default Support; 