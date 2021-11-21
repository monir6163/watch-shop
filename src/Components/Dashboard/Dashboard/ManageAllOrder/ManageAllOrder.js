import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Container, Button, Table, Row, Col } from 'react-bootstrap';

const Manageallorder = () => {

    const [allOrders, setAllOrders] = useState([]);
    const [status, setStatus] = useState(null)
    useEffect(() => {
        document.title = "Manage All Orders | Your Best Watch Online Shop";
    }, []);
    useEffect(() => {
        fetch('https://lit-wildwood-13814.herokuapp.com/placeorders/')
            .then((res) => res.json())
            .then((data) => setAllOrders(data));
    }, [status]);
    const handleUpdate = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You Shipped Order!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Order Shipped!'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://lit-wildwood-13814.herokuapp.com/placeorders/${id}`;
                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(allOrders)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            setStatus(!status)
                            Swal.fire("WoW!",
                                "Order Shift SuccessFull!",
                                "success"
                            )
                        } else {
                            setStatus(false)
                        }
                    })
            }
        })
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to Delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete Order!'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://lit-wildwood-13814.herokuapp.com/deleteorder/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Great!",
                                "Order Delete SuccessFull!",
                                "success"
                            )
                            const remainingPacks = allOrders.filter((pack) => pack._id !== id);
                            setAllOrders(remainingPacks);
                        }
                    })
            }
        })

    }
    const clock = <FontAwesomeIcon icon={faClock} />
    const iconuser = <FontAwesomeIcon icon={faUser} />
    const check = <FontAwesomeIcon icon={faCheckCircle} />
    return (
        <Container className="mb-5 mt-5" style={{ minHeight: '100vh' }}>
            <div className="col-12 col-md-8 mx-auto">
                <h3 className="text-light-green text-center mt-5 mb-3 text-decoration-underline">Manage All Orders List</h3>
            </div>
            <div>
                <h3 className="text-center">All Order Product ({allOrders.length})</h3>
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
                                <th>Order Shift</th>
                            </tr>
                        </thead>
                        {
                            allOrders.map(orders => <tbody className="text-center" key={orders._id}>
                                <tr>
                                    <td><img style={{ width: '50px', height: '50px', borderRadius: '100%' }} src={orders?.order?.img} alt="order" /></td>
                                    <td><span className="fw-bold text-muted">{orders?.order?.title}</span></td>
                                    <td><span className="fw-bold text-muted">${orders?.order?.price}</span></td>
                                    <td><span className="fw-bold text-muted">{iconuser}{" "}Order By:{" "}{orders?.name}</span></td>
                                    <td>{
                                        orders?.status === 'shipped' ? (<h6 className="text-success fw-bolder">
                                            {orders?.status} {""} {check}
                                        </h6>) : (<h6 className="text-danger fw-bolder">
                                            {orders?.status}{""} {clock}
                                        </h6>)
                                    }</td>
                                    <td>
                                        <Button onClick={() => handleUpdate(orders._id)}
                                            className="btn-status-card fw-bold border-0"
                                        >
                                            Shift Order
                                        </Button>
                                        &nbsp;
                                        <Button variant="danger" onClick={() => handleDelete(orders._id)}
                                            className="btn-light-card fw-bold border-0"
                                        >
                                            Delete Order
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>

                            )
                        }
                    </Table>
                </Col>
            </Row>
        </Container >
    );
};

export default Manageallorder;