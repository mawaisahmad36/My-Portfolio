import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import heroImage from "../assets/images/png/Image-2.png";
import { Hand } from "lucide-react";

export const MainHero: React.FC = () => {
  return (
    <Container className="pt-4" style={{ fontFamily: "Itim", textAlign: "start", }}>
      <Row className="align-items-center">
        <Col md={6}>
          <div className="hero-content">
            <h1
              style={{
                fontWeight: 600,
                fontSize: "48px",
              }}
            >
              Hi,
              <Hand size={44} fill="yellow" /> <br />
              I’m Muhammad Awais.
            </h1>
            <h3
              style={{
                fontWeight: 400,
                fontSize: "24px",
              }}
              >
              Full-Stack Developer | React & Laravel Specialist
              <br />
              Building Scalable SaaS & Custom Web Applications
            </h3>
            <p
            style={{
                fontWeight: 400,
                fontSize: "20px",
              }}>
              Software engineer with 3+ years of experience building
              production-ready SaaS platforms, custom WordPress solutions, and
              scalable backend systems using Laravel and React.
            </p>

            <Button className="me-2">Download Resume</Button>
            <Button className="me-2" variant="secondary">
              View Projects
            </Button>
            <Button variant="dark">Hire Me</Button>
          </div>
        </Col>

        <Col md={6} className="text-center">
          <Image src={heroImage} rounded fluid style={{
            height: "500px"
          }} />
        </Col>
      </Row>
    </Container>
  );
};
