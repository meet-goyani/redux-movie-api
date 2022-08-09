import React from "react";
import { Navbar, Container } from "react-bootstrap";
export default function Header() {
  return (
    <>
      <Navbar className="shadow" variant="dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Movies App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example"></Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
