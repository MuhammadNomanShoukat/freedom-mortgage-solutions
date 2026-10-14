import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import "./rates.style.scss";

const Rates = () => {
  const [lastUpdate1, setLastUpdated1] = useState("");
  const [lastUpdate2, setLastUpdated2] = useState("");
  const [lastUpdate3, setLastUpdated3] = useState("");

  useEffect(() => {
    const formatDate = (date) => {
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const year = date.getFullYear();
      return `${month}/${day}/${year}`;
    };

    const today = new Date();

    const tenDaysBefore = new Date(today);
    tenDaysBefore.setDate(today.getDate() - 10);

    const fiveDaysBefore = new Date(today);
    fiveDaysBefore.setDate(today.getDate() - 5);

    const fifteenDaysBefore = new Date(today);
    fifteenDaysBefore.setDate(today.getDate() - 15);

    setLastUpdated1(formatDate(tenDaysBefore));
    setLastUpdated2(formatDate(fiveDaysBefore));
    setLastUpdated3(formatDate(fifteenDaysBefore));
  }, []);

  return (
    <section id="rates">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="heading">
              {/* <h2>Current California</h2> */}
              <h1>Mortgage Rates</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="loan-boxs">
              <div className="box mt-5">
                <h3>FHA Loans</h3>
                <div className="p-rates">
                  <h3>Purchase - 30 Year Fixed</h3>
                  <div className="d-flex w-100">
                    <div className="rate w-50">
                      <div className="base">
                        <p className="m-0">RATE</p>
                        <h3 className="m-0">5.45%</h3>

                        <p className="m-0 mt-3">1W Change</p>
                        <h6 className="m-0">
                          <FontAwesomeIcon icon={faArrowAltCircleDown} />
                          0.18%
                        </h6>
                      </div>
                    </div>
                    <div className="arp w-50">
                      <div className="change">
                        <p className="m-0">APR</p>
                        <h3 className="m-0">6.525%</h3>

                        <p className="m-0 mt-3">1W Change</p>
                        <h6 className="m-0">
                          <FontAwesomeIcon icon={faArrowAltCircleDown} />
                          0.14%
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="r-rates">
                  <h3>Refinance - 30 Year Fixed</h3>
                  <div className="d-flex w-100">
                    <div className="rate w-50">
                      <div className="base">
                        <p className="m-0">Rate</p>
                        <h3 className="m-0">5.125%</h3>

                        <p className="m-0 mt-3">1W Change</p>
                        <h6 className="m-0">
                          <FontAwesomeIcon icon={faArrowAltCircleDown} />
                          0.18%
                        </h6>
                      </div>
                    </div>
                    <div className="arp w-50">
                      <div className="change">
                        <p className="m-0">APR</p>
                        <h3 className="m-0">6.525%</h3>

                        <p className="m-0 mt-3">1W Change</p>
                        <h6 className="m-0">
                          <FontAwesomeIcon icon={faArrowAltCircleDown} />
                          0.14%
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date">
                  <span>Last Updated: {lastUpdate1}</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="loan-boxs">
              <div className="box mt-5 lg-mx-4 xl-mx-4">
                <h3>Conventional Loans</h3>
                <div className="p-rates">
                  <h3>Purchase - 30 Year Fixed</h3>
                  <div className="d-flex w-100">
                    <div className="rate w-50">
                      <div className="base">
                        <p className="m-0">RATE</p>
                        <h3 className="m-0">5.48%</h3>

                        <p className="m-0 mt-3">1W Change</p>
                        <h6 className="m-0">
                          <FontAwesomeIcon icon={faArrowAltCircleDown} />
                          0.18%
                        </h6>
                      </div>
                    </div>
                    <div className="arp w-50">
                      <div className="change">
                        <p className="m-0">APR</p>
                        <h3 className="m-0">6.525%</h3>

                        <p className="m-0 mt-3">1W Change</p>
                        <h6 className="m-0">
                          <FontAwesomeIcon icon={faArrowAltCircleDown} />
                          0.14%
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="r-rates">
                  <h3>Refinance - 30 Year Fixed</h3>
                  <div className="d-flex w-100">
                    <div className="rate w-50">
                      <div className="base">
                        <p className="m-0">Rate</p>
                        <h3 className="m-0">4.48%</h3>

                        <p className="m-0 mt-3">1W Change</p>
                        <h6 className="m-0">
                          <FontAwesomeIcon icon={faArrowAltCircleDown} />
                          0.18%
                        </h6>
                      </div>
                    </div>
                    <div className="arp w-50">
                      <div className="change">
                        <p className="m-0">APR</p>
                        <h3 className="m-0">6.525%</h3>

                        <p className="m-0 mt-3">1W Change</p>
                        <h6 className="m-0">
                          <FontAwesomeIcon icon={faArrowAltCircleDown} />
                          0.14%
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date">
                  <span>Last Updated: {lastUpdate2}</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="loan-boxs">
              <div className="box mt-5">
                <h3>VA Loans</h3>
                <div className="p-rates">
                  <h3>Purchase - 30 Year Fixed</h3>
                  <div className="d-flex w-100">
                    <div className="rate w-50">
                      <div className="base">
                        <p className="m-0">RATE</p>
                        <h3 className="m-0">4.20%</h3>

                        <p className="m-0 mt-3">1W Change</p>
                        <h6 className="m-0">
                          <FontAwesomeIcon icon={faArrowAltCircleDown} />
                          0.18%
                        </h6>
                      </div>
                    </div>
                    <div className="arp w-50">
                      <div className="change">
                        <p className="m-0">APR</p>
                        <h3 className="m-0">5.20%</h3>

                        <p className="m-0 mt-3">1W Change</p>
                        <h6 className="m-0">
                          <FontAwesomeIcon icon={faArrowAltCircleDown} />
                          0.14%
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="r-rates">
                  <h3>Refinance - 30 Year Fixed</h3>
                  <div className="d-flex w-100">
                    <div className="rate w-50">
                      <div className="base">
                        <p className="m-0">Rate</p>
                        <h3 className="m-0">4.20%</h3>

                        <p className="m-0 mt-3">1W Change</p>
                        <h6 className="m-0">
                          <FontAwesomeIcon icon={faArrowAltCircleDown} />
                          0.18%
                        </h6>
                      </div>
                    </div>
                    <div className="arp w-50">
                      <div className="change">
                        <p className="m-0">APR</p>
                        <h3 className="m-0">5.35%</h3>

                        <p className="m-0 mt-3">1W Change</p>
                        <h6 className="m-0">
                          <FontAwesomeIcon icon={faArrowAltCircleDown} />
                          0.14%
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date">
                  <span>Last Updated: {lastUpdate3}</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <p className="rate-disc">
              All mortgage rates displayed are provided by Zillow based on
              borrowers with credit scores between 680-740 and represent
              averages and trends. Please consult with Strategic Financial to
              receive a personalized rate for your specific situation.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Rates;
