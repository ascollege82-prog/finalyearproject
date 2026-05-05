import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiMail, FiPhone, FiMapPin, FiGlobe, FiUsers, FiBookOpen, FiBriefcase, FiArrowRight, FiX, FiCheck } from 'react-icons/fi';
import SkillMaxLogo from '../assets/sm.png';
import TcilLogo from '../assets/ics.png';
import SpeakhoLogo from '../assets/speak-ho.png';
import SybaseLogo from '../assets/syb.png';
import AtesLogo from '../assets/ates.png';
import SolitaireLogo from '../assets/sol.png';
import JjpLogo from '../assets/jj.png';
import InspireLogo from '../assets/inspire.png';
import AlphaLogo from '../assets/alpha.png';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  padding-top: 100px;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 204, 255, 0.1) 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,255,136,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(45deg, #00ff88 0%, #00ccff 50%, #ff0066 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  position: relative;
  z-index: 1;
`;

const ContentSection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #00ff88 0%, #00ccff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CollaboratorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const CollaboratorCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #00ff88 0%, #00ccff 50%, #ff0066 100%);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);
    border-color: rgba(0, 255, 136, 0.3);
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const CollaboratorLogo = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: 900;
  color: var(--primary);
  animation: ${float} 3s ease-in-out infinite;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 20px;
  }
`;

const CollaboratorName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const CollaboratorDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CollaboratorFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const FeatureTag = styled.span`
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 204, 255, 0.1) 100%);
  border: 1px solid rgba(0, 255, 136, 0.3);
  color: var(--primary);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const MoreInfoButton = styled.button`
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 204, 255, 0.1) 100%);
  border: 2px solid rgba(0, 255, 136, 0.3);
  color: var(--primary);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background: linear-gradient(135deg, rgba(0, 255, 136, 0.2) 0%, rgba(0, 204, 255, 0.2) 100%);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 255, 136, 0.3);
  }
`;

const ServicesSection = styled.section`
  margin: 4rem 0;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 255, 136, 0.2);
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(0, 255, 136, 0.2) 0%, rgba(0, 204, 255, 0.2) 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.5rem;
  color: var(--primary);
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

// Modal Components
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 40, 0.95) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(0, 255, 136, 0.2);
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(0, 255, 136, 0.2);
  }
  
  &::placeholder {
    color: var(--text-muted);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #00ff88 0%, #00ccff 100%);
  color: #000;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 255, 136, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const Collaborators = () => {
  const [selectedCollaborator, setSelectedCollaborator] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    collaborator: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const collaborators = [
    {
      id: 1,
      name: 'Skill-Max.com',
      description: 'Leading platform for skill development and professional training. We partner with them to provide comprehensive courses in technology, business, and professional development.',
      features: ['Online Courses', 'Skill Assessment', 'Certification'],
      logo: SkillMaxLogo,
      logoType: 'image',
      website: 'https://skill-max.com',
      contact: 'info@skill-max.com'
    },
    {
      id: 2,
      name: 'TCIL IT Chandigarh',
      description: 'Premier IT training institute specializing in software development, cloud computing, and digital transformation. Our collaboration brings cutting-edge technology education.',
      features: ['IT Training', 'Software Development', 'Cloud Computing'],
      logo: TcilLogo,
      logoType: 'image',
      website: 'https://tcilitchandigarh.com',
      contact: 'info@tcilitchandigarh.com'
    },
    {
      id: 3,
      name: 'Speakho.co',
      description: 'Innovative English speaking assessment and practice platform. We work together to provide comprehensive language training and communication skills development.',
      features: ['English Speaking', 'Assessment', 'Practice Tools'],
      logo: SpeakhoLogo,
      logoType: 'image',
      website: 'http://www.speakho.co',
      contact: 'contactus@speakho.co'
    },
    {
      id: 4,
      name: 'Sybase Computer Education',
      description: 'Specialized Tally Institute and Services in UNA. We collaborate to provide comprehensive accounting and business software training programs.',
      features: ['Tally Training', 'Accounting', 'Business Software'],
      logo: SybaseLogo,
      logoType: 'image',
      website: '#',
      contact: 'info@sybasecomputer.com'
    },
    {
      id: 5,
      name: 'ATES - Arunodhay Technical Education Solution',
              description: 'Leading technical education provider specializing in Linux, Cybersecurity, Cloud Computing, and AI/ML. We collaborate to deliver industry-relevant training programs and certification courses.',
              features: ['Linux Training', 'Cybersecurity', 'Cloud Computing', 'AI/ML'],
      logo: AtesLogo,
      logoType: 'image',
      website: 'https://ates.co.in',
      contact: 'khushdil@ates.co.in'
    },
    {
      id: 6,
      name: 'Solitaire Infotech',
      description: 'Premier cybersecurity solutions provider specializing in managed security services, cloud security, and threat intelligence. Our partnership ensures comprehensive digital protection and security training.',
      features: ['Cybersecurity', 'Cloud Security', 'Threat Intelligence', 'Security Training', 'Managed Services'],
      logo: SolitaireLogo,
      logoType: 'image',
      website: 'https://solitaireinfotech.com',
      contact: 'Infotechsolitaire@gmail.com'
    },
    {
      id: 7,
      name: 'JJP Meta Systems',
      description: 'Innovation-driven company with expertise in Artificial Intelligence, IoT, Cloud Computing, and internet-scale Web and Mobile Application Development. We collaborate to deliver cutting-edge AI-powered software solutions.',
      features: ['Artificial Intelligence', 'IoT Solutions', 'Cloud Computing', 'Web Development', 'Mobile Apps'],
      logo: JjpLogo,
      logoType: 'image',
      website: 'https://jjpmetasystems.com/',
      contact: 'support@jjpmetasystems.com'
    },
    {
      id: 8,
      name: 'Inspire Edutech',
      description: 'Revolutionary learning platform focused on empowering education through innovation, expert guidance, and personalized learning modules. Our partnership brings modern educational technology and flexible learning solutions.',
      features: ['Online Learning', 'Educational Technology', 'Personalized Modules', 'Expert Guidance', 'Flexible Education'],
      logo: InspireLogo,
      logoType: 'image',
      website: 'https://inspireedutech.com/',
      contact: 'ceo@inspireedutech.com'
    },
    {
      id: 9,
      name: 'Alpha Technologies',
      description: 'Leading U.S.-based IT solutions provider established in 1997, specializing in managed IT services, cybersecurity, cloud services, and digital transformation. We collaborate to deliver innovative technology solutions with global reach and 24/7 support.',
      features: ['Managed IT Services', 'Cybersecurity', 'Cloud Services', 'Digital Transformation', 'Global Presence'],
      logo: AlphaLogo,
      logoType: 'image',
      website: 'https://alphait.us/',
      contact: '+1 917-862-2942'
    }

  ];

  const services = [
    {
      icon: <FiBookOpen />,
      title: 'Course Development',
      description: 'We collaborate with our partners to develop comprehensive courses tailored to industry needs and current market demands.'
    },
    {
      icon: <FiBriefcase />,
      title: 'Job Placement',
      description: 'Through our network of partners, we provide job placement services and career guidance to help you succeed in your chosen field.'
    },
    {
      icon: <FiUsers />,
      title: 'Training Programs',
      description: 'Specialized training programs designed in collaboration with industry experts to ensure you get the most relevant and up-to-date knowledge.'
    },
    {
      icon: <FiGlobe />,
      title: 'Technical Certifications',
              description: 'Industry-recognized certifications in Linux, Cybersecurity, and Cloud Computing through our partnership with ATES.'
    },
    {
      icon: <FiCheck />,
      title: 'Security Solutions',
      description: 'Comprehensive cybersecurity training and managed security services through our collaboration with Solitaire Infotech.'
    }
  ];

  const handleMoreInfo = (collaborator) => {
    setSelectedCollaborator(collaborator);
    setFormData(prev => ({ ...prev, collaborator: collaborator.name }));
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      collaborator: ''
    });
    
    // Show success message (you can implement a toast notification here)
    alert('Thank you! We will contact you soon.');
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle>Our Collaborators</HeroTitle>
        <HeroSubtitle>
          We partner with industry leaders in education, cybersecurity, and technical training to provide you with the best opportunities. 
          From language learning to advanced technical certifications, discover how our collaborations can help you achieve your goals.
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <SectionTitle>Our Partners</SectionTitle>
        <CollaboratorsGrid>
          {collaborators.map((collaborator, index) => (
            <CollaboratorCard
              key={collaborator.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CollaboratorLogo>
                {collaborator.logoType === 'image' ? (
                  <img src={collaborator.logo} alt={collaborator.name} />
                ) : (
                  collaborator.logo
                )}
              </CollaboratorLogo>
              <CollaboratorName>{collaborator.name}</CollaboratorName>
              <CollaboratorDescription>{collaborator.description}</CollaboratorDescription>
              <CollaboratorFeatures>
                {collaborator.features.map((feature, idx) => (
                  <FeatureTag key={idx}>{feature}</FeatureTag>
                ))}
              </CollaboratorFeatures>
              <MoreInfoButton onClick={() => handleMoreInfo(collaborator)}>
                More Info <FiArrowRight />
              </MoreInfoButton>
            </CollaboratorCard>
          ))}
        </CollaboratorsGrid>

        <ServicesSection>
          <SectionTitle>What We Offer Together</SectionTitle>
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard key={index}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </ServicesSection>
      </ContentSection>

      <AnimatePresence>
        {isModalOpen && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader>
                <ModalTitle>Get More Information</ModalTitle>
                <CloseButton onClick={() => setIsModalOpen(false)}>
                  <FiX />
                </CloseButton>
              </ModalHeader>

              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Name *</Label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Email *</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Phone Number</Label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Message</Label>
                  <TextArea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us what you're interested in..."
                  />
                </FormGroup>

                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Get Information'}
                </SubmitButton>
              </form>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

export default Collaborators; 