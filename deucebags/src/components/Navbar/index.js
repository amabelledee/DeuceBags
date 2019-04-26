import React from 'react';
// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import sutherLogo from '../../images/SutherLogo_rev.gif';
import Container from 'react-bootstrap/Container';
import '../Navbar/Navbar.css'
// import Button from 'react-bootstrap/Button';

// import Dashboard from '../Dasboard';
import 'react-bootstrap';

class NavComponent extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Navbar collapseOnSelect expand="md" variant="dark" sticky="top" className="navyBlue">
                    <Container>
                        <Navbar.Brand href="#home"><img
                            src={sutherLogo}
                            width="141"
                            height="25"
                            className="d-inline-block align-top"
                            alt="Suther Logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav ">
                            <Nav >
                                <Nav.Link onClick={this.props.handleShow}>REGISTRATION</Nav.Link>
                                <Nav.Link eventKey={2} onClick={this.props.handleShow2}>
                                    LOGIN
                    </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default NavComponent;