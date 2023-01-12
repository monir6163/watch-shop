import { useEffect, useState } from "react";

const UseReview = () => {
    const [review, setReview] = useState();
    useEffect(() => {
        fetch("https://watch-shop-server-production.up.railway.app/review")
            .then((res) => res.json())
            .then((data) => setReview(data));
    }, []);
    return [review];
};

export default UseReview;
