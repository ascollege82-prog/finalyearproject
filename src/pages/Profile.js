import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiCpu, FiFileText, FiSave, FiPlus } from 'react-icons/fi';
import { authService, userService } from '../services/api';
import { toast } from 'react-hot-toast';

const ProfileContainer = styled.div`
  min-height: 100vh;
  padding: 100px 2rem 4rem;
  background: var(--background);
`;

const ProfileCard = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const AvatarCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--gradient-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--background);
  font-weight: 800;
  margin-bottom: 1rem;
  box-shadow: var(--shadow-glow);
`;

const InputGroup = styled.div`
  margin-bottom: 2rem;
  
  label {
    display: block;
    color: var(--text-secondary);
    margin-bottom: 0.75rem;
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1rem;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 15px rgba(0, 255, 136, 0.2);
  }
`;

const SkillTag = styled.span`
  background: rgba(0, 255, 136, 0.1);
  color: var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(0, 255, 136, 0.2);
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SaveButton = styled(motion.button)`
  background: var(--gradient-primary);
  color: var(--background);
  border: none;
  border-radius: 12px;
  padding: 1.2rem;
  font-weight: 700;
  font-size: 1.1rem;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
`;

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await authService.getMe();
      if (res.data.success) {
        setUser(res.data.data);
      }
    } catch (err) {
      toast.error('Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await userService.updateDetails(user);
      if (res.data.success) {
        toast.success('Profile updated successfully!');
      }
    } catch (err) {
      toast.error('Update failed');
    }
  };

  if (loading) return <ProfileContainer>Loading Profile...</ProfileContainer>;

  return (
    <ProfileContainer>
      <ProfileCard
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <AvatarSection>
          <AvatarCircle>{user?.name?.charAt(0)}</AvatarCircle>
          <h2 style={{ color: 'white' }}>{user?.name}</h2>
          <p style={{ color: 'var(--text-secondary)' }}>{user?.role.toUpperCase()}</p>
        </AvatarSection>

        <form onSubmit={handleUpdate}>
          <InputGroup>
            <label><FiUser /> Full Name</label>
            <StyledInput 
              value={user?.name} 
              onChange={(e) => setUser({...user, name: e.target.value})}
            />
          </InputGroup>

          <InputGroup>
            <label><FiMail /> Email Address</label>
            <StyledInput value={user?.email} disabled style={{ opacity: 0.6 }} />
          </InputGroup>

          <InputGroup>
            <label><FiCpu /> Skills (comma separated)</label>
            <StyledInput 
              placeholder="React, Node.js, AI, Machine Learning"
              value={user?.skills?.join(', ')}
              onChange={(e) => setUser({...user, skills: e.target.value.split(',').map(s => s.trim())})}
            />
          </InputGroup>

          <InputGroup>
            <label><FiFileText /> Resume Link</label>
            <StyledInput 
              placeholder="https://your-resume-link.com"
              value={user?.resume}
              onChange={(e) => setUser({...user, resume: e.target.value})}
            />
          </InputGroup>

          <SaveButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            <FiSave />
            Sync with Future
          </SaveButton>
        </form>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default Profile;
