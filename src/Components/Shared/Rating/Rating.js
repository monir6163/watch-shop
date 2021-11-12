import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Rating = ({ rating }) => {
    const numRating = +rating;
    const ratingFloor = Math.floor(numRating);
    const ratingRound = Math.round(numRating);

    const halfStart = ratingRound - ratingFloor;
    const star = 5 - ratingRound;

    return (
        <div className="d-flex justify-content-center align-items-center text-warning">
            {[...Array(ratingFloor)].map((_, i) => (
                <BsStarFill key={i} />
            ))}

            {[...Array(halfStart)].map((_, i) => (
                <BsStarHalf key={i} />
            ))}

            {[...Array(star)].map((_, i) => (
                <BsStar key={i} />
            ))}
        </div>
    );
};

export default Rating;