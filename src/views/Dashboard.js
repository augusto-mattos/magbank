import React from 'react';
import { Container, Row, Col, Button, Tabs, Tab, Table } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUser } from '@fortawesome/free-solid-svg-icons'; 

import './Dashboard.scss';

const Dashboard = () => {
    const latestData = [
        {date: '22/07', description: 'Supermercado 4516', value: '252,78'},
        {date: '21/07', description: 'Saque 24h', value: '300,00'},
        {date: '21/07', description: 'Estacionamento', value: '13,00'},
        {date: '20/07', description: 'Aluguel', value: '1250.00,00'},
        {date: '18/07', description: 'BarBar', value: '67,40'},
    ];

    const futureData = [
        {date: '25/07', description: 'Spotify', value: '30,00'},
        {date: '30/07', description: 'Netflix', value: '19,90'},
        {date: '05/08', description: 'Gym', value: '59,00'},
        {date: '05/08', description: 'Decathlon 2/4', value: '123,25'},
    ];

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
            <Col xs={12} lg={3} className='mt-lg-5 pt-lg-4'>
                <h3 className='my-5'>Conta Corrente</h3>
                <h6>
                    <small><strong>Saldo em Conta Corrente</strong></small>
                </h6>
                <h4 className='text-success mb-4'>
                    <small>R$ </small>3.475<small>,92</small>
                </h4>
                <h6>    
                    <small><strong>Cheque especial</strong></small>
                </h6>
                <p className='mb-0'>Limite disponível</p>
                <p className='mb-4'>R$ 5.000,00</p>
                <Button variant='secondary'>Ver extrato</Button>
            </Col>
            <Col xs={12} lg={5} className='mt-lg-5 pt-lg-5'>
                <Tabs className='mt-5 mt-lg-5 pt-lg-5' defaultActiveKey='latest'>
                    <Tab eventKey='latest' title='Últimos lançamentos'>
                        <Table striped borderless>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {latestData.map(({ date, description, value }) => (
                                    <tr>
                                    <td>{date}</td>
                                    <td>{description}</td>
                                    <td>{value}</td>
                                </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey='future' title='Lançamentos futuros'>
                    <Table striped borderless>
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {futureData.map(({ date, description, value }) => (
                                    <tr>
                                    <td>{date}</td>
                                    <td>{description}</td>
                                    <td>{value}</td>
                                </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    </Container>
    )
};

export default Dashboard;
