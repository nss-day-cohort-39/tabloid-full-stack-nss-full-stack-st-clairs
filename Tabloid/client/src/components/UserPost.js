import React, { useContext, useState } from "react";
import { Card, CardImg, CardBody, ModalHeader, ModalBody, Modal, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { UserPostContext } from "../providers/UserPostProvider";
import { EditPostForm } from "./EditPostForm";
import { format } from "date-fns"

export const UserPost = ({ post }) => {
    const { deletePost } = useContext(UserPostContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    return (
        <Card className="postCard">
            <p className="text-left px-2">Posted by: {post.userProfile.displayName}</p>
            <CardImg top src={post.imageLocation} />
            <CardBody>
                <Link to={`/posts/${post.id}`}>
                    <strong>{post.title}</strong>
                </Link>
                <p>Category: {post.category.name}</p>
                <p>Created: {format(new Date(post.createDateTime), 'MM/dd/yyyy')}</p>
                <div className="PostCardBody">
                    <div><Button color="danger" onClick={toggle}>Delete</Button>
                        <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader toggle={toggle}>
                                Are you sure you want to delete {post.title}?
                            </ModalHeader>
                            <ModalBody className="PostModalBody">
                                <button type="submit"
                                    onClick={
                                        evt => {
                                            evt.preventDefault()
                                            deletePost(post).then(toggle)
                                        }}
                                    className="btn btn-danger button_margin">
                                    Delete
                                </button>
                                <button type="submit"
                                    onClick={
                                        evt => {
                                            evt.preventDefault()
                                            toggle()
                                        }}
                                    className="btn btn-primary">
                                    Cancel
                                </button>
                            </ModalBody>
                        </Modal>
                    </div>
                    <div><Button color="warning" onClick={toggleEdit}>Edit</Button>
                        <Modal isOpen={editModal} toggle={toggleEdit}>
                            <ModalBody className="PostModalBody">
                                <EditPostForm post={post} toggle={toggleEdit} />
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}


