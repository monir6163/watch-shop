import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../../../../Hooks/UseAuth';

const Profile = () => {
    useEffect(() => {
        document.title = "Profile | Your Best Watch Online Shop";
    }, []);
    const { user } = useAuth();
    return (
        <div className="d-flex justify-content-center align-items-center text-center" style={{ minHeight: '75vh' }}>
            <Card className="shadow-lg mb-5 py-3 px-5">
                <div className="overflow-hidden d-flex justify-content-center">
                    {user?.photoURL ? <img
                        style={{
                            width: "45px",
                            borderRadius: "50%",
                        }}
                        src={user?.photoURL}
                        alt=""
                    /> : <i className="fas fa-user-tie me-2 fa-4x"></i>

                    }
                </div>
                <Card.Body>
                    <div className="text-center my-2">
                        <Card.Title className="abril-font fw-semi-bold">
                            {user?.displayName}
                        </Card.Title>
                    </div>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-center">
                    {user?.email}
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Profile;