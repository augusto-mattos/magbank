import React from 'react';
import { Button, Col, Tabs, Tab, Table } from 'react-bootstrap';

const AccountBalance = ({ data }) => {
    
    const { latestBalance, futureBalance } = data;
    return(
        <>
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
                                {latestBalance.map(({ date, description, value }) => (
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
                                {futureBalance.map(({ date, description, value }) => (
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
        </>
    );
};

export default AccountBalance;
