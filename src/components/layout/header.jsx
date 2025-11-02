import { Container, Row, Col, Button } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';


import styles from '../../assets/styles/components-style/header.module.css'

function Header() {
    const fullText = "Hi I'm Ahmad, a Frontend Developer. I build dynamic, data-driven web experiences with clean code. Focused on results, performance, and creating impactful digital solutions for clients.";
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const containerRef = useRef(null);

    useEffect(() => {
        // مؤشر الكتابة الوامض
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        // تأثير الكتابة
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 70);

        return () => {
            clearInterval(cursorInterval);
            clearInterval(typingInterval);
        };
    }, [fullText]);

    return (
        <header className='w-100'>
            <Container fluid >
                <Row>
                    <Col xs={12} className='main-col p-0'>
                        <div className={`${styles['bg-img-container']} d-flex justify-content-center align-items-center flex-wrap`}>
                            {/* <img className={`${styles['bg-img']}`} src={bgImg} alt="" /> */}
                            <div className={`${styles['typing-container']}`} ref={containerRef}>
                                <h2 className= {`${styles['typing-text']} text-center px-md-5 text-white`}>
                                    {text}
                                    <span className={`${styles.cursor}  ${showCursor ? styles.visible : styles.hidden} `}>|</span>
                                </h2>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
export default Header