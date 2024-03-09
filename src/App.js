// App.js
import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection'; 
import Footer from './components/Footer';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection /> 
      <Footer />
    </AppContainer>
  );
};

export default App;
