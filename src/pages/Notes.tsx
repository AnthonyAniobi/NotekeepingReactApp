import React from 'react'
import '../styles/Tile.css';
import imageTile from '../assets/notes_tile.jpg';
import TileItem from '../components/NoteTile';
import { Link } from 'react-router-dom';

const data = [
    {
        name: 'Find Pen',
        image: imageTile,
        description: 250,
    },
    {
        name: 'Clean house',
        image: imageTile,
        description: 280,
    },
    {
        name: 'Mow Lawn',
        image: imageTile,
        description: 350,
    },
]

function Notes() {
    return (
        <div className="enumerate">
            <h1>Our Notes</h1>
            <div className='addNew'>
                <Link to='/new'>Add a New Note +</Link>

                <div></div>
            </div>
            <div className="enumerateTitle">

                <div className="enumerateList">
                    {data.map((menuItem, key) => {
                        return (<TileItem key={key} name={menuItem.name} description={menuItem.description} image={menuItem.image} /> as JSX.Element);
                    })}
                </div>
            </div>
        </div>
    )
}

export default Notes