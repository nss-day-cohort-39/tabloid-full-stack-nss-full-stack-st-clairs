import React, { useContext, useState, useEffect } from "react";
import { Button, Form } from "reactstrap";
import { useHistory } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import { UserTypeContext } from "../providers/UserTypeProvider";

export const UserTypeForm = (props) => {
    const { updateProfile } = useContext(UserProfileContext)
    const { userTypes, getAllUserTypes } = useContext(UserTypeContext)
    const [profileUpdate, setUserProfiles] = useState(props.userProfile);
    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newUserType = Object.assign({}, profileUpdate);
        newUserType[event.target.name] = event.target.value;
        setUserProfiles(newUserType);
    };

    useEffect(() => {
        getAllUserTypes();
    }, []);

    const editProfile = () => {
        profileUpdate.userTypeId = parseInt(profileUpdate.userTypeId);
        updateProfile(profileUpdate).then(props.toggle).then(history.push(`/profiles`));
    };

    return (
        <>
            <section className="userTypeForm">
                <Form>
                    <fieldset>
                        <h3>Edit User Type:</h3>
                        <div className="form-group">
                            <label htmlFor="title">
                                <select
                                    name="userTypeId"
                                    required
                                    className="form-control"
                                    defaultValue={
                                        props.userProfile.userType.isDeleted ? null : props.userProfile.userTypeId
                                    }
                                    onChange={handleControlledInputChange}
                                >
                                    {userTypes.map((ut) =>
                                        ut.isDeleted ? null : (
                                            <option key={ut.id} value={ut.id}>
                                                {ut.name}
                                            </option>
                                        )
                                    )}
                                </select>
                            </label>
                        </div>
                    </fieldset>

                    <Button className="button_margin"
                        color="success"
                        onClick={(e) => {
                            e.preventDefault();
                            editProfile();
                        }}
                    >
                        Update
                </Button>
                    <Button onClick={props.toggle}>Cancel</Button>
                </Form>
            </section>
        </>
    );
};