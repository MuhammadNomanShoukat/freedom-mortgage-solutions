import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./banner.style.scss";

const Banner = () => {
  return (
    <section id="banner">
      <Container>
        <Row>
          <Col lg={12} className="mx-auto">
            <div className="banner-content">
              <h1>We know mortgages.</h1>
              <p>
                Freedom Mortgage Solution  
   (Your home. Your freedom. Our solutions)
              </p>
            </div>
          </Col>
        </Row>
       
      </Container>
    </section>
  );
};

export default Banner;
