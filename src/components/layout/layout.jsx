import Header from "./header";
import Footer from "./footer";
import { FaHome, FaProjectDiagram, FaUserAstronaut, FaPaperPlane, FaGithub } from 'react-icons/fa';
import { Container, Row, Col, Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FiLayers } from "react-icons/fi";
import { TfiUser } from "react-icons/tfi";
import { FiMail } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import styles from '../../assets/styles/components-style/layout.module.css'








function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation()
    const isHomePage = location.pathname === "/";
    const [buttonRotated, setButtonRotated] = useState(false);

    useEffect(() => {
        setButtonRotated(sidebarOpen);
    }, [sidebarOpen]);

    const handleButtonClick = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleClose = () => {
        setSidebarOpen(false);
    };

    return (
        <>
            <Container fluid className="main-container p-0">
                <Row className="me-0">
                    <Col xs={12} md={3} lg={3} xl={2} className="main-col p-0">
                        <>
                            {/* Desktop Sidebar (always visible on lg+) */}
                            <div className={`${styles['desktop-navbar-container']} d-none d-md-block ms-0 `}>
                                <Navbar className="h-100 flex-column align-items-start">
                                    <Container fluid className="h-100 flex-column justify-content-start">
                                        <Navbar.Brand href="#" className="my-5 mx-0 ps-xl-5 w-100 d-flex justify-content-start align-items-center text-white">
                                            <div className={`${styles['navbar-brand-container']} mx-0 px-0 w-100 d-flex justify-content-start align-items-center fw-bold`}>
                                                <i className="m-0 p-0">Ahmad</i>
                                                <span className={`${styles.dot} rounded-circle align-self-end mb-2 mx-1`} ></span>
                                                <i className="m-0 p-0">Dev</i>
                                            </div>
                                        </Navbar.Brand>

                                        <Nav className="flex-column w-100 sticky-top">
                                            <Nav.Link as={Link} to="/" className={`${styles['nav-link']} ${location.pathname === "/" ? styles.active : ""} ps-xl-5 my-3 text-white d-flex justify-content-start align-items-center `}>
                                                <IoHomeOutline />
                                                <span className="ms-2">Home</span>
                                            </Nav.Link>

                                            {/* <Nav.Link as={Link} to="/my-projects"
                                                className={`${styles['nav-link']} ${location.pathname === "/my-projects" ? styles.active : ""} ps-xl-5 my-3 text-white d-flex justify-content-start align-items-center `}>
                                                <FiLayers />
                                                <span className="ms-2">My Projects</span>
                                            </Nav.Link> */}

                                            <Nav.Link as={Link} to="/about-me"
                                                className={`${styles['nav-link']} ${location.pathname === "/about-me" ? styles.active : ""} ps-xl-5 my-3 text-white d-flex justify-content-start align-items-center `}>
                                                <TfiUser />
                                                <span className="ms-2">About Me</span>
                                            </Nav.Link>

                                            <Nav.Link as={Link} to="/contact-me"
                                                className={`${styles['nav-link']} ${location.pathname === "/contact-me" ? styles.active : ""} ps-xl-5 my-3 text-white d-flex justify-content-start align-items-center `}>
                                                <FiMail />
                                                <span className="ms-2">Contact Me</span>
                                            </Nav.Link>

                                            {/* <Nav.Link as={Link} to="/my-github"
                                                className={`${styles['nav-link']} ${location.pathname === "/my-github" ? styles.active : ""} ps-xl-5 my-3 text-white d-flex justify-content-start align-items-center `}>
                                                <FiGithub />
                                                <span className="ms-2">My Github</span>
                                            </Nav.Link> */}
                                        </Nav>
                                    </Container>
                                </Navbar>
                            </div>

                            {/* Mobile Toggle Button (hidden on desktop) */}
                            <div className="d-flex d-md-none justify-content-between w-100 px-3 py-1">


                                <Button
                                    className={`d-md-none ${styles['menu-button']} ${buttonRotated ? styles.rotated : ''}`}
                                    onClick={handleButtonClick}
                                >
                                    ☰
                                </Button>

                                <Navbar.Brand href="#" className="mx-0 ps-xl-5 d-flex justify-content-start align-items-center text-white">
                                    <div className={`${styles['navbar-brand-container']} mx-0 px-0 w-100 d-flex justify-content-start align-items-center fw-bold`}>
                                        <i className="m-0 p-0">Ahmad</i>
                                        <span className={`${styles.dot} rounded-circle align-self-end mb-2 mx-1`} ></span>
                                        <i className="m-0 p-0">Dev</i>
                                    </div>
                                </Navbar.Brand>

                                {/* Mobile Offcanvas Sidebar */}
                                <Navbar.Offcanvas
                                    show={sidebarOpen}
                                    onHide={handleClose}
                                    placement="start"
                                    className={`${styles.offcanvas} w-75`}
                                >
                                    <Offcanvas.Header closeButton className=" custom-close-btn">
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <Nav className="flex-column ">

                                            <Nav.Link as={Link} to="/" onClick={handleClose} className={` d-flex text-white align-items-center my-1`}>
                                                <FaHome color="#FF6B35" className="me-2" />
                                                <span>Home</span>
                                            </Nav.Link>

                                            {/* <Nav.Link as={Link} to="/my-projects" onClick={handleClose} className={` d-flex text-white align-items-center my-1`}>
                                                <FaProjectDiagram color="#9B59B6" className="me-2" />
                                                <span>My Projects</span>
                                            </Nav.Link> */}

                                            <Nav.Link as={Link} to="/about-me" onClick={handleClose} className={` d-flex text-white align-items-center my-1`}>
                                                <FaUserAstronaut color="#1ABC9C" className="me-2" />
                                                <span>About Me</span>
                                            </Nav.Link>

                                            <Nav.Link as={Link} to="/contact-me" onClick={handleClose} className={` d-flex text-white align-items-center my-1`}>
                                                <FaPaperPlane color="#3498DB" className="me-2" />
                                                <span>Contact Me</span>
                                            </Nav.Link>

                                            {/* <Nav.Link as={Link} to="/my-github" onClick={handleClose} className={` d-flex text-white align-items-center my-1`}>
                                                <FaGithub color="#6E5494" className="me-2" />
                                                <span>My Github</span>
                                            </Nav.Link> */}

                                        </Nav>
                                    </Offcanvas.Body>
                                </Navbar.Offcanvas>
                            </div>
                        </>
                    </Col>

                    <Col xs={12} md={9} lg={9} xl={10} className="main-col p-0">
                        {isHomePage && <Header />}
                        <main >
                            {children}
                        </main>
                        <Footer />
                    </Col>
                </Row>
            </Container>
            {console.log(location.pathname)}
        </>
    )
}
export default Layout