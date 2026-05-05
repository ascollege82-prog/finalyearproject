import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiUsers, FiBriefcase, FiLayers, FiFileText, FiActivity, FiSettings } from 'react-icons/fi';
import { toast } from 'react-hot-toast';

const DashboardContainer = styled.div`
  min-height: 100vh;
  padding: 100px 2rem 2rem;
  background: var(--background);
`;

const Header = styled.div`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const StatCard = styled(motion.div)`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary);
    box-shadow: var(--shadow-glow);
    transform: translateY(-5px);
  }
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: rgba(0, 255, 136, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 1.5rem;
`;

const StatInfo = styled.div`
  h3 {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 0.25rem;
  }
  p {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--text-primary);
  }
`;

const Section = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 2rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  h2 {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th {
    text-align: left;
    padding: 1rem;
    color: var(--text-secondary);
    border-bottom: 1px solid var(--border);
    font-weight: 600;
  }
  
  td {
    padding: 1rem;
    border-bottom: 1px solid var(--border);
    color: var(--text-primary);
  }
`;

const RoleBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${props => props.role === 'admin' ? 'rgba(255, 0, 102, 0.1)' : 'rgba(0, 255, 136, 0.1)'};
  color: ${props => props.role === 'admin' ? '#ff0066' : '#00ff88'};
`;

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    companies: 0,
    jobs: 0,
    applications: 0
  });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = { 'Authorization': `Bearer ${token}` };
        
        // Fetch Users (Admin Route)
        const usersRes = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1'}/users`, { headers });
        const usersData = await usersRes.json();
        
        if (usersData.success) {
          setUsers(usersData.data);
          setStats(prev => ({ ...prev, users: usersData.count }));
        }

        // Fetch Companies
        const compRes = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1'}/companies`);
        const compData = await compRes.json();
        if (compData.success) setStats(prev => ({ ...prev, companies: compData.count }));

        // Fetch Jobs
        const jobsRes = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1'}/jobs`);
        const jobsData = await jobsRes.json();
        if (jobsData.success) setStats(prev => ({ ...prev, jobs: jobsData.count }));

      } catch (err) {
        toast.error('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <DashboardContainer>Loading Dashboard...</DashboardContainer>;

  return (
    <DashboardContainer>
      <Header>
        <Title>Admin Command Center</Title>
        <Subtitle>System overview and user management.</Subtitle>
      </Header>

      <StatsGrid>
        <StatCard whileHover={{ y: -5 }}>
          <StatIcon><FiUsers /></StatIcon>
          <StatInfo>
            <h3>Total Users</h3>
            <p>{stats.users}</p>
          </StatInfo>
        </StatCard>
        <StatCard whileHover={{ y: -5 }}>
          <StatIcon><FiLayers /></StatIcon>
          <StatInfo>
            <h3>Companies</h3>
            <p>{stats.companies}</p>
          </StatInfo>
        </StatCard>
        <StatCard whileHover={{ y: -5 }}>
          <StatIcon><FiBriefcase /></StatIcon>
          <StatInfo>
            <h3>Live Jobs</h3>
            <p>{stats.jobs}</p>
          </StatInfo>
        </StatCard>
        <StatCard whileHover={{ y: -5 }}>
          <StatIcon><FiFileText /></StatIcon>
          <StatInfo>
            <h3>Applications</h3>
            <p>{stats.applications}</p>
          </StatInfo>
        </StatCard>
      </StatsGrid>

      <Section>
        <SectionHeader>
          <h2><FiActivity /> Recent Users</h2>
          <FiSettings style={{ cursor: 'pointer', color: 'var(--text-secondary)' }} />
        </SectionHeader>
        
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><RoleBadge role={user.role}>{user.role}</RoleBadge></td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Section>
    </DashboardContainer>
  );
};

export default AdminDashboard;
