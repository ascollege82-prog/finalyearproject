import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const TermsContainer = styled.div`
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

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Maven</title>
        <meta name="description" content="Read Maven's terms of service, user agreements, and legal terms governing the use of our platform and services." />
      </Helmet>
      
      <TermsContainer>
        <Hero>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Terms of Service
          </Title>
          <Subtitle>
            Please read these terms carefully before using our services.
          </Subtitle>
        </Hero>

        <Content>
          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>Acceptance of Terms</SectionTitle>
            <SectionContent>
              <p>By accessing and using Maven's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
              <p>These Terms of Service ("Terms") govern your use of our website and services operated by Maven ("Company," "we," "us," or "our").</p>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionTitle>Description of Service</SectionTitle>
            <SectionContent>
              <p>Maven provides a comprehensive analytics and business intelligence platform that includes:</p>
              <ul>
                <li>Data analytics and visualization tools</li>
                <li>Business intelligence reporting</li>
                <li>Machine learning and AI capabilities</li>
                <li>Cloud-based data storage and processing</li>
                <li>API integration services</li>
                <li>Technical support and consulting</li>
              </ul>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionTitle>User Accounts and Registration</SectionTitle>
            <SectionContent>
              <p>To access certain features of our service, you must register for an account. You agree to:</p>
              <ul>
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Ensure that your account information is not shared with third parties</li>
              </ul>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SectionTitle>Acceptable Use Policy</SectionTitle>
            <SectionContent>
              <p>You agree not to use our services to:</p>
              <ul>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Upload or transmit malicious code, viruses, or harmful content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Collect or store personal data without proper consent</li>
              </ul>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SectionTitle>Intellectual Property Rights</SectionTitle>
            <SectionContent>
              <p>The service and its original content, features, and functionality are and will remain the exclusive property of Maven and its licensors. The service is protected by copyright, trademark, and other laws.</p>
              <p>You retain ownership of any content you submit to our service, but you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content in connection with providing the service.</p>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <SectionTitle>Payment Terms</SectionTitle>
            <SectionContent>
              <p>For paid services, you agree to:</p>
              <ul>
                <li>Pay all fees in advance as specified in your service plan</li>
                <li>Provide accurate billing information</li>
                <li>Authorize us to charge your payment method for all fees</li>
                <li>Pay all applicable taxes and fees</li>
                <li>Maintain valid payment information on your account</li>
              </ul>
              <p>We reserve the right to modify our pricing with 30 days' notice. Refunds are provided according to our refund policy.</p>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <SectionTitle>Data and Privacy</SectionTitle>
            <SectionContent>
              <p>Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>
              <p>You are responsible for:</p>
              <ul>
                <li>Ensuring you have the right to share any data you upload</li>
                <li>Complying with applicable data protection laws</li>
                <li>Obtaining necessary consents for data processing</li>
                <li>Maintaining the security of your data</li>
              </ul>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <SectionTitle>Service Availability</SectionTitle>
            <SectionContent>
              <p>We strive to provide reliable service but cannot guarantee uninterrupted access. We may:</p>
              <ul>
                <li>Perform maintenance that may temporarily affect service availability</li>
                <li>Modify or discontinue features with reasonable notice</li>
                <li>Suspend service for violations of these terms</li>
                <li>Limit access during periods of high usage</li>
              </ul>
              <p>We are not liable for any damages resulting from service interruptions.</p>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <SectionTitle>Limitation of Liability</SectionTitle>
            <SectionContent>
              <p>To the maximum extent permitted by law, Maven shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:</p>
              <ul>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Service interruptions or data loss</li>
                <li>Damages resulting from third-party actions</li>
                <li>Any damages exceeding the amount paid for the service</li>
              </ul>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <SectionTitle>Termination</SectionTitle>
            <SectionContent>
              <p>Either party may terminate this agreement at any time:</p>
              <ul>
                <li>You may cancel your account at any time through your account settings</li>
                <li>We may terminate accounts for violations of these terms</li>
                <li>Upon termination, your access to the service will cease immediately</li>
                <li>We may retain certain data as required by law or for legitimate business purposes</li>
              </ul>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <SectionTitle>Governing Law</SectionTitle>
            <SectionContent>
              <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Maven is incorporated, without regard to its conflict of law provisions.</p>
              <p>Any disputes arising from these Terms will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.</p>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <SectionTitle>Changes to Terms</SectionTitle>
            <SectionContent>
              <p>We reserve the right to modify these Terms at any time. We will notify users of significant changes by:</p>
              <ul>
                <li>Posting the updated Terms on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Displaying prominent notices in the service</li>
              </ul>
              <p>Your continued use of the service after changes become effective constitutes acceptance of the new Terms.</p>
            </SectionContent>
          </Section>

          <Section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <SectionTitle>Contact Information</SectionTitle>
            <SectionContent>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <ul>
                <li><strong>Email:</strong> legal@maven.com</li>
                <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                <li><strong>Address:</strong> 123 Innovation Drive, Tech City, TC 12345</li>
              </ul>
            </SectionContent>
          </Section>

          <LastUpdated>
            Last Updated: January 15, 2024
          </LastUpdated>
        </Content>
      </TermsContainer>
    </>
  );
};

export default Terms; 