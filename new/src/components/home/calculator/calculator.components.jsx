import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowRight,
  faCalendar,
  faDollar,
  faPercentage,
} from "@fortawesome/free-solid-svg-icons";

import "./calculator.style.scss";

const Calculator = ({heading}) => {
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
  const [fhaData, setFhaData] = useState({
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
    annualInsurance: "",
    monthlyHoa: "",
    priceAndInterest: "",
    monthlyTaxes: "",
    monthlyHoa: "",
    monthlyInsurance: "",
    upFromMip: "",
    monthlyMortgageInsurance: "",
  });
  return (
    <section id="calculator">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="calculator-content">
              <div className="heading">
                {heading ? <h3>Mortgage Calculators</h3> : null}
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
                                <Form.Control type="text" />
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
                                <Form.Label className="float-start">
                                  Down Payment ($)
                                </Form.Label>
                                <Form.Label className="float-end">
                                  <strong>$2323</strong>
                                </Form.Label>
                                <Form.Range />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className="mb-3 group-wrapper">
                                <Form.Label className="float-start">
                                  Annual Taxes ($)
                                </Form.Label>
                                <Form.Label className="float-end">
                                  <strong>$2323</strong>
                                </Form.Label>
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
                                <Form.Label>
                                  Mortgage Insurance Rate (%)
                                </Form.Label>
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
                                <Form.Control type="email" />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Monthly HOA</Form.Label>
                                <FontAwesomeIcon icon={faDollar} />
                                <Form.Control type="email" />
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
                    <Row>
                      <Col lg={12}>
                        <div className="desc">
                          <p>
                            FHA loans are designed to benefit first-time
                            homebuyers and buyers with less than perfect credit
                            and not a lot of money to put down. FHA loan limits
                            vary by county. View the FHA loan limits in your
                            area.
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
                                <Form.Control type="text" />
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
                                <Form.Label className="float-start">
                                  Down Payment ($)
                                </Form.Label>
                                <Form.Label className="float-end">
                                  <strong>$2323</strong>
                                </Form.Label>
                                <Form.Range />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className="mb-3 group-wrapper">
                                <Form.Label className="float-start">
                                  Annual Taxes ($)
                                </Form.Label>
                                <Form.Label className="float-end">
                                  <strong>$2323</strong>
                                </Form.Label>
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
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Annual Insurance</Form.Label>
                                <FontAwesomeIcon icon={faDollar} />
                                <Form.Control type="email" />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Monthly HOA</Form.Label>
                                <FontAwesomeIcon icon={faDollar} />
                                <Form.Control type="email" />
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
                  <Tab eventKey="vA" title="VA">
                    <Row>
                      <Col lg={12}>
                        <div className="desc">
                          <p>
                            If you are a veteran or a current member of the U.S.
                            military, you can apply for a VA Loan, which
                            currently offers up to 100% home financing. Thank
                            you for your service!
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
                                <Form.Label>First Time VA Loan?</Form.Label>
                                <FontAwesomeIcon icon={faDollar} />
                                <Form.Control type="text" />
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
                                <Form.Label>Purchase Price</Form.Label>
                                <FontAwesomeIcon icon={faDollar} />
                                <Form.Control type="text" />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className="mb-3 group-wrapper">
                                <Form.Label className="float-start">
                                  Down Payment ($)
                                </Form.Label>
                                <Form.Label className="float-end">
                                  <strong>$2323</strong>
                                </Form.Label>
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
                                <Form.Label className="float-start">
                                  Down Payment ($)
                                </Form.Label>
                                <Form.Label className="float-end">
                                  <strong>$2323</strong>
                                </Form.Label>
                                <Form.Range />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group className="mb-3 group-wrapper">
                                <Form.Label className="float-start">
                                  Annual Taxes ($)
                                </Form.Label>
                                <Form.Label className="float-end">
                                  <strong>$2323</strong>
                                </Form.Label>
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
                                <Form.Control type="email" />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Monthly HOA</Form.Label>
                                <FontAwesomeIcon icon={faDollar} />
                                <Form.Control type="email" />
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
                  <Tab eventKey="refinance" title="Refinance">
                    <Row>
                      <Col lg={12}>
                        <div className="desc">
                          <p>
                            Curious about refinancing your home in Los Angeles?
                            Now may be the right time to start saving money
                            every month!
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
                                <Form.Label>Current Loan Amount</Form.Label>
                                <FontAwesomeIcon icon={faDollar} />
                                <Form.Control type="text" />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Interest Rate</Form.Label>
                                <FontAwesomeIcon icon={faPercentage} />
                                <Form.Control type="text" />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Current Term</Form.Label>
                                <Form.Control type="text" />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Origination Year</Form.Label>
                                <Form.Control type="text" />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>New Loan Amount</Form.Label>
                                <FontAwesomeIcon icon={faDollar} />
                                <Form.Control type="text" />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>New Interest Rate</Form.Label>
                                <FontAwesomeIcon icon={faPercentage} />
                                <Form.Control type="text" />
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>New Loan Term</Form.Label>
                                <Form.Control type="email" />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Refinance Fees</Form.Label>
                                <FontAwesomeIcon icon={faDollar} />
                                <Form.Control type="email" />
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
                  <Tab eventKey="affordability" title="Affordability">
                    <Row>
                      <Col lg={12}>
                        <div className="desc">
                          <p>
                            Not sure how much of a home you can afford? Enter
                            your personalized information below to get a good
                            ballpark figure of the type of home you can afford
                            today!
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
                                <Form.Label>Annual Income</Form.Label>
                                <FontAwesomeIcon icon={faDollar} />
                                <Form.Control type="text" />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Monthly Debts</Form.Label>
                                <FontAwesomeIcon icon={faDollar} />
                                <Form.Control type="text" />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Estimated annual property taxes</Form.Label>
                                <FontAwesomeIcon icon={faDollar} />
                                <Form.Control type="text" />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Estimated Annual Home Insurance</Form.Label>
                                <FontAwesomeIcon icon={faDollar} />
                                <Form.Control type="text" />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Down Payment</Form.Label>
                                <FontAwesomeIcon icon={faDollar} />
                                <Form.Control type="text" />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3 group-wrapper"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Interest Rate</Form.Label>
                                <FontAwesomeIcon icon={faPercentage} />
                                <Form.Control type="text" />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={12}>
                              <Form.Group className="mb-3  group-wrapper">
                                <Form.Label>Loan Term</Form.Label>
                                <Form.Select>
                                  <option>Disabled select</option>
                                </Form.Select>
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
