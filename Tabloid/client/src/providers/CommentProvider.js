import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const CommentContext = React.createContext();

export const CommentProvider = (props) => {
    const { getToken } = useContext(UserProfileContext)
    const [comments, setComments] = useState([]);

    const apiUrl = '/api/comment'

    const getCommentsByPostId = (id) => {
        getToken().then((token) =>
            fetch(apiUrl + `/getbypost/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json())
                .then(setComments));
    };

    const getComment = (id) => {
        return getToken().then((token) =>
            fetch(apiUrl + `/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(resp => resp.json()));
    };

    const addComment = (comment) => {
        return getToken().then((token) =>
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(comment)
            }).then(resp => resp.json())
                .then(getCommentsByPostId))
    };

    const deleteComment = (id) => {
        return getToken().then((token) =>
            fetch(apiUrl + `/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            })).then(() => getCommentsByPostId(id))
    };

    return (
        <CommentContext.Provider value={{
            comments, getCommentsByPostId, getComment, addComment, deleteComment
        }}>
            {props.children}
        </CommentContext.Provider>
    );
};
