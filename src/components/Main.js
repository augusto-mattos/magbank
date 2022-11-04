import React from 'react';
import '../components/Main.scss';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {
    faCreditCard,
    faMobile,
    faCartArrowDown,
    faWallet,
} from '@fortawesome/free-solid-svg-icons';
import cartao from '../assets/cartao.png';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
import IconText from './IconText';

const Main = () => (
    <Container className='my-5'>
        <Row>
            <Col xs={12} lg={7} className='mb-5 mb-lg-0 px-5 px-lg-0'>
                <Row>
                <p className='credit-card-title my-5'>Cartão de crédito</p>
                </Row>
                <Row>
                    <Col xs={12} lg={6} className='mb-3'>
                        <IconText icon={faCreditCard} size={2} color='#f05656' textClassName='h5 text-muted'>
                            Crédito pessoal
                        </IconText>
                    </Col>
                    <Col xs={12} lg={6} className='mb-3'>
                        <IconText icon={faMobile} size={2} color='#f05656' textClassName='h5 text-muted'>
                            APP
                        </IconText>
                    </Col>
                    <Col xs={12} lg={6} className='mb-3'>
                        <IconText icon={faCartArrowDown} size={2} color='#f05656' textClassName='h5 text-muted'>
                            Pagamentos online
                        </IconText>
                    </Col>
                    <Col xs={12} lg={6} className='mb-3'>
                        <IconText icon={faWallet} size={2} color='#f05656' textClassName='h5 text-muted'>
                            Carteira digital
                        </IconText>
                    </Col>
                </Row>   
            </Col>
            <Col xs={12} lg={5}>
                <img src={cartao} alt="imagem do cartao de credito" className='creditcard' />
            </Col>
        </Row>
        <Row className='blog'>
            <Col xs={12} lg={4}>
                <Card className='mx-auto my-5'>
                    <Card.Img variant="top" src={blog1} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>Lorem ipsum dolor sit</Card.Title>
                        <Card.Text className='cardText'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue.
                        </Card.Text>
                        <Button variant="danger" className=' my-2'>Peça já</Button>
                    </Card.Body>
                </Card>
            </Col>    
            <Col xs={12} lg={4}>
                <Card className='mx-auto my-5'>
                    <Card.Img variant="top" src={blog2} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>Lorem ipsum dolor sit</Card.Title>
                        <Card.Text className='cardText'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue.
                        </Card.Text>
                        <Button variant="danger" className=' my-2'>Peça já</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} lg={4}>
                <Card className='mx-auto my-5'>
                    <Card.Img variant="top" src={blog3} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>Lorem ipsum dolor sit</Card.Title>
                        <Card.Text className='cardText'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue.
                        </Card.Text>
                        <Button variant="danger" className=' my-2'>Peça já</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
            <Col md={{ span: 6, offset: 4 }}>
                <Button variant='success' size='lg'>Abra a sua conta</Button>
            </Col>
        </Row>
    </Container>
);

export default Main;
