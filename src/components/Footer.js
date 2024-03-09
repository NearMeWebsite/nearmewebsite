import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const AppContainer = styled.div`
  border-radius: 20px; /* Adjust the border-radius to your liking */
  border: 2px solid #2c3e50; /* Border color */
  overflow: hidden; /* Ensure the content stays within the rounded borders */
`;

const FooterContainer = styled.footer`
  background-color: #2c3e50; /* Darker color for the footer background */
  color: #ecf0f1; /* Text color */
  padding: 30px 0;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <AppContainer>
      <FooterContainer>
        <Container>
        
          <Row>
            <Col>
              <FooterText>&copy; {new Date().getFullYear()} NearMeWebsite. All rights reserved.</FooterText>
            </Col>
          </Row>
        </Container>
      </FooterContainer>
    </AppContainer>
  );
};

export default Footer;

