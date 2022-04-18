import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="home">Shipa's Photography</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}

                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;