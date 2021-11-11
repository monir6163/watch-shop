import React, { useEffect } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import about from '../../images/about.png';
import Reviews from '../Home/Review/Reviews/Reviews';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const About = () => {
    useEffect(() => {
        document.title = 'About Us : Your Best Watch Shop'
    }, []);
    return (
        <>
            <Header></Header>
            <section className="mt-5 mb-3" data-aos="fade-up"
                data-aos-duration="2000">
                <Container>
                    <h2 className="text-uppercase text-center abril-font mb-4">About Us</h2>
                    <Row>
                        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center" data-aos="fade-left"
                            data-aos-duration="2000">
                            <div className="about-text">
                                <h2>UK PREMIER STORE
                                    FOR WRIST WATCHES</h2>
                                <p className="abril-font" style={{ textAlign: 'justify' }}>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Vestibulum purus quam scelerisque ut, mollis sed, nonummy id, metus. Vivamus aliquet elit ac nisl.Suspendisse non nisl sit amet velit hendrerit rutrum. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Curabitur ullamcorper ultricies nisi. Sed aliquam ultrices mauris. Nullam</p>
                                <Link to="Products">
                                    <Button className="mb-5" variant="primary">Go Store</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col xs={12} md={6} data-aos="fade-right"
                            data-aos-duration="2000">
                            <div>
                                <img src={about} className="img-fluid" alt="clock" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Reviews></Reviews>
            <Footer></Footer>
        </>
    );
};

export default About;