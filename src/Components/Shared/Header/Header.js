import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/UseAuth';
import './Header.css';
import logo from '../../../images/logo.png';

const Header = () => {
    const activeMenu = {
        fontWeight: "bold",
        color: "#4fc9e0"
    }
    const { user, logOut, setUser, setIsLoading } = useAuth();
    const { displayName, photoURL } = user;
    const history = useHistory();
    const location = useLocation();
    const redirect = location?.state?.from || "/";
    const handleLogout = () => {
        logOut()
            .then((result) => {
                setUser({})
                Swal.fire(
                    "Good job!",
                    "Log Out SuccessFull!",
                    "success"
                )
                history.push(redirect);
            })
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <>
            <Navbar bg="white" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <Nav.Link as={NavLink} to="/">
                            <img style={{ maxWidth: '89px' }} src={logo} alt="wrish" />
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home" activeStyle={
                                activeMenu
                            } className="fs-6 fw-bold px-3 abril-font">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" activeStyle={
                                activeMenu
                            } className="fs-6 fw-bold px-3 abril-font">About Us</Nav.Link>
                            <Nav.Link as={NavLink} to="/Products" activeStyle={
                                activeMenu
                            } className="fs-6 fw-bold px-3 abril-font">Products</Nav.Link>
                            {!user.displayName ? (
                                <>
                                    <Nav.Link as={NavLink} to="/login" activeStyle={
                                        activeMenu
                                    } className="fs-6 fw-bold px-3 abril-font">
                                        <Button variant="primary" className="text-btn fs-6 fw-bold">
                                            Login
                                        </Button>
                                    </Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={NavLink} to="/dashboard" activeStyle={
                                        activeMenu
                                    } className="fs-6 fw-bold px-3 abril-font">Dashboard</Nav.Link>
                                    <NavDropdown
                                        title={
                                            <img
                                                style={{
                                                    width: "45px",
                                                    borderRadius: "50%",
                                                }}
                                                src={photoURL}
                                                alt=""
                                            />
                                        }
                                    >
                                        <div className="text-center">
                                            <h6 className="abril-font">{displayName}</h6>
                                            <button onClick={handleLogout} className="btn btn-primary abril-font">
                                                Log Out
                                            </button>
                                        </div>
                                    </NavDropdown>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;