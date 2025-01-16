import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleRight, faMobileScreenButton, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/images/conventional/1.jpg";
import img2 from "../../assets/images/conventional/2.jpg";

import "../../assets/css/style.scss";

const Refinance = () => {
    return (
        <section id="refinance">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="page-heading">
                            <h1>Mortgage Refinancing</h1>
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
                                <h3>Jumbo Mortgage Topics Covered</h3>
                                <Link to="/home-value">
                                    Find Out Now!{" "}
                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="desc-section">
                            <h2>Mortgage Refinancing Topics Covered</h2>
                            <ul>
                                <li><HashLink to="#refi-1">The Mortgage Refinancing Process</HashLink></li>
                                <li><HashLink to="#refi-2">Reasons to Refinance a Mortgage</HashLink></li>
                                <li><HashLink to="#refi-3">Different Types of Mortgage Refinancing</HashLink></li>
                                <li><HashLink to="#refi-4">Mortgage Refinancing FAQs</HashLink></li>

                            </ul>
                            <p>
                                <img src="" alt="" /><br />
                                When you refinance, you replace your current home loan with a new one. Mortgage refinancing requires you to qualify for the loan, just as you had to meet the lender’s requirements for the original mortgage. You file an application, go
                                through the underwriting process and go to closing, as you did when you initially purchased the home.
                            </p>
                            <h2 id="refi-1">The Mortgage Refinancing Process</h2>
                            <p>
                                First, take care of any issues with your credit so that your credit score is as high as possible and you qualify for the lowest interest rates. Have a rough idea of the rates and other terms you desire in your new loan. Remember: These
                                terms should represent an improvement on the terms of your existing loan.
                            </p>
                            <p>
                                Next, shop around to find a qualified Los Angeles lender with the best terms. Don’t just choose your current lender; get at least three or four quotes from competitors before inquiring with your current lender about what it is willing
                                to offer.
                            </p>
                            <p>
                                Don’t open any new credit during the refinancing process; it could hinder the deal. Before signing the deal, carefully review the new loan terms and all associated fees so that you know what to expect financially when it’s time to make
                                payments.
                            </p>
                            <p>
                                As you go through this process, keep an eye on the closing costs. Also, watch out for things like prepayment penalties, which can cause problems down the road if you pay off the mortgage early or refinance again.<br />
                                <img src="" alt="" />
                            </p>
                            <h2 id="refi-2">Reasons to Refinance a Mortgage</h2>
                            <ul>
                                <li>
                                    Lowering your monthly payment – when your goal is to pay less every month, you can either refinance into a loan with a lower interest rate or a longer loan term. However, extending the term means that you pay more interest in the
                                    long run.
                                </li>
                                <li>Paying off the loan faster – you can switch to a mortgage with a shorter term and, as a result, pay less interest over the life of the loan. One downside to this is that your monthly payments will probably go up.</li>
                                <li>
                                    Getting rid of FHA mortgage insurance – whereas private mortgage insurance (PMI) on conventional home loans can be canceled, you can only get rid of FHA mortgage insurance premiums by selling your Los Angeles home or refinancing
                                    when you have accumulated enough equity (equity can be calculated by estimating the value of your home, then subtracting your mortgage balance from that number).
                                </li>
                                <li>Cashing out – if you have significant equity in your Los Angeles home, you may be able to cash out a portion of it with a refinance to pay bills, finance a large purchase, or buy out an ex-spouse in a divorce.</li>
                                <li>
                                    Switching from an adjustable rate to a fixed rate loan – interest rates on adjustable rate mortgages (ARMs) can increase over time, while the ones on fixed rate loans stay the same. If you’re looking for more of a sense of financial
                                    stability and would prefer making steady payments on your loan, then you might want to consider refinancing.
                                </li>
                                <li>Consolidating debts – if you have multiple loans, it might make sense to consolidate them into a single loan; it’s easier to keep track of payments that way.</li>
                            </ul>
                            <h2 id="refi-3">Different Types of Mortgage Refinancing</h2>
                            <ul>
                                <li>
                                    <strong>Rate-and-Term</strong> – with this type of loan, the goal is to change the interest rate, loan term or both without making any changes to the amount of the loan. This option is best if you’re trying to save money on your
                                    monthly payment or switch your loan from an adjustable rate to a fixed rate.
                                </li>
                                <li>
                                    <strong>Cash-Out</strong> – as the name suggests, a cash-out refinance involves cashing out a portion of the home’s equity. Doing so results in a higher loan amount, with the difference typically equal to the amount cashed out.
                                    While a cash-out refinance can help Los Angeles homeowners get the cash they need for certain activities, it typically results in a higher monthly payment and interest rate than a rate-and-term refinance loan.
                                </li>
                                <li>
                                    <strong>Cash-In</strong> – much less common than a cash-out refinance is a cash-in refinance. This happens when the homeowner refinances their mortgage loan and brings money to the table to reduce their new mortgage balance. A
                                    cash-in refinance may be worth considering if you’re underwater on your mortgage or want to get rid of private mortgage insurance, qualify for a lower interest rate, or keep your mortgage amount below certain limits.
                                </li>
                            </ul>
                            <p>
                                <img src="" alt="" />
                            </p>
                            <h2 id="refi-4">Frequently Asked Questions</h2>
                            <h4>What’s the difference between pre-qualified and pre-approved?</h4>
                            <p>
                                Pre-qualification is a determination of the loan amount you’re likely to receive. To obtain pre-qualification, you usually are interviewed by a licensed Los Angeles loan officer who determines the pre-qualification amount. On the other
                                hand, to be pre-approved, you must submit an application and verify your credit and financial history. After you receive your pre-approval certificate, you’re in a stronger position to close earlier and negotiate a better price.
                            </p>
                            <h4>What are points?</h4>
                            <p>
                                Points are prepaid interest that you can pay up front. You can pay points to get a lower rate on both fixed rate and adjustable rate mortgages, but the points charged to reduce the rate may vary depending on the type of loan. One point
                                is equal to 1% of the mortgage amount.
                            </p>
                            <h4>If my credit score is low, how can I raise it?</h4>
                            <p>Paying your bills on time, reducing your credit balances, and trying to not apply for credit too often are all ways that you can raise your FICO score.</p>
                            <h4>What’s a rate lock?</h4>
                            <p>
                                A mortgage rate lock is a promise to you from the lender to hold a specific combination of an interest rate and points for an agreed upon time (typically 10, 15, 30, 45 or 60 days) until you can close on your home. Locking in a rate
                                protects you from unforeseen interest rate increases that can occur in the days or weeks leading up to closing, but conversely, if the rates fall, you may not be able to take advantage of the lower rates.
                            </p>
                            <p>
                                If your credit score is in good shape and you find a qualified Los Angeles lender with good terms, refinancing might be a good choice for you. However, depending on your goals and financial situation, it may not always be your best
                                option. It’s important to weigh the benefits of refinancing your Los Angeles home against the risks and, at the end of the day, do what will make the most financial sense for you.
                            </p>





                            <Link to="/contact-us" className="contact-btn">
                                Questions? Contact Strategic Financial Today!
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Refinance;
