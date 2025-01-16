import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./banner.style.scss"

const Banner = () => {
    return (
        <section id="banner">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">
                        <div className="banner-content">
                            <h1>We know mortgages.</h1>
                            <p>We exist to make your home-buying or refinancing process simple & stress-free. Let's get started!</p>
                            <div className="banner-btns">
                                <Link to="/">Purchase</Link>
                                <Link to="/">Refinance</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;