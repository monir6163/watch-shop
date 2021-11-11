import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = (props) => {
    const { _id, title, price, description, img } = props.products;
    return (
        <Col>
            <Card className="h-100 overflow-hidden card-border">
                <div className="overflow-hidden">
                    <Card.Img variant="top" src={img} id="cardimg" />
                </div>
                <Card.Body>
                    <div className="overflow-hidden text-center">
                        <Card.Title>{title}</Card.Title>
                        <Card.Title>${price}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <div className="text-center">
                        <Link to={`/placeorder/${_id}`}>
                            <Button variant="primary">Buy Now</Button>
                        </Link>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default SingleProduct;