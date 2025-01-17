import React, { useEffect } from "react";
import { Container, Col, Row, } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleRight, faMobileScreenButton, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import CalculatorComponent from "../../components/home/calculator/calculator.components"
import "../../assets/css/style.scss";

const Calculator = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [])
    return (
        <section id="about-strategic-finance">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="page-heading">
                            <h1>Mortgage Calculators</h1>
                            <p>Strategic Financial - Los Angeles, California</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <div className="contact-section">
                            <div className="info">
                                <ul>
                                    <li>
                                        <a href="#contact" rel="noopener">
                                            <FontAwesomeIcon icon={faAngleDoubleRight} /> Apply Online
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:(818) 317-8682">
                                            <FontAwesomeIcon icon={faMobileScreenButton} /> (818) 317-8682
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#contact">
                                            <FontAwesomeIcon icon={faPaperPlane} /> Send an Email
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="find-out">
                                <h3>What's Your Property Worth?</h3>
                                <Link to="/home-value">
                                    Find Out Now!{" "}
                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="desc-section">
                            <CalculatorComponent heading={false} />
                            <Link to="/contact-us" className="contact-btn" >
                                Questions? Contact Strategic Financial Today!
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Calculator;
