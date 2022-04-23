import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import banner from '../assets/home.jpg';

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${banner})`, width: '100%' }}>
            <div className="headerContainer">
                <h1>Food Corner</h1>
                <p>INDIAN FOOD AT A CLICK</p>
                <Link to="menu">
                    <button>Order Now</button>
                </Link>
            </div>
        </div>
    )
}

export default Home