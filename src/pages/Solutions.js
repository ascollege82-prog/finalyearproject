import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight, FiCheck, FiPlay, FiDownload, FiUsers, FiTrendingUp, FiShield } from 'react-icons/fi';
import { FaBrain, FaCloud, FaRocket, FaShieldAlt, FaCogs, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SolutionsContainer = styled.div`
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

const SolutionsSection = styled.section`
  padding: 6rem 0;
  background: var(--surface);
`;

const SolutionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const SolutionCard = styled(motion.div)`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 3rem;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-glow);
    border-color: var(--primary);
  }
`;

const SolutionIcon = styled.div`
  width: 80px;
  height: 80px;
  background: var(--gradient-primary);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  color: var(--background);
  font-size: 2rem;
`;

const SolutionTitle = styled.h3`
  color: var(--text-primary);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const SolutionDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SolutionFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 2rem;
`;

const SolutionFeature = styled.li`
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

const SolutionButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 600;
  font-size: 1rem;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  ${SolutionCard}:hover & svg {
    transform: translateX(5px);
  }
`;

const IndustriesSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background) 0%, var(--surface) 100%);
`;

const IndustryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const IndustryCard = styled(motion.div)`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-glow);
    border-color: var(--primary);
  }
`;

const IndustryIcon = styled.div`
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

const Solutions = () => {
  const solutions = [
    {
      icon: <FaBrain />,
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      features: [
        'Custom ML model development',
        'AI-powered automation',
        'Predictive analytics',
        'Computer vision solutions'
      ],
      link: '/ai-ml'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Services',
      description: 'Scalable, secure, and cost-effective cloud solutions for modern businesses.',
      features: [
        'Cloud migration services',
        'Infrastructure as a Service',
        'Database management',
    
      ],
      link: '/cloud-services'
    },
    {
      icon: <FaRocket />,
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation strategies to future-proof your business.',
      features: [
        'Digital strategy development',
        'Process automation',
        'Technology modernization',
        'Change management'
      ],
      link: '/digital-transformation'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Security Solutions',
      description: 'Advanced cybersecurity solutions to protect your digital assets and infrastructure.',
      features: [
        'Security assessments',
        'Identity & access management',
        '24/7 monitoring',
        'AI-powered threat detection'
      ],
      link: '/security'
    },

    {
      icon: <FaChartLine />,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights for better decision-making and growth.',
      features: [
        'Data strategy development',
        'Analytics platform setup',
        'Predictive modeling',
        'Business intelligence'
      ],
      link: '/data-analytics'
    }
  ];

  const industries = [
    {
      icon: '🏭',
      title: 'Manufacturing',
      description: 'Industry 4.0 solutions and smart manufacturing technologies'
    },
    {
      icon: '🏥',
      title: 'Healthcare',
      description: 'Digital health solutions and medical technology innovations'
    },
    {
      icon: '🏦',
      title: 'Financial Services',
      description: 'Fintech solutions and digital banking technologies'
    },
    {
      icon: '🛒',
      title: 'Retail & E-commerce',
      description: 'Digital commerce and customer experience solutions'
    },
    {
      icon: '🚛',
      title: 'Logistics',
      description: 'Supply chain optimization and logistics automation'
    },
    {
      icon: '🎓',
      title: 'Education',
      description: 'Edtech solutions and digital learning platforms'
    }
  ];

  return (
    <SolutionsContainer>
      <Helmet>
        <title>Solutions - Maven Technology Services</title>
        <meta name="description" content="Comprehensive technology solutions including AI, cloud services, digital transformation, and security." />
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
              Technology <span>Solutions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive technology solutions designed to accelerate your business growth. 
              From AI and cloud services to security, we deliver innovative solutions that drive results.
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
              { number: '500+', label: 'Projects Delivered' },
              { number: '50+', label: 'Technology Solutions' },
              { number: '95%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' }
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

      <SolutionsSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Our Technology Solutions</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              End-to-end technology solutions designed to transform your business operations
            </p>
          </motion.div>

          <SolutionGrid>
            {solutions.map((solution, index) => (
              <Link to={solution.link} key={index} style={{ textDecoration: 'none' }}>
                <SolutionCard
                  as={motion.div}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <SolutionIcon>{solution.icon}</SolutionIcon>
                  <SolutionTitle>{solution.title}</SolutionTitle>
                  <SolutionDescription>{solution.description}</SolutionDescription>
                  <SolutionFeatures>
                    {solution.features.map((feature, featureIndex) => (
                      <SolutionFeature key={featureIndex}>
                        <FiCheck />
                        {feature}
                      </SolutionFeature>
                    ))}
                  </SolutionFeatures>
                  <SolutionButton>
                    Learn More <FiArrowRight />
                  </SolutionButton>
                </SolutionCard>
              </Link>
            ))}
          </SolutionGrid>
        </SectionContainer>
      </SolutionsSection>

      <IndustriesSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Industry Solutions</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Tailored technology solutions for specific industry requirements
            </p>
          </motion.div>

          <IndustryGrid>
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <IndustryIcon>{industry.icon}</IndustryIcon>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>
                  {industry.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {industry.description}
                </p>
              </IndustryCard>
            ))}
          </IndustryGrid>
        </SectionContainer>
      </IndustriesSection>

      <CTASection>
        <SectionContainer>
          <CTAContent>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's discuss how our technology solutions can accelerate your business growth and digital transformation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <CTAButton>
                <FiArrowRight />
                Get Started Today
              </CTAButton>
            </motion.div>
          </CTAContent>
        </SectionContainer>
      </CTASection>
    </SolutionsContainer>
  );
};

export default Solutions; 