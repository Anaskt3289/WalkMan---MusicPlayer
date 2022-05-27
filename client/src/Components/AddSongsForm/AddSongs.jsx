import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

import './Styles/AddSongs.css'

function AddSongs() {
    return (
        <div>
            <div className='AddSongOuter'>
                <h4>Add a New Song</h4>
                <Form>
                    <Form.Group className="mb-3 formGroup" controlId="formBasicEmail">
                        <Form.Label className='formLabel'>Song Name</Form.Label>
                        <Form.Control type="text" className='formTextBox' />
                    </Form.Group>
                    <Form.Group className="mb-3 formGroup" controlId="formBasicEmail">
                        <Form.Label className='formLabel'>Date Realesed</Form.Label>
                        <Form.Control type="text" className='formTextBox' />
                    </Form.Group>
                    <Form.Group className="mb-3 formGroup" controlId="formBasicEmail">
                        <Form.Label className='formLabel'>Artwork</Form.Label>
                        <Form.Control type="file" className='formTextBox' />
                    </Form.Group>
                    <Form.Group className="mb-3 formGroup" controlId="formBasicEmail">
                        <Form.Label className='formLabel'>Song</Form.Label>
                        <Form.Control type="file" className='formTextBox' />
                    </Form.Group>

                    <Form.Group className="mb-3 formGroup" controlId="formBasicEmail">
                        <Form.Label className='formLabel'>Artist</Form.Label>
                        <div className='ArtistDetails'>
                            <Form.Control list="browsers" name="browser" id="browser" />
                            <datalist id="browsers">
                                <option value="Edge" />
                                <option value="Firefox" />
                                <option value="Chrome" />
                                <option value="Opera" />
                                <option value="Safari" />
                            </datalist>
                            <Button className='AddArtistBtn' variant="dark">Add Artist</Button>
                        </div>
                    </Form.Group>
                    <div className='formBtnsOuter'>
                        <Button variant="secondary" className='formBtns'>Cancel</Button>
                        <Button variant="primary" className='formBtns'>Save</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default AddSongs
