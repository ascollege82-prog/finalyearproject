import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const partners = [
  { name: 'TechNova', logo: '', url: '#' },
  { name: 'InnoSoft', logo: '', url: '#' },
  { name: 'DataWorks', logo: '', url: '#' },
  { name: 'Cloudify', logo: '', url: '#' },
  { name: 'NextGen', logo: '', url: '#' },
  { name: 'CyberEdge', logo: '', url: '#' },
  { name: 'GreenAI', logo: '', url: '#' },
  { name: 'FinTechX', logo: '', url: '#' },
];

const stats = [
  { label: 'Partner Companies', value: '50+' },
  { label: 'Students Placed', value: '2,000+' },
  { label: 'Industries', value: '12+' },
  { label: 'Countries', value: '8+' },
];

const testimonials = [
  {
    name: 'Swati Maurya',
    company: 'TechNova',
    text: 'ITP’s industry-focused training helped me gain the practical skills and hands-on experience needed to secure a high-paying job. The expert guidance and real-world projects enhanced my technical and soft skills, making me job-ready.',
    avatar: '',
  },
  {
    name: 'Nitin Gupta',
    company: 'InnoSoft',
    text: 'ITP’s digital marketing training was a game-changer for my career! The hands-on learning, real-world projects, and expert mentorship helped me master SEO, social media, and analytics.',
    avatar: '',
  },
  {
    name: 'Sumit Kumar',
    company: 'DataWorks',
    text: 'ITP’s React JS training provided me with hands-on experience and in-depth knowledge of front-end development. The practical projects, expert mentorship, and industry-focused curriculum helped me build strong coding skills and a job-ready portfolio.',
    avatar: '',
  },
  {
    name: 'Nisha Chauhan',
    company: 'CyberEdge',
    text: 'ITP’s cybersecurity training equipped me with essential skills in network security, ethical hacking, and risk assessment. The hands-on labs, real-world simulations, and expert guidance helped me gain practical experience and industry-recognized expertise.',
    avatar: '',
  },
];

const CompaniesContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  color: #fff;
  padding-top: 80px;
`;

const Hero = styled.div`
  text-align: center;
  padding: 60px 20px 30px 20px;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 600px;
  margin: 0 auto 30px;
`;

const StatsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin: 40px 0 60px 0;
`;

const StatBox = styled(motion.div)`
  background: rgba(255,255,255,0.05);
  border-radius: 16px;
  padding: 30px 40px;
  min-width: 180px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 8px 32px 0 rgba(0,212,255,0.08);
`;

const StatValue = styled.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: #00d4ff;
  margin-bottom: 8px;
`;

const StatLabel = styled.div`
  color: #a0a0a0;
  font-size: 1.1rem;
`;

const PartnersGrid = styled.div`
  max-width: 1100px;
  margin: 0 auto 60px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 40px;
  align-items: center;
`;

const PartnerLogoBox = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.03);
  border-radius: 14px;
  padding: 30px 10px;
  border: 1px solid rgba(255,255,255,0.08);
  transition: box-shadow 0.2s, border 0.2s, transform 0.2s;
  min-height: 80px;
  min-width: 120px;
  box-shadow: 0 2px 12px #00d4ff22;
  &:hover {
    box-shadow: 0 8px 32px #00d4ff55;
    border: 1px solid #00d4ff;
    transform: scale(1.05);
  }
  font-size: 1.3rem;
  color: #fff;
  text-decoration: none;
`;

const TestimonialsSection = styled.div`
  max-width: 900px;
  margin: 0 auto 60px auto;
`;

const TestimonialsTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #00d4ff;
  margin-bottom: 30px;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255,255,255,0.05);
  border-radius: 16px;
  padding: 30px 24px;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 8px 32px 0 rgba(0,212,255,0.08);
  color: #fff;
`;

const TestimonialText = styled.p`
  color: #a0a0a0;
  font-size: 1.1rem;
  margin-bottom: 18px;
`;

const TestimonialMeta = styled.div`
  font-weight: 700;
  color: #00d4ff;
`;

const CTASection = styled.div`
  text-align: center;
  margin: 60px 0 40px 0;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  color: #fff;
  border-radius: 25px;
  padding: 16px 40px;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 2px 12px #00d4ff33;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: linear-gradient(135deg, #7c3aed 0%, #00d4ff 100%);
    transform: scale(1.05);
  }
`;

const Companies = () => {
  return (
    <>
      <Helmet>
        <title>Partner Companies - Maven</title>
        <meta name="description" content="Meet Maven's partner companies, see our placement stats, and read testimonials from hiring partners and alumni." />
      </Helmet>
      <CompaniesContainer>
        <Hero>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Partner Companies
          </Title>
          <Subtitle>
            Trusted by leading companies across industries and countries
          </Subtitle>
        </Hero>
        <StatsGrid>
          {stats.map((stat, idx) => (
            <StatBox
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatBox>
          ))}
        </StatsGrid>
        <PartnersGrid>
          {partners.map((partner, idx) => (
            <PartnerLogoBox
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              title={partner.name}
            >
              {/* Replace with actual logos if available */}
              <span>{partner.name}</span>
            </PartnerLogoBox>
          ))}
        </PartnersGrid>
        <TestimonialsSection>
          <TestimonialsTitle>What Our Partners & Alumni Say</TestimonialsTitle>
          <TestimonialsGrid>
            {testimonials.map((t, idx) => (
              <TestimonialCard
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <TestimonialText>“{t.text}”</TestimonialText>
                <TestimonialMeta>{t.name} — {t.company}</TestimonialMeta>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </TestimonialsSection>
        <CTASection>
          <h2 style={{ color: '#fff', marginBottom: 18 }}>Become a Partner Company</h2>
          <p style={{ color: '#a0a0a0', marginBottom: 30 }}>
            Join our network of industry leaders and help shape the future of talent. Connect with job-ready professionals and access exclusive partnership benefits.
          </p>
          <CTAButton href="#">Become a Partner</CTAButton>
        </CTASection>
      </CompaniesContainer>
    </>
  );
};

export default Companies; 