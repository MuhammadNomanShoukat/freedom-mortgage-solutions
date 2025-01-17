import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleRight, faMobileScreenButton, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/images/conventional/1.jpg";
import img2 from "../../assets/images/conventional/2.jpg";

import "../../assets/css/style.scss";

const Conventional = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [])
    return (
        <section id="conventional">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="page-heading">
                            <h1>Conventional Mortgages</h1>
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
                            <h2>Conventional Mortgage Topics Covered</h2>
                            <ul>
                                <li><HashLink to="#conv-1" smooth>What is a Conventional Mortgage?</HashLink></li>
                                <li><HashLink to="#conv-2" smooth>Conventional Mortgage Requirements</HashLink></li>
                                <li><HashLink to="#conv-3" smooth>Private Mortgage Insurance (PMI) on a Conventional Mortgage</HashLink></li>
                                <li><HashLink to="#conv-4" smooth>Types of Conventional Mortgages</HashLink></li>
                                <li><HashLink to="#conv-5" smooth>Conventional Mortgage Advantages</HashLink></li>
                                <li><HashLink to="#conv-6" smooth>Conventional Mortgage FAQs</HashLink></li>

                            </ul>
                            <p>
                                <img src={img1} alt="Los Angeles conventional" />
                            </p>
                            <h2 id="conv-1">What is a Conventional Mortgage?</h2>
                            <p>
                                A conventional mortgage is one that’s not guaranteed or insured by the federal government. Instead, they are available through private lenders, such as banks, credit unions, and mortgage companies.
                            </p>
                            <p>
                                Conventional mortgages have a fixed rate of interest, which means that the interest rate does not change throughout the life of the loan. This gives Los Angeles homebuyers a sense of stability that is not present in the case of, say, an adjustable-rate mortgage. Interest rates for conventional loans tend to be lower than rates for FHA loans yet higher than those of VA loans.
                            </p>
                            <p>
                                Conforming conventional loans must fall within the limits set by Fannie Mae and Freddie Mac. As of 2020, the limit is $510,400. If the loan surpasses that limit, it becomes a jumbo (nonconforming) loan.
                            </p>
                            <p>Usually, you’ll be able to borrow more money on a conventional loan than on a FHA loan.</p>
                            <p>
                                Potential Los Angeles borrowers must complete an official mortgage application (and usually pay an application fee), then supply their lender with the necessary documents to perform an extensive check on their background, credit history, and current credit score.
                            </p>
                            <h2 id="conv-2">Conventional Mortgage Requirements</h2>
                            <h4>Documentation Needed to Get a Conventional Mortgage</h4>
                            <ul>
                                <li>Proof of income and assets.</li>
                                <li>Employment verification.</li>
                                <li>A driver’s license/state ID card.</li>
                                <li>A valid social security number.</li>
                            </ul>
                            <h4>Other Requirements</h4>
                            <ul>
                                <li>Have a FICO credit score of at least 620 (this number may vary from lender to lender).</li>
                                <li>Make a down payment.</li>
                                <li>
                                    Have a debt-to-income (DTI) ratio of less than 50%. This means that your total monthly debt payments can’t be more than 50% of your pretax income (includes debts that you aren’t actively paying).
                                </li>
                                <li>
                                    In the case of a conforming conventional loan, your loan must fall within the limits set by Fannie Mae and Freddie Mac.
                                </li>
                            </ul>
                            <h4>Down Payment</h4>
                            <p>
                                The requirement for a down payment can vary based on your personal circumstances and the kind of loan or property you’re getting. First-time home buyers in Los Angeles have the possibility of acquiring a conventional mortgage with a down payment as low as 3% through financial assistance programs.
                            </p>
                            <ul>
                                <li>If you’re not a first-time home buyer, the down payment requirement is 5%.</li>
                                <li>If you’re a second-time home buyer, the requirement is 10%.</li>
                                <li>With an adjustable rate mortgage, you need to put down at least 5%.</li>
                                <li>In the case of a jumbo loan, the down payment requirement ranges from 10% to 40%.</li>
                                <li>If you’re not buying a single-family home, you may need to put down 15%.</li>
                            </ul>
                            <p>
                                <img alt="Los Angeles conventional mortgage" className="imgfull" src={img2} />
                            </p>
                            <h2 id="conv-3">Private Mortgage Insurance</h2>
                            <p>
                                If you choose to make a down payment of less than 20% on a conventional loan, you’ll be required to pay for private mortgage insurance (PMI), which protects your lender in case you default on your loan. This is different from FHA loans, where you have to pay an upfront mortgage insurance premium (UFMIP) and an annual MIP.
                            </p>
                            <p>
                                Your PMI is typically included as part of your monthly mortgage payment, but there are other ways to cover the cost as well. There’s the option to pay it as an upfront fee, or, alternatively, in the form of a slightly higher interest rate.
                            </p>
                            <p>
                                When you reach 20% equity on your home, you can ask your lender to remove the PMI from your mortgage payments. Once you reach 22% equity, though, the PMI will automatically be removed.
                            </p>
                            <h2 id="conv-4">Different Types of Conventional Mortgages</h2>
                            <ul>
                                <li>
                                    <strong>Conforming</strong> – meets loan standards set by Fannie Mae/Freddie Mac. For clarification: the FNMA (Fannie Mae) and the FHLMC (Freddie Mac) are home mortgage companies created by the U.S. Congress. They make the mortgage market more affordable and stable, and they provide liquidity to thousands of loans, banks, and mortgage companies in America.
                                </li>
                                <li>
                                    <strong>Nonconforming</strong> – (like a jumbo loan, for example) doesn’t meet the loan standards set by Fannie Mae/Freddie Mac. Oftentimes, jumbo loans require a higher credit score than conforming ones do.
                                </li>
                                <li><strong>Fixed Rate</strong> – for as long as you have the mortgage, the interest rate will remain the same.</li>
                                <li><strong>Adjustable Rate</strong> – (also referred to as hybrid ARMs) rates change annually, after staying fixed for a set amount of years.</li>
                                <li>
                                    <strong>Amortized</strong> – there is a set monthly payment from the beginning to the end of your loan repayment period, without a balloon payment (these can have either fixed or adjustable rates).
                                </li>
                                <li><strong>Low Down Payment</strong> – more flexible than other types; you can get a down payment as low as 3 or 5 percent.</li>
                                <li>
                                    <strong>Portfolio</strong> – the lender chooses to keep the loan in its own portfolio as opposed to selling it on the secondary market. These are good if you have a high DTI or a low credit score but are still able to afford something with a higher interest rate.
                                </li>
                                <li>
                                    <strong>Renovation</strong> – allows you to finance a house while also paying for renovations (good if you’re buying a fixer-upper).
                                </li>
                            </ul>
                            <h2 id="conv-5">Advantages of Getting a Conventional Loan</h2>
                            <ul>
                                <li>The interest rates tend to be lower.</li>
                                <li>There are more options in terms of down payment.</li>
                                <li>Overall, these loans can be very flexible as they aren’t dependent on government insurance approval.</li>
                                <li>There are fewer stipulations in the property types you can buy.</li>
                                <li>
                                    Conventional loans can be used on a second property or even an investment property. FHA loans, for instance, can’t be used for investment purposes.
                                </li>
                                <li>
                                    The lender is likely to dismiss PMI once you reach 20% equity. FHA loans, on the other hand, have an annual mortgage insurance premium (MIP) for the entirety of the loan term.
                                </li>
                            </ul>
                            <Link to="/contact-us" className="contact-btn">Questions? Contact Strategic Financial Today!</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Conventional;
