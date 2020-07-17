import React, { useEffect, useContext, useState } from 'react'
import { Card, CardImg, CardBody } from "reactstrap";
import { useParams } from 'react-router-dom'
import { UserProfileContext } from '../providers/UserProfileProvider';

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
            <div className='row justify-content-center'>
                <div className='col-sm-12 col-lg-6'>
                    <Card className="m-4">
                        <CardImg top src={userProfile.imageLocation} />
                        <CardBody>
                            <h2>{userProfile.firstName} {userProfile.lastName}</h2>
                            <p>UserName: {userProfile.displayName}</p>
                            <p>Published: {userProfile.email}</p>
                            <p>Date Created: {userProfile.creationDateTime}</p>
                            <p>UserType: {userProfile.userType.name}</p>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default UserProfileDetails