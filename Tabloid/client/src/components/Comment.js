import React, { useState, useContext } from "react";
import { Card, CardBody, Button, ModalBody, Modal, ModalHeader } from "reactstrap";
import { CommentContext } from "../providers/CommentProvider";

export const Comment = ({ comment }) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const { deleteComment } = useContext(CommentContext)

    // const [editModal, setEditModal] = useState(false)
    // const toggleEdit = () => setEditModal(!editModal)

    // const commentEdit = () => {
    //     updateCategory({
    //         id: category.id,
    //         name: name.current.value
    //     }).then(toggleEdit)
    // }

    return (
        <Card className="">
            <p className="text-left px-2">Commented by: {comment.userProfile.displayName}</p>
            <CardBody>
                <p>Subject: {comment.subject}</p>
                <p>Content: {comment.content}</p>
                <p>Comment Date: {comment.createDateTime}</p>
                
                <div>
                    {/* <Button color="warning" onClick={toggleEdit}>Edit</Button>
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
                                                toggleEdit()
                                            }}
                                        className="btn btn-secondary">
                                        Cancel</button>
                                    <button type="submit"
                                        onClick={
                                            evt => {
                                                evt.preventDefault()
                                                categoryEdit(category)
                                            }}
                                        className="btn btn-success">
                                        Save Changes</button>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal> */}

                    <Button color="danger" onClick={toggle}>Delete</Button>

                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>
                            Are you sure you want to delete {comment.Content}?</ModalHeader>

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
                                        deleteComment(comment).then(toggle)
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
