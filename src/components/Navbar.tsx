import React, { useState } from 'react'
import logo from '../assets/notepad.png';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const homeLink: string = '/';
    const notesLink: string = 'notes';
    const todoLink: string = 'todo';

    const [showLinks, setShowLinks] = useState(false);

    function Click() {
        setShowLinks(!showLinks);
    }

    return (
        <div className='navbar'>
            <div className='leftSide' id={showLinks ? 'open' : 'close'}>
                <img src={logo} alt="" />
                <div className="hiddenLinks">
                    <Link to={homeLink}>Home</Link>
                    <Link to={notesLink}>Notes</Link>
                    <Link to={todoLink}>Todo</Link>

                </div>
            </div>
            <div className="rightSide">
                <Link to={homeLink}>Home</Link>
                <Link to={notesLink}>Notes</Link>
                <Link to={todoLink}>Todo</Link>
                <button onClick={Click}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar