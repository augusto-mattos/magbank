import React from "react";
import { Button, ButtonGroup, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navbar.scss";
import logo from "../assets/logo.svg";

const Navigation = () => (
    <Navbar variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#">
                <img
                    src={logo}
                    height="30"
                    className="d-inline-block align-top"
                    alt="Magbank logo"
                    />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Cartão</Nav.Link>
                    <Nav.Link href="#action2">Quem somos?</Nav.Link>
                    <Nav.Link href="#action3">F.A.Q.</Nav.Link> 
                </Nav>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="outline-light">
                        <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Button>
                    <Button variant="outline-light">Abra sua conta</Button>
                </ButtonGroup>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );

export default Navigation;