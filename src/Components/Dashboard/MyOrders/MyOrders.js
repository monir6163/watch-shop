import {
    faCheckCircle,
    faClock,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/UseAuth";

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        document.title = "My Orders | Your Best Online Watch Shop";
    }, []);
    useEffect(() => {
        fetch(
            `https://watch-shop-server-production.up.railway.app/myorders/${user?.email}`
        )
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    }, [user?.email]);
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to Cancel this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel Order!",
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://watch-shop-server-production.up.railway.app/deleteorder/${id}`;
                fetch(url, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Great!",
                                "Order Cancel SuccessFull!",
                                "success"
                            );
                            const remainingPacks = myOrders.filter(
                                (pack) => pack._id !== id
                            );
                            setMyOrders(remainingPacks);
                        }
                    });
            }
        });
    };
    const clock = <FontAwesomeIcon icon={faClock} />;
    const iconuser = <FontAwesomeIcon icon={faUser} />;
    const check = <FontAwesomeIcon icon={faCheckCircle} />;
    return (
        <Container className="mb-5 mt-5" style={{ minHeight: "100vh" }}>
            <div className="col-12 col-md-8 mx-auto">
                <h3 className="text-center mt-5 mb-3">My Orders List</h3>
            </div>
            <div>
                <h3 className="text-center">My Order ({myOrders.length})</h3>
            </div>
            <Row>
                <Col xs={12} md={12} className="mx-auto">
                    <Table striped bordered hover responsive>
                        <thead className="text-center">
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Order By</th>
                                <th>Order Status</th>
                                <th>Order Cancel</th>
                            </tr>
                        </thead>
                        {myOrders.map((orders) => (
                            <tbody className="text-center" key={orders._id}>
                                <tr>
                                    <td>
                                        <img
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "100%",
                                            }}
                                            src={orders?.order?.img}
                                            alt="order"
                                        />
                                    </td>
                                    <td>
                                        <span className="fw-bold text-muted">
                                            {orders?.order?.title}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="fw-bold text-muted">
                                            ${orders?.order?.price}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="fw-bold text-muted">
                                            {iconuser} Order By: {orders?.name}
                                        </span>
                                    </td>
                                    <td>
                                        {orders?.status === "shipped" ? (
                                            <h6 className="text-success fw-bolder">
                                                {orders?.status} {""} {check}
                                            </h6>
                                        ) : (
                                            <h6 className="text-danger fw-bolder">
                                                {orders?.status}
                                                {""} {clock}
                                            </h6>
                                        )}
                                    </td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            onClick={() =>
                                                handleDelete(orders._id)
                                            }
                                            className="btn-light-card fw-bold border-0"
                                        >
                                            Cancel Order
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default MyOrders;
