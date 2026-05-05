import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiSearch, FiTrendingUp, FiUsers, FiDollarSign, FiClock, FiArrowRight } from 'react-icons/fi';
import { FaIndustry, FaChartLine, FaRocket } from 'react-icons/fa';

const CaseStudiesContainer = styled.div`
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

const CaseStudiesSection = styled.section`
  padding: 6rem 0;
  background: var(--surface);
`;

const CaseStudyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CaseStudyCard = styled(motion.div)`
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

const CaseStudyImage = styled.div`
  height: 200px;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--background);
  font-size: 3rem;
`;

const CaseStudyContent = styled.div`
  padding: 2rem;
`;

const CaseStudyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const CaseStudyTitle = styled.h3`
  color: var(--text-primary);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const CaseStudyIndustry = styled.span`
  background: var(--gradient-secondary);
  color: var(--background);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const CaseStudyDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CaseStudyStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const StatItem = styled.div`
  text-align: center;
  
  .stat-number {
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--primary);
    margin-bottom: 0.25rem;
  }
  
  .stat-label {
    font-size: 0.8rem;
    color: var(--text-muted);
  }
`;

const CaseStudyLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 600;
  cursor: pointer;
  transition: gap 0.3s ease;
  
  &:hover {
    gap: 1rem;
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

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Technology', 'Healthcare', 'Finance', 'Retail', 'Manufacturing'];

  const caseStudies = [
    {
      id: 1,
      title: 'Digital Transformation for Global Bank',
      industry: 'Finance',
      description: 'Helped a major international bank modernize their legacy systems and implement AI-powered fraud detection.',
      image: <FaIndustry />,
      stats: {
        efficiency: '85%',
        cost: '$2.5M',
        time: '18 months'
      }
    },
    {
      id: 2,
      title: 'AI-Powered Healthcare Analytics',
      industry: 'Healthcare',
      description: 'Developed predictive analytics platform for a leading hospital network to improve patient outcomes.',
      image: <FaChartLine />,
      stats: {
        efficiency: '92%',
        cost: '$1.8M',
        time: '12 months'
      }
    },
    {
      id: 3,
      title: 'E-commerce Platform Optimization',
      industry: 'Retail',
      description: 'Optimized a major retailer\'s e-commerce platform resulting in significant performance improvements.',
      image: <FaRocket />,
      stats: {
        efficiency: '78%',
        cost: '$1.2M',
        time: '9 months'
      }
    },
    {
      id: 4,
      title: 'Smart Manufacturing Implementation',
      industry: 'Manufacturing',
      description: 'Implemented IoT and AI solutions for a manufacturing company to improve production efficiency.',
      image: <FaIndustry />,
      stats: {
        efficiency: '88%',
        cost: '$3.1M',
        time: '24 months'
      }
    },
    {
      id: 5,
      title: 'Cloud Migration for Tech Startup',
      industry: 'Technology',
      description: 'Migrated a growing tech startup to cloud infrastructure with zero downtime and improved scalability.',
      image: <FaRocket />,
      stats: {
        efficiency: '95%',
        cost: '$800K',
        time: '6 months'
      }
    },
    {
      id: 6,
      title: 'Data Analytics for Retail Chain',
      industry: 'Retail',
      description: 'Built comprehensive data analytics solution for a retail chain to optimize inventory and sales.',
      image: <FaChartLine />,
      stats: {
        efficiency: '82%',
        cost: '$1.5M',
        time: '15 months'
      }
    }
  ];

  const filteredCaseStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === activeFilter);

  const featuredCaseStudy = {
    title: 'Enterprise AI Transformation',
    description: 'Our most comprehensive case study showcasing a complete digital transformation for a Fortune 500 company. This project involved implementing AI-powered solutions across multiple departments, resulting in unprecedented efficiency gains and cost savings.',
    icon: <FaRocket />,
    stats: [
      { number: '95%', label: 'Efficiency Increase' },
      { number: '$15M', label: 'Cost Savings' },
      { number: '24', label: 'Months Duration' },
      { number: '500+', label: 'Users Impacted' }
    ]
  };

  return (
    <CaseStudiesContainer>
      <Helmet>
        <title>Case Studies - Maven Success Stories</title>
        <meta name="description" content="Explore real-world success stories and case studies showcasing Maven's transformative solutions across various industries." />
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
              Success <span>Stories</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Real-world case studies showcasing how we've helped organizations transform their business through innovative technology solutions.
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

      <CaseStudiesSection>
        <SectionContainer>
          <motion.div
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Case Studies</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Discover how we've helped organizations achieve remarkable results
            </p>
          </motion.div>

          <CaseStudyGrid>
            {filteredCaseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <CaseStudyImage>
                  {study.image}
                </CaseStudyImage>
                <CaseStudyContent>
                  <CaseStudyHeader>
                    <div>
                      <CaseStudyTitle>{study.title}</CaseStudyTitle>
                    </div>
                    <CaseStudyIndustry>{study.industry}</CaseStudyIndustry>
                  </CaseStudyHeader>
                  <CaseStudyDescription>{study.description}</CaseStudyDescription>
                  <CaseStudyStats>
                    <StatItem>
                      <div className="stat-number">{study.stats.efficiency}</div>
                      <div className="stat-label">Efficiency</div>
                    </StatItem>
                    <StatItem>
                      <div className="stat-number">{study.stats.cost}</div>
                      <div className="stat-label">Cost Savings</div>
                    </StatItem>
                    <StatItem>
                      <div className="stat-number">{study.stats.time}</div>
                      <div className="stat-label">Duration</div>
                    </StatItem>
                  </CaseStudyStats>
                  <CaseStudyLink>
                    Read Full Case Study
                    <FiArrowRight />
                  </CaseStudyLink>
                </CaseStudyContent>
              </CaseStudyCard>
            ))}
          </CaseStudyGrid>
        </SectionContainer>
      </CaseStudiesSection>

      <FeaturedSection>
        <SectionContainer>
          <FeaturedCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FeaturedIcon>{featuredCaseStudy.icon}</FeaturedIcon>
            <FeaturedTitle>{featuredCaseStudy.title}</FeaturedTitle>
            <FeaturedDescription>{featuredCaseStudy.description}</FeaturedDescription>
            <FeaturedStats>
              {featuredCaseStudy.stats.map((stat, index) => (
                <FeaturedStat key={index}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </FeaturedStat>
              ))}
            </FeaturedStats>
            <CaseStudyLink>
              Download Full Case Study
              <FiArrowRight />
            </CaseStudyLink>
          </FeaturedCard>
        </SectionContainer>
      </FeaturedSection>
    </CaseStudiesContainer>
  );
};

export default CaseStudies; 