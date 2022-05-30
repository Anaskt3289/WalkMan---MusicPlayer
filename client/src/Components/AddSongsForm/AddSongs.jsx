import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import {ServerURL} from '../../Constants/Constants'

import AddArtistModal from '../AddArtistModal/AddArtistModal'
import './Styles/AddSongs.css'

function AddSongs() {

    const initialState = {
        songName: '',
        dateReleased: '',
        artist: ''
    }

    const [modalShow, setModalShow] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const [artwork, setArtWork] = useState()
    const [errMsg, setErrMsg] = useState()

    const handleOnchange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };

    const AddSongSubmit = () => {
        if (!(formData.songName && formData.dateReleased && formData.artist && artwork)) {
            setErrMsg("Enter the required details to add the songs")
            window.scrollTo(0, 0);
        } else {
            setErrMsg(null)
            const data = new FormData()
            data.append('artwork', artwork)
            data.append('details', JSON.stringify(formData))

            axios.post(`${ServerURL}/addSongs`, data, config).then((resp) => {
               
              }).catch((err) => {
                console.log(err);
              })

        }
    }

    return (
        <div>
            <div className='AddSongOuter'>
                <h4>Add a New Song</h4>
                <p className='errMsg'>{errMsg}</p>
                <Form>
                    <Form.Group className="mb-3 formGroup" controlId="formBasicEmail">
                        <Form.Label className='formLabel'>Song Name</Form.Label>
                        <Form.Control type="text" name='songName' className='formTextBox' onChange={handleOnchange} />
                    </Form.Group>
                    <Form.Group className="mb-3 formGroup" controlId="formBasicEmail">
                        <Form.Label className='formLabel'>Date Realesed</Form.Label>
                        <Form.Control type="date" name='dateReleased' className='formTextBox' onChange={handleOnchange} />
                    </Form.Group>
                    <Form.Group className="mb-3 formGroup" controlId="formBasicEmail">
                        <Form.Label className='formLabel'>Artwork</Form.Label>
                        <Form.Control type="file" className='formTextBox' onChange={(e) => setArtWork(e.target.files[0])} />
                    </Form.Group>

                    <Form.Group className="mb-3 formGroup" controlId="formBasicEmail">
                        <Form.Label className='formLabel'>Artist</Form.Label>
                        <div className='ArtistDetails'>
                            <Form.Control name='artist' list="artists" id="artists" onChange={handleOnchange} />
                            <datalist id="artists">
                                <option value="Edge" />
                                <option value="Firefox" />
                                <option value="Chrome" />
                                <option value="Opera" />
                                <option value="Safari" />
                            </datalist>
                            <Button className='AddArtistBtn' variant="dark" onClick={() => setModalShow(true)}>Add Artist</Button>
                        </div>
                    </Form.Group>
                    <div className='formBtnsOuter'>
                        <Button variant="secondary" className='formBtns'>Cancel</Button>
                        <Button variant="primary" className='formBtns' onClick={AddSongSubmit}>Save</Button>
                    </div>
                </Form>
            </div>

            <AddArtistModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}

export default AddSongs
