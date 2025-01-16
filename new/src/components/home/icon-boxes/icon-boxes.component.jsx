import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faListOl, faCalculator, faComments, faHome } from '@fortawesome/free-solid-svg-icons'
import "./icon-boxes.style.scss"


const IconBoxes = () => {
    return (
        <section id="boxes">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="boxes-content">
                            <div className="box">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faListOl} />
                                </div>
                                <div className="content">
                                    <h3>Explore Your Loan Options</h3>
                                    <Link to="">Loan Options <FontAwesomeIcon icon={faArrowRight} /></Link>
                                </div>
                            </div>
                            <div className="box">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faCalculator} />
                                </div>
                                <div className="content">
                                    <h3>Estimate Your Mortgage Payment</h3>
                                    <Link to="">Get Started <FontAwesomeIcon icon={faArrowRight} /></Link>
                                </div>
                            </div>
                            <div className="box">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faHome} />
                                </div>
                                <div className="content">
                                    <h3>What's Your Home Worth Today?</h3>
                                    <Link to="">Find Out Now <FontAwesomeIcon icon={faArrowRight} /></Link>
                                </div>
                            </div>
                            <div className="box">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faComments} />
                                </div>
                                <div className="content">
                                    <h3>Real Customer Experiences</h3>
                                    <Link to="">Read Reviews <FontAwesomeIcon icon={faArrowRight} /></Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default IconBoxes;