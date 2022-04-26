import React from 'react'
import '../styles/Tile.css';
import imageTile from '../assets/todo_tile.jpg';
import TodoTile from '../components/TodoTile';
import AlarmClock from '../components/AlarmClock';
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


function Todo() {
    return (
        <div className="enumerate">
            <h1>Our Notes</h1>
            <div className='addNew'>
                <Link to='/new'>Add a New Note +</Link>

                <AlarmClock />
            </div>
            <div className="enumerateTitle">

                <div className="enumerateList">
                    {data.map((menuItem, key) => {
                        return (<TodoTile key={key} name={menuItem.name} description={menuItem.description} image={menuItem.image} /> as JSX.Element);
                    })}
                </div>
            </div>
        </div>
    )
}

export default Todo