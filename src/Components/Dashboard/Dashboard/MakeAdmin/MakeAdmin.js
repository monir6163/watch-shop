import {
    faCheckCircle,
    faClock,
    faEnvelope,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import Swal from "sweetalert2";

const MakeAdmin = () => {
    const [makeadmin, setMakeAdmin] = useState([]);
    const [status, setStatus] = useState(null);
    useEffect(() => {
        document.title = "Make Admin | Your Best Watch Online Shop";
    }, []);
    useEffect(() => {
        fetch("https://watch-shop-server-production.up.railway.app/users/")
            .then((res) => res.json())
            .then((data) => setMakeAdmin(data));
    }, [status]);
    const handleUpdate = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You Make This User Form Admin!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin it!",
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://watch-shop-server-production.up.railway.app/users/${id}`;
                fetch(url, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(makeadmin),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.modifiedCount > 0) {
                            setStatus(!status);
                            Swal.fire(
                                "WoW!",
                                "Make Admin SuccessFull!",
                                "success"
                            );
                        } else {
                            setStatus(false);
                        }
                    });
            }
        });
    };
    const clock = <FontAwesomeIcon icon={faClock} />;
    const iconuser = <FontAwesomeIcon icon={faEnvelope} />;
    const iconsuser = <FontAwesomeIcon icon={faUser} />;
    const check = <FontAwesomeIcon icon={faCheckCircle} />;
    return (
        <Container className="mb-5 mt-5" style={{ minHeight: "100vh" }}>
            <div className="col-12 col-md-8 mx-auto">
                <h3 className="text-light-green text-center mt-5 mb-3 text-decoration-underline">
                    {" "}
                    All User List
                </h3>
            </div>
            <div>
                <h3 className="text-center">All Users ({makeadmin.length})</h3>
            </div>
            <Row>
                <Col xs={12} md={12} className="mx-auto">
                    <Table striped bordered hover responsive>
                        <thead className="text-center">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Make Admin</th>
                            </tr>
                        </thead>
                        {makeadmin.map((user) => (
                            <tbody className="text-center" key={user._id}>
                                <tr>
                                    <td>
                                        <span className="fw-bold text-muted">
                                            {iconsuser} {user?.displayName}
                                        </span>
                                    </td>
                                    <td>
                                        <span className="fw-bold text-muted">
                                            {iconuser} {user?.email}
                                        </span>
                                    </td>

                                    <td>
                                        {user?.role === "admin" ? (
                                            <h6 className="text-success fw-bolder">
                                                {user?.role} {""} {check}
                                            </h6>
                                        ) : (
                                            <h6 className="text-danger fw-bolder">
                                                {user?.role}
                                                {"basic"} {clock}
                                            </h6>
                                        )}
                                    </td>
                                    <td>
                                        <Button
                                            onClick={() =>
                                                handleUpdate(user._id)
                                            }
                                            className="btn-status-card fw-bold border-0"
                                        >
                                            Make Admin
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

export default MakeAdmin;
