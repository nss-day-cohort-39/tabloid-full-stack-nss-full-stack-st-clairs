import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const UserPostContext = React.createContext();

export const UserPostProvider = (props) => {
    const { getToken } = useContext(UserProfileContext)
    const [userPosts, setPosts] = useState([]);
    const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));

    const apiUrl = '/api/post'

    const getAllPostsByUser = (id) => {
        getToken().then((token) =>
            fetch(apiUrl + `/getbyuser/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setPosts));
    };

    const addPost = (post) => {
        return getToken().then((token) =>
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post)
            }).then(resp => resp.json())
                .then(getAllPostsByUser))
    };

    const deletePost = (post) => {
        return getToken().then((token) =>
            fetch(apiUrl + `/${post.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            })).then(() => getAllPostsByUser(post.userProfile.id))
        }

    return (
        <UserPostContext.Provider value={{
            userPosts, getAllPostsByUser, addPost, deletePost
        }}>
            {props.children}
        </UserPostContext.Provider>
    );
};
