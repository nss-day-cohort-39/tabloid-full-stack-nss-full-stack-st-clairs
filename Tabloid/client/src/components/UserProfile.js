import React, { useState, useContext, useRef } from "react";
import { Card, CardBody, Button, ModalBody, Modal, ModalHeader } from "reactstrap";
import { Link } from "react-router-dom";
import { UserTypeForm } from "./UserTypeForm";


export const UserProfile = ({ userProfile }) => {

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <Card className="profile_card">
            <CardBody>
                <Link to={`/profiles/${userProfile.id}`}>
                    <strong>{userProfile.firstName} {userProfile.lastName}</strong>
                </Link>
                <p>UserName: {userProfile.displayName}</p>
                <p>UserType: {userProfile.userType.name}</p>

                <div><Button color="primary" onClick={toggle}>Edit User Type</Button>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalBody className="ModalBody">
                            <UserTypeForm userProfile={userProfile} toggle={toggle} />
                        </ModalBody>
                    </Modal>
                </div>
            </CardBody>
        </Card>
    );
};