import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const ResourcesContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  padding-top: 80px;
`;

const Hero = styled.div`
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, rgba(0, 123, 255, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%);
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 600px;
  margin: 0 auto 40px;
`;

const ResourcesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
`;

const ResourceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
    border-color: #00d4ff;
  }
`;

const ResourceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const ResourceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #ffffff;
`;

const ResourceDescription = styled.p`
  color: #a0a0a0;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ResourceMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ResourceType = styled.span`
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${props => {
    switch (props.type) {
      case 'whitepaper': return 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)';
      case 'case-study': return 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)';
      case 'guide': return 'linear-gradient(135deg, #51cf66 0%, #40c057 100%)';
      case 'template': return 'linear-gradient(135deg, #fcc419 0%, #f59f00 100%)';
      case 'video': return 'linear-gradient(135deg, #845ef7 0%, #7048e8 100%)';
      default: return 'rgba(255, 255, 255, 0.2)';
    }
  }};
  color: white;
`;

const FileSize = styled.span`
  color: #888;
  font-size: 0.9rem;
`;

const DownloadButton = styled.button`
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
  }
`;

const FilterSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
    transform: scale(1.05);
  }
`;

const SearchSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 15px 20px;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  backdrop-filter: blur(10px);

  &::placeholder {
    color: #888;
  }

  &:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  }
`;

const Resources = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const resourcesData = [
    {
      id: 1,
      title: "Maven Analytics Platform Whitepaper",
      description: "Comprehensive guide to our analytics platform capabilities, architecture, and implementation strategies.",
      type: "whitepaper",
      fileSize: "2.4 MB",
      icon: "📊",
      downloads: 1250
    },
    {
      id: 2,
      title: "Enterprise Security Implementation Guide",
      description: "Step-by-step guide for implementing enterprise-grade security measures in your organization.",
      type: "guide",
      fileSize: "1.8 MB",
      icon: "🔒",
      downloads: 890
    },
    {
      id: 3,
      title: "AI Integration Case Study: Fortune 500 Success",
      description: "Real-world case study showing how AI integration transformed business operations for a Fortune 500 company.",
      type: "case-study",
      fileSize: "3.2 MB",
      icon: "🤖",
      downloads: 2100
    },
    {
      id: 4,
      title: "Cloud Migration Template Kit",
      description: "Complete template kit including checklists, timelines, and risk assessment frameworks for cloud migration.",
      type: "template",
      fileSize: "5.1 MB",
      icon: "☁️",
      downloads: 1560
    },
    {
      id: 5,
      title: "Data Analytics Best Practices Video Series",
      description: "Comprehensive video series covering data analytics best practices, tools, and methodologies.",
      type: "video",
      fileSize: "45.2 MB",
      icon: "🎥",
      downloads: 3200
    },
    {
      id: 6,
      title: "API Development Standards Documentation",
      description: "Comprehensive documentation covering API design principles, security standards, and best practices.",
      type: "guide",
      fileSize: "1.5 MB",
      icon: "🔧",
      downloads: 980
    },
    {
      id: 7,
      title: "Digital Transformation Roadmap Template",
      description: "Strategic roadmap template for planning and executing digital transformation initiatives.",
      type: "template",
      fileSize: "2.8 MB",
      icon: "🗺️",
      downloads: 1340
    },
    {
      id: 8,
      title: "Cybersecurity Threat Assessment Report",
      description: "Latest cybersecurity threat assessment and mitigation strategies for enterprise environments.",
      type: "whitepaper",
      fileSize: "4.7 MB",
      icon: "🛡️",
      downloads: 1750
    }
  ];

  const filteredResources = resourcesData.filter(resource => {
    const matchesFilter = activeFilter === 'all' || resource.type === activeFilter;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleDownload = (resourceId) => {
    // In a real app, this would trigger a download
    alert(`Download for resource ${resourceId} would be processed here!`);
  };

  return (
    <>
      <Helmet>
        <title>Resources - Maven</title>
        <meta name="description" content="Access Maven's comprehensive library of resources including whitepapers, case studies, guides, templates, and video content to support your business needs." />
      </Helmet>
      
      <ResourcesContainer>
        <Hero>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Resources & Downloads
          </Title>
          <Subtitle>
            Access our comprehensive library of whitepapers, guides, templates, and more
          </Subtitle>
        </Hero>

        <SearchSection>
          <SearchInput
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchSection>

        <FilterSection>
          {['all', 'whitepaper', 'case-study', 'guide', 'template', 'video'].map(filter => (
            <FilterButton
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'case-study' ? 'Case Study' : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </FilterButton>
          ))}
        </FilterSection>

        <ResourcesGrid>
          {filteredResources.map((resource, index) => (
            <ResourceCard
              key={resource.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <ResourceIcon>
                {resource.icon}
              </ResourceIcon>
              
              <ResourceTitle>{resource.title}</ResourceTitle>
              <ResourceDescription>{resource.description}</ResourceDescription>
              
              <ResourceMeta>
                <ResourceType type={resource.type}>
                  {resource.type === 'case-study' ? 'Case Study' : resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                </ResourceType>
                <FileSize>{resource.fileSize}</FileSize>
              </ResourceMeta>
              
              <DownloadButton onClick={() => handleDownload(resource.id)}>
                📥 Download ({resource.downloads.toLocaleString()})
              </DownloadButton>
            </ResourceCard>
          ))}
        </ResourcesGrid>
      </ResourcesContainer>
    </>
  );
};

export default Resources; 