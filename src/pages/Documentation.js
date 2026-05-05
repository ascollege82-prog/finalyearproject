import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiSearch, FiBook, FiCode, FiDownload, FiExternalLink, FiChevronRight } from 'react-icons/fi';
import { FaGithub, FaStackOverflow, FaDiscord } from 'react-icons/fa';

const DocumentationContainer = styled.div`
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

const SearchSection = styled.div`
  margin: 2rem 0;
  text-align: center;
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  font-size: 1.2rem;
`;

const DocumentationSection = styled.section`
  padding: 6rem 0;
  background: var(--surface);
`;

const DocGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const DocCard = styled(motion.div)`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-glow);
    border-color: var(--primary);
  }
`;

const DocIcon = styled.div`
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

const DocTitle = styled.h3`
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const DocDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const DocMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-muted);
  font-size: 0.9rem;
`;

const DocLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 600;
`;

const QuickStartSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background) 0%, var(--surface) 100%);
`;

const QuickStartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const QuickStartCard = styled(motion.div)`
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

const QuickStartNumber = styled.div`
  width: 50px;
  height: 50px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: var(--background);
  font-weight: 900;
  font-size: 1.2rem;
`;

const QuickStartTitle = styled.h4`
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const QuickStartDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.9rem;
`;

const CommunitySection = styled.section`
  padding: 6rem 0;
  background: var(--surface);
`;

const CommunityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const CommunityCard = styled(motion.div)`
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

const CommunityIcon = styled.div`
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: var(--background);
  font-size: 1.5rem;
`;

const CommunityTitle = styled.h4`
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const CommunityDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.9rem;
`;

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const documentationCategories = [
    {
      icon: <FiBook />,
      title: 'Getting Started',
      description: 'Quick start guides and tutorials to get you up and running with our platform.',
      lastUpdated: '2 days ago',
      version: 'v2.1.0'
    },
    {
      icon: <FiCode />,
      title: 'API Reference',
      description: 'Comprehensive API documentation with examples and code snippets.',
      lastUpdated: '1 week ago',
      version: 'v2.1.0'
    },
    {
      icon: <FiDownload />,
      title: 'SDKs & Libraries',
      description: 'Download and integrate our SDKs for various programming languages.',
      lastUpdated: '3 days ago',
      version: 'v2.0.5'
    },
    {
      icon: <FiExternalLink />,
      title: 'Integration Guides',
      description: 'Step-by-step guides for integrating with popular platforms and services.',
      lastUpdated: '5 days ago',
      version: 'v2.1.0'
    },
    {
      icon: <FiBook />,
      title: 'Best Practices',
      description: 'Learn industry best practices and recommended patterns for optimal performance.',
      lastUpdated: '1 week ago',
      version: 'v2.1.0'
    },
    {
      icon: <FiCode />,
      title: 'Troubleshooting',
      description: 'Common issues, error codes, and solutions to help you resolve problems quickly.',
      lastUpdated: '4 days ago',
      version: 'v2.1.0'
    }
  ];

  const quickStartSteps = [
    {
      number: '01',
      title: 'Create Account',
      description: 'Sign up for a free account and get your API keys'
    },
    {
      number: '02',
      title: 'Install SDK',
      description: 'Download and install our SDK for your preferred language'
    },
    {
      number: '03',
      title: 'First Request',
      description: 'Make your first API call and see the response'
    },
    {
      number: '04',
      title: 'Build & Deploy',
      description: 'Integrate into your application and deploy to production'
    }
  ];

  const communityResources = [
    {
      icon: <FaGithub />,
      title: 'GitHub',
      description: 'Open source repositories and community contributions'
    },
    {
      icon: <FaStackOverflow />,
      title: 'Stack Overflow',
      description: 'Ask questions and find answers from the community'
    },
    {
      icon: <FaDiscord />,
      title: 'Discord',
      description: 'Join our community chat for real-time support'
    }
  ];

  return (
    <DocumentationContainer>
      <Helmet>
        <title>Documentation - Maven Developer Resources</title>
        <meta name="description" content="Comprehensive documentation, API guides, tutorials, and developer resources for Maven platform." />
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
              <span>Documentation</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive guides, API references, and tutorials to help you build amazing applications with our platform.
            </motion.p>
          </HeroContent>
        </SectionContainer>
      </HeroSection>

      <SearchSection>
        <SectionContainer>
          <SearchContainer>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchContainer>
        </SectionContainer>
      </SearchSection>

      <DocumentationSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Documentation Categories</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Find the resources you need to build and integrate with our platform
            </p>
          </motion.div>

          <DocGrid>
            {documentationCategories.map((doc, index) => (
              <DocCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <DocIcon>{doc.icon}</DocIcon>
                <DocTitle>{doc.title}</DocTitle>
                <DocDescription>{doc.description}</DocDescription>
                <DocMeta>
                  <span>Updated {doc.lastUpdated}</span>
                  <span>{doc.version}</span>
                </DocMeta>
                <DocLink>
                  View Documentation
                  <FiChevronRight />
                </DocLink>
              </DocCard>
            ))}
          </DocGrid>
        </SectionContainer>
      </DocumentationSection>

      <QuickStartSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Quick Start Guide</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Get up and running in minutes with our step-by-step quick start guide
            </p>
          </motion.div>

          <QuickStartGrid>
            {quickStartSteps.map((step, index) => (
              <QuickStartCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <QuickStartNumber>{step.number}</QuickStartNumber>
                <QuickStartTitle>{step.title}</QuickStartTitle>
                <QuickStartDescription>{step.description}</QuickStartDescription>
              </QuickStartCard>
            ))}
          </QuickStartGrid>
        </SectionContainer>
      </QuickStartSection>

      <CommunitySection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Community Resources</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Connect with developers and get help from our community
            </p>
          </motion.div>

          <CommunityGrid>
            {communityResources.map((resource, index) => (
              <CommunityCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <CommunityIcon>{resource.icon}</CommunityIcon>
                <CommunityTitle>{resource.title}</CommunityTitle>
                <CommunityDescription>{resource.description}</CommunityDescription>
              </CommunityCard>
            ))}
          </CommunityGrid>
        </SectionContainer>
      </CommunitySection>
    </DocumentationContainer>
  );
};

export default Documentation; 