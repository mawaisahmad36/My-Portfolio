import { useState } from 'react';
import { Container, Button, Form } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

export const TechExpertise: React.FC = () => {

  return (
    <Container id='skills' className='skills'>

    
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="mt-4">
        <Col lg={12} className='text-start'>
            <h3 className='mb-4'>Tech Expertise:</h3>
        </Col>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Backend</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Frontend</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">CMS & WordPress</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">DevOps / Tools</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <ul>
                    <li>Laravel</li>
                    <li>REST APIs</li>
                    <li>Authentication Systems</li>
                    <li>SaaS Architecture</li>
                    <li>Payment Integration</li>
                    <li>MySQL / PostgreSQL</li>
                </ul>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
                <ul>
                    <li>React.js</li>
                    <li>Redux / Context</li>
                    <li>TypeScript (if used)</li>
                    <li>Tailwind / Bootstrap</li>
                </ul>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
                <ul>
                    <li>Custom Themes</li>
                    <li>Plugin Development</li>
                    <li>WooCommerce</li>
                    <li>Performance Optimization</li>
                </ul>
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
                <ul>
                    <li>Git</li>
                    <li>Docker (if used)</li>
                    <li>cPanel / VPS / AWS (if used)</li>
                </ul>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </Container>
  );
}