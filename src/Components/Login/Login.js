import React, { useEffect } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/UseAuth';
import bglogin from '../../images/login.jpg';

const Login = () => {
    useEffect(() => {
        document.title = 'Login : Your Best Watch Shop'
    }, []);
    const history = useHistory();
    const location = useLocation();
    const emailRedirect = location?.state?.from || "/dashboard";
    const googleRedirect = location?.state?.from || "/dashboard";
    const { getEmail, getPassword, signInWithEmail, error, setUser, signinGoogle, passwordReset, setIsLoading, saveUser } = useAuth();
    const login = (e) => {
        e.preventDefault();
        signInWithEmail()
            .then((result) => {
                setUser(result.user)
                Swal.fire(
                    "Good job!",
                    "Log In SuccessFull!",
                    "success"
                )
                history.push(emailRedirect);
            })
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            })
            .finally(() => setIsLoading(false));
    }
    const handleGoogleLogin = () => {
        signinGoogle()
            .then(result => {
                saveUser(result.user.email, result.user.displayName, 'PUT');
                Swal.fire("Good job!",
                    "Log In SuccessFull!",
                    "success"
                )
                history.push(googleRedirect);

            }).finally(() => setIsLoading(false))
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            })
            .finally(() => setIsLoading(false));
    }
    const handlePasswordreset = () => {
        passwordReset()
            .then((result) => {
                Swal.fire(
                    "Good job!",
                    "Password reset Send SuccessFull!",
                    "success"
                )
            })
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            })
            .finally(() => setIsLoading(false));
    }
    const envelope = <FontAwesomeIcon icon={faEnvelope} />
    const lock = <FontAwesomeIcon icon={faLock} />
    const arrow = <FontAwesomeIcon icon={faArrowRight} />
    const google = <FontAwesomeIcon icon={faGoogle} />
    return (
        <section style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)),url(${bglogin}) center center/cover no-repeat`, minHeight: '100vh' }} className="d-flex justify-content-center align-items-center">
            <div className="container" >
                <div className="row mx-auto">
                    <div className="col-md-6 mx-auto p-3">
                        <h2 className="text-center mb-5 text-white">Login Now</h2>
                        <p className="text-danger text-center">{error}</p>
                        <Form onSubmit={login}>
                            <Form.Group className="mb-3" id="formBasicemail">
                                <Form.Label htmlFor="inlineFormInputGroup1" visuallyHidden>
                                    Emaill Address
                                </Form.Label>
                                <InputGroup className="mb-2 rounded">
                                    <InputGroup.Text>{envelope}</InputGroup.Text>
                                    <FormControl
                                        required
                                        onBlur={getEmail}
                                        type="email"
                                        autoComplete="current-email"
                                        id="email"
                                        placeholder="Enter Email"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" id="formBasicPassword">
                                <Form.Label htmlFor="inlineFormInputGroup2" visuallyHidden>
                                    Password
                                </Form.Label>
                                <InputGroup className="mb-2 rounded">
                                    <InputGroup.Text>{lock}</InputGroup.Text>
                                    <FormControl
                                        required
                                        onBlur={getPassword}
                                        type="password"
                                        autoComplete="current-password"
                                        id="password"
                                        placeholder="*****"
                                    />
                                </InputGroup>
                            </Form.Group>
                            <div className="d-flex justify-content-between">
                                <Form.Group className="mb-3" id="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>
                                <Form.Group className="mb-3" id="formBasicforgotpass">
                                    <Button onClick={handlePasswordreset} variant="primary">Forgot Password</Button>
                                </Form.Group>
                            </div>
                            <Button variant="primary" className="w-100 fw-bold" type="submit">
                                {arrow} Login
                            </Button>
                        </Form>
                        <NavLink className="text-decoration-none" to="/register">
                            <p className="text-center mt-3 text-white fw-bolder">New Member? Please Create An Account!</p>
                        </NavLink>
                        <div className="mt-3 text-center fs-4 fw-bolder text-white">---Or---</div>
                        <p className="text-center text-white">Login With Google</p>
                        <div className="mt-3 mb-3 text-center fs-4 fw-bolder" >
                            <Button onClick={handleGoogleLogin} variant="primary"> {google}</Button>
                        </div>
                        <div className="mt-3 mb-3 text-center fs-4 fw-bolder" >
                            <Link to="/">
                                <Button variant="primary">Back Home</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </section>
    );
};

export default Login;