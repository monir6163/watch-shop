import React from 'react';
import { Card } from 'react-bootstrap';


const Review = (props) => {
    const { name, img, description, rating } = props.review;
    // rating star 
    const displayRateIcon = (rate) => {
        const floorRate = Math.floor(rate);
        let rateIcon = "";

        for (let i = 0; i < floorRate; i++) {
            rateIcon += `<i class="bi bi-star-fill"></i>`;
        }

        if (rate !== floorRate) {
            rateIcon += `<i class="bi bi-star-half"></i>`;
        } else {
            rateIcon += `<i class="bi bi-star"></i>`;
        }

        if (5 - floorRate > 1) {
            for (let i = 0; i < 5 - floorRate - 1; i++) {
                rateIcon += `<i class="bi bi-star"></i>`;
            }
        }
        const ratingIcon = rateIcon.slice(0, -1)
        return ratingIcon;
    };
    return (

        <Card style={{ minHeight: '250px' }} className=" mx-3 p-3">
            <div className="mx-auto">
                <Card.Img variant="top" style={{ width: '100px', height: "100px", borderRadius: '100%', display: 'inline-block' }} src={img} />
            </div>
            <Card.Body className="text-center">
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                    <div>
                        {rating}
                    </div>
                    {
                        `${displayRateIcon(rating)}`
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Review;