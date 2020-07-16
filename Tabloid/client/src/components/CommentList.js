import React, { useContext, useEffect, useState } from "react";
import { CommentContext } from "../providers/CommentProvider";
import { Comment } from "./Comment";
import { useParams } from "react-router-dom";
import { PostContext } from "../providers/PostProvider";


export const CommentList = () => {
    const [post, setPost] = useState({})
    const { comments, getCommentsByPostId } = useContext(CommentContext);
    const { getPost } = useContext(PostContext)
    const { id } = useParams()

    useEffect(() => {
        getCommentsByPostId(id);
        getPost(id).then(setPost)
    }, [])


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    <h1>Post: {post.title}</h1>
                    {comments.map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                    ))}
                </div>
            </div>
        </div>
    );
};
