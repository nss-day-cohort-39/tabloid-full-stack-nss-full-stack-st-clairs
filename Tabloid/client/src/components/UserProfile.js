import React, { useState, useContext, useRef } from "react";
import { Card, CardBody, Button, ModalBody, Modal, ModalHeader } from "reactstrap";
import { Link } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";


export const UserProfile = ({ userProfile }) => {

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const userType = useRef()

    const { updateProfile } = useContext(UserProfileContext)
    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    const profileEdit = () => {
        updateProfile({
            id: userProfile.id,
            userTypeId: userType
        }).then(toggleEdit)
    }

    return (
        <Card className="m-1">
            <CardBody>
                <Link to={`/profiles/${userProfile.id}`}>
                    <strong>{userProfile.firstName} {userProfile.lastName}</strong>
                </Link>
                <p>UserName: {userProfile.displayName}</p>
                <p>UserType: {userProfile.userType.name}</p>

                <Button color="warning" onClick={toggleEdit}>Edit</Button>
                <Modal isOpen={editModal} toggle={toggleEdit}>
                    <ModalHeader toggle={toggleEdit}>
                        Edit {userProfile.firstName}'s User Type</ModalHeader>
                    <ModalBody >
                        <div className="form-group">
                            <label htmlFor='userProfileType'>User Types: </label>
                            {/* <select
                                defaultValue=''
                                name='userType'
                                ref={userType}
                                id='userType'
                                className='form-control'
                                placeholder='userType'
                                required
                                autoFocus
                            >
                                <option value='0'>Select a Type</option>
                                {userType.map(up => (
                                    <option key={up.id} value={up.id}>
                                        {up.name}
                                    </option>
                                ))}
                            </select> */}
                            <br />
                            <div className="">
                                <button type="submit"
                                    onClick={
                                        evt => {
                                            evt.preventDefault()
                                            toggleEdit()
                                        }}
                                    className="btn btn-secondary">
                                    Cancel</button>
                                <button type="submit"
                                    onClick={
                                        evt => {
                                            evt.preventDefault()
                                            profileEdit(userProfile)
                                        }}
                                    className="btn btn-success">
                                    Save Changes</button>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </CardBody>
        </Card>
    );
};