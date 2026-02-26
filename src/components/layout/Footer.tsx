import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <>
      <Container className="py-4" style={{ fontFamily: "Itim" }}>
        <Row className="justify-content-center text-center mb-3">
          <Col md={12}>
            <h5
              style={{
                fontWeight: 400,
                fontSize: "40px",
              }}
            >
              Looking for a reliable developer to build or scale your product?{" "}
              <br />
              Let's discuss your project.
            </h5>
          </Col>
        </Row>

        <Row className="justify-content-center text-start">
          <Col md={4}>
            <div className="mb-2 d-flex align-items-center justify-content-center gap-2">
              <Mail size={20} />
              <span>mawaisahmad2@gmail.com</span>
            </div>

            <div className="mb-2 d-flex align-items-center justify-content-center gap-2">
              <Phone size={20} />
              <span>+92 332 5303205</span>
            </div>

            <div className="mb-2 d-flex align-items-center justify-content-center gap-2">
              <MapPin size={20} />
              <span>Lahore, Punjab, Pakistan</span>
            </div>
          </Col>
          <Col md={4}>
            <div className="mb-2 d-flex align-items-center justify-content-center gap-2">
              <Linkedin size={20} />
              <span>Linkedin</span>
            </div>

            <div className="mb-2 d-flex align-items-center justify-content-center gap-2">
              <Github size={20} />
              <span>Github</span>
            </div>
          </Col>
          <Col md={4}>
            <div className="mb-2 d-flex justify-content-center">
              <Link to="/#about">About</Link>
            </div>

            <div className="mb-2 d-flex justify-content-center">
              <Link to="/#work">Work</Link>
            </div>

            <div className="mb-2 d-flex justify-content-center">
              <Link to="/#skills">Skill</Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        style={{
          background: "#14213D",
          color: "#fff",
          padding: "10px",
        }}
      >
        <Row>
          <Col>
            <div>
              <p className="m-0">© 2026 Muhammad Awais. All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}