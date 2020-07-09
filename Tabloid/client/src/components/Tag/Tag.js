import React from "react";
import { Card, CardBody } from "reactstrap";



export const Tag = ({ tag }) => {

    return (
        <Card>
            <CardBody>
                <h3>{tag.name}</h3>
            </CardBody>
        </Card>

    )

}