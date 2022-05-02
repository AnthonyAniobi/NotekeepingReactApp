import React from 'react'
import '../styles/Tile.css';

function NoteTile({ name, image, description }: { name: string, image: string, description: number }) {
    return (
        <div className="tileItem">
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>{description}</p>

        </div>
    )
}

export default NoteTile