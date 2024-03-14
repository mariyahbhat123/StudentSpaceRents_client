import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function navBar() {
  return (
    <div style={{ position: "sticky" }}>
      <Navbar collapseOnSelect expand="lg" className="">
        <Container>
          <Navbar.Brand href="#home">StudentSpaceRents</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About us</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Terms & conditions
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Sign up|Log in</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                I am a tenant
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
