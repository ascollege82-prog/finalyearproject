import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const centersData = [
  {
    name: 'Zirakpur Center',
    city: 'Zirakpur',
    address: 'Plot No.13, Modern Complex, Zirakpur',
    phone: '+91-9988433434',
    email: 'zirakpur@maven.com',
  },
  {
    name: 'Chandigarh Center',
    city: 'Chandigarh',
    address: 'SCO 21, Sector 34A, Chandigarh',
    phone: '+91-9988433435',
    email: 'chandigarh@maven.com',
  },
  {
    name: 'Mohali Center',
    city: 'Mohali',
    address: 'Phase 8, Industrial Area, Mohali',
    phone: '+91-9988433436',
    email: 'mohali@maven.com',
  },
  {
    name: 'Panchkula Center',
    city: 'Panchkula',
    address: 'SCO 45, Sector 11, Panchkula',
    phone: '+91-9988433437',
    email: 'panchkula@maven.com',
  },
  {
    name: 'Pathankot Center',
    city: 'Pathankot',
    address: 'Main Road, Pathankot',
    phone: '+91-9988433438',
    email: 'pathankot@maven.com',
  },
];

const cities = ['All', ...Array.from(new Set(centersData.map(c => c.city)))];

const CentersContainer = styled.div`
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

const FiltersBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
`;

const FilterSelect = styled.select`
  background: rgba(255,255,255,0.05);
  color: #fff;
  border: 1px solid #222;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border: 1px solid #00d4ff;
  }
`;

const CentersGrid = styled.div`
  max-width: 1100px;
  margin: 0 auto 60px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
`;

const CenterCard = styled(motion.div)`
  background: rgba(255,255,255,0.05);
  border-radius: 20px;
  padding: 30px 24px;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 8px 32px 0 rgba(0,212,255,0.08);
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const CenterName = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #00d4ff;
`;

const CenterMeta = styled.div`
  color: #a0a0a0;
  font-size: 1.05rem;
`;

const EnquiryBtn = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  color: #fff;
  border-radius: 25px;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 2px 12px #00d4ff33;
  transition: background 0.2s, transform 0.2s;
  margin-top: 10px;
  &:hover {
    background: linear-gradient(135deg, #7c3aed 0%, #00d4ff 100%);
    transform: scale(1.05);
  }
`;

const Centers = () => {
  const [city, setCity] = useState('All');
  const filteredCenters = city === 'All' ? centersData : centersData.filter(c => c.city === city);

  return (
    <>
      <Helmet>
        <title>Our Centers - Maven</title>
        <meta name="description" content="Find Maven's training centers across cities. View address, contact info, and enquire for more details." />
      </Helmet>
      <CentersContainer>
        <Hero>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Centers
          </Title>
          <Subtitle>
            Find a Maven training center near you and get in touch for guidance
          </Subtitle>
        </Hero>
        <FiltersBar>
          <FilterSelect value={city} onChange={e => setCity(e.target.value)}>
            {cities.map(city => <option key={city}>{city}</option>)}
          </FilterSelect>
        </FiltersBar>
        <CentersGrid>
          {filteredCenters.map((center, idx) => (
            <CenterCard
              key={center.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <CenterName>{center.name}</CenterName>
              <CenterMeta>
                <div><strong>City:</strong> {center.city}</div>
                <div><strong>Address:</strong> {center.address}</div>
                <div><strong>Phone:</strong> {center.phone}</div>
                <div><strong>Email:</strong> {center.email}</div>
              </CenterMeta>
              <EnquiryBtn href={`mailto:${center.email}?subject=Enquiry about ${center.name}`}>Enquire</EnquiryBtn>
            </CenterCard>
          ))}
        </CentersGrid>
      </CentersContainer>
    </>
  );
};

export default Centers; 