import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import bootstartp from 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './topnav.css';
import logo from '../../logo.png'; 

function TopNav() {
  return (
    <Navbar className='color-nav' data-toggle="collapse">
      <Container>
      <img className='logo'src={logo} />
        <Navbar.Brand href="/">Ticketaty</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
       
          
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/browse">Browse</Nav.Link>
            <Nav.Link href="/Search">Search</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Other Apps</NavDropdown.Item>
             
            
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;