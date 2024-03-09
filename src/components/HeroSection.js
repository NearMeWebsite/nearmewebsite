// HeroSection.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container } from 'react-bootstrap';
import { Typography } from '@material-ui/core';
import LaptopIcon from '@material-ui/icons/Laptop';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroContainer = styled.div`
  background-color: #ffc0cb; /* Light Pink */
  padding: 80px 20px;
  text-align: center;
  color: #333; /* Dark font color */
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add box-shadow for a subtle shadow effect */

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 576px) {
    padding: 40px 15px;
  }
`;

const HeroHeading = styled(Typography)`
  && {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-family: 'Arial', sans-serif; /* Change the font family */
    color: #2196f3; /* Change the font color */
    font-weight: bold; /* Make the font bold */
    text-transform: uppercase; /* Uppercase the text */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Add text shadow */
    animation: ${fadeIn} 1s ease-out; /* Apply fade-in animation */

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 576px) {
      font-size: 1.8rem;
      margin-bottom: 15px;
    }
  }
`;

const HeroContent = styled(Typography)`
  && {
    font-size: 1.2rem;
    font-family: 'Arial', sans-serif; /* Change the font family */
    color: #666; /* Change the font color */
    font-weight: 300; /* Use a lighter font weight */
    line-height: 1.5; /* Adjust the line height for better readability */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Add text shadow */
    animation: ${fadeIn} 1s ease-out 0.5s; /* Apply fade-in animation with a delay */

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 576px) {
      font-size: 0.9rem;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 576px) {
    margin-top: 15px;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Container>
        <HeroHeading variant="h1">Welcome to Your Near Me Website</HeroHeading>
        <HeroContent variant="body1">
          We Are Here For You, explore our services,We are Create Websites and Mobile Applications and stay connected with us.
        </HeroContent>
        <IconWrapper>
          <LaptopIcon style={{ fontSize: 40, marginRight: 20 }} />
          <PhoneAndroidIcon style={{ fontSize: 40 }} />
        </IconWrapper>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;
