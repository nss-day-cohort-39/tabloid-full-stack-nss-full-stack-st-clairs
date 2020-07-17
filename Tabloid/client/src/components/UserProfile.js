import React from 'react'
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";


export const UserProfile = ({ userProfile }) => {
    return (
        <Card className="m-1">
            <CardBody>
                <Link to={`/profiles/${userProfile.id}`}>
                    <strong>{userProfile.firstName} {userProfile.lastName}</strong>
                </Link>
                <p>UserName: {userProfile.displayName}</p>
                <p>UserType: {userProfile.userType.name}</p>
            </CardBody>
        </Card>
    );
};