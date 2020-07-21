import React, { useContext, useEffect } from "react";
import { UserProfile } from "./UserProfile";
import { UserProfileContext } from "../providers/UserProfileProvider";

export const UserProfileList = () => {

    const { userProfiles, getUserProfiles } = useContext(UserProfileContext)


    useEffect(() => {
        getUserProfiles()
    }, []);


    return (
        <section>
            <div className="userProfileContainer">
                <div className="row justify-content-center">
                    <div className="user-cards-column">
                        <h2>Profiles</h2>
                        {userProfiles.map((up) => (
                            <UserProfile key={up.id} userProfile={up} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

}