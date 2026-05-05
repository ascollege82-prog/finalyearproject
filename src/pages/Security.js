import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight, FiCheck, FiPlay, FiDownload, FiUsers, FiTrendingUp, FiShield } from 'react-icons/fi';
import { FaShieldAlt, FaLock, FaEye, FaCog, FaHandshake, FaBrain } from 'react-icons/fa';

const SecurityContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
`;

const HeroSection = styled.section`
  padding: 8rem 0 6rem;
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
    background: radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.15) 0%, transparent 50%);
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
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 900;
    margin-bottom: 2rem;
    color: white;
    
    span {
      color: white;
    }
  }
  
  p {
    font-size: 1.3rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto 3rem;
    line-height: 1.7;
  }
`;

const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const StatCard = styled(motion.div)`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: 900;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    color: var(--text-secondary);
    font-size: 1rem;
  }
`;

const ServicesSection = styled.section`
  padding: 6rem 0;
  background: var(--surface);
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const ServiceCard = styled(motion.div)`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-glow);
    border-color: var(--primary);
  }
`;

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  background: var(--gradient-primary);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--background);
  font-size: 1.8rem;
`;

const ServiceTitle = styled.h3`
  color: var(--text-primary);
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  
  svg {
    color: var(--primary);
    font-size: 0.8rem;
  }
`;

const SolutionsSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background) 0%, var(--surface) 100%);
`;

const SolutionCard = styled(motion.div)`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SolutionIcon = styled.div`
  width: 80px;
  height: 80px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: var(--background);
  font-size: 2rem;
`;

const ProcessSection = styled.section`
  padding: 6rem 0;
  background: var(--surface);
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const ProcessStep = styled(motion.div)`
  text-align: center;
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -1rem;
    width: 2rem;
    height: 2px;
    background: var(--gradient-primary);
    transform: translateY(-50%);
    
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: var(--background);
  font-size: 1.5rem;
  font-weight: 900;
`;

const StepTitle = styled.h4`
  color: var(--text-primary);
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const StepDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const CTASection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  
  h2 {
    color: var(--background);
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }
  
  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.button`
  background: var(--background);
  color: var(--primary);
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const Security = () => {
  const services = [
    {
      icon: <FaShieldAlt />,
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security audits and vulnerability assessments to identify risks.',
      features: [
        'Security posture evaluation',
        'Vulnerability scanning',
        'Penetration testing',
        'Risk assessment reports'
      ]
    },
    {
      icon: <FaLock />,
      title: 'Identity & Access Management',
      description: 'Secure identity management and access control solutions.',
      features: [
        'Single sign-on (SSO)',
        'Multi-factor authentication',
        'Role-based access control',
        'Identity governance'
      ]
    },
    {
      icon: <FaEye />,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and threat detection services.',
      features: [
        'SIEM implementation',
        'Threat detection',
        'Incident response',
        'Security analytics'
      ]
    },
    {
      icon: <FaCog />,
      title: 'Security Architecture',
      description: 'Design and implement secure infrastructure and applications.',
      features: [
        'Security framework design',
        'Zero-trust architecture',
        'Secure coding practices',
        'Compliance frameworks'
      ]
    },
    {
      icon: <FaHandshake />,
      title: 'Security Consulting',
      description: 'Strategic security guidance and compliance consulting.',
      features: [
        'Security strategy development',
        'Compliance assessment',
        'Policy development',
        'Security training'
      ]
    },
    {
      icon: <FaBrain />,
      title: 'AI-Powered Security',
      description: 'Advanced AI and ML solutions for threat detection and prevention.',
      features: [
        'Behavioral analytics',
        'Anomaly detection',
        'Predictive threat modeling',
        'Automated response'
      ]
    }
  ];

  const solutions = [
    {
      icon: <FaShieldAlt />,
      title: 'Comprehensive Security Suite',
      description: 'End-to-end security solutions for enterprise protection.'
    },
    {
      icon: <FaLock />,
      title: 'Cloud Security',
      description: 'Specialized security solutions for cloud environments.'
    },
    {
      icon: <FaEye />,
      title: 'Managed Security Services',
      description: '24/7 managed security operations and monitoring.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Security Assessment',
      description: 'Evaluate current security posture and identify vulnerabilities'
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Develop comprehensive security strategy and roadmap'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Deploy security solutions and monitoring systems'
    },
    {
      number: '04',
      title: 'Ongoing Management',
      description: 'Continuous monitoring, updates, and security optimization'
    }
  ];

  return (
    <SecurityContainer>
      <Helmet>
        <title>Security Services - Maven</title>
        <meta name="description" content="Comprehensive cybersecurity services including assessment, monitoring, IAM, and AI-powered security solutions." />
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
              Cybersecurity <span>Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Protect your business with advanced cybersecurity solutions. From threat detection 
              to compliance management, we safeguard your digital assets with cutting-edge technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <CTAButton>
                <FiPlay />
                Watch Demo
              </CTAButton>
            </motion.div>
          </HeroContent>
          
          <HeroStats>
            {[
              { number: '99.9%', label: 'Threat Detection Rate' },
              { number: '24/7', label: 'Security Monitoring' },
              { number: '100+', label: 'Security Projects' },
              { number: '0', label: 'Security Breaches' }
            ].map((stat, index) => (
              <StatCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </StatCard>
            ))}
          </HeroStats>
        </SectionContainer>
      </HeroSection>

      <ServicesSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Security Services</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Comprehensive cybersecurity solutions to protect your business from evolving threats
            </p>
          </motion.div>

          <ServiceGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature, featureIndex) => (
                    <ServiceFeature key={featureIndex}>
                      <FiCheck />
                      {feature}
                    </ServiceFeature>
                  ))}
                </ServiceFeatures>
              </ServiceCard>
            ))}
          </ServiceGrid>
        </SectionContainer>
      </ServicesSection>

      <SolutionsSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Security Solutions</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Tailored security solutions for your specific business requirements
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <SolutionIcon>{solution.icon}</SolutionIcon>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>
                  {solution.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {solution.description}
                </p>
              </SolutionCard>
            ))}
          </div>
        </SectionContainer>
      </SolutionsSection>

      <ProcessSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Security Process</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              A proven methodology for implementing comprehensive security solutions
            </p>
          </motion.div>

          <ProcessGrid>
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </ProcessStep>
            ))}
          </ProcessGrid>
        </SectionContainer>
      </ProcessSection>

      <CTASection>
        <SectionContainer>
          <CTAContent>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Secure Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's discuss how our security solutions can protect your business from evolving threats.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <CTAButton>
                <FiArrowRight />
                Secure Your Business
              </CTAButton>
            </motion.div>
          </CTAContent>
        </SectionContainer>
      </CTASection>
    </SecurityContainer>
  );
};

export default Security; 