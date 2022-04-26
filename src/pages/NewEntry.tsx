import React from 'react'
import modifyImage from '../assets/edit.jpg';
import '../styles/Edit.css';

function NewEntry() {
    return (
        <div className="edit">
            <div className="leftSide" style={{ backgroundImage: `url(${modifyImage})` }}>

            </div>
            <div className="rightSide">
                <h1>New Notes</h1>
                <form id='contact-form' method='POST'>
                    <label htmlFor='name'>Title</label>
                    <input name='name' type='text' placeholder='Enter title of note' />
                    <label htmlFor='email'>Short description</label>
                    <input name='email' type='text' placeholder='Enter a short description of note' />
                    <label htmlFor='notes'>Notes</label>
                    <textarea name='notes' rows={7} placeholder='enter your notes'></textarea>
                    <button type='submit'>Save note</button>
                </form>
            </div>
        </div>
    )
}

export default NewEntry;