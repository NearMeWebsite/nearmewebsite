import React, { useRef } from 'react';
import styled from 'styled-components';
import { Container, Button, Typography } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

const AboutContainer = styled.div`
  padding: 50px 20px;
  background-color: #e6ffe6; /* Light Green */
  color: #333;
  border-radius: 20px;
  font-family: 'Arial', sans-serif; /* Change the font family */

  @media (max-width: 767px) {
    padding: 30px 10px;
  }
`;

const CopyButton = styled(Button)`
  display: block;
  margin: 0 auto;
  background-color: #4caf50; /* Green color */
  border-color: #4caf50;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.08); /* Add box-shadow for a subtle shadow effect */
  color: #fff; /* Text color */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Add text shadow */
  
  &:hover {
    background-color: #388e3c; /* Darker green on hover */
    border-color: #388e3c;
  }
`;

const ShadowedTypography = styled(Typography)`
  && {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Updated text shadow */
    color: #000000; /* Updated text color to black */
  }
`;

const AboutSection = () => {
  // Define the animation spring
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  // Reference to the button's text
  const buttonTextRef = useRef(null);

  // Function to handle the "Get in Touch" button click
  const handleGetInTouchClick = () => {
    // Create a textarea element to facilitate copying text
    const textArea = document.createElement('textarea');
    textArea.value = buttonTextRef.current.innerText;

    // Convert the text to lowercase
    const lowercaseText = textArea.value.toLowerCase();
    textArea.value = lowercaseText;

    // Append the textarea to the document
    document.body.appendChild(textArea);

    // Select the text within the textarea
    textArea.select();
    textArea.setSelectionRange(0, 99999);

    // Copy the selected text
    document.execCommand('copy');

    // Remove the textarea from the document
    document.body.removeChild(textArea);

    // Log or show a notification that the text has been copied (optional)
    console.log('Text copied to clipboard');

    window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&body=Hello%20from%20NearMeWebsite', '_blank');
  };

  return (
    <animated.div style={animation}>
      <AboutContainer id="about">
        <Container align="center">
          <ShadowedTypography variant="h2" gutterBottom>
            About Us
          </ShadowedTypography>
          <ShadowedTypography variant="body1" paragraph style={{ fontSize: '1.2rem' }}>
            NearMeWebsite is a team of passionate developers dedicated to providing high-quality web and app solutions for small businesses and startups.
            <br />
           We Serve World Wide (WWW) And Regional Gujarat, India <br/>
             Nikol,Naroda,Bopal,Hanspura,Narol,Isanpur,SGRoad,Gota,Gandhinagar,IIT Palaj,GIFT City,Ashram Road, Vastrapur, Satellite, Prahlad Nagar, Maninagar, Bodakdev, Sabarmati, Ghatlodia, Chandkheda, Naranpura
          </ShadowedTypography>
          <CopyButton variant="contained" size="large" onClick={handleGetInTouchClick} ref={buttonTextRef}>
            <FontAwesomeIcon icon={faCopy} style={{ marginRight: '5px' }} />
            nearmewebsites@gmail.com
          </CopyButton>
        </Container>
      </AboutContainer>
    </animated.div>
  );
};

export default AboutSection;
