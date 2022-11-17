import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons'; 

import './Dashboard.scss';

const Dashboard = () => (
    <Container className='dashboard py-5'>
        <Row>
            <Col xs={12} lg={4}>
                <Row className='align-itens-center mb-5'>
                    <Col xs={3}>
                        <span className='dashboard__user'>
                            <FontAwesomeIcon 
                                icon={faCircle} 
                                size='4x' 
                                color='#f8f9fa'
                            />
                            <FontAwesomeIcon 
                                className='dashboard__user-icon' 
                                icon={faUser} 
                                size='3x' 
                                color='#7c7d7c'
                            />
                        </span>
                    </Col>
                    <Col xs={9}>
                        <h4>Augusto Mattos</h4>
                        <p className='text-muted'>ag: 1234 c/c: 4321-5</p>
                    </Col>
                </Row>
                <div className='d-grid gap-2'>
                    <Button className='dashboard__button dashboard__button--active' variant='link' size='lg' block>
                        Minha conta
                    </Button>
                    <Button className='dashboard__button' variant='link' size='lg' block>
                        Pagamentos
                    </Button>
                    <Button className='dashboard__button' variant='link' size='lg' block>
                        Extrato
                    </Button>
                </div>
            </Col>
            <Col xs={12} lg={3}></Col>
            <Col xs={12} lg={5}></Col>
        </Row>
    </Container>
);

export default Dashboard;
