import React from "react";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faArrowAltCircleDown, faCircleArrowDown, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import "./rates.style.scss"


const Rates = () => {
    return (
        <section id="rates">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="rates-content">
                            <div className="heading">
                                <h2>Current California</h2>
                                <h1>Mortgage Rates</h1>
                            </div>
                            <div className="loan-boxs d-flex flex-wrap">
                                <div className="box mt-5">
                                    <h3>FHA Loans</h3>
                                    <div className="p-rates">
                                        <h3>Purchase - 30 Year Fixed</h3>
                                        <div className="d-flex w-100">
                                            <div className="rate w-50">
                                                <div className="base">
                                                    <p className="m-0">RATE</p>
                                                    <h3 className="m-0">7.48%</h3>

                                                    <p className="m-0 mt-3">1W Change</p>
                                                    <h6 className="m-0"><FontAwesomeIcon icon={faArrowAltCircleDown} />0.18%</h6>
                                                </div>
                                            </div>
                                            <div className="arp w-50">
                                                <div className="change">
                                                    <p className="m-0">APR</p>
                                                    <h3 className="m-0">8.525%</h3>

                                                    <p className="m-0 mt-3">1W Change</p>
                                                    <h6 className="m-0"><FontAwesomeIcon icon={faArrowAltCircleDown} />0.14%</h6>
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
                                                    <h3 className="m-0">7.48%</h3>

                                                    <p className="m-0 mt-3">1W Change</p>
                                                    <h6 className="m-0"><FontAwesomeIcon icon={faArrowAltCircleDown} />0.18%</h6>
                                                </div>
                                            </div>
                                            <div className="arp w-50">
                                                <div className="change">
                                                    <p className="m-0">APR</p>
                                                    <h3 className="m-0">8.525%</h3>

                                                    <p className="m-0 mt-3">1W Change</p>
                                                    <h6 className="m-0"><FontAwesomeIcon icon={faArrowAltCircleDown} />0.14%</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="date">
                                        <span>Last Updated: 1/14/2025</span>
                                    </div>
                                </div>
                                <div className="box mt-5 mx-4">
                                    <h3>Conventional Loans</h3>
                                    <div className="p-rates">
                                        <h3>Purchase - 30 Year Fixed</h3>
                                        <div className="d-flex w-100">
                                            <div className="rate w-50">
                                                <div className="base">
                                                    <p className="m-0">RATE</p>
                                                    <h3 className="m-0">7.48%</h3>

                                                    <p className="m-0 mt-3">1W Change</p>
                                                    <h6 className="m-0"><FontAwesomeIcon icon={faArrowAltCircleDown} />0.18%</h6>
                                                </div>
                                            </div>
                                            <div className="arp w-50">
                                                <div className="change">
                                                    <p className="m-0">APR</p>
                                                    <h3 className="m-0">8.525%</h3>

                                                    <p className="m-0 mt-3">1W Change</p>
                                                    <h6 className="m-0"><FontAwesomeIcon icon={faArrowAltCircleDown} />0.14%</h6>
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
                                                    <h3 className="m-0">7.48%</h3>

                                                    <p className="m-0 mt-3">1W Change</p>
                                                    <h6 className="m-0"><FontAwesomeIcon icon={faArrowAltCircleDown} />0.18%</h6>
                                                </div>
                                            </div>
                                            <div className="arp w-50">
                                                <div className="change">
                                                    <p className="m-0">APR</p>
                                                    <h3 className="m-0">8.525%</h3>

                                                    <p className="m-0 mt-3">1W Change</p>
                                                    <h6 className="m-0"><FontAwesomeIcon icon={faArrowAltCircleDown} />0.14%</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="date">
                                        <span>Last Updated: 1/14/2025</span>
                                    </div>
                                </div>
                                <div className="box mt-5">
                                    <h3>VA Loans</h3>
                                    <div className="p-rates">
                                        <h3>Purchase - 30 Year Fixed</h3>
                                        <div className="d-flex w-100">
                                            <div className="rate w-50">
                                                <div className="base">
                                                    <p className="m-0">RATE</p>
                                                    <h3 className="m-0">7.48%</h3>

                                                    <p className="m-0 mt-3">1W Change</p>
                                                    <h6 className="m-0"><FontAwesomeIcon icon={faArrowAltCircleDown} />0.18%</h6>
                                                </div>
                                            </div>
                                            <div className="arp w-50">
                                                <div className="change">
                                                    <p className="m-0">APR</p>
                                                    <h3 className="m-0">8.525%</h3>

                                                    <p className="m-0 mt-3">1W Change</p>
                                                    <h6 className="m-0"><FontAwesomeIcon icon={faArrowAltCircleDown} />0.14%</h6>
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
                                                    <h3 className="m-0">7.48%</h3>

                                                    <p className="m-0 mt-3">1W Change</p>
                                                    <h6 className="m-0"><FontAwesomeIcon icon={faArrowAltCircleDown} />0.18%</h6>
                                                </div>
                                            </div>
                                            <div className="arp w-50">
                                                <div className="change">
                                                    <p className="m-0">APR</p>
                                                    <h3 className="m-0">8.525%</h3>

                                                    <p className="m-0 mt-3">1W Change</p>
                                                    <h6 className="m-0"><FontAwesomeIcon icon={faArrowAltCircleDown} />0.14%</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="date">
                                        <span>Last Updated: 1/14/2025</span>
                                    </div>
                                </div>
                            </div>
                            <p className="rate-disc">All mortgage rates displayed are provided by Zillow based on borrowers with credit scores between 680-740 and represent averages and trends. Please consult with Strategic Financial to receive a personalized rate for your specific situation.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Rates;