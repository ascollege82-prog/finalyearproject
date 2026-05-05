import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight, FiCheck, FiPlay, FiDownload, FiUsers, FiTrendingUp, FiShield } from 'react-icons/fi';
import { FaCloud, FaServer, FaDatabase, FaLock, FaRocket, FaHandshake } from 'react-icons/fa';

const CloudContainer = styled.div`
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
    
    span {
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
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

const CloudServices = () => {
  const services = [
    {
      icon: <FaCloud />,
      title: 'Cloud Migration',
      description: 'Seamless migration of your applications and data to the cloud with minimal downtime.',
      features: [
        'Legacy system migration',
        'Data migration strategies',
        'Application modernization',
        'Performance optimization'
      ]
    },
    {
      icon: <FaServer />,
      title: 'Infrastructure as a Service',
      description: 'Scalable cloud infrastructure solutions for your growing business needs.',
      features: [
        'Virtual machine provisioning',
        'Load balancing setup',
        'Auto-scaling configuration',
        'Resource optimization'
      ]
    },
    {
      icon: <FaDatabase />,
      title: 'Database Services',
      description: 'Managed database solutions with high availability and performance.',
      features: [
        'Database migration',
        'Performance tuning',
        'Backup & recovery',
        'Security hardening'
      ]
    },
    {
      icon: <FaLock />,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure.',
      features: [
        'Identity & access management',
        'Data encryption',
        'Security monitoring',
        'Compliance frameworks'
      ]
    },
    {
      icon: <FaRocket />,
      
      description: 'Automated deployment pipelines and infrastructure management.',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as code',
        'Monitoring & alerting',
        'Automated testing'
      ]
    },
    {
      icon: <FaHandshake />,
      title: 'Cloud Consulting',
      description: 'Strategic guidance for cloud adoption and optimization.',
      features: [
        'Cloud strategy planning',
        'Cost optimization',
        'Architecture review',
        'Best practices guidance'
      ]
    }
  ];

  const solutions = [
    {
      icon: <FaCloud />,
      title: 'Multi-Cloud Strategy',
      description: 'Optimize costs and performance with a multi-cloud approach.'
    },
    {
      icon: <FaServer />,
      title: 'Hybrid Cloud Solutions',
      description: 'Seamlessly integrate on-premises and cloud infrastructure.'
    },
    {
      icon: <FaLock />,
      title: 'Cloud-Native Security',
      description: 'Advanced security solutions designed for cloud environments.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Assessment & Planning',
      description: 'Evaluate current infrastructure and plan cloud migration strategy'
    },
    {
      number: '02',
      title: 'Architecture Design',
      description: 'Design scalable and secure cloud architecture'
    },
    {
      number: '03',
      title: 'Migration & Deployment',
      description: 'Execute migration with minimal disruption to operations'
    },
    {
      number: '04',
      title: 'Optimization & Management',
      description: 'Continuous monitoring and optimization of cloud resources'
    }
  ];

  return (
    <CloudContainer>
      <Helmet>
        <title>Cloud Services - Maven</title>
        <meta name="description" content="Comprehensive cloud computing solutions including migration, infrastructure, and security services." />
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
              Cloud <span>Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Transform your business with scalable, secure, and cost-effective cloud solutions. 
              From migration to optimization, we help you leverage the full power of cloud computing.
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
              { number: '99.9%', label: 'Uptime SLA' },
              { number: '50%', label: 'Cost Reduction' },
              { number: '24/7', label: 'Support' },
              { number: '100+', label: 'Cloud Projects' }
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
            <h2>Our Cloud Services</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              End-to-end cloud solutions designed to accelerate your digital transformation
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
            <h2>Cloud Solutions</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Tailored cloud solutions for your specific business requirements
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
            <h2>Our Cloud Implementation Process</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              A proven methodology for successful cloud adoption and optimization
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
              Ready to Move to the Cloud?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's discuss how cloud computing can transform your business operations and drive growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <CTAButton>
                <FiArrowRight />
                Start Your Cloud Journey
              </CTAButton>
            </motion.div>
          </CTAContent>
        </SectionContainer>
      </CTASection>
    </CloudContainer>
  );
};

export default CloudServices; 