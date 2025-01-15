import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight, faCalendar, faDollar } from "@fortawesome/free-solid-svg-icons";

import "./calculator.style.scss";

const Calculator = () => {
  const [conventionalData, setConventionalData] = useState({
    purchasePrice: 0,
    mortgageTerms: [
      { title: "30 years", value: "30" },
      { title: "25 years", value: "25" },
      { title: "20 years", value: "20" },
      { title: "15 years", value: "15" },
      { title: "10 years", value: "10" },
      { title: "5 years", value: "5" },
    ],
    downPayment: "",
    anualTaxes: "",
    interestRate: "",
    insuranceRate: "",
    annualInsurance: "",
    monthlyHoa: "",
    priceAndInterest: "",
    monthlyTaxes: "",
    monthlyInsurance: "",
    monthlyPmi: "",
  });
  return (
    <section id="calculator">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="calculator-content">
              <div className="heading">
                <h3>Mortgage Calculators</h3>
              </div>
              <div className="tabs">
                <Tabs
                  defaultActiveKey="conventional"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="conventional" title="Conventional">
                    <Row>
                      <Col lg={12}>
                        <div className="desc">
                          <p>
                            Conventional mortgages are ideal for buyers with
                            good credit and money to put down. They typically
                            require a higher down payment, usually 5%–20% and
                            also have higher income and credit score
                            requirements than government loans. Typical
                            fixed-rate loans have a term of 30 or 15 years.
                          </p>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={7}>
                        <div className="calculator">
                          <Row>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Purchase Price</Form.Label>
                                <FontAwesomeIcon icon={faDollar} />
                                <Form.Control
                                  type="text"
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className="mb-3  group-wrapper">
                                <Form.Label>Mortgage Term</Form.Label>
                                <Form.Select>
                                  <option>Disabled select</option>
                                </Form.Select>
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Down Payment ($)</Form.Label>
                                <Form.Range />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className="mb-3 group-wrapper">
                                <Form.Label>Annual Taxes ($)</Form.Label>
                                <Form.Range />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row>
                            <Col lg={12}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Interest Rate (%)</Form.Label>
                                <Form.Range />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={12}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Mortgage Insurance Rate (%)</Form.Label>
                                <Form.Range />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Annual Insurance</Form.Label>
                                <FontAwesomeIcon icon={faDollar} />
                                <Form.Control
                                  type="email"
                                 
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Monthly HOA</Form.Label>
                                <FontAwesomeIcon icon={faDollar} />
                                <Form.Control
                                  type="email"
                                  
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      <Col lg={5}>
                        <Row>
                          <Col lg={12}>
                            <div className="calculations">
                              <div className="heading">
                                <h2>$1,650.33</h2>
                                <h3>Monthly Payment</h3>
                              </div>
                              <div className="selected-values-calc">
                                <div className="principle-interest">
                                  <p>Principal & Interest</p>
                                  <h5>$1,342</h5>
                                </div>
                                <div className="monthly-taxes">
                                  <p>Monthly Taxes</p>
                                  <h5>$208.33</h5>
                                </div>
                                <div className="monthly-hoa">
                                  <p>Monthly HOA</p>
                                  <h5>$50</h5>
                                </div>
                                <div className="monthly-insurance">
                                  <p>Monthly Insurance</p>
                                  <h5>$50</h5>
                                </div>
                                <div className="monthly-hoa">
                                  <p>Monthly PMI</p>
                                  <h5>$0</h5>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12}>
                            <p className="desc">
                              *Hypothetical monthly mortgage payments reflect
                              hypothetical Principal, Interest, Taxes,
                              Insurance, and Home Owners Association dues
                              amounts. These figures and rates are for
                              educational purposes only and do not reflect an
                              official mortgage loan offer. **This does not
                              constitute tax advice.
                            </p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Tab>
                  <Tab eventKey="fHA" title="FHA">
                    Tab content for FHA
                  </Tab>
                  <Tab eventKey="vA" title="VA">
                    Tab content for Profile
                  </Tab>
                  <Tab eventKey="refinance" title="Refinance">
                    Tab content for Profile
                  </Tab>
                  <Tab eventKey="affordability" title="Affordability">
                    Tab content for Profile
                  </Tab>
                </Tabs>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Calculator;
