import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import UseProducts from '../../Hooks/UseProducts';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import Deliveryinfo from './Deliveryinfo/Deliveryinfo';
import Fetured from './Fetured/Fetured';
import LatestProduct from './LatestProduct/LatestProduct';
import Reviews from './Review/Reviews/Reviews';
import ShopBrand from './ShopBrand/ShopBrand';
import StoreLocation from './StoreLocation/StoreLocation';

const Home = () => {
    useEffect(() => {
        document.title = 'WRISH : Your Best Online Wacth Collection Shop'
    }, []);
    const [product] = UseProducts();
    if (product.length === 0) {
        return (
            <div style={{ minHeight: '100vh' }} className="d-flex justify-content-center align-items-center">
                <Spinner animation="border" variant="success" />
            </div>
        );
    }
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Deliveryinfo></Deliveryinfo>
            <ShopBrand></ShopBrand>
            <StoreLocation></StoreLocation>
            <LatestProduct></LatestProduct>
            <Fetured></Fetured>
            <Reviews></Reviews>
            <Footer></Footer>
        </>
    );
};

export default Home;