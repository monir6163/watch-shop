import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/UseAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { admin, user, isLoading } = useAuth();
    if (isLoading) {
        return <div className='text-center my-5'><Spinner animation="border" variant="info" /></div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.displayName && admin ? children : <Redirect to={{
                pathname: "/dashboard",
                state: { from: location }
            }}></Redirect>}
        >

        </Route>
    );
};

export default AdminRoute;