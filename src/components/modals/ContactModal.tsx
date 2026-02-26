import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import emailjs from "emailjs-com";

interface HireModalProps {
  show: boolean;
  handleClose: () => void;
}

export const ContactModal: React.FC<HireModalProps> = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    from_email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      "service_zxxah1q",
      "template_50l7uyb",
      formData,
      "VpY08KQRhPelONvIL"
    )
    .then(() => {
      alert("Message sent successfully!");
      handleClose();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to send message.");
    });
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Hire Me</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="from_email"
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              required
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              required
              onChange={handleChange}
            />
          </Form.Group>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};