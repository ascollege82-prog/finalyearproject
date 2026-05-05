import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const PrivacyContainer = styled.div`
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

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const Section = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #ffffff;
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionContent = styled.div`
  color: #a0a0a0;
  line-height: 1.8;
  font-size: 1rem;

  p {
    margin-bottom: 15px;
  }

  ul {
    margin: 15px 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 8px;
  }

  strong {
    color: #ffffff;
    font-weight: 600;
  }
`;

const LastUpdated = styled.div`
  text-align: center;
  color: #888;
  font-size: 0.9rem;
  margin-top: 40px;
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Maven</title>
        <meta name="description" content="Learn about Maven's privacy policy, data protection practices, and how we safeguard your personal information." />
      </Helmet>
      
      <PrivacyContainer>
        <Hero>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Privacy Policy
          </Title>
          <Subtitle>
            Your privacy is important to us. Learn how we protect and handle your information.
          </Subtitle>
        </Hero>

        <Content>
          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>Information We Collect</SectionTitle>
            <SectionContent>
              <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:</p>
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, and company details</li>
                <li><strong>Account Information:</strong> Username, password, and account preferences</li>
                <li><strong>Usage Data:</strong> How you interact with our platform, features used, and performance metrics</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information, and system logs</li>
                <li><strong>Communication Data:</strong> Messages, support tickets, and feedback you send to us</li>
              </ul>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionTitle>How We Use Your Information</SectionTitle>
            <SectionContent>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Personalize and improve your experience with our platform</li>
              </ul>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionTitle>Information Sharing and Disclosure</SectionTitle>
            <SectionContent>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
              <ul>
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our platform</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>Protection of Rights:</strong> We may share information to protect our rights, property, or safety, or that of our users</li>
              </ul>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SectionTitle>Data Security</SectionTitle>
            <SectionContent>
              <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
              <ul>
                <li>End-to-end encryption for data in transit and at rest</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection and privacy</li>
                <li>Incident response procedures and breach notification protocols</li>
              </ul>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SectionTitle>Your Rights and Choices</SectionTitle>
            <SectionContent>
              <p>You have certain rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> You can request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> You can request that we correct inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> You can request deletion of your personal information in certain circumstances</li>
                <li><strong>Portability:</strong> You can request a copy of your data in a structured, machine-readable format</li>
                <li><strong>Objection:</strong> You can object to certain processing of your personal information</li>
                <li><strong>Withdrawal:</strong> You can withdraw consent for processing based on consent</li>
              </ul>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <SectionTitle>Cookies and Tracking Technologies</SectionTitle>
            <SectionContent>
              <p>We use cookies and similar tracking technologies to enhance your experience on our platform. These technologies help us:</p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Analyze how you use our services</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve our platform's functionality and performance</li>
              </ul>
              <p>You can control cookie settings through your browser preferences, though disabling certain cookies may affect platform functionality.</p>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <SectionTitle>International Data Transfers</SectionTitle>
            <SectionContent>
              <p>Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.</p>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <SectionTitle>Children's Privacy</SectionTitle>
            <SectionContent>
              <p>Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <SectionTitle>Changes to This Policy</SectionTitle>
            <SectionContent>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.</p>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <SectionTitle>Contact Us</SectionTitle>
            <SectionContent>
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <ul>
                <li><strong>Email:</strong> privacy@maven.com</li>
                <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                <li><strong>Address:</strong> 123 Innovation Drive, Tech City, TC 12345</li>
              </ul>
            </SectionContent>
          </Section>

          <LastUpdated>
            Last Updated: January 15, 2024
          </LastUpdated>
        </Content>
      </PrivacyContainer>
    </>
  );
};

export default Privacy; 