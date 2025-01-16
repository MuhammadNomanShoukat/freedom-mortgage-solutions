import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const FileUploadForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [file, setFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    // Handle file upload
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
            if (allowedTypes.includes(selectedFile.type)) {
                setFile(selectedFile);
                setErrorMessage('');
            } else {
                setErrorMessage('Only PDF, JPG, JPEG, PNG files are allowed.');
                setFile(null);
            }
        }
    };

    // Send email with file attachment
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !email || !file) {
            setErrorMessage('Please fill in all fields and upload a file.');
            return;
        }

        // EmailJS service configuration
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('file', file);

        // Using EmailJS to send the email
        emailjs.sendForm('your_service_id', 'your_template_id', formData, 'your_user_id')
            .then((response) => {
                alert('Email sent successfully!');
                setUsername('');
                setEmail('');
                setFile(null);
                setErrorMessage('');
            }, (error) => {
                alert('Failed to send email. Please try again.');
                console.log(error);
            });
    };

    return (
        <Container className="my-4 w-50 mx-auto">
            <h2>File Upload Form</h2>
            <Form onSubmit={handleSubmit}>
                {/* Username Field */}
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                {/* Email Field */}
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                {/* File Upload Field */}
                <Form.Group controlId="fileUpload">
                    <Form.Label>Upload Document</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                    />
                    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                </Form.Group>

                {/* Submit Button */}
                <Button variant="primary" type="submit" className="mt-3">
                    Send Email
                </Button>
            </Form>
        </Container>
    );
};

export default FileUploadForm;
