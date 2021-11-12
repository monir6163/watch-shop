import { useEffect, useState } from 'react';

const UseReview = () => {
    const [review, setReview] = useState();
    useEffect(() => {
        fetch('https://lit-wildwood-13814.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return [review]
};

export default UseReview;