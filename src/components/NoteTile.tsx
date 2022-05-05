import React from 'react'
import { Card } from 'react-bootstrap';


function NoteTile({ name, image, description }: { name: string, image: string, description: number }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default NoteTile