import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

const course = {
  id: 1,
  title: 'AI/ML',
  category: 'Technology',
  level: 'Advanced',
  duration: 390,
  lectures: 54,
  description: 'In-depth AI/ML course with hands-on projects and real-world applications.',
  curriculum: [
    'Introduction to AI & ML',
    'Supervised Learning',
    'Unsupervised Learning',
    'Neural Networks',
    'Deep Learning',
    'Project: Real-World AI Application',
  ],
  instructor: {
    name: 'Dr. Jane Smith',
    bio: 'PhD in Computer Science, 10+ years in AI/ML research and teaching.',
    avatar: '',
  },
};

const DetailsContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  color: #fff;
  padding-top: 80px;
`;

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
`;

const Meta = styled.div`
  color: #7c3aed;
  font-size: 1.1rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #a0a0a0;
  font-size: 1.1rem;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 30px 0 15px 0;
  color: #00d4ff;
`;

const CurriculumList = styled.ul`
  margin-bottom: 30px;
  padding-left: 20px;
  color: #fff;
`;

const InstructorBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(255,255,255,0.05);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
`;

const EnrollBtn = styled.button`
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 14px 40px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(135deg, #7c3aed 0%, #00d4ff 100%);
  }
`;

const CourseDetails = () => {
  return (
    <>
      <Helmet>
        <title>{course.title} - Course Details | Maven</title>
        <meta name="description" content={course.description} />
      </Helmet>
      <DetailsContainer>
        <Content>
          <Title>{course.title}</Title>
          <Meta>
            {course.category} | {course.level} | {course.duration} Hours | {course.lectures} Lectures
          </Meta>
          <Description>{course.description}</Description>
          <SectionTitle>Curriculum</SectionTitle>
          <CurriculumList>
            {course.curriculum.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </CurriculumList>
          <SectionTitle>Instructor</SectionTitle>
          <InstructorBox>
            <Avatar>{course.instructor.name.split(' ').map(n => n[0]).join('')}</Avatar>
            <div>
              <strong>{course.instructor.name}</strong>
              <p style={{ color: '#a0a0a0', margin: 0 }}>{course.instructor.bio}</p>
            </div>
          </InstructorBox>
          <EnrollBtn>Enroll Now</EnrollBtn>
        </Content>
      </DetailsContainer>
    </>
  );
};

export default CourseDetails; 