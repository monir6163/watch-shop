import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import './ShopBrand.css';

const ShopBrand = () => {
    return (
        <section className="mb-3" data-aos="fade-up"
            data-aos-duration="1000">
            <div className="container">
                <h2 className="text-uppercase text-center abril-font">Shop By Brand</h2>
                <div className="row mt-3">
                    <div className="col-md-3">
                        <div className="card-container">
                            <Col className="py-2">
                                <Card className="h-100 border-0 card-border position-relative">
                                    <Card.Img variant="top" className="img-fluid card-img" src="https://i.ibb.co/pLNX6Nz/banner-9.png" />
                                    <div className="middle">
                                        <div className="card-btn">
                                            <Button variant="outline-primary" className="fs-6 fw-bolder text-white abril-font">Buy Now</Button>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card-container">
                            <Col className="py-2">
                                <Card className="h-100 border-0 card-border position-relative">
                                    <Card.Img variant="top" className="img-fluid card-img" src="https://i.ibb.co/dJ94C6P/cat-1.png" />
                                    <div className="middle">
                                        <div className="card-btn">
                                            <Button variant="outline-primary" className="fs-6 fw-bolder text-white abril-font">Buy Now</Button>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card-container">
                            <Col className="py-2">
                                <Card className="h-100 border-0 card-border position-relative">
                                    <Card.Img variant="top" className="img-fluid card-img" src="https://i.ibb.co/tJBXgyL/cat-2.jpg" />
                                    <div className="middle">
                                        <div className="card-btn">
                                            <Button variant="outline-primary" className="fs-6 fw-bolder text-white abril-font">Buy Now</Button>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card-container">
                            <Col className="py-2">
                                <Card className="h-100 border-0 card-border position-relative">
                                    <Card.Img variant="top" className="img-fluid card-img" src="https://i.ibb.co/0KwBPH4/cat-4.png" />
                                    <div className="middle">
                                        <div className="card-btn">
                                            <Button variant="outline-primary" className="fs-6 fw-bolder text-white abril-font">Buy Now</Button>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopBrand;