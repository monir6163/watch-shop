import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Form, Row, Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/UseAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import ScrollToTop from '../Shared/Scroll/Scroll';

const PlaceOrder = () => {
    useEffect(() => {
        document.title = 'PlaceOrder : Your Best Online Watch Shop'
    }, []);
    const { user } = useAuth();
    const { orderID } = useParams();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://lit-wildwood-13814.herokuapp.com/orders/${orderID}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [orderID])
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You Sure Place Order!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Order it!'
        }).then((result) => {
            if (result.isConfirmed) {
                data.status = 'pending';
                data.email = user?.email;
                data.order = orders;
                fetch('https://lit-wildwood-13814.herokuapp.com/placeorders', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'

                    },
                    body: JSON.stringify(data)
                })
                    .then(res => {
                        if (res) {
                            Swal.fire("WoW!",
                                "OrderPlace SuccessFull!",
                                "success"
                            )
                            reset();
                        }
                        history.push('/dashboard/myorders')
                    })
                    .catch((error) => {
                        Swal.fire(
                            "Something went wrong!",
                            `${error.message}`,
                            "error"
                        )
                    })
            }
        })
    }
    return (
        <>
            <ScrollToTop></ScrollToTop>
            <Header></Header>
            <section>
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <h2 className="text-center">Order Place Form</h2>
                            <form className="shadow-lg px-2 px-md-5 py-3 mt-4 text-cyan" onSubmit={handleSubmit(onSubmit)}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>User Name <span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Form.Control
                                            readOnly
                                            defaultValue={user?.displayName}
                                            className="text-secondary fw-semi-bold"

                                            {...register("name", { required: true })}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>User Email <span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Form.Control
                                            readOnly
                                            defaultValue={user?.email}
                                            className="text-secondary fw-semi-bold"

                                            {...register("email", { required: true })}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Select Country <span style={{ color: 'red' }}>*</span></Form.Label>
                                        <select required className="form-control" {...register("country")}>
                                            <option >Select Country</option>
                                            <option value="bangladesh">Bangladesh</option>
                                            <option value="india">India</option>
                                        </select>
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>City <span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Bogura"
                                            className="text-secondary fw-semi-bold"

                                            {...register("city", { required: true })}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Delivery Address <span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Form.Control
                                            placeholder="Dhaka"
                                            className="text-secondary fw-semi-bold"

                                            {...register("address", { required: true })}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Phone <span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="+880 1747706163"
                                            className="text-secondary fw-semi-bold"

                                            {...register("phone", { required: true })}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Zip Code <span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Form.Control
                                            placeholder="text"
                                            className="text-secondary fw-semi-bold"

                                            {...register("address", { required: true })}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Add Note <span style={{ color: 'red' }}>*</span></Form.Label>
                                        <Form.Control as="textarea" rows={3}
                                            placeholder="Add note"
                                            className="text-secondary fw-semi-bold"
                                            {...register("note", { required: true })}
                                        />
                                    </Form.Group>
                                </Row>
                                <div className="mt-3 text-center">
                                    <Button
                                        type="submit"
                                        className="px-3 py-2 fw-bold btn-light-green"
                                    >
                                        Place Order
                                    </Button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 col-12">
                            <h2 className="text-center mb-4">Order Details</h2>
                            <Col>
                                <Card className="h-100 overflow-hidden card-border">
                                    <div className="overflow-hidden">
                                        <Card.Img variant="top" src={orders.img} id="cardimg" />
                                    </div>
                                    <Card.Body>
                                        <div className="overflow-hidden text-center">
                                            <Card.Title>{orders.title}</Card.Title>
                                            <Card.Title>${orders.price}</Card.Title>
                                            <Card.Text>
                                                {orders.description}
                                            </Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default PlaceOrder;