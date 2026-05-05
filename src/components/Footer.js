import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiArrowRight, FiHeart } from 'react-icons/fi';
import { FaDiscord, FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import MavenLogo from '../assets/maven.png';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, var(--surface) 0%, var(--background) 100%);
  border-top: 1px solid var(--border);
  padding: 4rem 0 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: var(--primary);
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: 0.75rem;
    
    a {
      color: var(--text-secondary);
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: var(--primary);
      }
    }
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  background: var(--surface-light);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: var(--text-primary);
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`;

const NewsletterButton = styled.button`
  background: var(--gradient-primary);
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  color: var(--background);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: var(--surface-light);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text-secondary);
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--primary);
      border-color: var(--primary);
      box-shadow: var(--shadow-glow);
      transform: translateY(-2px);
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid var(--border);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: var(--text-muted);
  font-size: 0.9rem;
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary);
    }
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  margin-bottom: 1rem;
  display: inline-block;
  
  img {
    height: 50px;
    width: auto;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
    toast.success('Welcome to the future!');
    setEmail('');
  };

  const footerSections = [
    {
      title: 'Company',
      links: [
        { title: 'About Us', path: '/about' },
        { title: 'Our Team', path: '/team' },
        { title: 'Careers', path: '/careers' },
        { title: 'News', path: '/news' },
        { title: 'Events', path: '/events' },
      ]
    },
    {
      title: 'Solutions',
      links: [
        { title: 'AI & ML', path: '/ai-ml' },
        { title: 'Cloud Services', path: '/cloud-services' },
        { title: 'Digital Transformation', path: '/digital-transformation' },
        { title: 'Security', path: '/security' },
      ]
    },
    {
      title: 'Services',
      links: [
        { title: 'All Services', path: '/services' },
        { title: 'Consulting', path: '/services/consulting' },
        { title: 'Development', path: '/services/development' },
        { title: 'Support', path: '/services/support' },
        { title: 'Training', path: '/services/training' },
        { title: 'Maintenance', path: '/services/maintenance' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { title: 'Blog', path: '/blog' },
        { title: 'Documentation', path: '/docs' },
        { title: 'Case Studies', path: '/case-studies' },
        { title: 'Whitepapers', path: '/whitepapers' },
        { title: 'Support', path: '/support' },
      ]
    }
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <Logo to="/">
              <img src={MavenLogo} alt="Maven" />
            </Logo>
            <p>
              Pioneering the future of technology with cutting-edge solutions that transform businesses and drive innovation across industries.
            </p>
            {isSubscribed ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ 
                  color: 'var(--primary)', 
                  fontWeight: '600', 
                  marginTop: '1rem',
                  display: 'flex',
                  alignSelf: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>✓</span> Subscribed Successfully!
              </motion.div>
            ) : (
              <NewsletterForm onSubmit={handleNewsletterSubmit}>
                <NewsletterInput
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <NewsletterButton type="submit">
                  Subscribe
                  <FiArrowRight />
                </NewsletterButton>
              </NewsletterForm>
            )}
            <SocialLinks>
              <a href="#" aria-label="Discord">
                <FaDiscord />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </SocialLinks>
          </FooterSection>
          
          {footerSections.map((section, index) => (
            <FooterSection key={index}>
              <h3>{section.title}</h3>
              <FooterLinks>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path}>{link.title}</Link>
                  </li>
                ))}
              </FooterLinks>
            </FooterSection>
          ))}
        </FooterGrid>
        
        <FooterBottom>
          <Copyright>
            © 2024 Maven. All rights reserved. Made with <FiHeart style={{ color: 'var(--secondary)' }} /> for the future.
          </Copyright>
          <FooterBottomLinks>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
            <Link to="/sitemap">Sitemap</Link>
          </FooterBottomLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 