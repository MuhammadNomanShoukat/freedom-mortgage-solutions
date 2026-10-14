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
                        <div className="intro-content">
                            
                           <p>
                            Whether you’re buying a home, refinancing your loan, tapping into your home’s equity, or looking to lower your monthly mortgage payment, you’ve come to the right place. We offer a wide range of loan programs, including government-backed, conventional, and non-traditional options.
We’ve simplified the mortgage process with minimal paperwork, faster approvals, and friendly, personalized service at every step of the way.
                           </p>
                            
                            
                        </div>
                    </Col>
                    {/* <Col lg={3}><div className="box">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faListOl} />
                                </div>
                                <div className="content">
                                    <h3>Explore Your Loan Options</h3>
                                    <Link to="">Loan Options <FontAwesomeIcon icon={faArrowRight} /></Link>
                                </div>
                            </div></Col>
                    <Col lg={3}> <div className="box">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faCalculator} />
                                </div>
                                <div className="content">
                                    <h3>Estimate Your Mortgage Payment</h3>
                                    <Link to="">Get Started <FontAwesomeIcon icon={faArrowRight} /></Link>
                                </div>
                            </div></Col>
                    <Col lg={3}><div className="box">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faHome} />
                                </div>
                                <div className="content">
                                    <h3>What's Your Home Worth Today?</h3>
                                    <Link to="">Find Out Now <FontAwesomeIcon icon={faArrowRight} /></Link>
                                </div>
                            </div></Col>
                    <Col lg={3}><div className="box">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faComments} />
                                </div>
                                <div className="content">
                                    <h3>Real Customer Experiences</h3>
                                    <Link to="">Read Reviews <FontAwesomeIcon icon={faArrowRight} /></Link>
                                </div>
                            </div></Col> */}
                </Row>
            </Container>
        </section>
    )
}

export default IconBoxes;