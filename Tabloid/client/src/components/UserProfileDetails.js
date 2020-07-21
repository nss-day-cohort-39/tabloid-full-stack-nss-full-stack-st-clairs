import React, { useEffect, useContext, useState } from 'react'
import { Card, CardImg, CardBody } from "reactstrap";
import { useParams } from 'react-router-dom'
import { UserProfileContext } from '../providers/UserProfileProvider';
import { format } from 'date-fns';

const UserProfileDetails = () => {
    const [userProfile, setUserProfiles] = useState()
    const { getProfile } = useContext(UserProfileContext)
    const { id } = useParams()

    console.log(id);

    useEffect(() => {
        getProfile(id).then(setUserProfiles)
    }, [])

    if (!userProfile) {
        return null
    }

    return (
        <div className='container'>
            <div>
                <div>
                    <Card className="profile_details">
                        <section className="upd_details">
                            <CardImg className="upd_img" src={userProfile.imageLocation} />

                            <CardBody className="upd_card">
                                <h2>{userProfile.firstName} {userProfile.lastName}</h2>
                                <p>UserName: {userProfile.displayName}</p>
                                <p>Email: {userProfile.email}</p>
                                <p>Date Created: {format(new Date(userProfile.createDateTime), 'MM/dd/yyyy')}</p>
                                <p>UserType: {userProfile.userType.name}</p>
                            </CardBody>
                        </section>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default UserProfileDetails