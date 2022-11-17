import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons'; 

import './Dashboard.scss';

const Dashboard = () => (
    <Container className='dashboard py-5'>
        <Row>
            <Col xs={12} lg={4}>
                <Row className='align-itens-center'>
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
            </Col>
            <Col xs={12} lg={3}></Col>
            <Col xs={12} lg={5}></Col>
        </Row>
    </Container>
);

export default Dashboard;
