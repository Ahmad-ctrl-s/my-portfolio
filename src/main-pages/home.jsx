import { Row, Col, Container, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AboutMe from './about-me'
import personalImg1 from '../assets/images/personal-img-8.jpg'
import testVideo from '../assets/videos/test.mp4'

import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaPython } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import { FaComments, FaPencilRuler, FaCode, FaCheckDouble } from "react-icons/fa";


import styles from '../assets/styles/home.module.css'




function Home({ children }) {

    const processSteps = [
        {
            id: 1,
            icon: <FaComments />,
            title: "Consultation & Planning",
            description: "We discuss your project in detail to define goals, requirements, and timeline to ensure a complete understanding of your vision."
        },
        {
            id: 2,
            icon: <FaPencilRuler />,
            title: "Design & Prototyping",
            description: "I create wireframes and prototypes to ensure we're on the right track."
        },
        {
            id: 3,
            icon: <FaCode />,
            title: "Development & Execution",
            description: "I build your site using modern, clean code and best practices for optimal performance and quality."
        },
        {
            id: 4,
            icon: <FaCheckDouble />,
            title: "Testing & Delivery",
            description: "I thoroughly test the website across all devices and browsers before final delivery with necessary support."
        }
    ];


    return (
        <>
            <Container fluid>
                <Row className={`${styles['home-first-row']} mt-5 mx-md-5 px-5 p-md-0`}>
                    <Col xs={12} md={6} className=''>
                        <div className={`${styles.name} h1`}>Ahmad Dakouri</div>


                        <div className={`${styles.about} h4 lh-lg`}>
                            A dedicated Frontend Developer specializing in building fast,
                            engaging, and SEO-optimized websites using React, JavaScript, and Bootstrap.
                            I transform complex ideas into clean,
                            scalable code and leverage data-driven insights to ensure your project not only looks exceptional but also delivers measurable results.
                            I am committed to clear communication, reliable deadlines, and building solutions that truly meet your business needs.
                            Let's connect to discuss how I can bring your next project to life. <Link className='read-more' to="/about-me">Read More...</Link>
                        </div>

                        <div className='d-flex justify-content-start mt-auto'>
                            <Button href="/contact-me" className='button'>Contact Me</Button>
                        </div>
                    </Col>

                    <Col xs={12} md={6} className='main-col'>
                        <div className={`${styles['personal-img-container']}`}>
                            <img className={`${styles['personal-img']}`} src={personalImg1} alt="" />
                        </div>
                    </Col>
                </Row>

                <Row className={`${styles['home-second-row']} mt-5 mx-md-5 px-5 p-md-0`}>

                    <Col xs={12} md={6}>
                        <h2 className={`${styles['work-Process']}`}>My Work Process</h2>
                        <Row>
                            <Col xs={12}>
                                {processSteps.map(step => (
                                    <div key={step.id} className={`${styles['process-card']}`}>
                                        <div className={`${styles['step-number']}`}>{step.id}</div>
                                        <div className={`${styles.icon}`}>{step.icon}</div>
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                    </div>
                                ))}
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={12} md={6}>
                        <h2 className={`${styles['recent-project']}`}>
                            Working on
                        </h2>
                        <Card className={`${styles.card}`}>
                            <video className='card-video' autoPlay muted loop>
                                <source src={testVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <Card.Body className='d-none d-lg-block'>
                                <Card.Title className='h1'>Heaven's Resin</Card.Title>
                                <Card.Text className={`${styles["card-text"]}`}>
                                    Heavens Resin is a fully responsive and modern e-commerce website designed to showcase and sell unique, handcrafted resin art pieces.
                                    The project's core objective was to create an immersive online gallery experience that highlights the artistry and vibrancy of the products while ensuring a smooth and intuitive user journey from browsing to checkout.
                                    Built from the ground up, I developed the front-end using a clean and maintainable tech stack: HTML5 for structure, CSS3 for custom animations and responsive styling, and JavaScript (ES6+)
                                    to create interactive product galleries and dynamic shopping cart functionality. The Bootstrap 5 framework was leveraged to accelerate development and guarantee a flawless,
                                    mobile-first experience across all device sizes. The design emphasizes visual storytelling, with a focus on large,
                                    high-quality imagery and a minimalist interface that lets the artwork itself take center stage.
                                </Card.Text>
                                <Button className='button card-btn'>Discuss Your Idea!</Button>
                            </Card.Body>
                            <Card.Body className='d-block d-lg-none'>
                                <Card.Title className='h1'>Heaven's Resin</Card.Title>
                                <Card.Text className={`${styles["card-text"]}`}>
                                    Heavens Resin is a fully responsive and modern e-commerce website designed to showcase and sell unique, handcrafted resin art pieces.
                                    The project's core objective was to create an immersive online gallery experience that highlights the artistry and vibrancy of the products while ensuring a smooth and intuitive user journey from browsing to checkout.
                                    Built from the ground up.
                                </Card.Text>
                                <Button className='button card-btn'>Discuss Your Idea!</Button>
                            </Card.Body>
                        </Card>
                        <Row>
                            <Col xs={12} className='mt-5'>
                                <h2 className={`${styles['write']}`}>
                                    I Write
                                </h2>
                                <div className={`${styles['badges-container']}`}>
                                    <div className={`${styles['badge-style']}`}>
                                        <FaHtml5 className={`${styles['badge-icon']}`} style={{ color: '#e34f26' }} />
                                        <span>HTML</span>
                                    </div>
                                    <div className={`${styles['badge-style']}`}>
                                        <FaCss3Alt className={`${styles['badge-icon']}`} style={{ color: '#264de4' }} />
                                        <span>CSS</span>
                                    </div>
                                    <div className={`${styles['badge-style']}`}>
                                        <FaBootstrap className={`${styles['badge-icon']}`} style={{ color: '#7952b3' }} />
                                        <span>Bootstrap</span>
                                    </div>
                                    <div className={`${styles['badge-style']}`}>
                                        <SiTailwindcss className={`${styles['badge-icon']}`} style={{ color: '#38bdf8' }} />
                                        <span>Tailwind CSS</span>
                                    </div>
                                    <div className={`${styles['badge-style']}`}>
                                        <SiJavascript className={`${styles['badge-icon']}`} style={{ color: '#f7df1e' }} />
                                        <span>JavaScript</span>
                                    </div>
                                    <div className={`${styles['badge-style']}`}>
                                        <FaReact className={`${styles['badge-icon']}`} style={{ color: '#61dafb' }} />
                                        <span>React Js</span>
                                    </div>
                                    <div className={`${styles['badge-style']}`}>
                                        <FaPython className={`${styles['badge-icon']}`} style={{ color: '#3776ab' }} />
                                        <span>Python</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>

            </Container >

        </>
    )
}
export default Home










