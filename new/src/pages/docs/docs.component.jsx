import React, { useState, useEffect } from "react";
import { Container, Form, Button, Col, Row, Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleDoubleRight, faMobileScreenButton, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import "../../assets/css/style.scss";
import FileUploadForm from "./fileUploaderForm";

const Docs = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [file, setFile] = useState(null);
    const [fileError, setFileError] = useState('');
    const [formError, setFormError] = useState('');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
            if (!allowedTypes.includes(selectedFile.type)) {
                setFileError('Only PDF, JPG, JPEG, PNG file types are allowed.');
                setFile(null);
            } else {
                setFileError('');
                setFile(selectedFile);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !email) {
            setFormError('Please fill in all fields.');
        } else if (!file) {
            setFormError('Please upload a file.');
        } else {
            setFormError('');
            // Handle form submission here (e.g., send data to API)
            alert('Form submitted successfully!');
        }
    };
    return (
        <section id="about-strategic-finance">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="page-heading">
                            <h1>Upload Documents</h1>
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
                            <FileUploadForm />
                            <Link to="/contact-us" className="contact-btn" style={{ marginTop: "22%" }}>
                                Questions? Contact Strategic Financial Today!
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Docs;
