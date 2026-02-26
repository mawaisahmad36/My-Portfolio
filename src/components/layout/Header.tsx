import React, { useState } from "react";
import { ContactModal } from "../modals/ContactModal";
import { Container, Nav, Navbar, Button, Image } from "react-bootstrap";
import Logo from "../../assets/images/png/Logo.png";
import styled from "styled-components";

export const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={Logo} alt="Logo Image" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ marginRight: "30px" }}
          >
            <Nav className="ms-auto">
              <NavLinks href="#about">About</NavLinks>
              <NavLinks href="#work">Works</NavLinks>
              <NavLinks href="#skills">Skills</NavLinks>
              <NavLinks href="#services">Services</NavLinks>
            </Nav>
          </Navbar.Collapse>

          <Button variant="primary" onClick={() => setShowModal(true)}>
            Hire Me
          </Button>
        </Container>
      </Navbar>
      <ContactModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

const NavLinks = styled(Nav.Link)`
  font-size: 20px;
  color: #AFAEAE;
  font-Wweight: 400;

  &:hover {
    color: #14213D;
  }
`;
