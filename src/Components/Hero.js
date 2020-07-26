import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {
    const { title,subTitle,text} = props 
    return (
        <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
            <Container>
                <Row className=''>
                    <Col md={8} sm={12}>
                        {title && <h2 className='dislay-1 font-weight-bolder'>{title}</h2>}
                        {subTitle && <h4 className='dislay-2 font-weight-light'>{subTitle}</h4>}
                        {text && <p className='font-weight-light'>{text}</p>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;  