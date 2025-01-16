import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/images/logo/logo.png";

import Contact from "../../pages/contact/contact.component";

import "./navbar.style.scss";

function NavbarMenu() {
  const [openContactForm, setOpenContactForm] = useState(false)

  const contactFormHandler = () => {
    setOpenContactForm(!openContactForm)
  }
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/#">
          <img src={logo} alt="header-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Loan Options" id="nav-dropdown">
              <NavDropdown.Item href="#/conventional">
                Conventional Mortgages
              </NavDropdown.Item>
              <NavDropdown.Item href="#/fha">FHA Home Loans</NavDropdown.Item>
              <NavDropdown.Item href="#/fixed-rate">
                Fixed-Rate Mortgages
              </NavDropdown.Item>
              <NavDropdown.Item href="#/jumbo">
                Jumbo Home Loans
              </NavDropdown.Item>
              <NavDropdown.Item href="#/refinance">
                Refinancing
              </NavDropdown.Item>
              <NavDropdown.Item href="#/renovation">
                Renovation Mortgage 203(k)
              </NavDropdown.Item>
              <NavDropdown.Item href="#/reverse">
                Reverse Mortgages
              </NavDropdown.Item>
              <NavDropdown.Item href="#/usda">
                USDA Home Mortgages
              </NavDropdown.Item>
              <NavDropdown.Item href="#/va">VA Home Loans</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About" id="nav-dropdown">
              <NavDropdown.Item href="#/about-strategic-financial">
                About Strategic Financial
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#/blog">Mortgage Blog</NavDropdown.Item>
                <NavDropdown.Item href="#/reviews">Mortgage Reviews</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Resources" id="nav-dropdown">
              <NavDropdown.Item href="#/doc">Doc Uploader</NavDropdown.Item>
              <NavDropdown.Item href="#/calculator">
                Mortgage Calculators
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#/home-worth">What’s Your Home Worth?</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link onClick={()=>contactFormHandler()}>Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={()=>contactFormHandler()} className="apply-online-btn px-4">
              Apply Online
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Contact showForm={openContactForm} controlForm={contactFormHandler}/>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
