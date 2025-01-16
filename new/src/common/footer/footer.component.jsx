import React from "react";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";

import logo from "../../assets/images/logo/logo.png"

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import img from "../../assets/images/nmls.png"

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
				<div className="icon"> <FontAwesomeIcon icon={faLocationDot} /></div>
				<div className="address">
					<p>1715 W. Magnolia Blvd
					Burbank, California 91506</p>
				</div>
			  </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="right-content">
				<h4>Welcome home</h4>
            </div>
          </Col>
        </Row>
		<Row>
          <Col lg={12}>
            <div className="nmls">
              <Link to=""><img src={img} alt="" /></Link>
			  <p>© 2025 8 Blocks LLC All Rights Reserved. <span class="comply-default">Strategic Financial NMLS# 2121614</span><span class="comply-default-mortgage"><a target="_blank" href="https://www.nmlsconsumeraccess.org/Home.aspx/SubSearch?searchText=2121614" rel="nofollow"> NMLS Consumer Access</a> / </span><a href="https://www.strtfinancial.com/disclaimer/">Legal Disclaimer</a><span class="comply-default-mortgage"> - This information is not intended to be an indication of loan qualification, loan approval or commitment to lend. Other limitations may apply. <span class="comply-new-york">This site is not authorized by the New York State Department of Financial Services. No mortgage loan applications for properties located in the state of New York will be accepted through this site.</span> <span class="zilla">All Zillow rate data and Zillow reviews are © of Zillow, Inc. 2006-2025.</span> Powered by lenderd.com <a class="comply-lenderd-link" href="https://lenderd.com/loan-officer-websites/">Loan Officer Websites</a></span></p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
