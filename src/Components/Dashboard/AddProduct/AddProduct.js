import React from 'react';
import { useEffect } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddProduct = () => {
    useEffect(() => {
        document.title = 'AddProduct : Your Best Online Watch Shop'
    }, []);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res) {
                    Swal.fire("WoW!",
                        "Product Added SuccessFull!",
                        "success"
                    )
                    reset();
                }
            })
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            })
    };
    return (
        <section>
            <div className="container mt-5 mb-5">
                <h2 className="text-center">Add Product</h2>
                <form className="shadow-lg px-2 px-md-5 py-3 mt-5 text-cyan" onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Product Title <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                className="text-secondary fw-semi-bold"
                                placeholder="Casio Watch"
                                {...register("title", { required: true })}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Price <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                placeholder="500"
                                type="text"
                                className="text-secondary fw-semi-bold"

                                {...register("price", { required: true })}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Photo Url <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                placeholder="https://i.ibb.co/dGDkr4v/1.jpg"
                                type="text"
                                className="text-secondary fw-semi-bold"

                                {...register("img", { required: true })}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Decription <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control as="textarea" rows={3}
                                placeholder="Looking awesome genuine branded wristwatch."
                                {...register("description", { required: true })}
                            />
                        </Form.Group>
                    </Row>
                    <div className="mt-3 text-center">
                        <Button
                            type="submit"
                            className="px-3 py-2 fw-bold btn-light-green"
                        >
                            Add Product
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddProduct;