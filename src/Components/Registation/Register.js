import React, { useEffect } from 'react';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import './Register.css';
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faArrowRight, faUser, faLink } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/UseAuth';
import bglogin from '../../images/login.jpg';

const Register = () => {
    useEffect(() => {
        document.title = 'Register : Your Best Watch Shop'
    }, []);
    const { signinGoogle, getPhoto, getName, singUp, getEmail, getPassword, setNameAndImage, setIsLoading, saveUser } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect = location?.state?.from || "/";
    const googleRedirect = location?.state?.from || "/";
    const register = (e) => {
        e.preventDefault();
        singUp()
            .then((result) => {
                setNameAndImage();
                Swal.fire(
                    "Good job!",
                    "Account has been created SuccessFull!",
                    "success"
                )
                setTimeout(() => {
                    history.push(redirect);
                }, 5000)
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
    const handleGooglereg = () => {
        signinGoogle()
            .then(result => {
                saveUser(result.user.email, result.user.displayName, 'PUT');
                Swal.fire("Good job!",
                    "Log In SuccessFull!",
                    "success"
                )
                history.push(googleRedirect);

            }).catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            })
            .finally(() => setIsLoading(false));
    }
    const envelope = <FontAwesomeIcon icon={faEnvelope} />
    const user = <FontAwesomeIcon icon={faUser} />
    const lock = <FontAwesomeIcon icon={faLock} />
    const arrow = <FontAwesomeIcon icon={faArrowRight} />
    const google = <FontAwesomeIcon icon={faGoogle} />
    const link = <FontAwesomeIcon icon={faLink} />
    return (
        <>
            <section style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0,0,0,0.7)),url(${bglogin}) center center/cover no-repeat`, minHeight: '100vh' }} className="d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row mx-auto">
                        <div className="col-md-6 mx-auto p-3">
                            <h2 className="text-center mb-5 text-white">Register Now</h2>
                            <Form onSubmit={register}>
                                <Form.Group className="mb-3" id="formBasicname">
                                    <Form.Label htmlFor="inlineFormInputGroup1" visuallyHidden>
                                        Full Name
                                    </Form.Label>
                                    <InputGroup className="mb-2 rounded">
                                        <InputGroup.Text>{user}</InputGroup.Text>
                                        <FormControl
                                            required
                                            onBlur={getName}
                                            type="text"
                                            autoComplete="current-name"
                                            id="name"
                                            placeholder="Enter your name"
                                        />
                                    </InputGroup>
                                </Form.Group>
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
                                            autoComplete="current-name"
                                            id="password"
                                            placeholder="*****"
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-3" id="formBasicPassword">
                                    <Form.Label htmlFor="inlineFormInputGroup2" visuallyHidden>
                                        Password
                                    </Form.Label>
                                    <InputGroup className="mb-2 rounded">
                                        <InputGroup.Text>{link}</InputGroup.Text>
                                        <FormControl
                                            required
                                            onBlur={getPhoto}
                                            type="text"
                                            autoComplete="current-text"
                                            id="photo"
                                            placeholder="Enter valid photo url"
                                        />
                                    </InputGroup>
                                </Form.Group>
                                <Button variant="primary" className="w-100 fw-bold" type="submit">
                                    {arrow} Register
                                </Button>
                            </Form>
                            <NavLink className="text-decoration-none" to="/login">
                                <p className="text-center mt-3 text-white fw-bolder"> Alreay Account? Please Login!</p>
                            </NavLink>
                            <div className="mt-3 text-center fs-4 fw-bolder text-white">---Or---</div>
                            <p className="text-center text-white">Register With Google</p>
                            <div className="mt-3 text-center fs-4 fw-bolder" >
                                <Button onClick={handleGooglereg} variant="primary">{google}</Button>
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
        </>
    );
};

export default Register;