import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImageMinus } from "lucide-react";
import styled from "styled-components";

export const Work: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  return (
    <Container
      className="py-4"
      style={{ fontFamily: "Itim", textAlign: "start" }}
      id="work"
    >
      <Row className="align-items-center">
        <Col lg={12} className="text-start">
          <h3 className="mb-4">Work:</h3>
        </Col>
        <Col md={4}>
          <CardWrapper>
            {!imgError ? (
              <Card.Img
                variant="top"
                src="holder.js/100px180"
                onError={() => setImgError(true)}
                style={{ height: "180px", objectFit: "cover" }}
              />
            ) : (
              <div
                style={{
                  height: "180px",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                }}
              >
                <ImageMinus size={132} color="#ccc" />
              </div>
            )}
            <Card.Body>
              <Card.Title>Nokri Wp Theme</Card.Title>
              <Card.Text>JOB Board Wordpress Theme...</Card.Text>
              <div className="d-flex gap-2">
                <Button variant="primary">My Role</Button>
                <Button variant="primary">Demo</Button>
              </div>
            </Card.Body>
          </CardWrapper>
        </Col>
        <Col md={4}>
          <CardWrapper>
            {!imgError ? (
              <Card.Img
                variant="top"
                src="holder.js/100px180"
                onError={() => setImgError(true)}
                style={{ height: "180px", objectFit: "cover" }}
              />
            ) : (
              <div
                style={{
                  height: "180px",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                }}
              >
                <ImageMinus size={132} color="#ccc" />
              </div>
            )}
            <Card.Body>
              <Card.Title>Nokri Wp Theme</Card.Title>
              <Card.Text>JOB Board Wordpress Theme...</Card.Text>
              <div className="d-flex gap-2">
                <Button variant="primary">My Role</Button>
                <Button variant="primary">Demo</Button>
              </div>
            </Card.Body>
          </CardWrapper>
        </Col>
        <Col md={4}>
          <CardWrapper>
            {!imgError ? (
              <Card.Img
                variant="top"
                src="holder.js/100px180"
                onError={() => setImgError(true)}
                style={{ height: "180px", objectFit: "cover" }}
              />
            ) : (
              <div
                style={{
                  height: "180px",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                }}
              >
                <ImageMinus size={132} color="#ccc" />
              </div>
            )}
            <Card.Body>
              <Card.Title>Nokri Wp Theme</Card.Title>
              <Card.Text>JOB Board Wordpress Theme...</Card.Text>
              <div className="d-flex gap-2">
                <Button variant="primary">My Role</Button>
                <Button variant="primary">Demo</Button>
              </div>
            </Card.Body>
          </CardWrapper>
        </Col>
      </Row>
    </Container>
  );
};

const CardWrapper = styled(Card)`
  padding: 15px;
  background: #e5e5e5;
  border-radius: 12px;
  border: none;
`;
