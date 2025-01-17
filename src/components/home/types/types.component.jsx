import React from "react";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";

import part1 from "../../../assets/images/type1.png";
import part2 from "../../../assets/images/type2.png";
import part3 from "../../../assets/images/type3.png";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./types.style.scss";

const Types = () => {
  return (
    <section id="types">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="types-content">
              <div className="heading">
                <h2>Popular Los Angeles Home Loans</h2>
                <h1>Which loan is right for YOU?</h1>
              </div>
              <div className="types-boxs d-flex flex-wrap">
                <div className="box mt-5">
                  <div className="img">
                    <img src={part1} alt="part-1" />
                  </div>
                  <div className="content">
                    <h4>FHA Home Loans</h4>
                    <h5>Los Angeles California</h5>
                    <p>
                      FHA home loans are popular among Los Angeles first-time
                      homebuyers due to low down payment and credit
                      requirements.
                    </p>
                  </div>
                  <div className="arrow">
                    <Link to="/fha">
                    FHA Loans <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
                <div className="box mt-5">
                  <div className="img">
                    <img src={part2} alt="part-2" />
                  </div>
                  <div className="content">
                    <h4>Conventional Home Loans</h4>
                    <h5>Los Angeles California</h5>
                    <p>
                      A conventional(fixed-rate mortgage) is a popular type of
                      home financing in Los Angeles because it offers
                      predictability for your budget.
                    </p>
                  </div>
                  <div className="arrow">
                    <Link to="/conventional">
                    Conventional Loans <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
                <div className="box mt-5">
                  <div className="img">
                    <img src={part3} alt="part-3" />
                  </div>
                  <div className="content">
                    <h4>Jumbo Home Loans</h4>
                    <h5>Los Angeles California</h5>
                    <p>
                      A jumbo home loan is a mortgage used to finance Los
                      Angeles properties that are too expensive for a
                      conventional conforming loan.
                    </p>
                  </div>
                  <div className="arrow">
                    <Link to="/jumbo">
                    Jumbo Loans <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Types;
