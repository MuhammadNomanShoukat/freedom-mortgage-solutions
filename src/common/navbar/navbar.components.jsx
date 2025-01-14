import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarMenu() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Loan Options" id="nav-dropdown">
                <NavDropdown.Item href="#/conventional">Conventional Mortgages</NavDropdown.Item>
                <NavDropdown.Item href="#/fha">FHA Home Loans</NavDropdown.Item>
                <NavDropdown.Item href="#/fixed-rate">Fixed-Rate Mortgages</NavDropdown.Item>
                <NavDropdown.Item href="#/jumbo">Jumbo Home Loans</NavDropdown.Item>
                <NavDropdown.Item href="#/refinance">Refinancing</NavDropdown.Item>
                <NavDropdown.Item href="#/renovation">Renovation Mortgage 203(k)</NavDropdown.Item>
                <NavDropdown.Item href="#/reverse">Reverse Mortgages</NavDropdown.Item>
                <NavDropdown.Item href="#/usda">USDA Home Mortgages</NavDropdown.Item>
                <NavDropdown.Item href="#/va">VA Home Loans</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About" id="nav-dropdown">
                <NavDropdown.Item href="#/about-strategic-financial">About Strategic Financial</NavDropdown.Item>
                <NavDropdown.Item href="#/Mortgage Blog">Mortgage Blog</NavDropdown.Item>
                <NavDropdown.Item href="#/Mortgage Reviews">Mortgage Reviews</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="nav-dropdown">
                <NavDropdown.Item href="#/doc">Doc Uploader</NavDropdown.Item>
                <NavDropdown.Item href="#/calculator">Mortgage Calculators</NavDropdown.Item>
                <NavDropdown.Item href="#/home-worth">What’s Your Home Worth?</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact-us">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Apply Online</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;