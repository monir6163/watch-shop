import { useEffect, useState } from 'react';

const UseProducts = () => {
    const [product, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://lit-wildwood-13814.herokuapp.com/products?limit=6')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return [product];
};

export default UseProducts;