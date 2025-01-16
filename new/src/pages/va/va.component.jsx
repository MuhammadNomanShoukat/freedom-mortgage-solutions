import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleRight, faMobileScreenButton, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/images/conventional/1.jpg";
import img2 from "../../assets/images/conventional/2.jpg";

import "../../assets/css/style.scss";

const Va = () => {
    return (
        <section id="va">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="page-heading">
                            <h1>VA Home Loans</h1>
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
                            <h2>VA Home Loan Topics Covered</h2>
                            <ul>
                                <li><HashLink to="#va-1">What is a VA Home Loan?</HashLink></li>
                                <li><HashLink to="#va-2">How to Qualify for a VA Home Loan</HashLink></li>
                                <li><HashLink to="#va-3">Types of VA Home Loans</HashLink></li>
                                <li><HashLink to="#va-4">Benefits of a VA Home Loan</HashLink></li>
                                <li><HashLink to="#va-5">Disadvantages of a VA Home Loan</HashLink></li>
                                <li><HashLink to="#va-6">VA Home Loan FAQs</HashLink></li>

                            </ul>
                            <p>
                                <img src="" alt="" />
                            </p>
                            <h2 id="va-1">What is a VA Home Loan?</h2>
                            <p>
                                VA home loans are ones guaranteed by the U.S. Department of Veterans Affairs. They were created by the government in 1944; since then, more than 24 million VA loans have been originated, helping veterans, active duty military members
                                and their families purchase or refinance a home.
                            </p>
                            <p>
                                The fact that these loans are backed by a government agency makes lenders feel more comfortable in offering them, as they pose less risk. As a result, it’s possible to get a VA loan in Los Angeles without a down payment, and with
                                sometimes-looser credit requirements.
                            </p>
                            <p>The basic intention of the VA home loan program is to supply home financing to eligible veterans and to help veterans purchase properties with no down payment. The loan may be issued by qualified Los Angeles lenders.</p>
                            <h2 id="va-2">How to Qualify for a VA Home Loan</h2>
                            <ul>
                                <li>Have at least 90 consecutive days of active service during wartime or at least 181 consecutive days of active service during peacetime.</li>
                                <li>Have more than six years of service in the National Guard or Selective Reserve.</li>
                                <li>
                                    Be the surviving spouse of a service member who died while on active duty or from a service-connected disability and you have not remarried or remarried after age 57 or Dec. 16, 2003. Spouses of prisoners of war or service members
                                    missing in action are also eligible.
                                </li>
                                <li>
                                    Meet the Los Angeles lender’s requirements for credit and income. The VA doesn’t set a minimum credit score for VA loans, but lenders can set their own minimum standards. The lender will also consider your income and debts to
                                    evaluate your ability to repay the mortgage.
                                </li>
                                <li>Borrowers need to show they have the income to make the mortgage payments and they shouldn’t have a huge debt load.</li>
                                <li>While there is no minimum credit score requirement, borrowers might have a hard time getting approved by a lender if they don’t have at least a 620 FICO Score.</li>
                                <li>The Los Angeles property you want to buy must meet safety standards and building codes and will be your primary residence.</li>
                                <li>In order to go through the process, you need to obtain a VA Certificate of Eligibility (COE). Without this certificate, you won’t be able to get your loan.</li>
                            </ul>
                            <p>
                                <img src="" alt="" />
                            </p>
                            <h2 id="va-3">Types of VA Home Loans</h2>
                            <ul>
                                <li>
                                    <strong>VA cash-out refinance</strong> – replaces your mortgage with a new loan while tapping some of your Los Angeles home’s value for things like paying off debt or making home improvements. It also can be used to replace a non-VA
                                    loan with a VA loan.
                                </li>
                                <li><strong>VA IRRRL (also called a streamline refinance loan)</strong> – you can replace an existing VA loan with a mortgage offering a lower interest rate, or move from an adjustable-rate loan to one with a fixed interest rate.</li>
                                <li><strong>VA renovation loans</strong> – let Los Angeles borrowers buy or refinance a home and roll the cost of improvements into the mortgage.</li>
                                <li><strong>VA supplemental loans for home improvements</strong> – can be added to an existing mortgage or included in a VA refinance.</li>
                            </ul>
                            <h2 id="va-4">Benefits of a VA Home Loan</h2>
                            <ul>
                                <li>You can buy a home with no down payment.</li>
                                <li>There is no limit to the amount you can borrow on a VA loan.</li>
                                <li>You won’t have to pay Private Mortgage Insurance (PMI, since the loans are backed by the government.</li>
                                <li>
                                    Closing costs are the various fees and expenses you pay to get a mortgage. The Department of Veterans Affairs limits the lender’s origination fee to no more than 1% of the loan amount and prohibits lenders from charging some other
                                    closing costs.
                                </li>
                                <li>There’s no minimum credit score requirement.</li>
                                <li>Mortgage rates are lower for VA home loans than for FHA and conventional mortgages.</li>
                                <li>The VA offers assistance for struggling borrowers facing a potential foreclosure. The agency’s loan technicians can negotiate with lenders on behalf of borrowers who are having trouble making mortgage payments.</li>
                                <li>There is no prepayment penalty. This means you won’t be fined if you pay off your loan early.</li>
                                <li>You don’t need to be a first-time home buyer in order to get a VA loan. As long as you pay it off each time, you can use the benefit again and again.</li>
                                <li>
                                    Bankruptcy and foreclosure won’t permanently affect your chances. If you’ve filed for bankruptcy or gone through a foreclosure, you can still qualify for a VA loan after two years have passed from the date of the bankruptcy or
                                    foreclosure.
                                </li>
                            </ul>
                            <h2 id="va-5">Disadvantages of a VA Home Loan</h2>
                            <ul>
                                <li>You’re required to pay a VA loan funding fee between 1.25% and 3.3% of the loan amount. The fee is usually included in the loan, so it increases your monthly payment and adds to the interest you pay over the life of the loan.</li>
                                <li>A VA loan can only be used to buy or build a primary residence or to refinance an existing loan. So you won’t be able to buy an investment property or vacation home with one.</li>
                            </ul>
                            <p>
                                <img src="" alt="" />
                            </p>
                            <h2 id="va-6">Frequently Asked Questions</h2>
                            <h4>If I have already obtained one VA loan, can I get another one?</h4>
                            <p>
                                Yes, your eligibility is reusable depending on the circumstances. Normally, if you have paid off your prior VA loan and disposed of the property, you can have your used eligibility restored for additional use. Also, on a one-time only
                                basis, you may have your eligibility restored if your prior VA loan has been paid in full but you still own the property.
                            </p>
                            <h4>Are the children of a living or deceased veteran eligible for the home loan benefit?</h4>
                            <p>No, the children of an eligible veteran are not eligible for the home loan benefit.</p>
                            <h4>What types of repayment options are available?</h4>
                            <p>
                                You have the choice of a traditional fixed payment (constant principal and interest), a graduated payment mortgage, or GPM (low initial payments which gradually rise to a level payment starting in the sixth year), and in some areas,
                                growing equity mortgages, or GEMs (gradually increasing payments with all of the increase applied to principal, resulting in an early payoff of the loan). There is no prepayment penalty.
                            </p>
                            <h4>What is the maximum amount for a VA loan in Los Angeles?</h4>
                            <p>Although there is no maximum VA loan (limited only by the reasonable value or the purchase price), lenders generally limit the maximum VA loan to $417,000.</p>
                            <p>
                                While a VA loan is often used to purchase a home, it can also be used to construct a home. It’s also possible to use VA financing for a cash-out refinance or in conjunction with the Native American Direct Loan program. Finally, you can
                                also use your VA loan benefits with adapted housing grants.
                            </p>
                            <p>In the end, the VA loan program can be a big help to those who have sacrificed their country and want to achieve the dream of homeownership.</p>








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

export default Va;
