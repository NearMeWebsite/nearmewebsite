import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const ServicesContainer = styled(animated.div)`
  padding: 50px 0;
  background-color: #3498db;
  border-radius: 15px;
`;

const ServiceCard = styled(Card)`
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 15px;
`;

const ServiceTitle = styled(Typography)`
  background-color: #2980b9;
  color: #ffffff;
  padding: 10px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ServiceDescription = styled(Typography)`
  background-color: #ecf0f1;
  padding: 10px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  font-family: 'Arial', sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const ServicesSection = () => {
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 800 },
  });

  return (
    <ServicesContainer id="services" style={animation}>
      <Container>
        <h2 className="text-center mb-4" style={{ color: '#fff', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Our Services
        </h2>
        <Row xs={1} sm={2} md={3}>
          <Col>
            <ServiceCard>
              <CardContent>
                <ServiceTitle variant="h6">Web Development</ServiceTitle>
                <ServiceDescription variant="body2">
                  We create responsive and user-friendly websites tailored to your business needs.
                </ServiceDescription>
              </CardContent>
            </ServiceCard>
          </Col>
          <Col>
            <ServiceCard>
              <CardContent>
                <ServiceTitle variant="h6">Mobile App Development</ServiceTitle>
                <ServiceDescription variant="body2">
                  Build a powerful mobile presence with our custom app development services.
                </ServiceDescription>
              </CardContent>
            </ServiceCard>
          </Col>
          <Col>
            <ServiceCard>
              <CardContent>
                <ServiceTitle variant="h6">Consulting</ServiceTitle>
                <ServiceDescription variant="body2">
                  Get expert advice on technology and strategies to boost your business.
                </ServiceDescription>
              </CardContent>
            </ServiceCard>
          </Col>
        </Row>
      </Container>
    </ServicesContainer>
  );
};

export default ServicesSection;
