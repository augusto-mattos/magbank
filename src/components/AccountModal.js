import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import './AccountModal.scss';

const AccountModal = ({ show, handleClose }) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='modal-title'>Abra sua conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className='mb-3' controlId='formBasicName'>
                    <Form.Label>Seu nome</Form.Label>
                    <Form.Control type='text' placeholder='Seu nome' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Seu e-mail</Form.Label>
                    <Form.Control type='email' placeholder='Digite seu e-mail' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='formCity'>
                    <Form.Label className='my-1 mr-2' htmlFor='formCitySelect'>
                        Cidade
                    </Form.Label>
                    <Form.Control 
                        as='select'
                        className='my-1 mr-sm-2'
                        id='formCitySelect'
                    >
                        <option>Selecione a cidade</option>
                        <option value="1">Florianópolis - BR</option>
                        <option value="2">Recife - BR</option>
                        <option value="3">La Rochelle - FR</option>
                        <option value="4">Besançon - FR</option>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Li e concordo com os termos de uso" />
                </Form.Group>

            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Criar conta
          </Button>
        </Modal.Footer>
      </Modal>
);

export default AccountModal; 
