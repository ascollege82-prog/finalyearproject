import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FiHome, FiArrowLeft, FiSearch } from 'react-icons/fi';

const NotFoundContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
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
    background: radial-gradient(circle at 20% 80%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 0, 102, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const NotFoundContent = styled.div`
  text-align: center;
  max-width: 600px;
  padding: 2rem;
  position: relative;
  z-index: 2;
`;

const ErrorCode = styled(motion.h1)`
  font-size: clamp(6rem, 15vw, 12rem);
  font-weight: 900;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
`;

const ErrorTitle = styled(motion.h2)`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const ErrorDescription = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const ActionButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  background: var(--gradient-primary);
  color: var(--background);
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-glow);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 255, 136, 0.4);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: var(--text-primary);
  padding: 1rem 2rem;
  border: 2px solid var(--border);
  border-radius: 50px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: var(--primary);
    color: var(--primary);
    box-shadow: var(--shadow-glow);
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  background: var(--gradient-primary);
  border-radius: 50%;
  opacity: 0.1;
  
  &:nth-child(1) {
    top: 20%;
    left: 10%;
    width: 60px;
    height: 60px;
  }
  
  &:nth-child(2) {
    top: 60%;
    right: 15%;
    width: 80px;
    height: 80px;
  }
  
  &:nth-child(3) {
    bottom: 30%;
    left: 20%;
    width: 40px;
    height: 40px;
  }
  
  &:nth-child(4) {
    top: 40%;
    right: 30%;
    width: 50px;
    height: 50px;
  }
`;

const NotFound = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <NotFoundContainer>
      <Helmet>
        <title>404 - Page Not Found | Maven</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Maven's homepage." />
      </Helmet>

      <FloatingElements>
        <FloatingElement
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <FloatingElement
          animate={{
            y: [0, 20, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <FloatingElement
          animate={{
            x: [0, 15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <FloatingElement
          animate={{
            x: [0, -15, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </FloatingElements>

      <NotFoundContent>
        <ErrorCode
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          404
        </ErrorCode>
        
        <ErrorTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Page Not Found
        </ErrorTitle>
        
        <ErrorDescription
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track to exploring our innovative solutions.
        </ErrorDescription>
        
        <ActionButtons
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <PrimaryButton to="/">
            <FiHome />
            Go Home
          </PrimaryButton>
          <SecondaryButton onClick={handleGoBack}>
            <FiArrowLeft />
            Go Back
          </SecondaryButton>
        </ActionButtons>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default NotFound; 