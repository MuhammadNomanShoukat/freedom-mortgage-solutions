import React, { useState } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./valuation.style.scss";

const Valuation = () => {
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ message: "", type: "" });

  const showFeedback = (message, type) => {
    setFeedback({ message, type });
    setTimeout(() => {
      setFeedback({ message: "", type: "" });
    }, 4000); // hide after 4 seconds
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!address) {
      showFeedback("Please enter your address.", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        { address },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      showFeedback("Your address has been sent successfully!", "success");
      setAddress("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      showFeedback("Failed to send your address. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="valuation">
      <Container>
        <Row>
          <Col lg={7}>
            <div className="left-section">
              <h3>Instant Home Valuation</h3>
              <Form onSubmit={handleSubmit}>
                <InputGroup className="mb-1">
                  <Form.Control
                    placeholder="Enter your address"
                    aria-label="Home Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <Button variant="primary" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </InputGroup>

                {feedback.message && (
                  <div
                    className={`mt-2 p-2 rounded ${
                      feedback.type === "success"
                        ? "bg-success text-white"
                        : "bg-danger text-white"
                    }`}
                  >
                    {feedback.message}
                  </div>
                )}
              </Form>
            </div>
          </Col>
          <Col lg={5}>
            <div className="right-section">{/* Optional right content */}</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Valuation;
