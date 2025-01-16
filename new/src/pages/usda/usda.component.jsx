import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleRight, faMobileScreenButton, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/images/conventional/1.jpg";
import img2 from "../../assets/images/conventional/2.jpg";

import "../../assets/css/style.scss";

const Usda = () => {
    return (
        <section id="usda">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="page-heading">
                            <h1>USDA Home Mortgages</h1>
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
                            <h2>USDA Home Mortgage Topics Covered</h2>
                            <ul>
                                <li><HashLink to="#usda-1">What is a USDA Home Mortgage?</HashLink></li>
                                <li><HashLink to="#usda-2">How to Qualify for a USDA Home Mortgage</HashLink></li>
                                <li><HashLink to="#usda-3">Types of USDA Home Mortgage Programs</HashLink></li>
                                <li><HashLink to="#usda-4">Benefits of a USDA Home Mortgage</HashLink></li>
                                <li><HashLink to="#usda-5">Drawbacks of a USDA Home Mortgage</HashLink></li>
                                <li><HashLink to="#usda-6">USDA Home Mortgage FAQs</HashLink></li>

                            </ul>
                            <p>
                                <img src="" alt="" />
                            </p>
                            <h2 id="usda-1">What is a USDA Home Mortgage?</h2>
                            <p>
                                USDA loans help make purchasing a home more affordable for those living in rural areas. The U.S. Department of Agriculture backs USDA loans in the same way the Department of Veterans Affairs backs VA loans for veterans and their
                                families. This government backing means that, compared to conventional loans, Los Angeles mortgage lenders can offer lower interest rates. If you qualify, you can buy a home with no down payment, although you’ll still need to pay
                                closing costs.
                            </p>
                            <p>97% of the US map is eligible for USDA loans. Any area with a population of 20,000 or less can be eligible (and 35,000 in special cases).</p>
                            <p>The website of the U.S. Department of Agriculture lists eligible USDA communities by census tract. You are required to provide a home’s exact address. The website will show whether that home meets program guidelines.</p>
                            <h2 id="usda-2">How to Qualify for a USDA Home Mortgage</h2>
                            <ul>
                                <li>You must be a U.S. resident, non-citizen national or qualified alien.</li>
                                <li>Homes financed by a USDA loan must be in an eligible rural or suburban area.</li>
                                <li>USDA loans are for families who demonstrate economic need, so your adjusted gross income can’t be more than 115% of the median income in the area</li>
                                <li>You must show that you have a dependable income (typically for a minimum of 24 months) and can make your mortgage payments without incident for at least 12 months based on your assets, savings and current income.</li>
                                <li>
                                    It’s best for your debt-to-income ratio (DTI) to be 50% or lower. You can calculate your DTI by dividing all of your monthly recurring debts by your gross monthly income. Your monthly expenses should include rent, student and auto
                                    loan payments, credit card payments; you don’t need to include expenses for food and utilities.
                                </li>
                                <li>You’ll probably need a credit score of 640 or better.</li>
                            </ul>
                            <h2 id="usda-3">Types of USDA Home Mortgage Programs</h2>
                            <ul>
                                <li>
                                    <strong>Loan guarantees</strong> – the USDA guarantees a mortgage issued by a participating local Los Angeles lender — similar to an FHA loan and VA-backed loans — allowing you to get low mortgage interest rates, even without a down
                                    payment. If you put little or no money down, you will have to pay a mortgage insurance premium, though.
                                </li>
                                <li>
                                    <strong>Direct loans</strong> – issued by the USDA, these mortgages are for low- and very low-income applicants. Income thresholds vary by region. With subsidies, interest rates can be as low as 1%. The USDA usually issues direct
                                    loans for homes of 2,000 square feet or less, with a market value below the area loan limit.
                                </li>
                                <li>
                                    <strong>Home improvement loans and grants</strong> – these loans or outright financial awards permit homeowners to repair or upgrade their homes. Packages can also combine a loan and a grant, providing up to $27,500 in assistance.
                                </li>
                            </ul>
                            <p>
                                <img src="" alt="" /><br />
                                USDA “guarantees” its loan program — meaning it offers protection to Los Angeles mortgage lenders in case USDA borrowers default. But the program is partially self-funded. So to keep it running, the USDA uses homeowner-paid mortgage
                                insurance premiums.
                            </p>
                            <p>The current USDA mortgage insurance rates are:</p>
                            <ul>
                                <li>For purchases, 1.00% upfront fee paid at closing, based on the loan size.</li>
                                <li>For refinances, 1.00% upfront fee paid at closing, based on the loan size.</li>
                                <li>For all loans, 0.35% annual fee, based on the remaining principal balance.</li>
                            </ul>
                            <p>USDA mortgage rates are often the lowest among FHA mortgage rates, VA mortgage rates, and conventional loan mortgage rates — especially when buyers are making a small or minimum downpayment.</p>
                            <p>For a buyer with average credit scores, USDA mortgage rates can be 100 basis points (1.00%) or more below the rates of a comparable conventional loan.</p>
                            <p>Lower rates mean lower payments, which is why USDA loans can be extremely affordable.</p>
                            <h2 id="usda-4">Benefits of a USDA Home Mortgage</h2>
                            <ul>
                                <li>No down payment option (100% financing). This makes a USDA mortgage a good option for people who can’t afford an FHA loan, which requires a 3.5 percent down payment.</li>
                                <li>No cash reserves are required.</li>
                                <li>Flexible credit and qualifying guidelines.</li>
                                <li>The seller can pay closing costs.</li>
                                <li>
                                    Rates for USDA loans are generally lower than comparable, 30-year fixed-rate mortgages. Even if you have less-than-stellar credit, you may still get a lower rate with a USDA loan because the agency promises to reimburse the lender
                                    should you default and allow a foreclosure.
                                </li>
                                <li>There’s no prepayment penalty.</li>
                                <li>You can finance repairs and closing costs into the loan.</li>
                                <li>You can build a home with the loan.</li>
                            </ul>
                            <h2 id="usda-5">Drawbacks of a USDA Home Mortgage</h2>
                            <ul>
                                <li>
                                    There are geographic restrictions, as homes must be located in a USDA-defined rural area. The USDA defines rural broadly, but there are restrictions. Homes that have additional units used for commercial purposes would likely be
                                    ineligible. Vacation and investment homes are also not eligible.
                                </li>
                                <li>Mortgage insurance included (may be financed into loan).</li>
                            </ul>
                            <p>
                                <img src="" alt="" />
                            </p>
                            <h2 id="usda-6">Frequently Asked Questions</h2>
                            <h4>Are only first-time homebuyers eligible?</h4>
                            <p>No, both first-time homebuyers and repeat homebuyers may use the USDA loan.</p>
                            <h4>What is the maximum amount that I can borrow?</h4>
                            <p>There are no maximum loan amount restrictions on USDA loans. An individual’s maximum loan amount is based upon their debts, income and ability to repay.</p>
                            <h4>What is the USDA’s minimum credit requirement?</h4>
                            <p>There is no minimum score required by the USDA; however, to use the USDA’s guaranteed underwriting system (GUS), a borrower must have a 640 credit score or higher.</p>
                            <h4>Can I buy a foreclosure with a USDA loan?</h4>
                            <p>
                                USDA home loans can be used to purchase any property so long as the property meets USDA property eligibility requirements. This means that you can use USDA loans to purchase foreclosed homes, short sales and homes sold by real estate
                                agencies or banks after a bankruptcy.
                            </p>
                            <p>
                                The USDA program expands eligibility to those who may have low credit scores or poor credit histories but can show they have worked diligently for a certain time. From the single mother who has a low-wage job but has worked consistently
                                for years, to the Los Angeles first-time homebuyer who may not have enough money for a down payment, a USDA loan may be a good choice. However, if you do not qualify for a USDA loan, consider getting an FHA loan instead.
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

export default Usda;
