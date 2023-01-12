import { useEffect, useState } from "react";

const UseProducts = () => {
    const [product, setProducts] = useState([]);
    useEffect(() => {
        fetch(
            "https://watch-shop-server-production.up.railway.app/products?limit=6"
        )
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return [product];
};

export default UseProducts;
