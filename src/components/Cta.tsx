import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Cta: React.FC = () => {
  return (
    <Container
      fluid
      className="py-4 px-0" // remove horizontal padding
      style={{ 
        fontFamily: "Itim", 
        textAlign: "start",
        background: "#14213D",
        color: "#E5E5E5",
     }}
    >
        <Row className="mx-0"> {/* remove row margin */}
            <Col lg={12} className="d-flex justify-content-around">
                <div className="text-start">
                    <span style={{ fontSize: "2rem", fontWeight: "bold" }}>6+</span>
                    <h5>Years of Experience</h5>
                </div>
                <div className="text-start">
                    <span style={{ fontSize: "2rem", fontWeight: "bold" }}>100+</span>
                    <h5>Live Projects</h5>
                </div>
                <div className="text-start">
                    <span style={{ fontSize: "2rem", fontWeight: "bold" }}>100%</span>
                    <h5>Client Satisfied</h5>
                </div>
                <div className="text-start">
                    <span style={{ fontSize: "2rem", fontWeight: "bold" }}>4.9</span>
                    <h5>Rating</h5>
                </div>
            </Col>
        </Row>
    </Container>
  );
};