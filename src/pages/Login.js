import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { toast } from 'react-hot-toast';
import { authService } from '../services/api';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: radial-gradient(circle at center, #1a1a2e 0%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0, 102, 255, 0.1) 0%, transparent 70%);
  bottom: -250px;
  left: -250px;
  pointer-events: none;
`;

const FormCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 2rem;
  font-size: 0.9rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  font-size: 1.2rem;
`;

const Input = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.8rem 1rem 0.8rem 3rem;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 15px rgba(0, 255, 136, 0.2);
  }
`;

const SubmitButton = styled(motion.button)`
  background: var(--gradient-primary);
  color: var(--background);
  border: none;
  border-radius: 12px;
  padding: 1rem;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 2rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  
  a {
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await authService.login(formData);
      const data = res.data;

      if (data.success) {
        toast.success('Welcome back!');
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <BackgroundGlow />
      <FormCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Welcome Back</Title>
        <Subtitle>Enter your credentials to access the future.</Subtitle>
        
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputIcon><FiMail /></InputIcon>
            <Input 
              type="email" 
              placeholder="Email Address" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </InputGroup>

          <InputGroup>
            <InputIcon><FiLock /></InputIcon>
            <Input 
              type="password" 
              placeholder="Password" 
              required
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </InputGroup>

          <SubmitButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
          >
            {loading ? 'Authenticating...' : 'Login'}
            <FiArrowRight />
          </SubmitButton>
        </Form>

        <FooterText>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </FooterText>
      </FormCard>
    </PageContainer>
  );
};

export default Login;
