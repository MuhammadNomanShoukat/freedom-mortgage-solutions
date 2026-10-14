import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faAngleDoubleRight,
  faMobileScreenButton,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/images/conventional/1.jpg";
import img2 from "../../assets/images/conventional/2.jpg";

import "../../assets/css/style.scss";

const AboutStrategicFinancial = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section id="about-strategic-finance">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="page-heading">
              <h1>Get to Know Strategic Financial</h1>
              {/* <p>Strategic Financial - Los Angeles, California</p> */}
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={3}>
            <div className="contact-section">
              <div className="info">
                <ul>
                  <li>
                    <a href="#" rel="noopener">
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Apply Online
                    </a>
                  </li>
                  <li>
                    <a href="tel:(123) 456-7890">
                      <FontAwesomeIcon icon={faMobileScreenButton} />  888 602 8005
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faPaperPlane} /> Send an Email
                    </a>
                  </li>
                </ul>
              </div>
              <div className="find-out">
                <h3>Discover Your Property's True Value Today!</h3>
                {/* Uncomment when link is ready */}
                {/* <Link to="/home-value">
              Find Out Now!{" "}
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </Link> */}
              </div>
            </div>
          </Col>

          <Col lg={9}>
            <div className="desc-section">
              <h2>Strategic Financial Topics Covered</h2>
              <ul>
                <li>
                  <HashLink to="#sf-1">
                    Understanding Strategic Financial Planning
                  </HashLink>
                </li>
                <li>
                  <HashLink to="#sf-2">
                    Why Strategic Financial Planning Matters
                  </HashLink>
                </li>
                <li>
                  <HashLink to="#sf-3">
                    Different Types of Strategic Financial Plans
                  </HashLink>
                </li>
                <li>
                  <HashLink to="#sf-4">
                    Frequently Asked Questions on Strategic Financial Planning
                  </HashLink>
                </li>
              </ul>

              <p>
                Strategic financial planning involves setting financial goals,
                analyzing your current financial situation, and creating a plan
                to meet those goals over time. It requires careful assessment,
                discipline, and a long-term approach for financial success.
              </p>

              <h2 id="sf-1">Understanding Strategic Financial Planning</h2>
              <p>
                Begin by assessing your current financial standing: income,
                expenses, savings, debts, and investments. Then, set specific,
                measurable, and achievable goals for your future—whether it's
                saving for retirement, buying a home, or funding education.
              </p>
              <p>
                Create a detailed plan to achieve these goals. This includes
                budgeting, saving for emergencies, investing, and managing debt.
                Regularly review and adjust your plan as life circumstances
                change.
              </p>
              <p>
                Consider your risk tolerance and seek professional guidance from
                a financial advisor for expert insights and a solid financial
                strategy.
              </p>

              <h2 id="sf-2">Why Strategic Financial Planning Matters</h2>
              <ul>
                <li>
                  Create a roadmap to stay on track with your financial goals.
                </li>
                <li>Maximize wealth through informed investment decisions.</li>
                <li>Manage debt effectively to avoid financial strain.</li>
                <li>
                  Ensure long-term stability with a flexible financial plan.
                </li>
                <li>
                  Stay focused on achieving financial goals amidst life changes.
                </li>
                <li>Enjoy peace of mind with a clear plan for the future.</li>
              </ul>

              <h2 id="sf-3">Different Types of Strategic Financial Plans</h2>
              <ul>
                <li>
                  <strong>Comprehensive Financial Plan:</strong> Covers all
                  aspects of budgeting, saving, investing, and estate planning.
                </li>
                <li>
                  <strong>Retirement Plan:</strong> Focuses on securing your
                  post-retirement income and lifestyle.
                </li>
                <li>
                  <strong>Education Funding Plan:</strong> Helps save for
                  education costs using strategies like 529 plans.
                </li>
                <li>
                  <strong>Debt Management Plan:</strong> Guides you in reducing
                  debts efficiently and managing interest rates.
                </li>
                <li>
                  <strong>Investment Plan:</strong> Focuses on wealth-building
                  strategies through diversified investments.
                </li>
              </ul>

              <h2 id="sf-4">
                Frequently Asked Questions on Strategic Financial Planning
              </h2>
              <h4>What is the importance of a financial plan?</h4>
              <p>
                A financial plan defines goals and creates strategies for
                saving, spending, investing, and managing debt to ensure
                stability and security.
              </p>

              <h4>How do I get started with financial planning?</h4>
              <p>
                Assess your financial situation, set specific goals, and create
                a budget and investment strategy to achieve those goals.
              </p>

              <h4>How often should I review my financial plan?</h4>
              <p>
                Review your plan annually or after major life changes like a new
                job, marriage, or the birth of a child.
              </p>

              <h4>
                What are the benefits of working with a financial advisor?
              </h4>
              <p>
                Advisors provide expert guidance, help manage risks, optimize
                taxes, and keep your financial plan aligned with long-term
                goals.
              </p>

              <p>
                Strategic financial planning secures your future by ensuring
                your goals are met and giving you peace of mind.
              </p>

              {/* <Link to="/contact-us" className="contact-btn">
                Questions? Contact Strategic Financial Today!
              </Link> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutStrategicFinancial;
