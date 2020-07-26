import React from 'react';
import Hero from '../Components/Hero'
// import Carousel from '../Components/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CertificatePage(props) {
    return (
        <div>
            <Hero title={props.title} text={props.text} />
            <Container className='justify-content-center' style={{paddingLeft: '3rem'}}>
                <Row>
                    <Col>
                        1. <span><a href="https://drive.google.com/file/d/1B6IWdSGd871ToKUc5IP95ejXb8yZi_qX/view?usp=sharing">Internship Certificate</a></span>
                        <p></p>
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col>
                        2. <span><a href="https://drive.google.com/file/d/1-5qO5eNRpRu7fILm79zAwfyFXH77ZQEm/view?usp=sharing">Competitive Programming in C++</a></span>
                        <p></p>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        3. <span><a href="https://drive.google.com/file/d/1_Du-tz9s_ZydB3CXwvopt-Yx3wvsnZBB/view?usp=sharing">Data Structures in C++</a></span>
                        <p></p>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        4. <span><a href="https://drive.google.com/file/d/14L7z2QeM3e907ulKFEaQt6MvdMXWs_Pd/view?usp=sharing">Deep Dive in C++</a></span>
<p></p>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        5. <span><a href="https://drive.google.com/file/d/1wt4sRX2vJ_x6xHWOi8A8Ry6fJ04pd07Z/view?usp=sharing">Natural Language Processing with TensorFlow</a></span>
<p></p>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        6. <span><a href="https://drive.google.com/file/d/14cMZxPjLzhTtAbeYXhEZeHMXNJ8l9Zzg/view?usp=sharing">Java 2.0</a></span>
                        <p></p>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        7. <span><a href="">Technical Fest (QubIT)</a></span>
                        <p></p>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col>
                        8. <span><a href="https://drive.google.com/file/d/1O0ginmcFidBIu-fwlYMrwKfhbTI-CnOu/view?usp=sharing">College Grade History</a></span>
                        <p></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CertificatePage;  