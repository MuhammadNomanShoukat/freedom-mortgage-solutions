import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleRight, faMobileScreenButton, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/images/conventional/1.jpg";
import img2 from "../../assets/images/conventional/2.jpg";

import "../../assets/css/style.scss";

const Renovation = () => {
    return (
        <section id="renovation">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="page-heading">
                            <h1>Renovation Mortgage 203(k)</h1>
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
                            <h2>Renovation Mortgage 203(k) Topics Covered</h2>
                            <ul>
                                <li><HashLink to="#reno-1">What is a 203(k) Renovation Mortgage?</HashLink></li>
                                <li><HashLink to="#reno-2">Limited vs. Standard 203(k) Renovation Mortgages</HashLink></li>
                                <li><HashLink to="#reno-3">How to Qualify for a 203(k) Renovation Mortgage</HashLink></li>
                                <li><HashLink to="#reno-4">The Renovation Mortgage 203(k) Process</HashLink></li>
                                <li><HashLink to="#reno-5">Renovation Mortgage 203(k) FAQs</HashLink></li>

                            </ul>
                            <p>
                                <img src="" alt="" />
                            </p>
                            <h2 id="reno-1">What is a 203(k) Renovation Mortgage?</h2>
                            <p>
                                With a 203(k) loan, you can buy or refinance a home that needs work and roll the renovation costs into the mortgage. Because these loans are insured by the Federal Housing Administration, they may offer more lenient qualification
                                requirements than other renovation loans.
                            </p>
                            <p>FHA 203(k) financing can be an affordable way to pay for home improvements and may expand your home buying options, especially in high-cost areas.</p>
                            <p>
                                Mortgage rates are somewhat higher for FHA 203k loans. Expect to receive a rate about 0.75 percent to 1.00 percent higher than for a standard FHA loan. Still, base FHA rates are some of the lowest on the market, so 203k rates are
                                competitive.
                            </p>
                            <p>You’ll pay standard FHA mortgage insurance, which is typically 1.75 percent of the full loan amount upfront (rolled into the loan) and 0.85 percent yearly (broken into 12 equal monthly payments).</p>
                            <h2 id="reno-2">Limited vs. Standard 203(k) Renovation Mortgages</h2>
                            <p>There are two types of FHA 203(k) loans: the limited — sometimes referred to as “streamline” — and the standard.</p>
                            <p>
                                A limited loan provides up to $35,000 for renovations. It covers kitchen and bathroom remodels, appliance replacement, carpet and flooring, roof replacement, painting, repairing safety and health issues, and energy-efficient
                                improvements. With this type, you can’t do anything structural (move load-bearing walls, add rooms) or change the footprint of the home.
                            </p>
                            <p>
                                In the case of a standard loan, renovations must cost at least $5,000, and major structural repairs are eligible. This covers converting a one-family home into a 2-, 3-, or 4-unit home, connecting to public sewer or water, larger
                                landscaping projects, improving accessibility for disabled persons, and moving the house to a different site. However, it doesn’t allow minor landscaping, adding a luxury amenity like a tennis court, barbecue area, or swimming pool, or
                                projects that will take longer than 6 months.
                            </p>
                            <p>
                                Borrowers using a 203(k) standard loan must hire a HUD consultant to oversee the renovation process.<br />
                                <img src="" alt="" />
                            </p>
                            <h2 id="reno-3">How to Qualify for a 203(k) Renovation Mortgage</h2>
                            <ul>
                                <li>
                                    You’ll need a credit score of at least 500 to qualify for an FHA 203(k) loan, although some lenders might require a score of 620-640 (still, that’s much lower than the 720+ you would probably need for a conventional construction
                                    loan).
                                </li>
                                <li>
                                    The minimum down payment for a 203(k) loan is 3.5% if your credit score is 580 or higher. You’ll have to put down 10% if your credit score is between 500 and 579. Down payment assistance may be available through state home buyer
                                    programs, and monetary gifts from friends and family are permitted as well.
                                </li>
                                <li>Find an FHA-approved lender and be ready to provide your social security number, as well as documents that verify your income, debts and credit score.</li>
                                <li>In most cases, a foreclosure within the past three years will prevent you from qualifying for an FHA loan.</li>
                                <li>You can borrow up to 110 percent of the property’s proposed future value, or the home price plus repair costs, whichever is less. But keep in mind that your total loan amount can’t be higher than your region’s FHA loan limits.</li>
                                <li>You must plan to live in the property you are buying. If you plan to fix and flip, the 203k loan isn’t for you.</li>
                                <li>All FHA loans are available to U.S. citizens and lawful permanent residents. Lenders will verify citizenship status at time of application.</li>
                            </ul>
                            <h2 id="reno-4">The Renovation Mortgage 203(k) Process</h2>
                            <p>The process of obtaining a renovation 203(k) loan is slightly different than other loan types.</p>
                            <p>The first step is deciding which repairs you want to do. The lender will require any safety or health hazards to be addressed first – things like mold, broken windows, lead-based paint, and missing handrails.</p>
                            <p>From there, choose which cosmetic items you want to take care of. For instance, say you want to replace appliances, add granite in the kitchen, and gut the bathroom. Those are all acceptable projects for the loan.</p>
                            <p>
                                Once you’ve got your project list together, find contractors. The contractors must be licensed and insured, and typically have to be in full-time business. As soon as your contractor is on board with helping you complete your loan, get
                                official bids. The lender will submit final bids to the appraiser, who builds the value of the work into the future value of the property, upon which your loan is based.
                            </p>
                            <p>
                                By this point, the lender will have your income, asset, and credit report information. Once it has all the required bid paperwork, your loan can go to “final approval.” You will sign the final documents, and the house will officially be
                                yours.
                            </p>
                            <p>
                                Then, after the loan has been finalized, the contractors can start the work. Depending on the extent of the repairs, you may be able to move in at the same time. For bigger projects, though, you should arrange to live somewhere else
                                until work is complete. You can finance up to six months of payments into your loan amount to allow room in your budget to do so.<br />
                                <img src="" alt="" />
                            </p>
                            <h2 id="reno-5">Frequently Asked Questions</h2>
                            <h4>Is the 203k program allowed for use by investors?</h4>
                            <p>
                                A renovation loan can be used only by owner occupants, local governments or eligible non-profits. However, an owner occupant can use a 203k loan to purchase and renovate up to a 4-unit building as well as multi-use building in
                                conformance with certain guidelines.
                            </p>
                            <h4>Can an energy efficient mortgage (EEM) be used in conjunction with the 203k?</h4>
                            <p>
                                Yes. The FHA allows the use of an EEM, which provides funds beyond the FHA loan limits and the buyer’s approved loan amount for improvements that increase the energy efficiency and lower the utility costs of the home. An energy audit
                                must be conducted by an approved home energy rater to assure that the energy savings over the useful life of the improvements will exceed their costs. The total amount of an EEM mortgage can be up to 5% of the value of the property.
                            </p>
                            <h4>If my credit score is low, how can I raise it?</h4>
                            <p>Paying your bills on time, reducing your credit balances, and trying to not apply for credit too often are all ways that you can raise your FICO score.</p>
                            <h4>Is there a time limit for the renovation?</h4>
                            <p>The renovation must begin within 30 days of the closing of the loan and must be completed within the time frame established in the loan agreement. The total time for renovation must not exceed 140 days.</p>
                            <p>
                                If you’re buying a fixer-upper, or fixing up a home you already own, the FHA 203(k) mortgage may be a good option, but be sure to weigh the pros and cons against your unique financial needs. The HomeStyle loan from Fannie Mae or the
                                CHOICERenovation loan from Freddie Mac are conventional renovation loan options. They might be a better fit for those with higher credit scores or the desire for improvements the FHA considers “luxuries”.
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

export default Renovation;
