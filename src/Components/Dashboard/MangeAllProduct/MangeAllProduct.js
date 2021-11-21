import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Container, Button, Table, Col, Row } from 'react-bootstrap';

const MangeAllProduct = () => {

    const [allproducts, setAllProducts] = useState([]);
    useEffect(() => {
        document.title = "Manage All Products | Your Best Online Watch shop";
    }, []);
    useEffect(() => {
        fetch('https://lit-wildwood-13814.herokuapp.com/products/')
            .then((res) => res.json())
            .then((data) => setAllProducts(data));
    }, []);
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You Delete This Product!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://lit-wildwood-13814.herokuapp.com/deleteproduct/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Great!",
                                "Data Delete SuccessFull!",
                                "success"
                            )
                            const remainingPacks = allproducts.filter((pack) => pack._id !== id);
                            setAllProducts(remainingPacks);
                        }
                    })
            }
        })

    }
    return (
        <Container className="mb-5 mt-5" style={{ minHeight: '100vh' }}>
            <div className="col-12 col-md-8 mx-auto">
                <h3 className="text-light-green text-center mt-5 mb-3 text-decoration-underline">Manage All Product List</h3>
            </div>
            <div>
                <h3 className="text-center">All Product ({allproducts.length})</h3>
            </div>
            <Row>
                <Col xs={12} md={12} className="mx-auto">
                    <Table striped bordered hover responsive>
                        <thead className="text-center">
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            allproducts.map(products => <tbody className="text-center" key={products._id}>
                                <tr>
                                    <td><img style={{ width: '50px', height: '50px', borderRadius: '100%' }} src={products?.img} alt="order" /></td>
                                    <td><span className="fw-bold text-muted">{products?.title}</span></td>
                                    <td><span className="fw-bold text-muted">${products?.price}</span></td>
                                    <td>
                                        <Button variant="danger" onClick={() => handleDelete(products._id)}
                                            className="btn-light-card fw-bold border-0"
                                        >
                                            Delete Product
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                            )}
                    </Table>
                </Col>
            </Row>
        </Container >
    );
};

export default MangeAllProduct;