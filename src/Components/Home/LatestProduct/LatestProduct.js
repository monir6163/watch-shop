import React from 'react';
import { Row } from 'react-bootstrap';
import UseProducts from '../../../Hooks/UseProducts';
import SingleProduct from './SingleProduct/SingleProduct';

const LatestProduct = () => {
    const [product] = UseProducts();
    return (
        <section className="mb-3" data-aos="fade-up"
            data-aos-duration="2000">
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
        </section>
    );
};

export default LatestProduct;