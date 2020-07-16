import React from "react";
import { Card, CardBody } from "reactstrap";

export const Comment = ({ comment }) => {
    return (
        <Card className="">
            <p className="text-left px-2">Commented by: {comment.userProfile.displayName}</p>
            <CardBody>
                <p>Subject: {comment.subject}</p>
                <p>Content: {comment.content}</p>
                <p>Comment Date: {comment.createDateTime}</p>
            </CardBody>
        </Card>
    );
};
