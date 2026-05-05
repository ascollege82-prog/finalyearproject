import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight, FiCheck, FiPlay, FiDownload, FiUsers, FiTrendingUp, FiShield } from 'react-icons/fi';
import { FaBrain, FaRobot, FaChartLine, FaCog, FaEye, FaHandshake } from 'react-icons/fa';

const AIMLContainer = styled.div`
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

const TechnologiesSection = styled.section`
  padding: 6rem 0;
  background: var(--surface);
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const TechCard = styled(motion.div)`
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

const TechIcon = styled.div`
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

const AIML = () => {
  const services = [
    {
      icon: <FaBrain />,
      title: 'Machine Learning Development',
      description: 'Custom ML model development for predictive analytics, pattern recognition, and automated decision-making.',
      features: [
        'Custom algorithm development',
        'Model training & optimization',
        'Real-time prediction systems',
        'Performance monitoring'
      ]
    },
    {
      icon: <FaRobot />,
      title: 'AI-Powered Automation',
      description: 'Intelligent automation solutions that streamline operations and reduce manual workload.',
      features: [
        'Process automation',
        'Intelligent document processing',
        'Chatbot development',
        'Workflow optimization'
      ]
    },
    {
      icon: <FaChartLine />,
      title: 'Predictive Analytics',
      description: 'Advanced analytics solutions that forecast trends and identify opportunities for growth.',
      features: [
        'Data pattern analysis',
        'Trend forecasting',
        'Risk assessment',
        'Performance prediction'
      ]
    },
    {
      icon: <FaCog />,
      title: 'AI Infrastructure',
      description: 'Scalable AI infrastructure setup and management for enterprise-grade applications.',
      features: [
        'GPU cluster setup',
        'Model deployment',
        'Scalability solutions',
        'Performance optimization'
      ]
    },
    {
      icon: <FaEye />,
      title: 'Computer Vision',
      description: 'Advanced image and video processing solutions for object detection and analysis.',
      features: [
        'Object detection',
        'Facial recognition',
        'Quality inspection',
        'Video analytics'
      ]
    },
    {
      icon: <FaHandshake />,
      title: 'AI Consulting',
      description: 'Strategic consulting to help organizations identify and implement AI opportunities.',
      features: [
        'AI strategy development',
        'Technology assessment',
        'Implementation planning',
        'ROI optimization'
      ]
    }
  ];

  const solutions = [
    {
      icon: <FaBrain />,
      title: 'Intelligent Customer Insights',
      description: 'AI-powered customer behavior analysis and personalized recommendations.'
    },
    {
      icon: <FaChartLine />,
      title: 'Predictive Maintenance',
      description: 'ML-based systems to predict equipment failures and optimize maintenance schedules.'
    },
    {
      icon: <FaRobot />,
      title: 'Smart Process Automation',
      description: 'Automated workflows that learn and improve over time for maximum efficiency.'
    }
  ];

  const technologies = [
    {
      icon: '🤖',
      title: 'Machine Learning',
      description: 'TensorFlow, PyTorch, Scikit-learn'
    },
    {
      icon: '🧠',
      title: 'Deep Learning',
      description: 'Neural Networks, CNN, RNN, Transformers'
    },
    {
      icon: '📊',
      title: 'Data Processing',
      description: 'Pandas, NumPy, Apache Spark'
    },
    {
      icon: '🔍',
      title: 'Computer Vision',
      description: 'OpenCV, YOLO, Image Recognition'
    },
    {
      icon: '💬',
      title: 'NLP',
      description: 'BERT, GPT, Text Analysis'
    },
    {
      icon: '☁️',
      title: 'Cloud AI',
      description: 'AWS SageMaker, Azure ML, GCP AI'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'Analyze your business needs and identify AI opportunities'
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Develop comprehensive AI strategy and implementation roadmap'
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Build and rigorously test AI models and solutions'
    },
    {
      number: '04',
      title: 'Deployment & Optimization',
      description: 'Deploy solutions and continuously optimize performance'
    }
  ];

  return (
    <AIMLContainer>
      <Helmet>
        <title>AI & Machine Learning Services - Maven</title>
        <meta name="description" content="Transform your business with cutting-edge AI and machine learning solutions. Custom ML models, predictive analytics, and intelligent automation." />
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
              AI & <span>Machine Learning</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Transform your business with cutting-edge artificial intelligence and machine learning solutions. 
              From predictive analytics to intelligent automation, we help you harness the power of AI.
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
              { number: '95%', label: 'Accuracy Rate' },
              { number: '50+', label: 'ML Models Deployed' },
              { number: '24/7', label: 'AI Monitoring' },
              { number: '3x', label: 'Performance Boost' }
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
            <h2 style={{ color: 'white' }}>Our AI & ML Services</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Comprehensive artificial intelligence and machine learning solutions tailored to your business needs
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
            <h2 style={{ color: 'white' }}>AI Solutions</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Ready-to-deploy AI solutions that deliver immediate business value
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
            <h2 style={{ color: 'white' }}>Our AI Implementation Process</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              A proven methodology for successful AI implementation and deployment
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
              Ready to Transform Your Business with AI?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's discuss how AI and machine learning can revolutionize your operations and drive growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <CTAButton>
                <FiArrowRight />
                Start Your AI Journey
              </CTAButton>
            </motion.div>
          </CTAContent>
        </SectionContainer>
      </CTASection>
    </AIMLContainer>
  );
};

export default AIML; 