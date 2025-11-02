import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { FaWhatsapp, FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../assets/styles/contact.module.css'

function ContactMe({ children }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.send("service_ecfjiek", "template_xhn7trq", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }, "l-IS6CJI9WBzo7p2e")
      .then((result) => {
          console.log(result.text);
          alert('Email sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send email.');
      });
    };

    return (
        <>
            <section>
                <Container fluid>
                    <Row className={`${styles['contact-row']} mt-5 mx-md-5 px-5 p-md-0`}>

                        <h2 className="text-md-center mb-3 mb-md-5">Contact Me</h2>

                        {showAlert && (
                            <Alert variant="success" className="text-center">
                                Thank you, I've recieved your message and i'll reply ASAP.
                            </Alert>
                        )}


                        <Col md={6} className='mb-3 mb-md-0 h-auto'>
                            <Card className="border-0 h-100">
                                <Card.Body className="p-4">

                                    <h3>Contact Information</h3>
                                    <p className="mb-3">I am available to work on new projects. Contact me and I will respond as soon as possible.</p>

                                    <div className={`${styles['contact-container']} d-flex align-items-center mb-3`}>
                                        <FaPhone className={`${styles['phone-icon']} me-2`} />
                                        <a href="tel:+963992139340">+963 992-139-340</a>
                                    </div>

                                    <div className={`${styles['contact-container']} d-flex align-items-center mb-3`}>
                                        <FaEnvelope className={`${styles['email-icon']} me-2`} />
                                        <a href='mailto:ahmaddakouri6@gmail.com'>ahmaddakouri6@gmail.com</a>
                                    </div>

                                    <div className={`${styles['contact-container']} d-flex align-items-center mb-3`}>
                                        <FaMapMarkerAlt className={`${styles['map-icon']} me-2`} />
                                        <span>Damascus/ Syria </span>
                                    </div>


                                    <div className="mt-4">
                                        <h3>Find Me On</h3>
                                        <div className="d-flex mt-3">
                                            <a href="#" className={`${styles['whatsapp-social-icon']} ${styles['social-icon']} me-3  `}>
                                                <FaWhatsapp />
                                            </a>
                                            <a href="#" className={`${styles['linkedin-social-icon']} ${styles['social-icon']} me-3  `}>
                                                <FaLinkedin />
                                            </a>
                                            <a href="#" className={`${styles['facebook-social-icon']} ${styles['social-icon']} me-3  `}>
                                                <FaFacebook />
                                            </a>
                                            <a href="#" className={`${styles['instagram-social-icon']} ${styles['social-icon']} me-3  `}>
                                                <FaInstagram />
                                            </a>
                                            <a href="#" className={`${styles['github-social-icon']} ${styles['social-icon']}`}>
                                                <FaGithub className='github-icon' />
                                            </a>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6}>
                            <Card className="border-0">
                                <Card.Body className="p-4">
                                    <h3>Send Me An Email</h3>
                                    <Form onSubmit={sendEmail}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                style={{ backgroundColor: '#2D2D2D', border: '1px solid #444', color: 'white' }}
                                            />
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={5}
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                style={{ backgroundColor: '#2D2D2D', border: '1px solid #444', color: 'white' }}
                                            />
                                        </Form.Group>

                                        <Button
                                            type="submit"
                                            className="w-100 py-2"
                                            style={{ backgroundColor: '#fc313b', border: 'none' }}
                                        >
                                            <FaPaperPlane className="me-2" />
                                            Send Message
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default ContactMe




