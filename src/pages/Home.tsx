import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import banner from '../assets/home.jpg';
import AlarmClock from '../components/AlarmClock';

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${banner})`, width: '100%' }}>
            <div className="headerContainer">
                <h1>Note Keeper</h1>
                <p>GET ORGANIZED</p>
                <AlarmClock />
                <div>
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