import React from 'react'
import { Card, CardBody } from "reactstrap";

export const UserProfile = ({ userProfile }) => {
    return (
        <Card className="m-1">
            <CardBody>
                <h5>{userProfile.firstName} {userProfile.lastName}</h5>
                <p>UserName: {userProfile.displayName}</p>
            </CardBody>
        </Card>
    );
};