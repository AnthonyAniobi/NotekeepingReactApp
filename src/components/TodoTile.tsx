import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Card } from 'react-bootstrap';
import AlarmClock from './AlarmClock';

function TodoTile({ name, image, description }: { name: string, image: string, description: number }) {
    return (

        <Card>
            <Card.Img src={image} />
            <Card.ImgOverlay>
                <AlarmClock />
            </Card.ImgOverlay>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default TodoTile