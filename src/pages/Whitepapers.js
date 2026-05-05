import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiSearch, FiDownload, FiCalendar, FiUser, FiEye, FiArrowRight } from 'react-icons/fi';
import { FaIndustry, FaChartLine, FaRocket, FaBrain } from 'react-icons/fa';

const WhitepapersContainer = styled.div`
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

const FilterSection = styled.div`
  padding: 2rem 0;
  background: var(--surface);
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${props => props.active ? 'var(--gradient-primary)' : 'transparent'};
  border: 1px solid ${props => props.active ? 'transparent' : 'var(--border)'};
  border-radius: 25px;
  color: ${props => props.active ? 'var(--background)' : 'var(--text-secondary)'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--gradient-primary);
    color: var(--background);
    border-color: transparent;
  }
`;

const WhitepapersSection = styled.section`
  padding: 6rem 0;
  background: var(--surface);
`;

const WhitepaperGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const WhitepaperCard = styled(motion.div)`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-glow);
    border-color: var(--primary);
  }
`;

const WhitepaperImage = styled.div`
  height: 200px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--background);
  font-size: 3rem;
`;

const WhitepaperContent = styled.div`
  padding: 2rem;
`;

const WhitepaperHeader = styled.div`
  margin-bottom: 1rem;
`;

const WhitepaperTitle = styled.h3`
  color: var(--text-primary);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  line-height: 1.3;
`;

const WhitepaperMeta = styled.div`
  display: flex;
  gap: 1rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const WhitepaperDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const WhitepaperTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: rgba(0, 255, 136, 0.1);
  color: var(--primary);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const WhitepaperActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DownloadButton = styled.button`
  background: var(--gradient-primary);
  color: var(--background);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 255, 136, 0.4);
  }
`;

const ViewButton = styled.button`
  background: transparent;
  color: var(--primary);
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--primary);
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: var(--primary);
    color: var(--background);
  }
`;

const FeaturedSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--background) 0%, var(--surface) 100%);
`;

const FeaturedCard = styled(motion.div)`
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FeaturedIcon = styled.div`
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

const FeaturedTitle = styled.h2`
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const FeaturedDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const FeaturedStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FeaturedStat = styled.div`
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

const Whitepapers = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'AI & ML', 'Cloud Computing', 'Digital Transformation', 'Cybersecurity', 'Industry 4.0'];

  const whitepapers = [
    {
      id: 1,
      title: 'The Future of Artificial Intelligence in Enterprise',
      author: 'Dr. Sarah Johnson',
      date: 'March 2024',
      views: '2.5K',
      category: 'AI & ML',
      description: 'Comprehensive analysis of AI adoption trends and implementation strategies for enterprise organizations.',
      image: <FaBrain />,
      tags: ['AI', 'Enterprise', 'Strategy'],
      downloads: '1.2K'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices 2024',
      author: 'Michael Chen',
      date: 'February 2024',
      views: '3.1K',
      category: 'Cloud Computing',
      description: 'Detailed guide on successful cloud migration strategies, tools, and methodologies for modern businesses.',
      image: <FaRocket />,
      tags: ['Cloud', 'Migration', 'Best Practices'],
      downloads: '1.8K'
    },
    {
      id: 3,
      title: 'Digital Transformation Roadmap',
      author: 'Dr. Emily Rodriguez',
      date: 'January 2024',
      views: '4.2K',
      category: 'Digital Transformation',
      description: 'Strategic framework for planning and executing successful digital transformation initiatives.',
      image: <FaChartLine />,
      tags: ['Digital', 'Transformation', 'Strategy'],
      downloads: '2.3K'
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of AI',
      author: 'David Kim',
      date: 'December 2023',
      views: '1.8K',
      category: 'Cybersecurity',
      description: 'Exploring the intersection of AI and cybersecurity, including threats, defenses, and future trends.',
      image: <FaIndustry />,
      tags: ['Security', 'AI', 'Threats'],
      downloads: '950'
    },
    {
      id: 5,
      title: 'Industry 4.0 Implementation Guide',
      author: 'Lisa Thompson',
      date: 'November 2023',
      views: '2.9K',
      category: 'Industry 4.0',
      description: 'Complete guide to implementing Industry 4.0 technologies in manufacturing and industrial settings.',
      image: <FaIndustry />,
      tags: ['Industry 4.0', 'Manufacturing', 'IoT'],
      downloads: '1.5K'
    },
    {
      id: 6,
      title: 'Machine Learning in Production Systems',
      author: 'Dr. James Wilson',
      date: 'October 2023',
      views: '3.5K',
      category: 'AI & ML',
      description: 'Practical guide to deploying and maintaining machine learning models in production environments.',
      image: <FaBrain />,
      tags: ['ML', 'Production', 'Deployment'],
      downloads: '2.1K'
    }
  ];

  const filteredWhitepapers = activeFilter === 'All' 
    ? whitepapers 
    : whitepapers.filter(paper => paper.category === activeFilter);

  const featuredWhitepaper = {
    title: 'The State of Enterprise Technology 2024',
    description: 'Our flagship research report analyzing current trends, challenges, and opportunities in enterprise technology adoption. Based on surveys of 500+ organizations worldwide.',
    icon: <FaChartLine />,
    stats: [
      { number: '500+', label: 'Organizations Surveyed' },
      { number: '50+', label: 'Pages of Analysis' },
      { number: '15', label: 'Industry Experts' },
      { number: '10K+', label: 'Downloads' }
    ]
  };

  return (
    <WhitepapersContainer>
      <Helmet>
        <title>Whitepapers - Maven Research & Insights</title>
        <meta name="description" content="Access in-depth research papers, industry insights, and thought leadership content from Maven's technology experts." />
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
              Research & <span>Insights</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              In-depth whitepapers, research reports, and thought leadership content from our technology experts.
            </motion.p>
          </HeroContent>
        </SectionContainer>
      </HeroSection>

      <FilterSection>
        <SectionContainer>
          <FilterContainer>
            {filters.map((filter) => (
              <FilterButton
                key={filter}
                active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </FilterButton>
            ))}
          </FilterContainer>
        </SectionContainer>
      </FilterSection>

      <WhitepapersSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Whitepapers</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Download our latest research and insights on emerging technology trends
            </p>
          </motion.div>

          <WhitepaperGrid>
            {filteredWhitepapers.map((paper, index) => (
              <WhitepaperCard
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <WhitepaperImage>
                  {paper.image}
                </WhitepaperImage>
                <WhitepaperContent>
                  <WhitepaperHeader>
                    <WhitepaperTitle>{paper.title}</WhitepaperTitle>
                    <WhitepaperMeta>
                      <MetaItem>
                        <FiUser />
                        {paper.author}
                      </MetaItem>
                      <MetaItem>
                        <FiCalendar />
                        {paper.date}
                      </MetaItem>
                      <MetaItem>
                        <FiEye />
                        {paper.views} views
                      </MetaItem>
                    </WhitepaperMeta>
                  </WhitepaperHeader>
                  <WhitepaperDescription>{paper.description}</WhitepaperDescription>
                  <WhitepaperTags>
                    {paper.tags.map((tag, tagIndex) => (
                      <Tag key={tagIndex}>{tag}</Tag>
                    ))}
                  </WhitepaperTags>
                  <WhitepaperActions>
                    <DownloadButton>
                      <FiDownload />
                      Download PDF
                    </DownloadButton>
                    <ViewButton>
                      <FiArrowRight />
                      Preview
                    </ViewButton>
                  </WhitepaperActions>
                </WhitepaperContent>
              </WhitepaperCard>
            ))}
          </WhitepaperGrid>
        </SectionContainer>
      </WhitepapersSection>

      <FeaturedSection>
        <SectionContainer>
          <FeaturedCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FeaturedIcon>{featuredWhitepaper.icon}</FeaturedIcon>
            <FeaturedTitle>{featuredWhitepaper.title}</FeaturedTitle>
            <FeaturedDescription>{featuredWhitepaper.description}</FeaturedDescription>
            <FeaturedStats>
              {featuredWhitepaper.stats.map((stat, index) => (
                <FeaturedStat key={index}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </FeaturedStat>
              ))}
            </FeaturedStats>
            <DownloadButton>
              <FiDownload />
              Download Full Report
            </DownloadButton>
          </FeaturedCard>
        </SectionContainer>
      </FeaturedSection>
    </WhitepapersContainer>
  );
};

export default Whitepapers; 