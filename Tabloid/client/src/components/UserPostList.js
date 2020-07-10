import React, { useContext, useEffect } from "react";
import { UserPost } from "./UserPost";
import { UserPostContext } from "../providers/UserPostProvider";

export const UserPostList = () => {

    const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));
    const { userPosts, getAllPostsByUser } = useContext(UserPostContext);

    useEffect(() => {
        getAllPostsByUser(userProfile.id)
    }, []);
    debugger
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    {userPosts.map((post) => (
                        <UserPost key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};

