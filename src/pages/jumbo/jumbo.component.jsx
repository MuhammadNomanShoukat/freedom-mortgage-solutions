import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleRight, faMobileScreenButton, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/images/jumbo/1.jpg";
import img2 from "../../assets/images/jumbo/2.jpg";
import img3 from "../../assets/images/jumbo/3.jpg";

import "../../assets/css/style.scss";

const Jumbo = () => {
    return (
        <section id="jumbo">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="page-heading">
                            <h1>Jumbo Mortgages</h1>
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
                            <h2>FHA Home Loan Topics Covered</h2>
                            <ul>
                                <li><HashLink to="#jumbo-1">What is a Jumbo Mortgage?</HashLink></li>
                                <li><HashLink to="#jumbo-2">How to Qualify for a Jumbo Mortgage</HashLink></li>
                                <li><HashLink to="#jumbo-3">Benefits of a Jumbo Mortgage</HashLink></li>
                                <li><HashLink to="#jumbo-4">Disadvantages of a Jumbo Mortgage</HashLink></li>
                                <li><HashLink to="#jumbo-5">Jumbo Mortgage FAQs</HashLink></li>

                            </ul>
                            <p>
                                <img src={img1} alt="img-1" />
                            </p>
                            <h2 id="jumbo-1">What is a Jumbo Mortgage?</h2>
                            <p>
                                A jumbo home loan, also known as a jumbo mortgage, is a type of financing that exceeds the limits set by the Federal Housing Finance Agency (FHFA) — currently $510,400 for a single-family home in all states (except Hawaii and Alaska and
                                a few federally designated high-cost markets, where the limit is $765,600). Although they are nonconforming mortgages, jumbo loans still must fall within the guidelines of what the Consumer Financial Protection Bureau considers a
                                “qualified mortgage”.
                            </p>
                            <p>These mortgages are considered most appropriate for a segment of high-income earners who make between $250,000 and $500,000 a year.</p>
                            <p>Jumbos are considered riskier for lenders because they can’t be guaranteed by Fannie Mae and Freddie Mac, meaning the lender is not protected from losses if a borrower defaults.</p>
                            <h2 id="jumbo-2">How to Qualify for a Jumbo Mortgage</h2>
                            <p>
                                Lenders set their own underwriting guidelines for jumbo loans, so eligibility requirements may vary. Make sure to get as much information as you can from each Los Angeles lender to understand their specific requirements and underwriting
                                procedures for a jumbo loan.
                            </p>
                            <ul>
                                <li>Jumbo loans are often attractive to Los Angeles homebuyers with more complex sources of income.With that in mind, it’s common for jumbo loans to require more paperwork and income documentation than conventional loans.</li>
                                <li>
                                    Los Angeles Lenders may require your FICO score to be higher than 700, and sometimes as high as 720, to qualify for a jumbo loan. Borrowers whose scores fall beneath the normal requirements usually have to offset it with a low
                                    debt-to-income ratio.
                                </li>
                                <li>Your debt-to-income ratio (DTI) should be under 43% and preferably closer to 36%.</li>
                                <li>It’s not uncommon for Los Angeles lenders to ask jumbo loan borrowers to show they have enough cash reserves to cover ten months to one year of mortgage payments.</li>
                                <li>30 days of pay stubs and W2 tax forms stretching back two years, in addition to bank statements and information on any investment accounts.</li>
                                <li>If you’re self-employed, you must show two years of tax returns and at least 60 days of current bank statements.</li>
                                <li>
                                    Jumbo loans are manually underwritten. A finance expert will go through your credit report, assets and bank statements with a fine-toothed comb and bring to light any past missteps. If you have a bankruptcy or foreclosure on your
                                    report, you’ll have a harder time getting a loan.
                                </li>
                                <li>
                                    Your Los Angeles home needs to meet VA appraisal standards (it has to be “clean, sanitary, sound and safe” before you move in). When you close on your loan, a VA appraiser will take a look at the property to make sure it qualifies.
                                </li>
                            </ul>
                            <p>
                                <img src={img2} alt="img-2" />
                                <br />
                                Many government-backed mortgages are designed for moderate- and low-income borrowers. The U.S. Department of Agriculture loan program has strict income limits that make it virtually impossible to qualify for a jumbo loan because you
                                won’t pass the DTI test.
                            </p>
                            <p>
                                The Federal Housing Administration loan requires private mortgage insurance (PMI) for the life of the loan, so using a piggyback loan to bring the balance down to conforming loan limits doesn’t make financial sense. Borrowers would be
                                better served with a non-FHA loan product.
                            </p>
                            <p>
                                The U.S. Department of Veterans Affairs program, however, can be used for a jumbo loan. The VA will insure the portion of your loan that falls under conforming loan limits. The down payment requirement is based on the portion of the
                                loan that is above the conforming loan limit. In some cases, this loan is available with zero down payment and no PMI.
                            </p>
                            <p>Some Los Angeles borrowers will qualify for special loan programs like physician loans, available to licensed doctors and dentists. This program typically offers jumbo loans with zero, 5 or 10 percent down.</p>
                            <h2 id="jumbo-3">Benefits of a Jumbo Mortgage</h2>
                            <ul>
                                <li>Los Angeles Borrowers can get fixed- or adjustable-rate jumbo mortgages with various term options.</li>
                                <li>
                                    You can buy various types of Los Angeles properties with a jumbo loan. As long as you meet your lender’s other requirements, there are no government restrictions on how you can use your jumbo loan. You can use most jumbo mortgages
                                    for primary residences, second homes, vacation houses and investment properties.
                                </li>
                                <li>While conventional mortgage loans usually require a 20% down payment, jumbo loan down payments can be as low as 5%, with 10% a more common figure.</li>
                                <li>The average annual percentage rate (APR) for a jumbo mortgage is often par with conventional mortgages—and in some cases, actually lower.</li>
                                <li>You have the opportunity to get more loan money to purchase a high-quality property.</li>
                            </ul>
                            <h2 id="jumbo-4">Disadvantages of a Jumbo Mortgage</h2>
                            <ul>
                                <li>Jumbo mortgage rates may be slightly higher than those on conforming loans.</li>
                                <li>They have stricter qualification rules than other types of mortgages.</li>
                            </ul>
                            <p>
                                <img src={img3} alt="img-3" />
                            </p>
                            <h2 id="jumbo-5">Frequently Asked Questions</h2>
                            <h4>What are jumbo loan amounts?</h4>
                            <p>
                                Jumbo mortgage loan amounts exceed the current maximum dollar amount guaranteed by GSEs. Overall, if more than $510,400 is needed to finance a home, the home would qualify for a jumbo loan. This amount can vary a little from state to
                                state when you consider high-priced or luxury markets.
                            </p>
                            <h4>What’s the best program for a jumbo loan?</h4>
                            <p>You are not limited to a 30-year fixed rate program with a jumbo mortgage. Many people choose an adjustable rate mortgage (ARM) program to take advantage of a lower interest rate and lower monthly payment.</p>
                            <h4>Does a jumbo loan have a higher interest rate than a conforming loan?</h4>
                            <p>Not necessarily. In the past, jumbo loans generally had higher interest rates than conforming loans. However, jumbo rates are ever changing and may be higher or lower than conforming rates as of late.</p>
                            <h4>If my credit score is low, how can I raise it?</h4>
                            <p>Paying your bills on time, reducing your credit balances, and trying to not apply for credit too often are all ways that you can raise your FICO score.</p>
                            <p>A jumbo loan can be a great fit for Los Angeles homebuyers who are in a strong financial position and want to secure a large loan. But just because you may qualify for one of these loans doesn’t mean you should take one out.</p>
                            <p>
                                Due to the size of the loan, as well as the lack of government insurance, lenders assume greater risk with these mortgages. And if you’re not looking to buy a higher-priced home, or you feel unprepared to take on a substantial,
                                long-term financial commitment, you should probably rethink getting a jumbo home loan.
                            </p>
                            <p>
                                As always, you should borrow with care and crunch the numbers carefully to see what you can truly afford and what kinds of benefits you will receive from a loan like this. It’s a good idea to compare terms to see if taking out a smaller
                                conforming loan, plus a second loan, instead of one big jumbo, might prove better for your finances in the long haul.
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

export default Jumbo;
