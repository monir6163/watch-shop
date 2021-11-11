import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faLock, faHeadphones, faUndo } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'react-bootstrap';


const Deliveryinfo = () => {
    const fdelivery = <FontAwesomeIcon icon={faTruck} />
    const lock = <FontAwesomeIcon icon={faLock} />
    const head = <FontAwesomeIcon icon={faHeadphones} />
    const undo = <FontAwesomeIcon icon={faUndo} />
    return (
        <section className="mt-3 mb-3" data-aos="fade-up"
            data-aos-duration="1000">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 py-2">
                        <Card>
                            <div className="info d-flex p-2 mx-auto">
                                <span className="fs-1">{fdelivery}</span>
                                <div className="info-text px-4">
                                    <h6 className="abril-font">Free delivery</h6>
                                    <p style={{ fontSize: '12px' }} className="abril-font">For all orders above $45</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-3 py-2">
                        <Card>
                            <div className="info d-flex p-2 mx-auto">
                                <span className="fs-1">{lock}</span>
                                <div className="info-text px-4">
                                    <h6 className="abril-font">Secure payments</h6>
                                    <p style={{ fontSize: '12px' }} className="abril-font">Confidence on all User</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-3 py-2">
                        <Card>
                            <div className="info d-flex p-2 mx-auto">
                                <span className="fs-1">{head}</span>
                                <div className="info-text px-4">
                                    <h6 className="abril-font">Top-notch support</h6>
                                    <p style={{ fontSize: '12px' }} className="abril-font">sayhello&vapier.com</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-3 py-2">
                        <Card>
                            <div className="info d-flex p-2 mx-auto">
                                <span className="fs-1">{undo}</span>
                                <div className="info-text px-4">
                                    <h6 className="abril-font">180 Days Return</h6>
                                    <p style={{ fontSize: '12px' }} className="abril-font">180 Days Return</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Deliveryinfo;