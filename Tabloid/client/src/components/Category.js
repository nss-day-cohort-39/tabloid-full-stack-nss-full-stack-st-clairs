import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
    return (
        <Card className="m-4">
            <CardBody>
                <strong>{category.Name}</strong>
            </CardBody>
        </Card>
    );
};

export default Category;