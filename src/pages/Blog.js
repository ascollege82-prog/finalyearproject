import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiCalendar, FiUser, FiClock, FiSearch, FiArrowRight } from 'react-icons/fi';

const BlogContainer = styled.div`
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
    color: white;
    
    span {
      color: white;
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

const SearchSection = styled.section`
  padding: 2rem 0;
  background: var(--surface);
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 25px;
  padding: 1rem 1.5rem;
  color: var(--text-primary);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`;

const SearchButton = styled.button`
  background: var(--gradient-primary);
  color: var(--background);
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
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

const BlogSection = styled.section`
  padding: 4rem 0;
  background: var(--surface);
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled(motion.div)`
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

const BlogImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  position: relative;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: var(--text-muted);
  
  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

const BlogTitle = styled.h3`
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 1.4;
`;

const BlogExcerpt = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`;

const BlogTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const BlogTag = styled.span`
  background: var(--surface);
  color: var(--primary);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid var(--border);
`;

const ReadMoreLink = styled(Link)`
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    gap: 1rem;
  }
`;

const PaginationSection = styled.section`
  padding: 2rem 0;
  background: var(--surface);
  text-align: center;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const PaginationButton = styled.button`
  background: ${props => props.active ? 'var(--gradient-primary)' : 'transparent'};
  color: ${props => props.active ? 'var(--background)' : 'var(--text-primary)'};
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--gradient-primary);
    color: var(--background);
    transform: translateY(-2px);
  }
`;

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const articles = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise Applications',
      excerpt: 'Exploring how artificial intelligence is transforming business processes and creating new opportunities for innovation.',
      author: 'Dr. Emily Watson',
      date: '2024-01-15',
      readTime: '5 min read',
      tags: ['AI', 'Enterprise', 'Innovation'],
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Building Scalable Cloud Architectures',
      excerpt: 'Best practices for designing and implementing cloud-native solutions that can handle massive scale.',
      author: 'Sarah Kim',
      date: '2024-01-12',
      readTime: '8 min read',
              tags: ['Cloud', 'Architecture'],
      category: 'Development'
    },
    {
      id: 3,
      title: 'Cybersecurity Trends for 2024',
      excerpt: 'An overview of emerging cybersecurity threats and the technologies being developed to combat them.',
      author: 'Marcus Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      tags: ['Security', 'Cybersecurity', 'Trends'],
      category: 'Security'
    },
    {
      id: 4,
      title: 'Digital Transformation Success Stories',
      excerpt: 'Real-world examples of companies that successfully transformed their operations using modern technology.',
      author: 'Alex Chen',
      date: '2024-01-08',
      readTime: '7 min read',
      tags: ['Digital Transformation', 'Case Studies', 'Success'],
      category: 'Business'
    },
    {
      id: 5,
      title: 'The Rise of Edge Computing',
      excerpt: 'How edge computing is revolutionizing data processing and enabling new applications.',
      author: 'Dr. Emily Watson',
      date: '2024-01-05',
      readTime: '4 min read',
      tags: ['Edge Computing', 'IoT', 'Technology'],
      category: 'Technology'
    },
    {
      id: 6,
      title: 'Machine Learning in Healthcare',
      excerpt: 'Exploring the applications of machine learning in medical diagnosis and patient care.',
      author: 'Sarah Kim',
      date: '2024-01-03',
      readTime: '9 min read',
      tags: ['ML', 'Healthcare', 'AI'],
      category: 'Technology'
    }
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const articlesPerPage = 6;
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  return (
    <BlogContainer>
      <Helmet>
        <title>Blog - Maven Technology Insights</title>
        <meta name="description" content="Stay updated with the latest technology trends, insights, and innovations from Maven's expert team." />
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
              Our <span>Blog</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Insights, trends, and innovations from our team of technology experts.
            </motion.p>
          </HeroContent>
        </SectionContainer>
      </HeroSection>

      <SearchSection>
        <SectionContainer>
          <form onSubmit={handleSearch}>
            <SearchContainer>
              <SearchInput
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <SearchButton type="submit">
                <FiSearch />
                Search
              </SearchButton>
            </SearchContainer>
          </form>
        </SectionContainer>
      </SearchSection>

      <BlogSection>
        <SectionContainer>
          <BlogGrid>
            {currentArticles.map((article, index) => (
              <BlogCard
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <BlogImage>
                  {/* Article image would go here */}
                </BlogImage>
                <BlogContent>
                  <BlogMeta>
                    <span>
                      <FiUser />
                      {article.author}
                    </span>
                    <span>
                      <FiCalendar />
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                    <span>
                      <FiClock />
                      {article.readTime}
                    </span>
                  </BlogMeta>
                  <BlogTitle>{article.title}</BlogTitle>
                  <BlogExcerpt>{article.excerpt}</BlogExcerpt>
                  <BlogTags>
                    {article.tags.map((tag, tagIndex) => (
                      <BlogTag key={tagIndex}>{tag}</BlogTag>
                    ))}
                  </BlogTags>
                  <ReadMoreLink to={`/blog/${article.id}`}>
                    Read More
                    <FiArrowRight />
                  </ReadMoreLink>
                </BlogContent>
              </BlogCard>
            ))}
          </BlogGrid>
        </SectionContainer>
      </BlogSection>

      {totalPages > 1 && (
        <PaginationSection>
          <SectionContainer>
            <PaginationContainer>
              <PaginationButton
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </PaginationButton>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <PaginationButton
                  key={page}
                  active={currentPage === page}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </PaginationButton>
              ))}
              
              <PaginationButton
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </PaginationButton>
            </PaginationContainer>
          </SectionContainer>
        </PaginationSection>
      )}
    </BlogContainer>
  );
};

export default Blog; 