import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, FormControl } from 'react-bootstrap';


const ContactPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const roundedContainerStyle = {
    backgroundColor: 'lightyellow',
    borderRadius: '15px',
    padding: '40px',
    marginTop: '0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const largeTextareaStyle = {
    height: '150px',
  };

  const fontStyle = {
    fontFamily: 'Your Custom Font',
    fontSize: '18px',
    color: '#333',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    ...fontStyle,
    margin: '10px 0',
    backgroundColor: '#007bff',
    border: '1px solid #007bff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s ease-in-out',
    cursor: 'pointer',
    color: 'white',
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form data
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    // If there are validation errors, update the state and return
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // TODO: Perform your actual form submission logic here
    // For demonstration purposes, we'll just show an alert
    setShowAlert(true);
  };

  return (
    <Container style={{ ...roundedContainerStyle, ...fontStyle }} id="contact">
      <Row>
        <Col xs={12} md={6} className="mx-auto text-center">
          <h3>Contact Us</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label style={fontStyle}>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={fontStyle}
                isInvalid={formErrors.name}
              />
              <FormControl.Feedback type="invalid">{formErrors.name}</FormControl.Feedback>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label style={fontStyle}>Your Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={fontStyle}
                isInvalid={formErrors.email}
              />
              <FormControl.Feedback type="invalid">{formErrors.email}</FormControl.Feedback>
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label style={fontStyle}>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                style={{ ...largeTextareaStyle, ...fontStyle }}
                isInvalid={formErrors.message}
                placeholder="Please Write Contact Number"
              />
              <FormControl.Feedback type="invalid">{formErrors.message}</FormControl.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" style={buttonStyle}>
              Submit
            </Button>

            {showAlert && (
              <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                Your form has been submitted successfully!
              </Alert>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
