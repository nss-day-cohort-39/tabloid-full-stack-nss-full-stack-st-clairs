import React from "react";
import { Card, CardBody } from "reactstrap";

export const Comment = ({ comment }) => {
    return (
        <Card className="">
            <p className="text-left px-2">Commented by: {comment.userProfile.displayName}</p>
            <CardBody>
                <p>{comment.subject}</p>
                <p>{comment.content}</p>
                <p>{comment.createDateTime}</p>
            </CardBody>
        </Card>
    );
};
