import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMapPin, FiClock, FiDollarSign, FiBriefcase, FiFilter, FiArrowRight } from 'react-icons/fi';
import { jobService } from '../services/api';
import { toast } from 'react-hot-toast';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 100px 2rem 4rem;
  background: var(--background);
`;

const Header = styled.div`
  max-width: 1200px;
  margin: 0 auto 3rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

const SearchBar = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  display: flex;
  gap: 1rem;
  background: var(--surface);
  padding: 0.75rem;
  border-radius: 20px;
  border: 1px solid var(--border);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInputGroup = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0 1rem;
  border-right: 1px solid var(--border);
  
  @media (max-width: 768px) {
    border-right: none;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
  }
  
  input {
    width: 100%;
    background: transparent;
    border: none;
    color: white;
    font-size: 1rem;
    &:focus { outline: none; }
    &::placeholder { color: var(--text-muted); }
  }
`;

const JobGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const JobCard = styled(motion.div)`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary);
    box-shadow: var(--shadow-glow);
    transform: translateY(-5px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle at top right, rgba(0, 255, 136, 0.1), transparent);
    pointer-events: none;
  }
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const CompanyLogo = styled.div`
  width: 50px;
  height: 50px;
  background: var(--surface-light);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--primary);
  border: 1px solid var(--border);
`;

const JobBadge = styled.span`
  background: rgba(0, 255, 136, 0.1);
  color: var(--primary);
  padding: 0.4rem 0.8rem;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const JobTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const CompanyName = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
`;

const JobMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-bottom: 2rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const ApplyButton = styled(motion.button)`
  width: 100%;
  background: var(--gradient-primary);
  color: var(--background);
  border: none;
  border-radius: 12px;
  padding: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await jobService.getJobs();
      if (res.data.success) {
        setJobs(res.data.data);
      }
    } catch (err) {
      toast.error('Failed to load jobs');
    } finally {
      setLoading(false);
    }
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageContainer>
      <Header>
        <Title>Future Careers</Title>
        <p style={{ color: 'var(--text-secondary)' }}>Discover high-impact opportunities at world-leading companies.</p>
        
        <SearchBar>
          <SearchInputGroup>
            <FiSearch />
            <input 
              type="text" 
              placeholder="Job title or company..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchInputGroup>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 1rem', color: 'var(--text-secondary)' }}>
            <FiMapPin style={{ marginRight: '0.5rem' }} />
            <span>Remote / India</span>
          </div>
        </SearchBar>
      </Header>

      {loading ? (
        <div style={{ textAlign: 'center', color: 'var(--primary)' }}>Analyzing Opportunities...</div>
      ) : (
        <JobGrid>
          <AnimatePresence>
            {filteredJobs.map((job, index) => (
              <JobCard
                key={job._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <JobHeader>
                  <CompanyLogo>{job.company.name.charAt(0)}</CompanyLogo>
                  <JobBadge>{job.type}</JobBadge>
                </JobHeader>
                
                <JobTitle>{job.title}</JobTitle>
                <CompanyName>{job.company.name}</CompanyName>
                
                <JobMeta>
                  <div><FiMapPin /> {job.location}</div>
                  <div><FiDollarSign /> {job.salary}</div>
                  <div><FiClock /> {new Date(job.deadline).toLocaleDateString()}</div>
                </JobMeta>
                
                <ApplyButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toast.success('Application Portal Opening...')}
                >
                  Apply Now
                  <FiArrowRight />
                </ApplyButton>
              </JobCard>
            ))}
          </AnimatePresence>
        </JobGrid>
      )}
    </PageContainer>
  );
};

export default Jobs;
