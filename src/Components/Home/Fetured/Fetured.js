import React from 'react';
import bg from '../../../images/bacg.jpg';
import clock from '../../../images/clock.png';

const Fetured = () => {
    return (
        <section style={{ background: `url(${bg}) center center/cover no-repeat`, minHeight: '80vh' }} className="py-3" data-aos="fade-up"
            data-aos-duration="1000">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div className="feture-text text-white">
                            <h2 className="abril-font">FEATURE PRODUCT</h2>
                            <h6>
                                Constantin
                                Chronograph Watches
                            </h6>
                            <p className="abril-font">Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.Vestibulum purus Vivamus aliquet elit ac nisl.Suspendisse non nisl sit amet velit hendreritrutrum. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Curabitur ullamcorperultricies nisi. Sed aliquam ultrices mauris. Nullam cursus lacinia erat.</p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div className="p-4">
                            <img className="img-fluid  mt-5" style={{ height: '400px' }} src={clock} alt="clock" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fetured;