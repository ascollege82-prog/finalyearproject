import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const NewsContainer = styled.div`
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

const NewsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
`;

const NewsCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
    border-color: #00d4ff;
  }
`;

const NewsImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
`;

const NewsTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #ffffff;
`;

const NewsExcerpt = styled.p`
  color: #a0a0a0;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const NewsMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 0.9rem;
`;

const ReadMore = styled.button`
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

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

const News = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const newsData = [
    {
      id: 1,
      title: "Maven Launches Revolutionary AI-Powered Analytics Platform",
      excerpt: "Our latest innovation combines machine learning with real-time data processing to deliver unprecedented insights for businesses.",
      category: "technology",
      date: "2024-01-15",
      author: "Sarah Johnson"
    },
    {
      id: 2,
      title: "Maven Expands Global Operations to Asia-Pacific Region",
      excerpt: "Strategic expansion brings our cutting-edge solutions to emerging markets, fostering innovation across the region.",
      category: "business",
      date: "2024-01-12",
      author: "Michael Chen"
    },
    {
      id: 3,
      title: "New Partnership with Leading Cloud Infrastructure Provider",
      excerpt: "Collaboration enhances our platform's scalability and reliability, ensuring seamless performance for enterprise clients.",
      category: "partnerships",
      date: "2024-01-10",
      author: "Emily Rodriguez"
    },
    {
      id: 4,
      title: "Maven Recognized as Top 10 Tech Company of 2024",
      excerpt: "Industry recognition highlights our commitment to innovation and excellence in the technology sector.",
      category: "awards",
      date: "2024-01-08",
      author: "David Thompson"
    },
    {
      id: 5,
      title: "Introducing Next-Generation Security Protocols",
      excerpt: "Advanced cybersecurity measures protect client data with military-grade encryption and real-time threat detection.",
      category: "security",
      date: "2024-01-05",
      author: "Lisa Wang"
    },
    {
      id: 6,
      title: "Maven's Sustainability Initiative: Carbon-Neutral by 2025",
      excerpt: "Commitment to environmental responsibility through green technology and sustainable business practices.",
      category: "sustainability",
      date: "2024-01-03",
      author: "Alex Green"
    }
  ];

  const filteredNews = activeFilter === 'all' 
    ? newsData 
    : newsData.filter(news => news.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>News & Updates - Maven</title>
        <meta name="description" content="Stay updated with the latest news, innovations, and developments from Maven. Read about our latest achievements, partnerships, and technological breakthroughs." />
      </Helmet>
      
      <NewsContainer>
        <Hero>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Latest News & Updates
          </Title>
          <Subtitle>
            Stay informed about our latest innovations, partnerships, and achievements in the technology world
          </Subtitle>
        </Hero>

        <FilterSection>
          {['all', 'technology', 'business', 'partnerships', 'awards', 'security', 'sustainability'].map(filter => (
            <FilterButton
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </FilterButton>
          ))}
        </FilterSection>

        <NewsGrid>
          {filteredNews.map((news, index) => (
            <NewsCard
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <NewsImage>
                📰
              </NewsImage>
              <NewsTitle>{news.title}</NewsTitle>
              <NewsExcerpt>{news.excerpt}</NewsExcerpt>
              <NewsMeta>
                <span>By {news.author}</span>
                <span>{new Date(news.date).toLocaleDateString()}</span>
              </NewsMeta>
              <ReadMore>Read More</ReadMore>
            </NewsCard>
          ))}
        </NewsGrid>
      </NewsContainer>
    </>
  );
};

export default News; 