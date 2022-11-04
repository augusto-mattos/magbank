import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookSquare,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/MAGbank-logo.png';
import applestore from '../assets/app-store.png';
import googleplay from '../assets/google-play.png';
import './Footer.scss';

const Footer = () => (
    <footer className='footer'>
        <Container>
            <Row className='text-center py-5'>
                <Col xs={12} lg={6} className='text-lg-start my-3'>
                <Image src={logo} />
                </Col>
                <Col xs={12} lg={4} className='my-3'>
                    <Image src={applestore} className='px-2'/>
                    <Image src={googleplay} className='px-2'/>
                </Col>
                <Col xs={12} lg={2} className='align-content-center justify-itens-center my-3'>
                    <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon 
                        icon={faFacebookSquare} 
                        color='#7c7c7c' 
                        size='2x' 
                        className='px-1'
                        />
                    </a>
                    <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon 
                        icon={faTwitter} 
                        color='#7c7c7c' 
                        size='2x' 
                        className='px-1'
                        />
                    </a>
                    <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon 
                        icon={faYoutube} 
                        color='#7c7c7c' 
                        size='2x' 
                        className='px-1'
                        />
                    </a>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;
