import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Illustration from "../../src/assets/images/jpg/illustration.jpg";

export const About: React.FC = () => {
  return (
    <Container className="py-4" id="about">
      <Row className="align-items-center">
        <Col md={6}>
          <div className="text-start">
            <h3>About Me.</h3>
            <p style={{
                fontSize: "20px",
            }}>
              Software engineer with 3+ years of experience designing and
              developing production-ready SaaS platforms, custom WordPress
              solutions, and scalable backend systems. Skilled in building
              responsive, high-performance web applications using React and
              Laravel, with a focus on delivering robust, maintainable, and
              scalable solutions.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div>
            <Image
              src={Illustration}
              alt="Summary Image"
              rounded
              fluid
              style={{
                height: "300px",
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
