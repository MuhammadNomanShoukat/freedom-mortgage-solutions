import React from "react";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";

import logo from "../../assets/images/logo/logo_1.png";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import img from "../../assets/images/nmls.png";

import "./footer.style.scss";

const Footer = () => {
  return (
    <section id="footer">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="left-content">
              <img src={logo} alt="footer-logo" />
              <div className="address">
                <div className="icon">
                  {" "}
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className="address-content">
                  <h5>Address</h5>
                  <p><strong>Speak to a Loan Specialist:</strong>   707 276  6939</p>
                  <p><strong>Servicing:</strong>  888 602 8005</p>
                  <p><strong>Email:</strong> Info@freedommortgagesolution.com</p>
                  <p><strong>Address:</strong> 1652 W Texas St, Fairfield, CA 94533, United States</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="right-content">
              {/* <ul>
                <Link to="">Home</Link>
                <Link to=""></Link>
                <Link to=""></Link>
                <Link to=""></Link>
              </ul> */}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="nmls">
              {/* <Link to="">
                <img src={img} alt="" />
              </Link> */}
              <p>
                © 2025 Freedom Mortgage Solution. All Rights Reserved. NMLS#
                2121614 | NMLS Consumer Access. This website is for
                informational purposes only and does not constitute an offer to
                lend or guarantee loan approval.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
