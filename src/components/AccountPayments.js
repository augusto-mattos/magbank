import React from 'react';
import { Col, Button, Tabs, Tab, Form, Row } from 'react-bootstrap';

import './AccountPayments.scss';

const AccountPayments = () => (
        <Col xs={12} lg={8} className='mt-lg-5 pt-lg-5'>
            <h3 className='mt-4'>Pagamentos</h3>
            <Tabs className='mt-5 mt-lg-3 pt-lg-2' defaultActiveKey='boleto'>
                <Tab eventKey='boleto' title='Boleto'>
                    <Form>
                        <Form.Group controlId='formBarCode' className='my-5'>
                            <Form.Label><strong>Código de barras</strong></Form.Label>
                            <Form.Control type='number' placeholder='Insira o código de barras'/>
                        </Form.Group>
                        <Form.Group controlId='formPaymentType' className='mb-5'>
                            <Form.Label><strong>Forma de pagamento</strong></Form.Label>
                            <div className='d-flex'>
                            <Form.Check
                                type='radio'
                                id='debit'
                                label='Débito em conta corrente'
                                className='radio-debit' 
                                name='paymentType'
                            />
                            <Form.Check
                                type='radio'
                                id='credit'
                                className='radio-credit'
                                label='Cartão de crédito'
                                name='paymentType' 
                            />
                            </div>
                        </Form.Group>
                        <Button variant='success'>Continuar</Button>
                    </Form>        
                </Tab>
                <Tab eventKey='transfer' title='Transferência'>
                <Form>
                    <Row>
                        <Col>
                            <Form.Label className='mt-4'>Banco</Form.Label>
                            <Form.Select>
                                <option>Selecione</option>
                                <option value='1'>banco X</option>
                                <option value='2'>banco Y</option>
                                <option value='3'>banco Z</option>
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Label className='mt-4'>Agência</Form.Label>
                            <Form.Control type='number'/>
                        </Col>
                        <Col>
                            <Form.Label className='mt-4'>Conta corrente</Form.Label>
                            <Form.Control type='number'/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label className='mt-4'>Valor da transferência</Form.Label>
                            <Form.Control type='number'/>
                        </Col>
                        <Col>
                            <Form.Label className='mt-4'>Identificação nos extratos</Form.Label>
                            <Form.Control />
                        </Col>
                    </Row>
                    <Button className='my-5' variant='success'>Continuar</Button>
                </Form>
                </Tab>
            </Tabs>
        </Col>
);

export default AccountPayments;
