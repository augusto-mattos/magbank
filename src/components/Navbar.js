import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navbar.scss";
import logo from "../assets/logo.svg";

const Navigation = ({ handleCreateAccount }) => (
    <Navbar variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href='#home'>
                <Link to='/'>
                <img
                    src={logo}
                    height="30"
                    className="d-inline-block align-top"
                    alt="Magbank logo"
                    />
                </Link>
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
                            <Link to='/login'>Pessoa física</Link>
                            <NavDropdown.Divider />
                            <Link to='/login'>Pessoa jurídica</Link>
                        </NavDropdown>
                    </Button>
                    <Button variant="outline-light" onClick={handleCreateAccount}>Abra sua conta</Button>
                </ButtonGroup>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );

export default Navigation;
