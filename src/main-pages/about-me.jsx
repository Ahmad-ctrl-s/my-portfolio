import { Container, Row, Col, Button, } from 'react-bootstrap';
import personalImg from '../assets/images/personal-img-9.jpg';
import { FaGraduationCap, FaBook, FaPlane, FaRegLightbulb } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdInterests } from "react-icons/md";
import styles from '../assets/styles/about.module.css'
import { Navigate, useNavigate } from 'react-router-dom';
function AboutMe({ children }) {
    const navigate = useNavigate()
    return (
        <>
            <section>
                <Container fluid>
                    <section>
                        <Row className={`${styles['about-row']} pt-5 pt-md-0 px-5 p-md-0`}>
                            <Col xs={12} md={6} className="p-md-0">
                                <div className='w-100 h-100 d-flex flex-column justify-content-center ps-0 ps-md-5 my-3 my-md-0'>
                                    <h1 className={`${styles.name} text-white`}>Ahmad Dakouri</h1>
                                    <p className={`${styles["about-first-state"]}`}>
                                        A front-end developer who builds fast, accessible, and beautiful web experiences.
                                    </p>
                                    <i className={`${styles["about-second-state"]}`}>
                                        I'm driven by the challenge of transforming complex problems into intuitive, beautiful,
                                        and accessible user interfaces. There's nothing more satisfying than writing clean,
                                        efficient code that creates a seamless experience for the user.
                                    </i>
                                    <Button className='button mt-3'>My Resume</Button>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className='p-md-0'>
                                <div className={`${styles['img-md-container']} d-none d-md-inline-block`}>
                                    <img src={personalImg} alt="" />
                                </div>

                                <div className={`${styles['img-xs-container']} d-md-none`}>
                                    <img src={personalImg} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </section>

                    <section>
                        <Row className={`${styles['about-second-row']} mt-5 mx-md-5 px-5 p-md-0`}>

                            <Col xs={12} md={6} className='p-0'>
                                <div className={`${styles['journey-container']} me-md-3`}>
                                    <h2 className={`${styles.journey} fw-bold d-flex align-items-center`}>
                                        <FaPlane className="me-3" />
                                        My Journey
                                    </h2>
                                    <p className='h4 lh-lg'>
                                        Before I was a developer, I was a Telecommunication Engineering student. While I valued the technical foundation it gave me, I always felt something was missing.
                                        I craved a more direct and creative outlet for my problem-solving skills.
                                        The moment I transitioned into front-end development, it clicked. The ability to see my code come to life instantly in a browser,
                                        crafting experiences that people actually interact with, was incredibly fulfilling.
                                        It confirmed I had found the right path.
                                    </p>
                                </div>

                                <div className={`${styles['journey-container']} me-md-3 mt-5`}>
                                    <h2 className={`${styles.journey} fw-bold d-flex align-items-center`}>
                                        <MdInterests className="me-3" />
                                        Hobbies & Interests
                                    </h2>
                                    <p className='h4 lh-lg'>
                                        I'm a documentary fanatic, especially ones about technology, history, and science. It's my favorite way to satisfy my curiosity about how things work and how we got here.
                                    </p>
                                    <p className='h4 lh-lg'>
                                        I make a point to explore new hiking trails around Damascus on weekends. It's the perfect way to disconnect from the screen and recharge creatively.
                                    </p>
                                    <p className='h4 lh-lg'>
                                        I have a knack for remembering how different pieces of code from past projects can be reused in new ones.
                                    </p>
                                </div>
                            </Col>


                            <Col xs={12} md={6} className='p-0 mt-5 mt-md-0'>
                                <div className={`${styles['learning-container']} ms-md-3`}>
                                    <h2 className={`${styles.learning} fw-bold d-flex align-items-center`}>
                                        <FaChalkboardTeacher className='me-3 ' />
                                        Currently Learning
                                    </h2>
                                    <p className='h4 lh-lg'>
                                        I am currently deepening my expertise in React, exploring advanced state management and performance optimization.
                                        I'm also excited to have started my journey into Node.js to understand the backend layer.
                                        My goal is to become a full-stack developer, capable of building robust and seamless applications from the ground up.
                                    </p>
                                </div>



                                <div className="mt-5 ms-md-3">
                                    <h2 className="fw-bold d-flex align-items-center">
                                        <FaBook className="me-3" />
                                        Education & Background
                                    </h2>

                                    <div className="ps-3">

                                        <div className="d-flex align-items-start mb-4">
                                            <FaGraduationCap className="me-3 mt-1" style={{ color: '#fc313b' }} />
                                            <div>
                                                <h5 className="mb-0" style={{ color: 'white' }}>M.Sc. in Computer Science</h5>
                                                <p className="mb-1" style={{ color: '#ccc' }}>Syrian Virtual University <span className="fst-italic">(Ongoing)</span></p>
                                            </div>
                                        </div>


                                        <div className="d-flex align-items-start mb-4">
                                            <FaGraduationCap className="me-3 mt-1" style={{ color: '#fc313b' }} />
                                            <div>
                                                <h5 className="mb-0" style={{ color: 'white' }}>Upgraded Degree in Mobile Communications</h5>
                                                <p className="mb-1" style={{ color: '#ccc' }}>Syrian Virtual University</p>
                                            </div>
                                        </div>


                                        <div className="d-flex align-items-start mb-4">
                                            <FaGraduationCap className="me-3 mt-1" style={{ color: '#fc313b' }} />
                                            <div>
                                                <h5 className="mb-0" style={{ color: 'white' }}>Higher Technical Institute</h5>
                                                <p className="mb-0" style={{ color: '#ccc' }}>Specialization: Medical Equipment Maintenance</p>
                                                <p className="mb-1" style={{ color: '#ccc' }}>Damascus University</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles['learning-container']} ms-md-3 mt-5`}>
                                    <h5 className={`${styles.learning} fw-bold d-flex align-items-center mb-3`}>
                                        <FaRegLightbulb className="me-3" style={{ color: '#fc313b' }}/>
                                        Have a project in mind? Let's discuss how I can help bring it to life.
                                    </h5>
                                    <Button onClick={() => navigate('/contact-me')} className={`${styles['learning-button']} button`} >Get a Free Quote</Button>
                                </div>
                            </Col>

                        </Row>
                    </section>

                </Container>
            </section>
        </>
    )
}
export default AboutMe;