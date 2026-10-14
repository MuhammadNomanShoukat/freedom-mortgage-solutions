import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Form,
  Row,
  Col,
  Container,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import logo from "../../assets/images/logo/logo_1.png";
import "./contact.style.scss";

const ContactForm = ({ showForm, controlForm }) => {
  const [toast, setToast] = useState({
    show: false,
    message: "",
    variant: "success",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // ✅ Yup Validation Schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9+()\-\s]*$/, "Invalid phone number")
      .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
    consent: Yup.boolean().oneOf(
      [true],
      "You must accept the consent to proceed"
    ),
  });

  // ✅ EmailJS submit handler
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
          message: values.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setToast({
        show: true,
        message: "Your message has been sent successfully!",
        variant: "success",
      });

      resetForm();
      setTimeout(controlForm, 1500);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setToast({
        show: true,
        message: "Failed to send message. Please try again.",
        variant: "danger",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ✅ TOAST */}
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
        <Toast
          bg={toast.variant}
          show={toast.show}
          onClose={() => setToast({ ...toast, show: false })}
          delay={4000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">
              {toast.variant === "success" ? "Success" : "Error"}
            </strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            {toast.message}
          </Toast.Body>
        </Toast>
      </ToastContainer>

      {/* ✅ MODAL */}
      <section id="contact-form-modal">
        <Modal
          show={showForm}
          onHide={controlForm}
          size="lg"
          centered
          className="contact-form-modal"
        >
          <Modal.Header closeButton />

          <Modal.Body className="p-0">
            <Container>
              <Row>
                <Col md={5} className="text-center add-bg">
                <div className="left-block">
                  <h4>Get in Touch</h4>
                  <hr />
                  <img src={logo} alt="Logo" className="img-fluid my-3"/>
                  {/* <h3>Freedom Mortgage Solution</h3> */}
                  <hr />
                  <p><strong>Speak to a Loan Specialist:</strong>   707 276  6939</p>
                  <p><strong>Servicing:</strong>  888 602 8005</p>
                  <p><strong>Email:</strong> Info@freedommortgagesolution.com</p>
                  <p><strong>Address:</strong> 1652 W Texas St, Fairfield, CA 94533, United States</p>
                </div>
              </Col>
                <Col md={7}>
                  <div className="right-block">
                    <h4>Send an Email</h4>

                    <Formik
                      initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        message: "",
                        consent: false,
                      }}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({
                        handleSubmit,
                        handleChange,
                        values,
                        touched,
                        errors,
                        isSubmitting,
                      }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                          <Row>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  name="firstName"
                                  placeholder="First Name"
                                  value={values.firstName}
                                  onChange={handleChange}
                                  isInvalid={
                                    touched.firstName && errors.firstName
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.firstName}
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>

                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  name="lastName"
                                  placeholder="Last Name"
                                  value={values.lastName}
                                  onChange={handleChange}
                                  isInvalid={
                                    touched.lastName && errors.lastName
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.lastName}
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  type="email"
                                  name="email"
                                  placeholder="Enter your email"
                                  value={values.email}
                                  onChange={handleChange}
                                  isInvalid={touched.email && errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.email}
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>

                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  name="phone"
                                  placeholder="Phone Number"
                                  value={values.phone}
                                  onChange={handleChange}
                                  isInvalid={touched.phone && errors.phone}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.phone}
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row>
                            <Col lg={12}>
                              <Form.Group className="mb-3">
                                <Form.Control
                                  as="textarea"
                                  rows={3}
                                  name="message"
                                  placeholder="Enter your message"
                                  value={values.message}
                                  onChange={handleChange}
                                  isInvalid={
                                    touched.message && errors.message
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.message}
                                </Form.Control.Feedback>
                              </Form.Group>
                            </Col>
                          </Row>

                          <Form.Group className="mb-3">
                            <Form.Check
                              name="consent"
                              checked={values.consent}
                              onChange={handleChange}
                              isInvalid={touched.consent && errors.consent}
                              label={
                                <small>
                                  By providing a telephone number you consent to
                                  be contacted via SMS. Reply STOP to unsubscribe.
                                  See our{" "}
                                  <a href="#" title="Privacy Policy">
                                    privacy policy
                                  </a>
                                  .
                                </small>
                              }
                            />
                            <div className="invalid-feedback d-block">
                              {errors.consent}
                            </div>
                          </Form.Group>

                          <Button
                            variant="primary"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Sending..." : "Submit"}
                          </Button>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
};

export default ContactForm;
