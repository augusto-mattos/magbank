import React from 'react';
import { Col, Table, } from 'react-bootstrap';

const AccountHistory = ({ data }) => {
    const { history } = data;

    return (
        <Col xs={12} lg={8} className='mt-lg-5 pt-lg-5'>
            <h3 className='my-4'>Extrato da conta corrente</h3>
            <Table striped borderless>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Valor (R$)</th>
                        <th>Saldo (R$)</th>                            
                    </tr>
                </thead>
                <tbody>
                    {history.map(({ date, description, value, balance }) => (
                        <tr>
                            <td>{date}</td>
                            <td>{description}</td>
                            <td className='fw-semibold text-danger text-end'>{value}</td>
                            <td className='fw-semibold text-primary text-end'>{balance}</td>
                        </tr>
                    ))}
                </tbody>                                           
            </Table>
        </Col>
    )
};

export default AccountHistory;
