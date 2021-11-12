import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './NotFound.css';
import notFound from '../../images/notfound.png';

const NotFound = () => {
    return (
        <>
            <section className="notfound">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="mt-5">
                                <img src={notFound} alt="Page Not Found" />
                            </div>
                            <div className="mt-5 mx-auto text-center">
                                <Link to="/">
                                    <Button variant="info" className="fs-5 fw-bolder">
                                        Go Back Home
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NotFound;