import React from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <section className="contact-container py-5" data-aos="fade-up">
            <Container>
                <Row>
                    <div className="col-12 col-md-8 mx-auto">
                        <h2 className="text-center display-3 abril-font">
                            Get In Touch!
                        </h2>
                        <p className="text-cyan px-md-5 text-center mb-5">
                            Find watch reviews, watch tests, top watch review posts, reports about our watch test equipment, watch reviews updates and in-depth watch test or watch review coverage.
                        </p>
                    </div>
                </Row>
                <Row>
                    <div className="col-12 col-md-6">
                        <img
                            src="https://i.ibb.co/9bVWLJk/smartwatch-mockup-three-colors-23-2147864561.jpg"
                            alt="contactImg"
                            className="img-fluid w-100 rounded-3"
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <Form>
                            <Row>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="name" className="text-muted fw-semi-bold">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="form-control border-0 shadow-none py-2 mt-2 mb-4"
                                        style={{ background: "#F8F8F8" }}
                                    />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="phone" className="text-muted fw-semi-bold">
                                        Phone
                                    </label>
                                    <input
                                        id="phone"
                                        type="text"
                                        className="form-control border-0 shadow-none py-2 mt-2 mb-4"
                                        style={{ background: "#F8F8F8" }}
                                    />
                                </div>
                            </Row>
                            <Row>
                                <div className="col-12">
                                    <label htmlFor="email" className="text-muted fw-semi-bold">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="form-control border-0 shadow-none py-2 my-2"
                                        style={{ background: "#F8F8F8" }}
                                    />
                                </div>
                                <div className="col-12">
                                    <label
                                        htmlFor="message"
                                        className="text-muted fw-semi-bold"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control border-0 shadow-none py-2 mt-2 mb-3"
                                        rows="3"
                                        style={{ background: "#F8F8F8" }}
                                    ></textarea>
                                </div>
                                <div className="col-12 text-center">
                                    <Button
                                        onClick={(e) => e.preventDefault()}
                                        type="submit"
                                        className="btn-light-green p-3 fw-bold border-0"
                                    >
                                        Send Message
                                    </Button>
                                </div>
                            </Row>
                        </Form>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;