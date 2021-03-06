import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import banner from '../assets/home.jpg';

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${banner})`, width: '100%' }}>
            <div className="headerContainer">
                <h1>Note Keeper</h1>
                <br />
                <p>GET ORGANIZED</p>
                <br />
                <div >
                    <Link to="notes" className='notes'>
                        <button>Notes</button>
                    </Link>
                    <Link to="todo">
                        <button>Todo</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home