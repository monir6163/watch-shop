import React from 'react';
import { Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseProducts from '../../../Hooks/UseProducts';
import SingleProduct from './SingleProduct/SingleProduct';

const LatestProduct = () => {
    const [product] = UseProducts();
    return (
        <section className="mb-3" data-aos="fade-up"
            data-aos-duration="1000">
            <div className="container">
                <h2 className="text-uppercase text-center abril-font">Latest Products</h2>
                <Row xs={1} md={3} className="g-4 mt-3">
                    {
                        product.map(products => <SingleProduct
                            key={products._id}
                            products={products}
                        ></SingleProduct>)
                    }
                </Row>
            </div>
            <div className="text-center mt-3">
                <Link to="/Products">
                    <Button varint="primary">All Products</Button>
                </Link>
            </div>
        </section>
    );
};

export default LatestProduct;