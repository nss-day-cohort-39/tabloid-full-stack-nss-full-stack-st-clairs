import React from "react";
import { Card, CardBody, Button } from "reactstrap";



export const Tag = ({ tag }) => {

    return (
        <Card>
            <CardBody>
                <h3>{tag.name}</h3>
                <div className="tagCard">
                    <h4>{tag.name}</h4>
                    <div>
                        <Button color="primary">Edit</Button>
                        <Button color="danger">Delete</Button>
                    </div>
                </div>
            </CardBody>
        </Card>

    )

}