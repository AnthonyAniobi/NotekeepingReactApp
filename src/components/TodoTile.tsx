import React from 'react'
import '../styles/Tile.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function TodoTile({ name, image, description }: { name: string, image: string, description: number }) {
    return (
        <div className="tileItem">
            <article className='overlayIcon'>
                <AccessTimeIcon />
                <h5>Some time</h5>
            </article>

            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>{description}</p>

        </div>
    )
}

export default TodoTile