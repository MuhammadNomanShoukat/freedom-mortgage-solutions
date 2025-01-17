import React, { useEffect } from "react";
import { Modal, Button, Form, Row, Col, Container } from "react-bootstrap";

import logo from "../../assets/images/logo/logo.png";

import "./contact.style.scss";

const ContactForm = ({ showForm, controlForm }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])
  return (
    <section id="contact-form-modal">
      <Modal
        show={showForm}
        onHide={controlForm}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="contact-form-modal"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="p-0">
          <Container>
            <Row>
              <Col md={5} className="text-center add-bg">
                <div className="left-block">
                  <h4>Get in Touch</h4>
                  <img src={logo} alt="Logo" className="img-fluid my-3" />
                  <h3>Strategic Financial</h3>
                  <p>
                    123 Main Street
                    <br />
                    City, State, ZIP Code
                  </p>
                </div>
              </Col>

              <Col md={7}>
                <div className="right-block">
                  <h4>Send an Email</h4>
                  <Form>
                    <Row>
                      <Col lg={6}>
                        <Form.Group controlId="formLastName" className="mb-3">
                          <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group controlId="formFirstName" className="mb-3">
                          <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Form.Group controlId="formEmail" className="mb-3">
                          <Form.Control
                            type="email"
                            placeholder="Enter your email"
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group controlId="formPhone" className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Phone Number"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <Form.Group controlId="formMessage" className="mb-3">
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter your message"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                  <div className="mt-3">
                    <div className="modal-form-footer">
                      <Form.Check
                        type="checkbox"

                      />
                      <small>
                        By providing a telephone number and submitting the form
                        you are consenting to be contacted by Strategic
                        Financial via SMS text message (our message frequency
                        may vary). Reply STOP to unsubscribe from further
                        messaging. Reply HELP for more information. See our
                        <a
                          href="https://www.strtfinancial.com/privacy-policy/"
                          title="Privacy Policy"
                        >
                          privacy policy
                        </a>
                        .
                      </small>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default ContactForm;
