import React, { useState, useContext } from "react";
import { Card, CardBody, Button, ModalBody, Modal, ModalHeader } from "reactstrap";
import { CategoryContext } from "../providers/CategoryProvider";

const Category = ({ category }) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    const { deleteCategory, editCategory } = useContext(CategoryContext)
    // debugger
    return (
        <Card>
            <CardBody>
                <p>{category.name}</p>
                <div>
                    {/* <button type="submit"
                        onClick={
                            evt => {
                                evt.preventDefault()
                            }}
                        className="btn btn-primary">
                        Edit</button> */}
                    <Button color="warning" onClick={toggle}>Edit</Button>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>
                            Edit the {category.name} Category</ModalHeader>

                        <ModalBody>
                            <button type="submit"
                                onClick={
                                    evt => {
                                        evt.preventDefault()
                                        editCategory(category.id).then(toggle)
                                    }}
                                className="btn btn-success">
                                Submit</button>

                            <button type="submit"
                                onClick={
                                    evt => {
                                        evt.preventDefault()
                                        toggle()
                                    }}
                                className="btn btn-info">
                                Cancel</button>

                        </ModalBody>
                    </Modal>

                    <Button color="danger" onClick={toggle}>Delete</Button>

                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>
                            Are you sure you want to delete {category.name}?</ModalHeader>

                        <ModalBody>
                            <button type="submit"
                                onClick={
                                    evt => {
                                        evt.preventDefault()
                                        toggle()
                                    }}
                                className="btn btn-primary">
                                Cancel</button>
                            <button type="submit"
                                onClick={
                                    evt => {
                                        evt.preventDefault()
                                        deleteCategory(category.id).then(toggle)
                                    }}
                                className="btn btn-danger">
                                Delete</button>
                        </ModalBody>
                    </Modal>
                </div>
            </CardBody>
        </Card>
    );
};

export default Category;