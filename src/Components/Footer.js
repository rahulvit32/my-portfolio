import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'

// import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer className='mt-5'>
            <Container>
                <Row className='border-top'>
                    <Col className='p-3 social-icons'>
                        <a href='https://www.instagram.com/_raahul_2810_/' target='_blank'><i class="fa fa-instagram fa-lg"></i></a>
                        <a href='https://github.com/rahulvit32' target='_blank'><i class="fa fa-github fa-lg"></i></a>
                        <a href='https://www.linkedin.com/in/rahul-mahajan1998/' target='_blank'><i class="fa fa-linkedin fa-lg"></i></a >
                        <a href='https://www.facebook.com/people/Rahul-Mahajan/100017772844362' target='_blank'><i class="fa fa-facebook fa-lg"></i></a >
                    </Col>
                    
                    <Col className='p-3 made-by'>Made with &#10084; by Rahul Mahajan</Col>
                </Row>
                {/* <Row class="d-flex justify-content-center p-3"></Row> */}
            </Container>
        </footer>
    );

}

export default Footer;