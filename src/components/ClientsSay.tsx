import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import World from "../assets/images/png/World.png";
import Marquee from "react-fast-marquee";
import { User } from "lucide-react";

export const ClientsSay: React.FC = () => {
  const reviews = [
    {
      name: "Alice Johnson",
      designation: "Marketing Manager",
      message:
        "The team delivered exceptional work on our project. Highly recommend their services!",
    },
    {
      name: "David Smith",
      designation: "CEO",
      message:
        "Outstanding collaboration and results. Very impressed with the professionalism and efficiency.",
    },
    {
      name: "Priya Sharma",
      designation: "Product Designer",
      message:
        "Creative and detail-oriented team. They exceeded my expectations in every way.",
    },
    {
      name: "Michael Lee",
      designation: "Software Engineer",
      message:
        "Great experience working with them. The project was completed on time and met all requirements.",
    },
    {
      name: "Sara Williams",
      designation: "Business Consultant",
      message:
        "Excellent communication and results-focused approach. I would work with them again without hesitation.",
    },
  ];

  return (
    <Container
      className="py-4"
      style={{
        fontFamily: "Itim",
        textAlign: "start",
        backgroundImage: `url(${World})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Row className="align-items-center">
        <Col lg={12} className="text-start">
          <h3 className="mb-4">What Clients Say:</h3>
        </Col>
        <Col lg={12}>
          <Marquee pauseOnHover={true} speed={50} gradient={false}>
            {reviews.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "60px",
                  background: "#E5E5E5",
                  padding: "15px",
                  borderRadius: "8px",
                  maxWidth: "400px",
                }}
              >
                <div style={{ marginRight: "15px" }}>
                  <User size={40} />
                </div>
                <div>
                  <h5 style={{ margin: 0 }}>{item.name}</h5>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "#555" }}>
                    {item.designation}
                  </p>
                  <p style={{ marginTop: "5px", fontSize: "0.9rem" }}>
                    {item.message}
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </Col>
      </Row>
    </Container>
  );
};