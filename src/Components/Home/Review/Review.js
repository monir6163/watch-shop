import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '../../Shared/Rating/Rating';
import './Review.css';


const Review = (props) => {
    const { name, img, description, rating } = props.review;
    return (

        <Card style={{ height: '260px' }} className=" mx-3 p-3">
            <div className="mx-auto">
                <Card.Img variant="top" style={{ width: '100px', height: "100px", borderRadius: '100%', display: 'inline-block' }} src={img} />
            </div>
            <Card.Body className="text-center">
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description.slice(0, 70)}
                </Card.Text>
                <Rating rating={rating}></Rating>
            </Card.Body>
        </Card>
    );
};

export default Review;