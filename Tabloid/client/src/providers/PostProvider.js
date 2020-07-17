import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const { getToken } = useContext(UserProfileContext)
    const [posts, setPosts] = useState([]);

    const apiUrl = '/api/post'

    const getAllPosts = () => {
        return getToken().then((token) =>
            fetch(apiUrl, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
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
            }).then(resp => resp.json()).then(getAllPosts))
    };

    const updatePost = (post) => {
        return fetch(`/api/post/${post.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        }).then(getAllPosts);;

    }

    const deletePost = (id) => {
        return getToken().then((token) =>
            fetch(apiUrl + `/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            })).then(getAllPosts);
    }

    const getPost = (id) => {
        return getToken().then((token) =>
            fetch(apiUrl + `/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json()));
    };

    const addTagtoPost = (postTag) => {
       return getToken().then((token) =>
            fetch(`/api/post/addtag`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postTag),
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                else { throw new Error("Unauthorized"); }
            }));
        }
    const removeTagFromPost = (id) => {
        return getToken().then((token) =>
            fetch(`/api/post/addtag/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((resp) => {
                if (resp.ok) {
                    return;
                }
                else { throw new Error("Failed to delete post.") }
            })
        );
    };


    return (
        <PostContext.Provider value={{
            posts, getAllPosts, addPost, deletePost, getPost, addTagtoPost, removeTagFromPost, getAllPosts, updatePost
        }}>
            {props.children}
        </PostContext.Provider>
    );
};
