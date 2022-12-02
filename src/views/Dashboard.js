import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons'; 

import AccountBalance from '../components/AccountBalance';

import './Dashboard.scss';

const Dashboard = () => {
const [activeLink, setActiveLink ] = useState(0);

    const links = [
        { text: 'Minha conta', path: '/dashboard/' },
        { text: 'Pagamentos', path: '/dashboard/payments' },
        { text: 'Extrato', path: '/dashboard/history' },
    ];

    const data = {
        latestBalance: [
        {date: '22/07', description: 'Supermercado 4516', value: '252,78'},
        {date: '21/07', description: 'Saque 24h', value: '300,00'},
        {date: '21/07', description: 'Estacionamento', value: '13,00'},
        {date: '20/07', description: 'Aluguel', value: '1250.00,00'},
        {date: '18/07', description: 'BarBar', value: '67,40'},
    ],
    futureBalance: [
        {date: '25/07', description: 'Spotify', value: '30,00'},
        {date: '30/07', description: 'Netflix', value: '19,90'},
        {date: '05/08', description: 'Gym', value: '59,00'},
        {date: '05/08', description: 'Decathlon 2/4', value: '123,25'},
    ],
};

    return (
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
                    {links.map(({ text, path }, key ) => (
                        <Link className='dashboard__link' to={path} key={key}>
                                <Button 
                                className={`dashboard__button text-left ${key === activeLink ? 'dashboard__button--active' : ''}`} 
                                variant='link'
                                size='lg'
                                block
                                onClick={() => setActiveLink(key)}
                                >
                                {text}
                            </Button>
                        </Link>    
                        ))}
                </Col>
                <Outlet />  
                
                <AccountBalance data={data} />

            </Row>
        </Container>
    )
};

export default Dashboard;
