import React from 'react';
import '../components/Main.scss';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import cartao from '../assets/cartao.png';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';

const Main = () => (
    <Container className='my-5'>
        <Row>
            <Col xs={12} lg={7} className='mb-5 mb-lg-0 px-5 px-lg-0'>
                <Row>
                <p className='credit-card-title my-5'>Cartão de crédito</p>
                </Row>
                <Row>
                    <Col xs={12} lg={6} className='mb-2'>
                        <Row>
                            <Col xs={2} className='d-flex justify content-center'>
                                <i class="fas fa-credit-card fa-2x"></i>                                 
                            </Col>
                            <Col xs={10} className='h5 text-muted'>
                                <p>Crédito pessoal</p>
                            </Col>
                        </Row>    
                    </Col>
                    <Col xs={12} lg={6} className='mb-2'>
                        <Row>
                            <Col xs={2} className='d-flex justify content-center'>
                                <i class="fas fa-cart-arrow-down fa-2x"></i>                                 
                            </Col>
                            <Col xs={10} className='h5 text-muted'>
                                <p>Pagamentos online</p>
                            </Col>
                        </Row>    
                    </Col>
                    <Col xs={12} lg={6} className='mb-2'>
                        <Row>
                            <Col xs={2} className='d-flex justify content-center'>
                                <i class="fas fa-mobile fa-2x"></i>                                 
                            </Col>
                            <Col xs={10} className='h5 text-muted'>
                                <p>APP</p>
                            </Col>
                        </Row>    
                    </Col>
                    <Col xs={12} lg={6} className='mb-2'>
                        <Row>
                            <Col xs={2} className='d-flex justify content-center'>
                                <i class="fas fa-wallet fa-2x"></i>                                 
                            </Col>
                            <Col xs={10} className='h5 text-muted'>
                                <p>Carteira digital</p>
                            </Col>
                        </Row>    
                    </Col>
                </Row>   
            </Col>
            <Col xs={12} lg={5}>
                <img src={cartao} alt="imagem do cartao de credito" fluid />
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
                <Button variant="success">Abra a sua conta</Button>
            </Col>
        </Row>
    </Container>
);

export default Main;
