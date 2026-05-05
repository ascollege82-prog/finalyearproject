import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import styled, { createGlobalStyle } from 'styled-components';
import ChatBot from './components/ChatBot';
import { AuthProvider } from './context/AuthContext';

// API Configuration
export const API_URL = process.env.REACT_APP_API_URL || import.meta.env?.VITE_API_URL || 'http://localhost:5000/api/v1';

// Lazy load components for better performance
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Careers = lazy(() => import('./pages/Careers'));
const Technology = lazy(() => import('./pages/Technology'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Team = lazy(() => import('./pages/Team'));
const News = lazy(() => import('./pages/News'));
const Events = lazy(() => import('./pages/Events'));
const Resources = lazy(() => import('./pages/Resources'));
const Support = lazy(() => import('./pages/Support'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Courses = lazy(() => import('./pages/Courses'));
const CourseDetails = lazy(() => import('./pages/CourseDetails'));
const Companies = lazy(() => import('./pages/Companies'));
const Centers = lazy(() => import('./pages/Centers'));
const Documentation = lazy(() => import('./pages/Documentation'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Whitepapers = lazy(() => import('./pages/Whitepapers'));
const AIML = lazy(() => import('./pages/AIML'));
const CloudServices = lazy(() => import('./pages/CloudServices'));
const DigitalTransformation = lazy(() => import('./pages/DigitalTransformation'));
const Security = lazy(() => import('./pages/Security'));

const DataAnalytics = lazy(() => import('./pages/DataAnalytics'));
const Collaborators = lazy(() => import('./pages/Collaborators'));
const Consulting = lazy(() => import('./pages/Consulting'));
const Development = lazy(() => import('./pages/Development'));
const TechnicalSupport = lazy(() => import('./pages/Support'));
const Training = lazy(() => import('./pages/Training'));
const Maintenance = lazy(() => import('./pages/Maintenance'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

// Global Styles
const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #00ff88;
    --secondary: #ff0066;
    --accent: #0066ff;
    --background: #000000;
    --surface: #111111;
    --surface-light: #1a1a1a;
    --text-primary: #ffffff;
    --text-secondary: #ffffff;
    --text-muted: #ffffff;
    --border: #333333;
    --success: #00ff88;
    --warning: #ffaa00;
    --error: #ff4444;
    --gradient-primary: linear-gradient(135deg, #00ff88 0%, #00ccff 100%);
    --gradient-secondary: linear-gradient(135deg, #ff0066 0%, #ff6600 100%);
    --gradient-accent: linear-gradient(135deg, #0066ff 0%, #6600ff 100%);
    --shadow-glow: 0 0 20px rgba(0, 255, 136, 0.3);
    --shadow-glow-red: 0 0 20px rgba(255, 0, 102, 0.3);
    --shadow-glow-blue: 0 0 20px rgba(0, 102, 255, 0.3);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: var(--background);
    color: white;
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Orbitron', monospace;
    font-weight: 700;
    color: white;
  }

  a {
    text-decoration: none;
    color: white;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    color: white;
  }
  
  p, span, div, li, td, th, label, input, textarea, select {
    color: white !important;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--surface);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--secondary);
  }

  /* Selection */
  ::selection {
    background: var(--primary);
    color: var(--background);
  }

  /* Focus styles */
  *:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }

  @keyframes glow {
    0%, 100% { box-shadow: 0 0 5px var(--primary); }
    50% { box-shadow: 0 0 20px var(--primary), 0 0 30px var(--primary); }
  }

  /* Utility classes */
  .fade-in {
    animation: fadeIn 0.6s ease-out;
  }

  .slide-in-left {
    animation: slideInLeft 0.6s ease-out;
  }

  .slide-in-right {
    animation: slideInRight 0.6s ease-out;
  }

  .pulse {
    animation: pulse 2s infinite;
  }

  .glow {
    animation: glow 2s infinite;
  }
`;

// Loading component
const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, var(--background) 0%, var(--surface) 100%);
  
  &::after {
    content: '';
    width: 50px;
    height: 50px;
    border: 3px solid var(--border);
    border-top: 3px solid var(--primary);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Main app container
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Query client for data fetching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <GlobalStyle />
          <Router>
          <AppContainer>
            <Suspense fallback={<LoadingSpinner />}>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/technology" element={<Technology />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/courses/:id" element={<CourseDetails />} />
                  <Route path="/companies" element={<Companies />} />
                  <Route path="/centers" element={<Centers />} />
                  <Route path="/documentation" element={<Documentation />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/whitepapers" element={<Whitepapers />} />
                  <Route path="/ai-ml" element={<AIML />} />
                  <Route path="/cloud-services" element={<CloudServices />} />
                  <Route path="/digital-transformation" element={<DigitalTransformation />} />
                  <Route path="/security" element={<Security />} />
                  <Route path="/login" element={<Login />} />
          
                  <Route path="/data-analytics" element={<DataAnalytics />} />
                  <Route path="/collaborators" element={<Collaborators />} />
                  <Route path="/services/consulting" element={<Consulting />} />
                  <Route path="/services/development" element={<Development />} />
                  <Route path="/services/support" element={<TechnicalSupport />} />
                  <Route path="/services/training" element={<Training />} />
                  <Route path="/services/maintenance" element={<Maintenance />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <ChatBot />
            </Suspense>
          </AppContainer>
        </Router>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'var(--surface)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border)',
            },
          }}
        />
      </HelmetProvider>
    </QueryClientProvider>
    </AuthProvider>
  );
}

export default App; 