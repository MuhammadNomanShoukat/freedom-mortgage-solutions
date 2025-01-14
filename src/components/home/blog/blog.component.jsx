import React from "react";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";

import part1 from "../../../assets/images/b1.jpg";
import part2 from "../../../assets/images/b2.jpg";
import part3 from "../../../assets/images/b3.jpg";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight, faCalendar } from "@fortawesome/free-solid-svg-icons";

import "./blog.style.scss";

const Blog = () => {
  return (
    <section id="blog">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="blog-content">
              <div className="blog-boxs d-flex flex-wrap">
                <div className="box mt-5">
                  <div className="img">
                    <Link to="">
                      <img src={part1} alt="part-1" />
                    </Link>
                    <span className="date">
                      <FontAwesomeIcon icon={faCalendar} /> January 10, 2025
                    </span>
                  </div>
                  <div className="content">
                    <h4>
                      <Link to="">
                        Transform Your Backyard into an Inviting Oasis
                      </Link>
                    </h4>
                    <p>
                      Your backyard is more than just a patch of grass—it’s an
                      extension of your home and a space that can provide
                      relaxation, entertainment, and even a little escape from
                      the daily grind. With a few easy upgrades, you can
                      transform your outdoor area into a cozy, functional
                      retreat that friends and family will love. Here…
                    </p>
                  </div>
                  <div className="arrow">
                    <Link to="">
                      Read Post <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="blog-content">
              <div className="blog-boxs d-flex flex-wrap">
                <div className="box mt-5">
                  <div className="img">
                    <Link to="">
                      <img src={part2} alt="part-2" />
                    </Link>
                    <span className="date">
                      <FontAwesomeIcon icon={faCalendar} /> January 10, 2025
                    </span>
                  </div>
                  <div className="content">
                    <h4>
                      <Link to="">Maximize Your Home’s Sale Price in 2025</Link>
                    </h4>
                    <p>
                      Tips for Success If you’re planning to sell your house
                      this year, you’re probably hoping to maximize your sale
                      price. The good news is that even in a competitive market,
                      there are proven strategies to boost your home’s value and
                      appeal to potential buyers. From strategic updates to
                      smart staging, here are actionable tips to…
                    </p>
                  </div>
                  <div className="arrow">
                    <Link to="">
                      Read Post <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="blog-content">
              <div className="blog-boxs d-flex flex-wrap">
                <div className="box mt-5">
                  <div className="img">
                    <Link to="">
                      <img src={part3} alt="part-3" />
                    </Link>
                    <span className="date">
                      <FontAwesomeIcon icon={faCalendar} /> January 10, 2025
                    </span>
                  </div>
                  <div className="content">
                    <h4>
                      <Link to="">
                        Essential Appliance Cleaning Tips for Homeowners
                      </Link>
                    </h4>
                    <p>
                      Keeping your major appliances clean is essential not only
                      for maintaining their efficiency but also for extending
                      their lifespan. Regular cleaning can help prevent
                      breakdowns, improve energy efficiency, and ensure your
                      home stays hygienic. Here are some simple tips and tricks
                      to clean the most commonly used household appliances and
                      recommendations on how often each…
                    </p>
                  </div>
                  <div className="arrow">
                    <Link to="">
                      Read Post <FontAwesomeIcon icon={faArrowRight} />
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

export default Blog;
