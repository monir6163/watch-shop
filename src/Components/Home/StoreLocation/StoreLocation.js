import React from 'react';
import bgstore from '../../../images/back.jpg';
import './StoreLocation.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StoreLocation = () => {
    return (
        <section className="mb-3 banner-container" style={{ background: `url(${bgstore}) center center/cover no-repeat`, minHeight: '80vh' }} data-aos="fade-up"
            data-aos-duration="1000">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-12">
                        <div className="overly"></div>
                        <div className="store-text">
                            <div className="text-center">
                                <h2 className="text-white fs-6 abril-font">NEED A CLOSER LOOK? COME VISIT US IN STORE</h2>
                                <h4 className="text-white fs-5 abril-font">Your specialist watch store</h4>
                                <Link to="/Products">
                                    <Button className="mt-4 text-uppercase abril-font fw-bolder">Store Location</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoreLocation;