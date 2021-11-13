import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Review from '../Review';
import UseReview from '../../../../Hooks/UseReview';

const Reviews = () => {
    const [review] = UseReview();
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="my-5" data-aos="fade-up"
            data-aos-duration="1000">
            <div className="container">
                <h2 className="text-uppercase text-center abril-font mb-4">Client Review</h2>
                <Slider {...settings}>
                    {
                        review?.map(review => <Review
                            key={review.name}
                            review={review}
                        ></Review>)
                    }
                </Slider>
            </div>
        </section>
    );
};

export default Reviews;