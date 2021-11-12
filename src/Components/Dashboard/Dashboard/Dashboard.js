import React, { useState } from "react";
import { Col, Container, Row, Offcanvas } from "react-bootstrap";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth";
import AddProduct from "../AddProduct/AddProduct";
import MangeAllProduct from "../MangeAllProduct/MangeAllProduct";
import MyOrders from "../MyOrders/MyOrders";
import "./Dashboard.css";
import Manageallorder from "./ManageAllOrder/ManageAllOrder";
import Profile from "./Profile/Profile";
import logo from "../../../images/logo.png";
import Review from "../Review/Review";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AdminRoute from "../AdminRoute/AdminRoute";
import Notfound from "./Notfound/Notfound";

const Dashboard = () => {
    const { logOut, admin } = useAuth();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let { path, url } = useRouteMatch();

    return (
        <div>
            <div>
                <div className="d-none offCanvas-controller ">
                    <div className=" d-flex justify-content-between align-items-center flex-bg px-3">
                        <button
                            className="border-0 bg-transparent"
                            style={{ borderRadius: 0, textAlign: "left" }}
                            onClick={handleShow}
                        >
                            <i
                                style={{ color: "#cbba9c" }}
                                className="fas fa-3x fa-angle-double-right"
                            ></i>
                        </button>
                        <div className="text-center">
                            <img className="w-50" src={logo} alt="" />
                        </div>
                    </div>
                </div>

                <Offcanvas
                    className="d-none handle-canvas w-50"
                    show={show}
                    onHide={handleClose}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="fs-1">
                            Dashboard
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="canvas-body text-left">
                        {!admin && <>
                            <div className="d-flex justify-content-start align-items-center">
                                <i className="fas fa-shopping-basket me-2"></i>
                                <NavLink to={`${url}/myorders`}>My Orders</NavLink>
                            </div>
                            <br />
                            <div className="d-flex justify-content-start align-items-center">
                                <i className="fas fa-comment me-2"></i>
                                <NavLink to={`${url}/Review`}>
                                    Review
                                </NavLink>
                            </div>
                            <br />
                            <div className="d-flex justify-content-start align-items-center">
                                <i className="fas fa-shopping-cart me-2"></i>
                                <NavLink to={`${url}/payBill`}>Pay Bill</NavLink>
                            </div>
                        </>}
                        <br />
                        {admin && <>
                            <div className="d-flex justify-content-start align-items-center">
                                <i className="fas fa-user me-2"></i>
                                <NavLink to={`${url}/makeAdmin`}>
                                    Make Admin
                                </NavLink>
                            </div>
                            <br />
                            <div className="d-flex justify-content-start align-items-center">
                                <i className="fas fa-plus me-2"></i>
                                <NavLink to={`${url}/addProduct`}>
                                    Add Product
                                </NavLink>
                            </div>
                            <br />
                            <div className="d-flex justify-content-start align-items-center">
                                <i className="fas fa-clock me-2"></i>
                                <NavLink to={`${url}/manageProduct`}>
                                    Manage All Products
                                </NavLink>
                            </div>
                            <br />
                            <div className="d-flex justify-content-start align-items-center">
                                <i className="fas fa-cannabis me-2"></i>
                                <NavLink to={`${url}/manageOrder`}>
                                    Manage All Orders
                                </NavLink>
                            </div>
                        </>}
                        <div className="d-flex justify-content-start align-items-center">
                            <i className="fas fa-user-circle me-2"></i>
                            <NavLink to={url}>Profile</NavLink>
                        </div>
                        <div className="d-flex justify-content-start align-items-center">
                            <i className="fas fa-home me-2"></i>
                            <NavLink to="/home">Back to home</NavLink>
                        </div>
                        <div className="d-flex justify-content-start align-items-center">
                            <i className="fas fa-sign-out-alt me-2"></i>
                            <NavLink to="/login" onClick={logOut}>LogOut</NavLink>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
                <div>
                    <div className="logo-bg">
                        <img
                            style={{ height: "50px" }}
                            className="d-block mx-auto"
                            src={logo}
                            alt=""
                        />
                    </div>
                    <Container fluid>
                        <Row>
                            <Col className="my-col text-left pt-5" lg={2}>
                                {!admin && <>
                                    <div className="d-flex justify-content-start align-items-center">
                                        <i className="fas fa-shopping-basket me-2"></i>
                                        <NavLink to={`${url}/myorders`}>My Orders</NavLink>
                                    </div>
                                    <br />
                                    <div className="d-flex justify-content-start align-items-center">
                                        <i className="fas fa-comment me-2"></i>
                                        <NavLink to={`${url}/Review`}>
                                            Review
                                        </NavLink>
                                    </div>
                                    <br />
                                    <div className="d-flex justify-content-start align-items-center">
                                        <i className="fas fa-shopping-cart me-2"></i>
                                        <NavLink to={`${url}/payBill`}>
                                            Pay Bill
                                        </NavLink>
                                    </div></>}
                                {admin && <>
                                    <div className="d-flex justify-content-start align-items-center">
                                        <i className="fas fa-user me-2"></i>
                                        <NavLink to={`${url}/makeAdmin`}>
                                            Make Admin
                                        </NavLink>
                                    </div>
                                    <br />
                                    <div className="d-flex justify-content-start align-items-center">
                                        <i className="fas fa-plus me-2"></i>
                                        <NavLink to={`${url}/addProduct`}>
                                            Add Product
                                        </NavLink>
                                    </div>
                                    <br />
                                    <div className="d-flex justify-content-start align-items-center">
                                        <i className="fas fa-clock me-2"></i>
                                        <NavLink to={`${url}/manageProduct`}>
                                            Manage All Products
                                        </NavLink>
                                    </div>
                                    <br />
                                    <div className="d-flex justify-content-start align-items-center">
                                        <i className="fas fa-cannabis me-2"></i>
                                        <NavLink to={`${url}/manageOrder`}>
                                            Manage All Orders
                                        </NavLink>
                                    </div>
                                </>}
                                <hr />
                                <div className="d-flex justify-content-start align-items-center">
                                    <i className="fas fa-user-circle me-2"></i>
                                    <NavLink to={url}>Profile</NavLink>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                    <i className="fas fa-home me-2"></i>
                                    <NavLink to="/">Back to home</NavLink>
                                </div>
                                <div className="d-flex justify-content-start align-items-center">
                                    <i className="fas fa-sign-out-alt me-2"></i>
                                    <NavLink to="/login" onClick={logOut}>LogOut</NavLink>
                                </div>
                            </Col>
                            <Col xs={12} lg={10}>
                                <Switch>
                                    <Route exact path={path}>
                                        <Profile></Profile>
                                    </Route>
                                    <Route path={`${path}/myorders`}>
                                        <MyOrders></MyOrders>
                                    </Route>
                                    <Route path={`${path}/Review`}>
                                        <Review></Review>
                                    </Route>
                                    <Route path={`${path}/payBill`}>

                                    </Route>
                                    <AdminRoute path={`${path}/makeAdmin`}>
                                        <MakeAdmin></MakeAdmin>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/addProduct`}>
                                        <AddProduct></AddProduct>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manageProduct`}>
                                        <MangeAllProduct></MangeAllProduct>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manageOrder`}>
                                        <Manageallorder></Manageallorder>
                                    </AdminRoute>
                                    <Route exact path="*">
                                        <Notfound></Notfound>
                                    </Route>
                                </Switch>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
