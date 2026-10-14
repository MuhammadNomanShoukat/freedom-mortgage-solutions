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

import img1 from "../../assets/images/renovation/1.jpg";
import img2 from "../../assets/images/renovation/2.jpg";
import img3 from "../../assets/images/renovation/3.jpg";

import "../../assets/css/style.scss";

const Renovation = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section id="renovation">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="page-heading">
              <h1>Flex Modification</h1>
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
                      <FontAwesomeIcon icon={faMobileScreenButton} /> 888 602
                      8005
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
                {/* <Link to="/home-value">
                                    Find Out Now!{" "}
                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                </Link> */}
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <div className="desc-section">
              <h2>Flex Modification</h2>
              <p>
                A mortgage loan modification is available to borrowers who are
                experiencing a permanent or long-term hardship and can no longer
                afford to make regular monthly mortgage payments. The Fannie Mae
                Flex Modification offers eligible homeowners mortgage payment
                relief. The terms of the modification are determined by applying
                a series of steps that are designed to achieve a 20% or More
                principal and interest payment reduction target.
              </p>
              {/* <ul>
                <li>
                  <HashLink to="#reno-1">
                    What is a 203(k) Renovation Mortgage?
                  </HashLink>
                </li>
                <li>
                  <HashLink to="#reno-2">
                    Limited vs. Standard 203(k) Renovation Mortgages
                  </HashLink>
                </li>
                <li>
                  <HashLink to="#reno-3">
                    How to Qualify for a 203(k) Renovation Mortgage
                  </HashLink>
                </li>
                <li>
                  <HashLink to="#reno-4">
                    The Renovation Mortgage 203(k) Process
                  </HashLink>
                </li>
                <li>
                  <HashLink to="#reno-5">
                    Renovation Mortgage 203(k) FAQs
                  </HashLink>
                </li>
              </ul> */}
              <p>
                <img src={img1} alt="img-1" />
              </p>
              <h2 id="reno-1">Effective Date and Review Timing</h2>
              <ul>
                <li>
                  Review is based on a complete Borrower Response Package (BRP)
                  received prior to 90 days delinquency.
                </li>
                <li>
                  The program distinguishes between short-term and long-term
                  hardships.
                </li>
                <li>Flex Modifications apply to long-term hardships only.</li>
              </ul>

              <h2 id="reno-2">
                Types of Flex Modifications Streamlined Flex Modification
              </h2>
              <ul>
                <li>No borrower documentation required.</li>
                <li>Servicer reviews eligibility after 90 days delinquency.</li>
                <li>
                  Streamlined offers are sent directly to eligible borrowers.
                </li>
                <li>
                  Proactive solicitation is permitted unless a foreclosure sale
                  date is scheduled.
                </li>
              </ul>
              <p>
                <img src={img2} alt="img-2" />
              </p>
              <h2 id="reno-3">Eligibility Trigger</h2>
              <ul>
                <li>Borrower becomes 90 days delinquent, or</li>
                <li>
                  Borrower with a Step-Rate Mortgage becomes 60 days delinquent
                  within 12 months following the first payment due after an
                  interest rate adjustment.
                </li>
              </ul>
              <h2 id="reno-4">Target Modified Payment</h2>
              <ul>
                <li>
                  Target 20 percent reduction in Principal and Interest (P&I).
                </li>
                <li>
                  Maximum 40 percent Housing Expense-to-Income (HTI) ratio.
                </li>
                <li>
                  PITIA must not exceed 40 percent of gross monthly income.
                </li>
                <li>
                  PITIA excludes Mortgage Insurance Premiums and subordinate
                  mortgages.
                </li>
              </ul>
              <p>
                <img src={img3} alt="img-3" />
              </p>
              <h2 id="reno-5">Property and Delinquency Criteria</h2>
              <ul>
                <li>Conventional first-lien mortgage loans.</li>
                <li>Loan must be: 60 to 90 days delinquent, or</li>
                <li>
                  Current or less than 60 days delinquent but meets imminent
                  default criteria.
                </li>
                <li>
                  Second homes or investment properties must be 60 to 90 days
                  delinquent.
                </li>
                <li>Property may be vacant or condemned</li>
              </ul>
              <h2 id="reno-5">Modified Principal and Interest Criteria</h2>
              <ul>
                <li>
                  If borrower was current or less than 31 days delinquent at
                  evaluation, the modified payment must be less than the
                  pre-modified payment.
                </li>
                <li>
                  If borrower was 31 or more days delinquent at evaluation, the
                  modified payment must be less than or equal to the
                  pre-modified payment.
                </li>
              </ul>
              <h2 id="reno-5">Trial Period Plan (TPP)</h2>
              <ul>
                <li>
                  Modified loan retains first-lien priority.
                </li>
                <li>
                  Timely first TPP payment indicates acceptance of the offer.
                </li>
                <li>
                  All TPP payments must be made by the last day of the month in which they are due.
                </li>
                <li>
                  TPP may be extended up to an additional nine months for bankruptcy approval.
                </li>
              </ul>
              <h2 id="reno-5">Required Borrower Documentation (If Applicable)</h2>
              <ul>
                <li>
                  Completed and signed Form 710, Uniform Borrower Assistance Form, or its equivalent.
                </li>
                <li>
                 Income documentation as outlined in Form 710.
                </li>
                <li>
                  Hardship documentation based on hardship type.
                </li>
                <li>
                 IRS Form 4506-T or 4506-T EZ, only if requested by the servicer.
                </li>
              </ul>
              <h2 id="reno-5">Important Update</h2>
              <ul>
                <li>
                  Mandatory collection of IRS Form 4506-T or 4506-T EZ was eliminated effective February 2019 under Modification Bulletin 2019-1.
                </li>
                
              </ul>
              <h2 id="reno-5">Loan Modification Agreement</h2>
              <ul>
                <li>
                  Borrower must execute and return the Flex Loan Modification Agreement.
                </li>
                <li>
                  The agreement is executed and dated based on the mortgage investor entity.
                </li>
              </ul>
              <h2 id="reno-5">Modification Exception Criteria</h2>
              <ul>
                <li>
                  Unusual hardship.
                </li>
                <li>
                  Three or more prior modifications.
                </li>
                <li>Failed Trial Period Plan within the last 12 months.</li>
                <li>Became delinquent on a prior modification within 12 months (no exceptions).</li>
                <li>Non-conventional loans, including FHA, VA, or RH loans.</li>
                <li>Loans subject to recourse agreements.</li>
              </ul>
              <h2 id="reno-5">Principal Forbearance Guidelines</h2>
              <ul>
                <li>
                  Principal forbearance is permitted only when the post-capitalization LTV exceeds 100 percent.
                </li>
                <li>
                  Three or more prior modifications.
                </li>
                <li>Forbearance amount is the lesser of:</li>
                <li>The amount required to achieve a 100 percent post-modification LTV, or</li>
                <li>30 percent of the gross post-modification unpaid principal balance.</li>
              </ul>

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

export default Renovation;
