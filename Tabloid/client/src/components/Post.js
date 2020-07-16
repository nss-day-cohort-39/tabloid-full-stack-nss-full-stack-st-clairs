import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

export const Post = ({ post }) => {
    return (
        <Card className="m-4">
            <p className="text-left px-2">Posted by: {post.userProfile.displayName}</p>
            <CardImg top src={post.imageLocation} />
            <CardBody>
                <Link to={`/posts/${post.id}`}>
                    <strong>{post.title}</strong>
                </Link>
                <p>Category: {post.category.name}</p>
                <p>Created: {post.createDateTime}</p>
            </CardBody>
        </Card>
    );
};
