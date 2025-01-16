import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleRight, faMobileScreenButton, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/images/conventional/1.jpg";
import img2 from "../../assets/images/conventional/2.jpg";

import "../../assets/css/style.scss";

const Reverse = () => {
    return (
        <section id="reverse">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="page-heading">
                            <h1>Reverse Mortgages</h1>
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
                            <h2>Reverse Mortgage Topics Covered</h2>
                            <ul>
                                <li><HashLink to="#reverse-1">What is a Reverse Mortgage?</HashLink></li>
                                <li><HashLink to="#reverse-2">How to Qualify for a Reverse Mortgage</HashLink></li>
                                <li><HashLink to="#reverse-3">Types of Reverse Mortgages</HashLink></li>
                                <li><HashLink to="#reverse-4">Ways to Receive Proceeds from a Reverse Mortgage</HashLink></li>
                                <li><HashLink to="#reverse-5">Benefits of a Reverse Mortgage</HashLink></li>
                                <li><HashLink to="#reverse-6">The Reverse Mortgage Process</HashLink></li>
                                <li><HashLink to="#reverse-7">Reverse Mortgage FAQs</HashLink></li>
                            </ul>
                            <p>
                                <img src="" alt="" />
                            </p>
                            <h2 id="reverse-1">What is a Reverse Mortgage?</h2>
                            <p>A reverse mortgage is a type of loan where the Los Angeles homeowner withdraws a portion of their equity but doesn’t have to repay the loan until they leave the house.</p>
                            <p>
                                With a reverse mortgage, the lender makes payments to the homeowner. The homeowner gets to choose how to receive these payments and only pays interest on the proceeds received. The interest is rolled into the loan balance so the
                                homeowner doesn’t pay anything up front. The homeowner also keeps the title to the home.
                            </p>
                            <h2 id="reverse-2">How to Qualify for a Reverse Mortgage</h2>
                            <p>The primary homeowner must be age 62 or older to apply. However, if you are under 62, you may still be able to get a reverse mortgage if you meet other eligibility criteria. For example:</p>
                            <ul>
                                <li>You must own your Los Angeles home outright or have a single primary lien you hope to borrow against.</li>
                                <li>Any existing mortgage you have must be paid off using the proceeds from your reverse mortgage.</li>
                                <li>You must live in the home as your primary residence.</li>
                                <li>You must remain current on property taxes, homeowner’s insurance and other mandatory obligations, such as homeowners association dues.</li>
                                <li>You must participate in a consumer information session led by a HUD-approved counselor.</li>
                                <li>You must maintain your Los Angeles property and keep it in good working condition.</li>
                                <li>Your home must be a single-family home, a multi-unit property with up to four units, a manufactured home built after June 1976, a condominium, or a townhouse.</li>
                            </ul>
                            <h2 id="reverse-3">Types of Reverse Mortgages</h2>
                            <ul>
                                <li>
                                    <strong>Proprietary reverse mortgages</strong> – these are private loans not backed by any government entity. Typically you can receive a larger loan advance from this type of reverse mortgage, especially those who have
                                    higher-valued homes.
                                </li>
                                <li>
                                    <strong>Single-purpose mortgages</strong> – not as common as the other two options, this type of reverse mortgage is usually offered by non-profit organizations and a few state and local government agencies. Los Angeles Borrowers
                                    can only use the loan for one specific purpose.
                                </li>
                                <li>
                                    <strong>Home Equity Conversion Mortgages (HCEMs)</strong> – the most popular type of reverse mortgage and backed by the U. S. Department of Housing and Urban Development (HUD), these federally insured mortgages usually have higher
                                    upfront costs, but the funds can be used for any purpose. Before closing on a HECM, all borrowers will need to go through counseling from a HUD-approved counselor. The point is to help you understand how a reverse mortgage works
                                    from someone who won’t benefit from you taking out the loan.
                                </li>
                            </ul>
                            <p>
                                <img src="" alt="" />
                            </p>
                            <h2 id="reverse-4">Ways to Receive Proceeds from a Reverse Mortgage</h2>
                            <ul>
                                <li><strong>Lump sum</strong> – get all the proceeds at once when your loan closes. This is the only option that comes with a fixed interest rate. The other five have adjustable interest rates.</li>
                                <li><strong>Equal monthly payments (annuity)</strong> – for as long as at least one borrower lives in the home as a principal residence, the lender will make steady payments to the borrower. This is also known as a tenure plan.</li>
                                <li><strong>Term payments</strong> – the lender gives the borrower equal monthly payments for a set period of the borrower’s choosing, such as 10 years.</li>
                                <li><strong>Line of credit</strong> – money is available for the homeowner to borrow as needed. The homeowner only pays interest on the amounts actually borrowed from the credit line.</li>
                                <li>
                                    <strong>Equal monthly payments plus a line of credit</strong> – the lender provides steady monthly payments for as long as at least one borrower occupies the home as a principal residence. If the borrower needs more money at any
                                    point, they can access the line of credit.
                                </li>
                                <li>
                                    <strong>Term payments plus a line of credit</strong> – the lender gives the borrower equal monthly payments for a set period of the borrower’s choosing, such as 10 years. If the borrower needs more money during or after that term,
                                    they can access the line of credit.
                                </li>
                            </ul>
                            <h2 id="reverse-5">Benefits of a Reverse Mortgage</h2>
                            <ul>
                                <li>The borrower does not need to make monthly payments toward their loan balance.</li>
                                <li>Proceeds can be used for living expenses, debt repayment, healthcare expenses, and more.</li>
                                <li>Funds can help borrowers enjoy their retirement.</li>
                                <li>Non-borrowing spouses can stay in the home after the borrower dies.</li>
                                <li>Borrowers facing foreclosure can use a reverse mortgage to pay off the existing mortgage, potentially stopping the foreclosure.</li>
                            </ul>
                            <h2 id="reverse-6">The Reverse Mortgage Process</h2>
                            <p>If you believe a reverse mortgage is the solution for you, applying for one is similar to that of a traditional home equity loan. Once you meet the eligibility criteria, shop around to find the best deal.</p>
                            <p>
                                The Los Angeles lender will assess your financial situation including evaluating your credit history, any outstanding mortgage and ensuring your property qualifies (as in you don’t have any active property liens). You’ll also need to
                                provide proof that you’re able to pay for ongoing housing costs, and order a property appraisal to determine its value and how much you can borrow.
                            </p>
                            <p>Once you close on your loan, you have the right of rescission, or your right to cancel your mortgage without penalty. In order to do so, you need to notify your lender within three business days after closing in writing.</p>
                            <p>
                                Make sure to keep all copies of any correspondence and send your letter via certified mail and ask for a return receipt so that you’ll know it got into the right hands. Afterwards, your Los Angeles lender will have 20 days to return any
                                fees you’ve paid for the reverse mortgage.<br />
                                <img src="" alt="" />
                            </p>
                            <h2 id="reverse-7">Frequently Asked Questions</h2>
                            <h4>How much can I qualify for?</h4>
                            <p>
                                The amount of funds available through a reverse mortgage loan is based on the youngest spouse’s age and the appraised value of your home. As a rule of thumb the loan to value (LTV) offered on a reverse mortgage is 40-70% of your
                                appraised value, depending on your age.
                            </p>
                            <h4>When does the reverse mortgage need to be paid off?</h4>
                            <p>
                                When you sell the property or no longer occupy your Los Angeles home as your primary residence for a period of 12 months or longer, or fail to maintain the property taxes and homeowners insurance. When the last surviving borrower should
                                pass away, the reverse mortgage becomes due and payable. Generally, your heirs/estate will have up to six months to refinance your home if they are choosing to keep the house or up to 12 months to sell.
                            </p>
                            <h4>Can I make a payment back?</h4>
                            <p>
                                Yes. While a reverse mortgage does not require regular scheduled monthly payments, the program does permit a borrower to make voluntary partial or full payments on the loan. As stated before, there is no penalty to paying down or off
                                your loan at any time. Also, if the loan is a fixed rate, funds submitted for prepayment cannot be re-borrowed at any point during the life of the loan, and the revolving credit feature does not apply.
                            </p>
                            <h4>If my credit score is low, how can I raise it?</h4>
                            <p>Paying your bills on time, reducing your credit balances, and trying to not apply for credit too often are all ways that you can raise your FICO score.</p>
                            <p>
                                Reverse mortgages can provide much-needed cash for seniors whose net worth is mostly tied up in the value of their Los Angeles home. Then again, they’re not for everyone. A reverse mortgage isn’t a good option if you can’t keep up with
                                the costs associated with the home, even without a monthly mortgage payment. And if you die or the home is no longer the primary residence for more than 12 months, the loan comes due, which means either you or your estate has to repay
                                the loan or put the home up for sale to settle it.
                            </p>
                            <p>
                                Even when a reverse mortgage is issued by the most reputable of lenders, it’s still a complicated product. Los Angeles Borrowers must take the time to educate themselves about it to be sure they’re making the best choice about how to
                                use their home equity.
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

export default Reverse;
