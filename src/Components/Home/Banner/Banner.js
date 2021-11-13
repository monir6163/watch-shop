import React from 'react';
import './Banner.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Banner = () => {
    const user = <FontAwesomeIcon icon={faShoppingBag} />
    return (
        <section className="banner-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-12">
                        <div className="overly"></div>
                        <div className="banner-text" data-aos="flip-down">
                            <div className="text-center">
                                <h2 className="text-white fw-bolder fs-1 abril-font">THE CLASSICS</h2>
                                <h4 className="text-white fs-3 abril-font">Complete your everyday look with a classic leather strap watch.</h4>
                                <Link to="/Products">
                                    <Button className="mt-4 text-uppercase abril-font fw-bolder">{user} Shop Now</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;