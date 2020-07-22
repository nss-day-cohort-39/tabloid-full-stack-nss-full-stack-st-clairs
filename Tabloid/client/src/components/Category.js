import React, { useState, useContext, useRef } from "react";
import { Card, CardBody, Button, ModalBody, Modal, ModalHeader } from "reactstrap";
import { CategoryContext } from "../providers/CategoryProvider";

const Category = ({ category }) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const name = useRef()

    const { deleteCategory, updateCategory } = useContext(CategoryContext)
    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    const categoryEdit = () => {
        updateCategory({
            id: category.id,
            name: name.current.value
        }).then(toggleEdit)
    }

    return (
        <Card className="cetagoryStyleCard">
            <CardBody>
                <h4>{category.name}</h4>
                <div className="categorybtns">

                    <Button className="categoryBtn, categoryEditBtn" color="warning" onClick={toggleEdit}>Edit</Button>

                    <Modal isOpen={editModal} toggle={toggleEdit}>
                        <ModalHeader toggle={toggleEdit}>
                            Edit {category.name}</ModalHeader>
                        <ModalBody >
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="name"
                                    ref={name}
                                    required
                                    autoFocus
                                    className="form-control"
                                    defaultValue={category.name}
                                />
                                <br />
                                <div className="">
                                    <button type="submit"
                                        onClick={
                                            evt => {
                                                evt.preventDefault()
                                                categoryEdit(category)
                                            }}
                                        className="btn btn-success button_margin">
                                        Save Changes</button>
                                    <button type="submit"
                                        onClick={
                                            evt => {
                                                evt.preventDefault()
                                                toggleEdit()
                                            }}
                                        className="btn btn-secondary">
                                        Cancel</button>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>

                    <Button color="danger" className="categoryBtn" onClick={toggle}>Delete</Button>

                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>
                            Are you sure you want to delete {category.name}?</ModalHeader>

                        <ModalBody>
                            <button type="submit"
                                onClick={
                                    evt => {
                                        evt.preventDefault()
                                        deleteCategory(category.id).then(toggle)
                                    }}
                                className="btn btn-danger button_margin">
                                Delete</button>
                            <button type="submit"
                                onClick={
                                    evt => {
                                        evt.preventDefault()
                                        toggle()
                                    }}
                                className="btn btn-primary">
                                Cancel</button>
                        </ModalBody>
                    </Modal>
                </div>
            </CardBody>
        </Card>
    );
};

export default Category;