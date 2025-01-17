import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleRight, faMobileScreenButton, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/images/fah/1.jpg";
import img2 from "../../assets/images/fah/2.jpg";
import img3 from "../../assets/images/fah/3.jpg";

import "../../assets/css/style.scss";

const Fha = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [])
    return (
        <section id="fha">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="page-heading">
                            <h1>FHA Home Loans</h1>
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
                            <h2>FHA Home Loan Topics Covered</h2>
                            <ul>
                                <li><HashLink to="#fha-1">What is an FHA Home Loan?</HashLink></li>
                                <li><HashLink to="#fha-2">Mortgage Insurance Premiums on FHA Home Loans</HashLink></li>
                                <li><HashLink to="#fha-3">How to Qualify for an FHA Home Loan</HashLink></li>
                                <li><HashLink to="#fha-4">Types of FHA Home Loans</HashLink></li>
                                <li><HashLink to="#fha-5">Advantages of FHA Home Loans</HashLink></li>
                                <li><HashLink to="#fha-6">FHA Home Loan FAQs</HashLink></li>

                            </ul>
                            <p>
                                <img src={img1} alt="img-1" />
                            </p>
                            <h2 id="fha-1">What is an FHA Home Loan?</h2>
                            <p>
                                FHA home loans are insured by the Federal Housing Administration (FHA), and can only be provided by lenders approved by the FHA. This type of mortgage has a fixed term length of either 15 or 30 years. It’s a popular choice among
                                first-time homebuyers in Los Angeles, as well as buyers with limited savings or lower credit scores.
                            </p>
                            <p>
                                When purchasing a home, you might be responsible for certain out-of-pocket expenses like loan origination fees, appraisal costs, and attorney fees. One of the advantages of an FHA home loan is that the seller, home builder, or lender
                                can cover some of these closing costs on your behalf.
                            </p>
                            <p>
                                The minimum down payment (3.5%) and credit score requirements (at least 580) of FHA loans are lower than that of many conventional loans. And unlike conventional mortgages, 100% of your down payment can be a gift. This gift can come
                                from any of the following:
                            </p>
                            <ul>
                                <li>The borrower’s relative.</li>
                                <li>An employer or labor union.</li>
                                <li>A close friend.</li>
                                <li>A charitable organization.</li>
                                <li>A governmental agency or public entity that has a program providing home ownership assistance.</li>
                            </ul>
                            <p>If your credit score is between 500 and 579, you still can qualify for this kind of loan; however, you’ll have to make a larger down payment.</p>
                            <p>Generally speaking, the lower your credit score and down payment, the higher the interest rate you’ll pay on the mortgage.</p>
                            <h2 id="fha-2">Mortgage Insurance Premiums</h2>
                            <p>
                                Borrowers in Los Angeles who obtain an FHA loan must pay FHA mortgage insurance (this protects the lender from a loss if you default on the loan). You’re required to pay two types of mortgage insurance premiums—an Upfront Mortgage
                                Insurance Premium (UFMIP) and an Annual MIP (charged monthly). This is different from government-insured loans, where you have to pay private mortgage insurance (PMI).
                            </p>
                            <p>
                                As of 2020, the UFMIP is equal to 1.75% of the base loan amount. It can either be rolled into the loan or paid at the time of closing. As for Annual MIP, your monthly payments will range from 0.45% to 1.05% of the base loan amount,
                                depending on factors such as length of the loan, the base amount, and the original loan-to-value ratio (LTV).
                            </p>
                            <p>
                                If you start with a down payment of less than 10%, you’ll continue to pay mortgage insurance for the duration of the loan. Those with 10% down payments will pay FHA mortgage insurance for 11 years.<br />
                                <img src={img2} alt="img-2" />
                            </p>
                            <h2 id="fha-3">How to Qualify For a FHA Loan in Los Angeles</h2>
                            <ul>
                                <li>Have a debt-to-income ratio (DTI) of no more than 50%. This means that your total monthly debt payments can’t be more than 50% of your pretax income (includes debts that you aren’t actively paying).</li>
                                <li>Pay the upfront mortgage insurance premium (UFMIP). This is usually equal to 1.75% of the base loan amount.</li>
                                <li>Have bank statements for the last 30 days. You’ll also need to provide documentation for any deposits made during that time (usually pay stubs).</li>
                                <li>Must have a steady job history (if self-employed, have two years of successful self-employment history; this should be documented by a current year-to-date balance sheet, tax returns, and a profit and loss statement).</li>
                                <li>Must be at least two years out of bankruptcy, unless you can prove that the bankruptcy was due to circumstances beyond your control.</li>
                                <li>Must be at least three years removed from any foreclosures.</li>
                                <li>Have a valid social security number.</li>
                                <li>Have U.S. citizenship and be of legal age.</li>
                            </ul>
                            <p>
                                FHA approved lenders use a program called Desktop Underwriter (DU) for mortgage approval. DU looks at the potential borrower’s debt ratio, reserves and credit score to make an automated credit decision. Los Angeles lenders can also add
                                their own rules, also known as overlays on top of the minimum requirements listed above. As each lender sets their own rates and terms, comparison shopping is important in this market.
                            </p>
                            <h2 id="fha-4">Types of FHA Loans</h2>
                            <ul>
                                <li><strong>Traditional</strong> – used to finance primary residences.</li>
                                <li>
                                    <strong>Home Equity Conversion</strong> – (reverse mortgage) allows homeowners 62 years of age and older to exchange their home equity for cash while still retaining title to the home. Funds can either be withdrawn as a fixed
                                    monthly amount or as a line of credit.
                                </li>
                                <li>
                                    <strong>203(k) Program</strong> – includes extra funds to pay for repairs and renovations to the Los Angeles house. For this type of loan, the property may undergo two separate appraisals: an “as is” appraisal that evaluates its
                                    current state, and an “after improved” appraisal estimating the value after the work/renovations are finished.
                                </li>
                                <li><strong>Energy Efficient Program</strong> – includes extra funds to pay for energy-efficient home improvements (could potentially lower the cost of your utility bills).</li>
                                <li>
                                    <strong>Section 245(a)</strong> – a graduated payment mortgage (GPM) with reduced initial monthly payments that increase over time, and a growing equity mortgage (GEM) where fixed increases in monthly principal payments result in
                                    shorter loan terms. This program is for borrowers who anticipate an increase in income.
                                </li>
                            </ul>
                            <h2 id="fha-5">Advantages of FHA Loans</h2>
                            <ul>
                                <li>The DTI and credit score requirements are more relaxed than those of other loan types.</li>
                                <li>Lower down payments.</li>
                                <li>Increased allowance for closing cost financing.</li>
                                <li>Good for first-time homebuyers.</li>
                            </ul>
                            <p>
                                <img src={img3} alt="img-3" />
                            </p>
                            <h2 id="fha-6">Frequently Asked Questions</h2>
                            <h4>What’s the difference between pre-qualified and pre-approved?</h4>
                            <p>
                                Pre-qualification is a determination of the loan amount you’re likely to receive. To obtain pre-qualification, you usually are interviewed by a licensed loan officer in Los Angeles who determines the pre-qualification amount. On the
                                other hand, to be pre-approved, you must submit an application and verify your credit and financial history. After you receive your pre-approval certificate, you’re in a stronger position to close earlier and negotiate a better price.
                            </p>
                            <h4>How long do FHA loans take to close?</h4>
                            <p>The average FHA loan approval process takes between 30 to 60 days.</p>
                            <h4>If my credit score is low, how can I raise it?</h4>
                            <p>Paying your bills on time, reducing your credit balances, and trying to not apply for credit too often are all ways that you can raise your FICO score.</p>
                            <h4>How many active FHA home loans can I have at one time?</h4>
                            <p>
                                Without the exception of certain extenuating circumstances, borrowers will likely not be approved for additional FHA loans while one is active. Special circumstances that could warrant a borrower having two or more active FHA loans
                                include job relocations, changes in family size, and situations where a co-borrower vacates the property with an existing FHA mortgage loan to purchase a home of their own.
                            </p>
                            <p>A FHA loan may sound great, but it’s not for everybody. In the words of the Federal Housing Administration, an FHA loan “won’t accommodate those who are shopping on the higher end of the price spectrum—nor is it intended to.”</p>
                            <p>
                                This kind of mortgage was specifically designed for Los Angeles buyers with low-to-moderate incomes; that being said, if you have a larger budget and are looking into purchasing a house that’s a bit pricey, then a conventional loan
                                might better suit your needs.
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

export default Fha;
