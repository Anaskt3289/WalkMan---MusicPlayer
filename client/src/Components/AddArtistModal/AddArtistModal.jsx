import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

import './AddArtistModal.css'

function AddArtistModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
           
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Artist
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div  className='ModalBody'>
                <Form>
                    <Form.Group className="mb-3 formGroup" controlId="formBasicEmail">
                        <Form.Label className='formLabel'>Artist Name</Form.Label>
                        <Form.Control type="text" className='formTextBox' />
                    </Form.Group>
                    <Form.Group className="mb-3 formGroup" controlId="formBasicEmail">
                        <Form.Label className='formLabel'>Date of Birth</Form.Label>
                        <Form.Control type="date" className='formTextBox' />
                    </Form.Group>
                    <Form.Group className="mb-3 formGroup" controlId="formBasicEmail">
                        <Form.Label className='formLabel'>Bio</Form.Label>
                        <Form.Control as="textarea" className='formTextBox' rows="3" />
                    </Form.Group>
                </Form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}  variant="secondary" >Close</Button>
                <Button >Save</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddArtistModal
