import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Row, Col, Form, Button, Image } from 'react-bootstrap';
import logo from '../assets/MAGbank-login.png';

import './Login.scss';

const Login = ({ auth }) => {
    const [name, setName] = useState();
    const [account, setAccount] = useState();
    const navigate = useNavigate();

    const handleSubmit = () => {
        auth.login(name, account, navigate('/dashboard') )
    };

    return (
        <section className='login'>
            <div className='login__container'>
            <Row>
                <Col className='text-center text-light'>
                    <Image src={logo} className='mb-4'/>
                    <Form>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label className='lead'>Nome completo</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label className='lead'>Número da conta</Form.Label>
                            <Form.Control type="number" value={account} onChange={(e) => setAccount(e.currentTarget.value)} />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label className='lead'>Senha</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Button variant="success" type="submit" onClick={handleSubmit}>
                            Entrar
                        </Button>
                    </Form>
                </Col>
            </Row>
            </div>
        </section>
    );
};

export default Login;
