import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiExternalLink, FiGithub, FiEye, FiX } from 'react-icons/fi';

const PortfolioContainer = styled.div`
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
    background: radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.1) 0%, transparent 50%);
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

const FilterSection = styled.section`
  padding: 2rem 0;
  background: var(--surface);
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'var(--gradient-primary)' : 'transparent'};
  color: ${props => props.active ? 'var(--background)' : 'var(--text-primary)'};
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--border);
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--gradient-primary);
    color: var(--background);
    transform: translateY(-2px);
  }
`;

const PortfolioSection = styled.section`
  padding: 4rem 0;
  background: var(--surface);
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-glow);
    border-color: var(--primary);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--background);
  font-size: 3rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${ProjectCard}:hover &::before {
    opacity: 1;
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  gap: 1rem;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const OverlayButton = styled.button`
  width: 40px;
  height: 40px;
  background: var(--background);
  border: none;
  border-radius: 50%;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--primary);
    color: var(--background);
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const ProjectTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const ProjectTag = styled.span`
  background: var(--surface);
  color: var(--primary);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid var(--border);
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalContent = styled.div`
  background: var(--surface);
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const ModalHeader = styled.div`
  padding: 2rem 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ModalTitle = styled.h2`
  color: var(--text-primary);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ModalSubtitle = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--surface-light);
    color: var(--text-primary);
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const ModalImage = styled.div`
  height: 300px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--background);
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const ModalDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ModalFeatures = styled.ul`
  list-style: none;
  margin-bottom: 1.5rem;
  
  li {
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    
    &::before {
      content: '✓';
      color: var(--primary);
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;

const ModalLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      gap: 1rem;
    }
  }
`;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'cloud', label: 'Cloud Solutions' }
  ];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Analytics Platform',
      description: 'Advanced analytics platform using machine learning to provide real-time insights and predictive modeling.',
      category: 'ai',
      tags: ['React', 'Python', 'TensorFlow', 'AWS'],
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Interactive dashboards',
        'Machine learning models'
      ],
      demo: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'E-commerce Mobile App',
      description: 'Cross-platform mobile application with advanced features and seamless user experience.',
      category: 'mobile',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
      features: [
        'Cross-platform compatibility',
        'Payment integration',
        'Push notifications',
        'Offline functionality'
      ],
      demo: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Cloud Migration Solution',
      description: 'Enterprise cloud migration platform with automated deployment and monitoring capabilities.',
      category: 'cloud',
      tags: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
      features: [
        'Automated deployment',
        'Infrastructure as code',
        'Monitoring & alerting',
        'Cost optimization'
      ],
      demo: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Real-time Collaboration Tool',
      description: 'Web-based collaboration platform with real-time editing and communication features.',
      category: 'web',
      tags: ['React', 'Socket.io', 'PostgreSQL', 'Redis'],
      features: [
        'Real-time collaboration',
        'Document editing',
        'Video conferencing',
        'File sharing'
      ],
      demo: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Computer Vision API',
      description: 'AI-powered computer vision service for image recognition and object detection.',
      category: 'ai',
      tags: ['Python', 'OpenCV', 'TensorFlow', 'FastAPI'],
      features: [
        'Image recognition',
        'Object detection',
        'Face recognition',
        'API endpoints'
      ],
      demo: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'IoT Dashboard',
      description: 'Comprehensive IoT monitoring dashboard with real-time data visualization and alerts.',
      category: 'web',
      tags: ['Vue.js', 'MQTT', 'InfluxDB', 'Grafana'],
      features: [
        'Real-time monitoring',
        'Data visualization',
        'Alert system',
        'Device management'
      ],
      demo: '#',
      github: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <PortfolioContainer>
      <Helmet>
        <title>Portfolio - Maven Projects</title>
        <meta name="description" content="Explore Maven's portfolio of innovative technology projects and solutions." />
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
              Our <span>Portfolio</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover our innovative projects and cutting-edge solutions that have transformed businesses across industries.
            </motion.p>
          </HeroContent>
        </SectionContainer>
      </HeroSection>

      <FilterSection>
        <SectionContainer>
          <FilterButtons>
            {filters.map((filter) => (
              <FilterButton
                key={filter.id}
                active={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </FilterButton>
            ))}
          </FilterButtons>
        </SectionContainer>
      </FilterSection>

      <PortfolioSection>
        <SectionContainer>
          <PortfolioGrid>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(project)}
              >
                <ProjectImage>
                  <ProjectOverlay>
                    <OverlayButton onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}>
                      <FiEye />
                    </OverlayButton>
                    <OverlayButton onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.demo, '_blank');
                    }}>
                      <FiExternalLink />
                    </OverlayButton>
                  </ProjectOverlay>
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTags>
                    {project.tags.map((tag, tagIndex) => (
                      <ProjectTag key={tagIndex}>{tag}</ProjectTag>
                    ))}
                  </ProjectTags>
                </ProjectContent>
              </ProjectCard>
            ))}
          </PortfolioGrid>
        </SectionContainer>
      </PortfolioSection>

      <AnimatePresence>
        {selectedProject && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(null)}
          >
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <div>
                  <ModalTitle>{selectedProject.title}</ModalTitle>
                  <ModalSubtitle>{selectedProject.description}</ModalSubtitle>
                </div>
                <CloseButton onClick={() => setSelectedProject(null)}>
                  <FiX />
                </CloseButton>
              </ModalHeader>
              <ModalBody>
                <ModalImage>
                  {/* Project icon or image would go here */}
                </ModalImage>
                <ModalDescription>
                  {selectedProject.description}
                </ModalDescription>
                <ModalFeatures>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ModalFeatures>
                <ProjectTags>
                  {selectedProject.tags.map((tag, tagIndex) => (
                    <ProjectTag key={tagIndex}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                <ModalLinks>
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink />
                    Live Demo
                  </a>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                    View Code
                  </a>
                </ModalLinks>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </PortfolioContainer>
  );
};

export default Portfolio; 