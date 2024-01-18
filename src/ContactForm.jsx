import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./ContactForm.css";

const ContactForm = () => {
  // states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  // onChnage Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Sumbit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, address, message } = formData;

    await fetch(
      "https://reactwithfirebase-8ee02-default-rtdb.firebaseio.com/reactwithfirebase.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          message,
        }),
      }
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="custom-form" method="POST">
        <h2 className="form-heading">Contact Us</h2>
        <Form.Group controlId="formName">
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label className="form-label">Phone</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="formAddress">
          <Form.Label className="form-label">Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label className="form-label">Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="form-input"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
