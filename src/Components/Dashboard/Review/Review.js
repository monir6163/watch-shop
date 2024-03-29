import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Review = () => {
    useEffect(() => {
        document.title = "Review : Your Best Online Watch Shop";
    }, []);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        fetch("https://watch-shop-server-production.up.railway.app/review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (res) {
                    Swal.fire("WoW!", "Review SuccessFull!", "success");
                    reset();
                }
            })
            .catch((error) => {
                Swal.fire("Something went wrong!", `${error.message}`, "error");
            });
    };
    return (
        <section>
            <div className="container mt-5 mb-5">
                <h2 className="text-center">Add Review</h2>
                <form
                    className="shadow-lg px-2 px-md-5 py-3 mt-5 text-cyan"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>
                                Name <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                                className="text-secondary fw-semi-bold"
                                placeholder="Monir Hossain"
                                {...register("name", { required: true })}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>
                                Photo Url{" "}
                                <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                                placeholder="https://i.ibb.co/dGDkr4v/1.jpg"
                                type="text"
                                className="text-secondary fw-semi-bold"
                                {...register("img", { required: true })}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>
                                Decription{" "}
                                <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Looking awesome genuine branded wristwatch."
                                {...register("description", { required: true })}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>
                                Select Review{" "}
                                <span style={{ color: "red" }}>*</span>
                            </Form.Label>
                            <select
                                required
                                className="form-control"
                                {...register("rating")}
                            >
                                <option>Select Rating</option>
                                <option value="1">1</option>
                                <option value="1.5">1.5</option>
                                <option value="2">2</option>
                                <option value="2.5">2.5</option>
                                <option value="3">3</option>
                                <option value="3.5">3.5</option>
                                <option value="4">4</option>
                                <option value="4.5">4.5</option>
                                <option value="5">5</option>
                            </select>
                        </Form.Group>
                    </Row>
                    <div className="mt-3 text-center">
                        <Button
                            type="submit"
                            className="px-3 py-2 fw-bold btn-light-green"
                        >
                            Add Review
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Review;
