import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleRight, faMobileScreenButton, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/images/fixed-rate/1.jpg";
import img2 from "../../assets/images/fixed-rate/2.jpg";
import img3 from "../../assets/images/fixed-rate/3.jpg";

import "../../assets/css/style.scss";

const FixedRate = () => {
    return (
        <section id="fixed-rate">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="page-heading">
                            <h1>Fixed-Rate Mortgages</h1>
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
                                    Find Out Now! <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="desc-section">
                            <h2>Fixed-Rate Mortgage Topics Covered</h2>
                            <ul>
                                <li><HashLink to="#fixed-1">What is a Fixed-Rate Mortgage?</HashLink></li>
                                <li><HashLink to="#fixed-2">Types of Fixed-Rate Mortgages</HashLink></li>
                                <li><HashLink to="#fixed-3">Advantages of a Fixed-Rate Mortgage</HashLink></li>
                                <li><HashLink to="#fixed-4">Drawbacks of a Fixed-Rate Mortgage</HashLink></li>
                                <li><HashLink to="#fixed-5">Fixed-Rate Mortgage FAQs</HashLink></li>

                            </ul>
                            <p>
                                <img src={img1} alt="Los Angeles conventional" />
                            </p>
                            <h2 id="fixed-1">What is a Fixed-Rate Mortgage?</h2>
                            <p>
                                A fixed-rate mortgage has an interest rate that remains the same for the life of the loan. In other words, your total monthly payment of principal and interest will remain the same over time. A fixed-rate mortgage is the most popular
                                type of financing because it offers predictability and stability for your budget.
                            </p>
                            <p>Fixed-rate loans can either be conventional loans or loans guaranteed by the Federal Housing Authority (FHA) or the Department of Veterans Affairs (VA).</p>
                            <p>Fixed-rate mortgages are characterized by amount of loan, interest rate, compounding frequency, and duration. With these values, the monthly repayments can be calculated.</p>
                            <p>
                                Each month’s payment is equal to the interest rate times the principal, plus a small percentage of the principal itself. Since a bit of the principal is paid off each month, that makes the interest payment on the remaining principal a
                                little less too. As a result, more of your monthly payment goes toward the principal each month. Therefore, at the beginning of the loan, most of the payment goes towards interest while most of it goes towards principal at the end of
                                the loan.
                            </p>
                            <p>There are varying risks involved for both borrowers and lenders in fixed-rate mortgage loans. These risks are usually centered around the interest rate environment.</p>
                            <h2 id="fixed-2">Types of Fixed-Rate Mortgages</h2>
                            <ul>
                                <li>
                                    <strong>Amortized fixed-rate mortgage</strong> – one of the most common types of mortgage loan offerings from Los Angeles lenders. This loan has a fixed-rate of interest over the life of the loan and steady installment payments. A
                                    fixed-rate amortizing mortgage loan requires a basis amortization schedule to be generated by the lender. An amortization schedule is easiest to calculate with fixed-rate interest since it can be fully created at the issuance of the
                                    loan. Overall, the distinguishing factor of a fixed-rate mortgage is that the interest rate for every installment payment does not change and is known at the time the mortgage is issued.
                                </li>
                                <li>
                                    <strong>5-year fixed-rate mortgage</strong> – maintains the same interest rate for the first five years, then turns into an adjustable-rate mortgage. The advantage is that the initial interest rate is lower than on a 30-year
                                    mortgage. The disadvantage is what happens after five years. Your interest rate could increase rapidly, depending on what current rates are. Therefore, this is a good loan if you’re sure you will sell your Los Angeles home within
                                    five years.
                                </li>
                                <li>
                                    <strong>15-year fixed-rate mortgage</strong> – has lower interest rates and allows you to pay off the principal faster than with a conventional 30-year loan. That means you build up equity faster. On the other hand, 15-year
                                    mortgages have higher payments. For that reason, there’s a slightly higher risk of default if your income drops.
                                </li>
                                <li>
                                    <strong>Biweekly fixed-rate mortgage</strong> – speeds up amortization, reduces total interest costs and shortens the loan term. You make 26 biweekly payments, which amounts to 13 annual payments, instead of 12 monthly payments.
                                    Conversion to a 30-year fixed-rate loan is usually permitted. Payments are deducted automatically from your savings or checking accounts.
                                </li>
                                <li>
                                    <strong>30-year fixed-rate mortgage</strong> – the most affordable conventional loan. Even though it has higher interest rates, the monthly payment is lower because the loan repayment is spread out over 30 years. This is a good loan
                                    if you plan to stay in your Los Angeles home for a long time. It’s also good for lower-income families because it allows them to buy more house with a lower monthly cost.
                                </li>
                            </ul>
                            <p>

                                <img src={img2} alt="Los Angeles fixed-rate mortgage" />
                            </p>
                            <h2 id="fixed-3">Advantages of a Fixed-Rate Mortgage</h2>
                            <ul>
                                <li>You don’t have to worry about future higher payments like you do with an adjustable-rate mortgage.</li>
                                <li>Even if mortgage rates increase, economic factors fluctuate or your personal financial profile changes, the interest rate on your mortgage remains the same.</li>
                                <li>A fixed-rate mortgage offers more flexible mortgage term options than other mortgage programs.</li>
                                <li>Mortgages without prepayment penalties allow you to shorten the term of the loan at will (and lower the ultimate interest cost) by making periodic payments against principal.</li>
                            </ul>
                            <h2 id="fixed-4">Drawbacks of a Fixed-Rate Mortgage</h2>
                            <ul>
                                <li>You pay off the principal at a slower rate than with an adjustable-rate loan because the payments over the first few years primarily go toward interest.</li>
                                <li>If interest rates go down you must refinance your mortgage to benefit from the lower rate.</li>
                            </ul>
                            <h2 id="fixed-5">Frequently Asked Questions</h2>
                            <h4>What are mortgage points?</h4>
                            <p>
                                Mortgage points, or discount points, are a way to prepay interest to get a lower interest rate on your mortgage. Each mortgage point equals 1% of your home’s value. In most cases, a point can reduce your interest rate by one-eighth to
                                one-quarter of a percent.
                            </p>
                            <h4>If my credit score is low, how can I raise it?</h4>
                            <p>Paying your bills on time, reducing your credit balances, and trying to not apply for credit too often are all ways that you can raise your FICO score.</p>
                            <h4>What’s the difference between pre-qualified and pre-approved?</h4>
                            <p>
                                Pre-qualification is a determination of the loan amount you’re likely to receive. To obtain pre-qualification, you usually are interviewed by a licensed loan officer in Los Angeles who determines the pre-qualification amount. On the
                                other hand, to be pre-approved, you must submit an application and verify your credit and financial history. After you receive your pre-approval certificate, you’re in a stronger position to close earlier and negotiate a better price.
                            </p>
                            <h4>What is the alternative to a fixed-rate mortgage?</h4>
                            <p>
                                The alternative would be an adjustable-rate mortgage, in which the interest rate applied on the outstanding balance varies throughout the life of the loan.<br />
                                <img src={img3} alt="Los Angeles fixed-rate mortgage" />
                            </p>
                            <p>
                                ARMs are fixed and variable rate hybrids. These loans are also usually issued as an amortized loan with steady installment payments over the life of the loan. They require fixed-rate interest in the first few years of the loan followed
                                by variable rate interest after that. Amortization schedules can be slightly more complex with these loans since rates for a portion of the loan are variable. Thus, investors can expect to have varying payment amounts rather than
                                consistent payments as with a fixed-rate loan.
                            </p>
                            <p>
                                While many prefer the security of a fixed-rate loan, an ARM may be a better choice – especially if you know you’ll be moving within the next several years. As always, be sure to consider all of your options and go with the one that’s
                                right for your financial situation.
                            </p>


                            <Link to="/contact-us" className="contact-btn">Questions? Contact Strategic Financial Today!</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    );
};

export default FixedRate;
