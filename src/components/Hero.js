import React from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';
import '../components/Hero.scss';
import logo from '../assets/logo__magic-pay--mobile.png';
import logoDesktop from '../assets/logo__magic-pay.png';

const Hero = () => (
    <div class='jumbotron' className='text-center text-light hero'>
        <Row className='py-5'>
            <Col lg className='text-lg-right py-lg-5'>
                <Image className='d-lg-none' src={logo} />
                <Image className='d-none d-lg-inline-block' src={logoDesktop} />
            </Col>
            <Col lg className='text-lg-left py-lg-5'>
                <p>Pague suas contas pelo nosso APP</p>
                <Button variant="outline-light">Abra sua conta</Button>
            </Col>
        </Row>
    </div>
);

export default Hero;
