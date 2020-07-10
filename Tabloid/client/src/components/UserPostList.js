import React, { useContext, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";
import { Post } from "./Post";

export const UserPostList = () => {

    const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));
    const { posts, getPostsByUser } = useContext(PostContext);

    useEffect(() => {
        getPostsByUser(userProfile.id)
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
};

