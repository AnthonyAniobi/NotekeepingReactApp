import React from 'react'
import modifyImage from '../assets/edit.jpg';
import '../styles/Contact.css';

function Todo() {
    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${modifyImage})` }}>

            </div>
            <div className="rightSide">
                <h1>Contact</h1>
                <form id='contact-form' method='POST'>
                    <label htmlFor='name'>Full Name</label>
                    <input name='name' type='text' placeholder='Enter your name' />
                    <label htmlFor='email'>Full Name</label>
                    <input name='email' type='email' placeholder='Email adress here' />
                    <label htmlFor='message'>Full Name</label>
                    <textarea name='message' rows={7} placeholder='enter your message'></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Todo