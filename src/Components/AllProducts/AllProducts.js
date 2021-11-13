import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import SingleProduct from '../Home/LatestProduct/SingleProduct/SingleProduct';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const AllProducts = () => {
    const [allProduct, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://lit-wildwood-13814.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, []);
    useEffect(() => {
        document.title = 'AllProducts : Your Best Watch Shop'
    }, []);
    return (
        <>
            <Header></Header>
            <section className="mb-3 mt-3" data-aos="fade-up"
                data-aos-duration="1000">
                <div className="container">
                    <h2 className="text-uppercase text-center abril-font">Latest Products</h2>
                    {allProduct.length === 0 ? <div style={{ minHeight: '50vh' }} className="d-flex justify-content-center align-items-center">
                        <Spinner animation="border" variant="success" />
                    </div> : <Row xs={1} md={3} className="g-4 mt-3">
                        {
                            allProduct.map(products => <SingleProduct
                                key={products._id}
                                products={products}
                            ></SingleProduct>)
                        }
                    </Row>}
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default AllProducts;