import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styled from 'styled-components';

// Import your logo
import LocationLogo from './logo/location_golden.png';

const StyledNavbar = styled(Navbar)`
  background-color: #2196f3;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* Enhanced box-shadow */
  margin-top: 5px; /* Add margin of 5px from the top */
`;

const BrandTypography = styled(Navbar.Brand)`
  color: #ffd700; /* Golden color */
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center; /* Center the icon and text vertically */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Font shadow effect */
  border: 2px solid #ffd700; /* Golden border */
  border-radius: 50%; /* Round border */
  padding: 15px; /* Add more padding to give more space around the content */

  &:hover {
    border: 2px solid #ffffff; /* Change border color to white on hover */
  }
`;

const LogoImage = styled.img`
  width: 30px; /* Set the desired width */
  height: 30px; /* Set the desired height */
  margin-right: 5px; /* Adjust the spacing between the icon and text */
`;

const TogglerIcon = styled(Navbar.Toggle)`
  border: none;
  background: none;
  color: #fff;
  cursor: pointer;
`;

const CustomNav = styled(Nav)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 10px; /* Adjust the margin for mobile devices */
  }
`;

const StyledNavLink = styled(Nav.Link)`
  color: #ffffff; /* Change font color to white */
  font-style: normal; /* Add or change font style as needed */
  font-weight: bold;
  text-decoration: none; /* Remove underline */
  margin: 0 15px 0 0; /* Adjust spacing between links on all sides except the right */

  border-bottom: 2px solid transparent; /* Initial border is transparent */

  &:hover {
    color: #ffd700; /* Change font color to golden on hover */
    border-bottom-color: #ffffff; /* Change border color to white on hover */
  }
`;

const NavbarComponent = () => {
  return (
    <StyledNavbar expand="lg">
      <Container>
        <BrandTypography href="#">
          <LogoImage src={LocationLogo} alt="Location Logo" />
          Near Me Website
        </BrandTypography>
        <TogglerIcon aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <CustomNav className="ml-auto mr-auto">
            <StyledNavLink href="#hero">Hero Section</StyledNavLink>
            <StyledNavLink href="#about">About Section</StyledNavLink>
            <StyledNavLink href="#services">Services Section</StyledNavLink>
            <StyledNavLink href="#contact">Contact Section</StyledNavLink>
          </CustomNav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default NavbarComponent;
