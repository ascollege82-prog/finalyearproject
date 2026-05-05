import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const EventsContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  color: #ffffff;
  padding-top: 80px;
`;

const Hero = styled.div`
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, rgba(0, 123, 255, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%);
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #a0a0a0;
  max-width: 600px;
  margin: 0 auto 40px;
`;

const EventsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
`;

const EventCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
    border-color: #00d4ff;
  }
`;

const EventDate = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  color: #00d4ff;
  font-weight: 600;
`;

const EventTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #ffffff;
`;

const EventDescription = styled.p`
  color: #a0a0a0;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const EventDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 25px;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #888;
  font-size: 0.9rem;
`;

const RegisterButton = styled.button`
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 212, 255, 0.3);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
    transform: none;
  }
`;

const FilterSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
    transform: scale(1.05);
  }
`;

const StatusBadge = styled.span`
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${props => {
    switch (props.status) {
      case 'upcoming': return 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)';
      case 'ongoing': return 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)';
      case 'completed': return 'linear-gradient(135deg, #51cf66 0%, #40c057 100%)';
      default: return 'rgba(255, 255, 255, 0.2)';
    }
  }};
  color: white;
`;

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const eventsData = [
    {
      id: 1,
      title: "Maven Tech Summit 2024",
      description: "Join us for the biggest technology conference of the year, featuring keynote speakers, workshops, and networking opportunities.",
      date: "2024-03-15",
      time: "09:00 AM",
      location: "San Francisco Convention Center",
      category: "conference",
      status: "upcoming",
      capacity: 500,
      registered: 320
    },
    {
      id: 2,
      title: "AI & Machine Learning Workshop",
      description: "Hands-on workshop covering the latest developments in artificial intelligence and machine learning technologies.",
      date: "2024-02-28",
      time: "02:00 PM",
      location: "Maven Innovation Hub",
      category: "workshop",
      status: "upcoming",
      capacity: 50,
      registered: 45
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      description: "Watch innovative startups pitch their ideas to a panel of industry experts and investors.",
      date: "2024-02-20",
      time: "06:00 PM",
      location: "Virtual Event",
      category: "competition",
      status: "ongoing",
      capacity: 200,
      registered: 180
    },
    {
      id: 4,
      title: "Cybersecurity Roundtable",
      description: "Expert panel discussion on the latest cybersecurity threats and defense strategies.",
      date: "2024-02-10",
      time: "11:00 AM",
      location: "Maven Headquarters",
      category: "roundtable",
      status: "completed",
      capacity: 100,
      registered: 95
    },
    {
      id: 5,
      title: "Women in Tech Leadership",
      description: "Celebrating women leaders in technology with inspiring talks and networking opportunities.",
      date: "2024-03-08",
      time: "04:00 PM",
      location: "Virtual Event",
      category: "networking",
      status: "upcoming",
      capacity: 150,
      registered: 120
    },
    {
      id: 6,
      title: "Product Launch: Maven Analytics 2.0",
      description: "Exclusive launch event for our revolutionary analytics platform with live demonstrations.",
      date: "2024-03-22",
      time: "07:00 PM",
      location: "Grand Hyatt Hotel",
      category: "launch",
      status: "upcoming",
      capacity: 300,
      registered: 250
    }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? eventsData 
    : eventsData.filter(event => event.category === activeFilter);

  const handleRegister = (eventId) => {
    // In a real app, this would handle registration logic
    alert(`Registration for event ${eventId} would be processed here!`);
  };

  return (
    <>
      <Helmet>
        <title>Events - Maven</title>
        <meta name="description" content="Join Maven's exciting events, conferences, workshops, and networking opportunities. Stay connected with the latest in technology and innovation." />
      </Helmet>
      
      <EventsContainer>
        <Hero>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Upcoming Events
          </Title>
          <Subtitle>
            Join us for exciting conferences, workshops, and networking opportunities
          </Subtitle>
        </Hero>

        <FilterSection>
          {['all', 'conference', 'workshop', 'competition', 'roundtable', 'networking', 'launch'].map(filter => (
            <FilterButton
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </FilterButton>
          ))}
        </FilterSection>

        <EventsGrid>
          {filteredEvents.map((event, index) => (
            <EventCard
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <EventDate>
                📅 {new Date(event.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
                <StatusBadge status={event.status}>
                  {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                </StatusBadge>
              </EventDate>
              
              <EventTitle>{event.title}</EventTitle>
              <EventDescription>{event.description}</EventDescription>
              
              <EventDetails>
                <DetailItem>
                  🕒 {event.time}
                </DetailItem>
                <DetailItem>
                  📍 {event.location}
                </DetailItem>
                <DetailItem>
                  👥 {event.registered}/{event.capacity} registered
                </DetailItem>
                <DetailItem>
                  🏷️ {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </DetailItem>
              </EventDetails>
              
              <RegisterButton
                onClick={() => handleRegister(event.id)}
                disabled={event.status === 'completed'}
              >
                {event.status === 'completed' ? 'Event Completed' : 'Register Now'}
              </RegisterButton>
            </EventCard>
          ))}
        </EventsGrid>
      </EventsContainer>
    </>
  );
};

export default Events; 