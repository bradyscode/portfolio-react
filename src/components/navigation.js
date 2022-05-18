import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png'
import React, { Component, props} from 'react'
import { Link } from 'react-router';
import { Navbar, Nav, Container, Button } from 'react-bootstrap'


class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="expand">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                        src={require('./logo.png')}
                        width="300"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                        <Navbar variant="dark">
                        <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="./home" >Home</Nav.Link>
                            <Nav.Link href="#features">About Me</Nav.Link>
                            <Nav.Link href="#pricing">Projects</Nav.Link>
                            <Nav.Link href="#pricing">  <div>
                            <Button variant="primary" size="sm">
                                Resume
                            </Button>{' '}
                            </div></Nav.Link>
                            <Nav.Link href="#pricing">  <div>
                            <Button variant="primary" size="sm">
                                Hire Me!
                            </Button>{' '}
                            </div></Nav.Link>

                        </Nav>
                        </Container>
                    </Navbar>
                </Container>
            </Navbar>
        );
    }
}

export default Navigation;