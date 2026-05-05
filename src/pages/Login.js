import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthContext';

const LoginSection = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem;
  background: radial-gradient(circle at top, rgba(0, 255, 136, 0.08), transparent 40%),
    linear-gradient(180deg, #050505 0%, #090909 100%);
`;

const LoginCard = styled.div`
  width: min(520px, 100%);
  background: rgba(10, 10, 10, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: 3rem;
  box-shadow: 0 30px 80px rgba(0, 255, 136, 0.12);
`;

const Title = styled.h1`
  font-size: clamp(2rem, 3vw, 2.8rem);
  margin-bottom: 1rem;
  color: var(--primary);
`;

const Description = styled.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.75;
`;

const Form = styled.form`
  display: grid;
  gap: 1.25rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(20, 20, 20, 0.9);
  color: var(--text-primary);
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 4px rgba(0, 255, 136, 0.1);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 1.2rem;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #000;
  font-weight: 700;
  letter-spacing: 0.02em;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 35px rgba(0, 255, 136, 0.2);
  }
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: var(--text-secondary);
`;

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const redirectPath = location.state?.from?.pathname || '/';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await login({ email, password });
      toast.success('Login successful!');
      navigate(redirectPath, { replace: true });
    } catch (error) {
      toast.error(error.message || 'Login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginSection>
      <LoginCard>
        <Title>Member Login</Title>
        <Description>
          Sign in to access account-only features. If your backend is not running, use <strong>admin@maven.com</strong> with password <strong>Maven123!</strong>.
        </Description>

        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@domain.com"
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
            />
          </InputGroup>

          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </SubmitButton>
        </Form>

        <FooterText>
          Don’t have an account? <Link to="/contact">Contact us</Link> to register.
        </FooterText>
      </LoginCard>
    </LoginSection>
  );
};

export default Login;
