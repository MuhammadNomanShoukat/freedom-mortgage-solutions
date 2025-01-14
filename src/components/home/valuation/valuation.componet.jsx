import React from "react";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import part1 from "../../../assets/images/val-img.jpg";

import "./valuation.style.scss";

const Valuation = () => {
  return (
    <section id="valuation">
      <Container>
        <Row>
          <Col lg={7}>
            <div className="left-section">
              <h3>Instant Home Valuation</h3>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter your address"
                  aria-label="Email Address"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Button
                </Button>
              </InputGroup>
            </div>
          </Col>
          <Col lg={5}>
            <div className="right-section">
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Valuation;
