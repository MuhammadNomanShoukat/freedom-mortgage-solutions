import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleRight, faMobileScreenButton, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/images/conventional/1.jpg";
import img2 from "../../assets/images/conventional/2.jpg";

import "../../assets/css/style.scss";

const AboutStrategicFinancial = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [])
    return (
        <section id="about-strategic-finance">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="page-heading">
                            <h1>Get to Know Strategic Financial</h1>
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
                            <h2>Strategic Financial Topics Covered</h2>
                            <ul>
                                <li><HashLink to="#sf-1">Understanding Strategic Financial Planning</HashLink></li>
                                <li><HashLink to="#sf-2">Why Strategic Financial Planning Matters</HashLink></li>
                                <li><HashLink to="#sf-3">Different Types of Strategic Financial Plans</HashLink></li>
                                <li><HashLink to="#sf-4">Frequently Asked Questions on Strategic Financial Planning</HashLink></li>
                            </ul>
                            <p>
                                Strategic financial planning involves setting financial goals, analyzing your current financial situation, and creating a plan to meet those goals over time. Just like any other type of planning, strategic financial planning requires careful assessment, discipline, and time to develop a sustainable approach for long-term financial success.
                            </p>
                            <h2 id="sf-1">Understanding Strategic Financial Planning</h2>
                            <p>
                                To start your strategic financial planning, it's important to first assess where you stand financially. Take stock of your income, expenses, savings, debts, and investments. Once you understand your current financial situation, you can set specific, measurable, and achievable goals that align with your long-term objectives, whether it’s saving for retirement, purchasing a home, or funding a child’s education.
                            </p>
                            <p>
                                The next step is to create a detailed plan outlining how you will achieve your financial goals. This may involve budgeting, creating emergency savings, making investments, and reducing debt. Regularly review and adjust your plan as circumstances and goals evolve over time.
                            </p>
                            <p>
                                Be mindful of your risk tolerance and consider working with a financial advisor to help guide you through the decision-making process and ensure your plan stays on track. A solid financial strategy not only ensures you meet your goals but also provides peace of mind for the future.
                            </p>

                            <h2 id="sf-2">Why Strategic Financial Planning Matters</h2>
                            <ul>
                                <li>
                                    Creating a roadmap – with strategic financial planning, you create a clear financial roadmap, outlining your goals and the steps needed to reach them. This helps you stay focused and avoid getting off track.
                                </li>
                                <li>Maximizing wealth – strategic planning allows you to make informed investment decisions that can help maximize your wealth over time and take advantage of opportunities for growth.</li>
                                <li>
                                    Debt management – by planning your finances strategically, you can prioritize paying down high-interest debts and avoid unnecessary financial strain.
                                </li>
                                <li>Long-term financial stability – a well-developed strategic financial plan provides security for the future, enabling you to manage expenses, save for emergencies, and have financial flexibility when unexpected events arise.</li>
                                <li>
                                    Meeting financial goals – without a strategic financial plan, it’s easy to miss the financial goals you set for yourself. A plan helps you stay focused and adjust to changing circumstances to ensure you stay on course.
                                </li>
                                <li>Peace of mind – knowing that you have a plan in place to manage your finances provides peace of mind and confidence in your financial future.</li>
                            </ul>
                            <h2 id="sf-3">Different Types of Strategic Financial Plans</h2>
                            <ul>
                                <li>
                                    <strong>Comprehensive Financial Plan</strong> – a comprehensive financial plan includes all aspects of your financial life, including budgeting, saving, investing, and estate planning. This holistic approach ensures that all areas of your financial well-being are aligned with your overall goals.
                                </li>
                                <li>
                                    <strong>Retirement Plan</strong> – a retirement-specific plan focuses on preparing for life after you stop working. This includes saving for retirement, managing investments, and ensuring that you will have enough income to maintain your lifestyle.
                                </li>
                                <li>
                                    <strong>Education Funding Plan</strong> – an education funding plan helps you save and invest for the future education needs of yourself or your children. This can include college savings plans, 529 plans, or other tax-advantaged accounts.
                                </li>
                                <li>
                                    <strong>Debt Management Plan</strong> – if you're struggling with debt, a debt management plan can help you prioritize paying off your debts, manage interest rates, and consolidate loans to make debt repayment more manageable.
                                </li>
                                <li>
                                    <strong>Investment Plan</strong> – an investment-focused financial plan outlines strategies for building wealth through various investment vehicles, including stocks, bonds, real estate, and other assets.
                                </li>
                            </ul>

                            <h2 id="sf-4">Frequently Asked Questions on Strategic Financial Planning</h2>
                            <h4>What is the importance of a financial plan?</h4>
                            <p>
                                A financial plan helps you define your financial goals and outlines a strategy to achieve them. It ensures that you make informed decisions about saving, spending, investing, and debt management, which leads to greater financial stability and security.
                            </p>
                            <h4>How do I get started with financial planning?</h4>
                            <p>
                                Start by assessing your current financial situation. This includes reviewing your income, expenses, savings, debts, and investments. Then, set specific goals, such as saving for retirement or reducing debt. Finally, create a budget and investment strategy to meet these goals.
                            </p>
                            <h4>How often should I review my financial plan?</h4>
                            <p>It's important to review your financial plan at least once a year or whenever significant life changes occur, such as a new job, marriage, or a child being born. This ensures your plan remains aligned with your evolving goals and circumstances.</p>
                            <h4>What are the benefits of working with a financial advisor?</h4>
                            <p>
                                A financial advisor can provide expert advice, help you make informed decisions, and guide you through complex financial strategies. They can also help you manage risk, save on taxes, and stay focused on your long-term financial goals.
                            </p>
                            <p>
                                Strategic financial planning is an essential part of securing your financial future. Whether you’re saving for retirement, paying down debt, or building wealth, having a clear, well-thought-out plan is crucial. If done correctly, it will help you meet your financial goals and give you peace of mind.
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

export default AboutStrategicFinancial;
