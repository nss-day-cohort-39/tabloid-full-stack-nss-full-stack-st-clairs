import React, { useEffect, useContext, useState } from 'react'
import { Card, CardImg, CardBody } from "reactstrap";
import { useParams, Link } from 'react-router-dom'
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
                <Link to={`/profiles`}>
                    <button className="btn btn-secondary button_margin_down">Back to Profiles</button>
                </Link>
                <div>
                    <Card className="profile_details">
                        <section className="upd_details">
                            <CardImg className="upd_img" src={userProfile.imageLocation} />
                            <CardBody className="upd_card">
                                <h1>{userProfile.firstName} {userProfile.lastName}</h1>
                                <br />
                                <h3>UserName:  {userProfile.displayName}</h3>
                                <h3>Email:  {userProfile.email}</h3>
                                <h3>Date Created:  {format(new Date(userProfile.createDateTime), 'MM/dd/yyyy')}</h3>
                                <h3>User Type:  {userProfile.userType.name}</h3>
                            </CardBody>
                        </section>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default UserProfileDetails