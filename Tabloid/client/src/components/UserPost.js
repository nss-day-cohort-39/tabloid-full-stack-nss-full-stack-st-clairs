import React, { useContext, useState } from "react";
import { Card, CardImg, CardBody, ModalHeader, ModalBody, Modal, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { UserPostContext } from "../providers/UserPostProvider";

export const UserPost = ({ post }) => {
    const { deletePost } = useContext(UserPostContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <Card className="postCard">
            <p className="text-left px-2">Posted by: {post.userProfile.displayName}</p>
            <CardImg top src={post.imageLocation} />
            <CardBody>
                <Link to={`/posts/${post.id}`}>
                    <strong>{post.title}</strong>
                </Link>
                <p>Category: {post.category.name}</p>
                <p>Created: {post.createDateTime}</p>
                <div className="PostCardBody">
                    <div>
                        <button type="submit"
                            onClick={
                                evt => {
                                    evt.preventDefault()
                                }}
                            className="btn btn-primary">
                            Edit
                        </button>
                        <Button color="danger" onClick={toggle}>Delete</Button>
                        <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader toggle={toggle}>
                                Are you sure you want to delete {post.title}?
                            </ModalHeader>
                            <ModalBody className="PostModalBody">
                                <button type="submit"
                                    onClick={
                                        evt => {
                                            evt.preventDefault()
                                            toggle()
                                        }}
                                    className="btn btn-primary">
                                    Cancel
                                </button>
                                <button type="submit"
                                    onClick={
                                        evt => {
                                            evt.preventDefault()
                                            deletePost(post).then(toggle)
                                        }}
                                    className="btn btn-danger">
                                    Delete
                                </button>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
} 