import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom"
import { format } from 'date-fns'

export const Post = ({ post }) => {
    return (
        <Card className="m-4 post">
            <CardImg top src={post.imageLocation} />
            <CardBody>
                <div className="postTitle">
                    <Link to={`/posts/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                </div>
                <div className="postItems">
                    <p>Posted by: {post.userProfile.displayName}</p>
                    <p>Category: {post.category.name}</p>
                    <p>Created: {format(new Date(post.createDateTime), 'MM/dd/yyyy')}</p>
                </div>
            </CardBody>
        </Card>
    );
};