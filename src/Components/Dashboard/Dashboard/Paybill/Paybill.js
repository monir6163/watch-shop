import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFound from '../../../../images/notfound.png';

const Paybill = () => {
    return (
        <>
            <section className="notfound">
                <div className="container">
                    <h2 className="text-center abril-font mt-3">PayBill Comming Soon....</h2>
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="mt-5">
                                <img src={notFound} alt="Page Not Found" />
                            </div>
                            <div className="mt-5 mx-auto text-center">
                                <Link to="/dashboard">
                                    <Button variant="info" className="fs-5 fw-bolder">
                                        Go Back
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

export default Paybill;