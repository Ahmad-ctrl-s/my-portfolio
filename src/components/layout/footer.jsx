import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { FaUserTie, FaFileAlt, FaComments } from 'react-icons/fa';
import { FaUser, FaCode, FaHeart } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import styles from '../../assets/styles/components-style/footer.module.css'
import { Link, useNavigate } from "react-router-dom";
function Footer() {
    return (
        <>
            <footer className={`${styles['footer-wrapper']}`}>
                <Container fluid>
                    <Row className={`${styles['footer-row']} mt-5 mx-md-5 px-5 p-md-0 justify-content-between `}>


                        <Col xs={6} md={4} lg={3}>
                            <div className="d-flex align-items-start flex-wrap mt-3">
                                <div className={`${styles['footer-title']} d-block w-100 mt-2 mb-3 h3`}>Find Me On</div>
                                <ul className={`${styles['footer-list']} d-flex flex-column flex-wrap align-items-start gap-1 `}>
                                    <li className="d-flex align-items-center h6">
                                        <FaWhatsapp className={`${styles.icon} ${styles['whatsapp-icon']} me-2`} />
                                        <a href="https://wa.me/963992139340" target="blank">Whatsapp</a>
                                        <FaArrowRight className={`${styles['right-arrow']}`} />
                                    </li>
                                    <li className="d-flex align-items-center h6">
                                        <FaGithub className={`${styles.icon} ${styles['github-icon']} me-2`} />
                                        <a href="https://github.com/Ahmad-ctrl-s" target="blank">Github</a>
                                        <FaArrowRight className={`${styles['right-arrow']}`} />
                                    </li>
                                    <li className="d-flex align-items-center h6">
                                        <FaInstagram className={`${styles.icon} ${styles['instagram-icon']} me-2`} />
                                        <a href="https://www.instagram.com/ahmad_dky?igsh=cnliNmtjM2tyZ3Jv" target="blank">Instagram</a>
                                        <FaArrowRight className={`${styles['right-arrow']}`} />
                                    </li>
                                    {/* <li className="d-flex align-items-center h6">
                                        <FaFacebook className={`${styles.icon} ${styles['facebook-icon']} me-2`} />
                                        <a href="https://www.facebook.com/" target="blank">Facebook</a>
                                        <FaArrowRight className={`${styles['right-arrow']}`} />
                                    </li> */}
                                </ul>
                            </div>
                        </Col>
                        <Col xs={6} md={4} lg={3}>
                            <div className="d-flex align-items-start flex-wrap mt-3">
                                <div className={`${styles['footer-title']} d-block w-100 mt-2 mb-3 h3`}>Contact Information</div>

                                <ul className={`${styles['footer-list']} d-flex flex-column flex-wrap align-items-start gap-1 `}>

                                    <li className="d-flex align-items-center h6">
                                        <FaEnvelope className={`${styles.icon} ${styles['email-icon']} me-2`} />
                                        <a href="mailto:ahmaddakouri6@gmail.com" target="blank">ahmaddakouri6</a>
                                        <FaArrowRight className={`${styles['right-arrow']}`} />
                                    </li>

                                    <li className="d-flex align-items-center h6">
                                        <FaPhone className={`${styles.icon} ${styles['phone-icon']} me-2`} />
                                        <a href="tel:+963992139340" target="blank">+963-992-139-340</a>
                                        <FaArrowRight className={`${styles['right-arrow']}`} />
                                    </li>

                                    <li className="d-flex align-items-center h6">
                                        <FaMapMarkerAlt className={`${styles.icon} ${styles['map-icon']} me-2`} />
                                        <a href="">Damascus/ Syria</a>
                                        <FaArrowRight className={`${styles['right-arrow']}`} />
                                    </li>

                                    <li className="d-flex align-items-center h6">
                                        <FaLinkedin className={`${styles.icon} ${styles['linkedin-icon']} me-2`} />
                                        <a href="https://www.linkedin.com/in/ahmad-dakouri-aab159329" target="blank">Linkedin</a>
                                        <FaArrowRight className={`${styles['right-arrow']}`} />
                                    </li>

                                </ul>
                            </div>
                        </Col>

                        <Col xs={6} md={4} lg={3}>
                            <div className="d-flex align-items-start flex-wrap mt-3">

                                <div className={`${styles['footer-title']} d-block w-100 mt-2 mb-3 h3`}>Call to Action</div>

                                <ul className={`${styles['footer-list']} d-flex flex-column flex-wrap align-items-start gap-1 `}>

                                    <li className="d-flex align-items-center h6">
                                        <FaUserTie className={`${styles.icon} ${styles['hire-icon']} me-2`} />
                                        <a href="https://www.linkedin.com/in/ahmad-dakouri-aab159329" target="blank">Hire Me</a>
                                        <FaArrowRight className={`${styles['right-arrow']}`} />
                                    </li>

                                    <li className="d-flex align-items-center h6">
                                        <FaFileAlt className={`${styles.icon} ${styles['my-resume-icon']} me-2`} />
                                        <a href="https://drive.google.com/file/d/1TOs1NXNzDth4z2dTqg396mjVMDCbQVaT/view?usp=drive_link" target="blank">My Resume</a>
                                        <FaArrowRight className={`${styles['right-arrow']}`} />
                                    </li>

                                    <li className="d-flex align-items-center h6">
                                        <FaComments className={`${styles.icon} ${styles['touch-icon']} me-2`} />
                                        {/* <a onClick={() => navigate("/contact-me")} >Get In Touch</a> */}
                                        <Link to="/contact-me">Get In Touch</Link>
                                        <FaArrowRight className={`${styles['right-arrow']}`} />
                                    </li>

                                </ul>
                            </div>
                        </Col>

                        <Col xs={6} md={4} lg={3}>
                            <div className="d-flex align-items-start flex-wrap mt-3">

                                <div className={`${styles['footer-title']} d-block w-100 mt-2 mb-3 h3`}>Take a tour</div>

                                <ul className={`${styles['footer-list']} d-flex flex-column flex-wrap align-items-start gap-1 `}>

                                    <li className="d-flex align-items-center h6">
                                        <FaUser className={`${styles.icon} ${styles['about-me-icon']} me-2`} />
                                        <Link to="/about-me">About Me</Link>
                                        <FaArrowRight className={`${styles['right-arrow']}`} />
                                    </li>

                                    <li className="d-flex align-items-center h6">
                                        <FaCode className={`${styles.icon} ${styles['my-projects-icon']} me-2`} />
                                        <a href="" target="blank">My Projects</a>
                                        <FaArrowRight className={`${styles['right-arrow']}`} />
                                    </li>

                                </ul>
                            </div>
                        </Col>

                        <Col xs={12}>
                            <div className={`${styles['copy-rights-container']} mt-5 text-center`}>

                                <div className={`${styles['copy-rights-first-row']} d-flex justify-content-center align-items-center h5`}>
                                    <p className="m-0 p-0 me-2">© {new Date().getFullYear()}</p>
                                    <i className="m-0 p-0">Ahmad</i>
                                    <span className={`${styles.dot} rounded-circle mt-3 mx-1`} ></span>
                                    <i className="m-0 p-0">Dev. </i>
                                    <p className="m-0 p-0 ms-2">All rights reserved.</p>
                                </div>

                                <p>Designed and built with React and <FaHeart className={`${styles['heart-icon']} ms-1`}/> </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
export default Footer