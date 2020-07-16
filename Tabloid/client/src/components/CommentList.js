import React, { useContext, useEffect } from "react";
import { CommentContext } from "../providers/CommentProvider";
import { Comment } from "./Comment";
import { useParams } from "react-router-dom";


export const CommentList = () => {
    const { comments, getCommentsByPostId } = useContext(CommentContext);
    const { id } = useParams()

    useEffect(() => {
        getCommentsByPostId(id);
    }, []);


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">

                    {comments.map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                    ))}
                </div>
            </div>
        </div>
    );
};
