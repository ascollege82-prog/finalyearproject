import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiClock, FiShield, FiZap, FiMonitor, FiDatabase } from 'react-icons/fi';

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

const MaintenancePlansSection = styled.section`
  margin: 4rem 0;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 204, 255, 0.05) 100%);
  border-radius: 20px;
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const PlanCard = styled.div`
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
  
  .frequency {
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

const Maintenance = () => {
  const services = [
    {
      id: 1,
      title: 'Regular Updates',
      description: 'Scheduled system updates and patches to keep your software current and secure.',
      features: [
        'Security Patches',
        'Feature Updates',
        'Bug Fixes',
        'Compatibility Updates'
      ],
      icon: <FiClock />
    },
    {
      id: 2,
      title: 'Security Patches',
      description: 'Proactive security updates to protect your systems from vulnerabilities and threats.',
      features: [
        'Vulnerability Assessment',
        'Security Updates',
        'Threat Monitoring',
        'Compliance Checks'
      ],
      icon: <FiShield />
    },
    {
      id: 3,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization to ensure optimal system performance.',
      features: [
        'Performance Monitoring',
        'Resource Optimization',
        'Speed Improvements',
        'Efficiency Analysis'
      ],
      icon: <FiZap />
    },
    {
      id: 4,
      title: 'Backup Management',
      description: 'Comprehensive backup solutions to protect your data and ensure business continuity.',
      features: [
        'Automated Backups',
        'Data Recovery',
        'Disaster Recovery',
        'Backup Testing'
      ],
      icon: <FiDatabase />
    }
  ];

  const maintenancePlans = [
    {
      plan: 'Basic Maintenance',
      frequency: 'Monthly',
      description: 'Essential maintenance services for small to medium businesses.',
      features: ['Security Updates', 'Basic Monitoring', 'Backup Management', 'Email Support']
    },
    {
      plan: 'Standard Maintenance',
      frequency: 'Weekly',
      description: 'Comprehensive maintenance with regular monitoring and updates.',
      features: ['Regular Updates', 'Performance Monitoring', 'Security Patches', 'Phone Support']
    },
    {
      plan: 'Premium Maintenance',
      frequency: 'Daily',
      description: 'Advanced maintenance with 24/7 monitoring and immediate response.',
      features: ['24/7 Monitoring', 'Immediate Updates', 'Priority Support', 'Dedicated Engineer']
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle>System Maintenance</HeroTitle>
        <HeroSubtitle>
          Ongoing maintenance and optimization services to keep your systems up-to-date and performing at their best. 
          From regular updates to performance optimization, we ensure your systems run smoothly.
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <SectionTitle>Our Maintenance Services</SectionTitle>
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

        <MaintenancePlansSection>
          <SectionTitle>Maintenance Plans</SectionTitle>
          <PlansGrid>
            {maintenancePlans.map((plan, index) => (
              <PlanCard key={index}>
                <h3>{plan.plan}</h3>
                <div className="frequency">{plan.frequency}</div>
                <p>{plan.description}</p>
                <ServiceFeatures>
                  {plan.features.map((feature, idx) => (
                    <ServiceFeature key={idx}>
                      <FiCheck />
                      {feature}
                    </ServiceFeature>
                  ))}
                </ServiceFeatures>
              </PlanCard>
            ))}
          </PlansGrid>
        </MaintenancePlansSection>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <CTAButton to="/contact">
            Get Maintenance <FiArrowRight />
          </CTAButton>
        </div>
      </ContentSection>
    </PageContainer>
  );
};

export default Maintenance; 