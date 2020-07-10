import React, { useState, useContext, useRef } from "react";
import { Card, CardBody, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { TagContext } from "../../providers/TagProvider";

export const Tag = ({ tag }) => {
    const name = useRef()
    
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const { deleteTag, updateTag } = useContext(TagContext)
    
    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    const tagUpdate = () => {
        updateTag({
            id: tag.id,
            name: name.current.value
        }).then(toggleEdit)
    }

    return (
        <Card className="tagCard">
            <CardBody>
                <div className="TagCardBody">
                    <h4>{tag.name}</h4>
                <div>
                <Button color="primary" onClick={toggleEdit}>Edit</Button>

<Modal isOpen={editModal} toggle={toggleEdit}>
    <ModalHeader toggle={toggleEdit}>
        Edit {tag.name}</ModalHeader>
        <ModalBody >
        <div className="form-group">
            <input
                type="text"
                id="name"
                ref={name}
                required
                autoFocus
                className="form-control"
                defaultValue={tag.name}
            />
            <div className="">
                <button type="submit"
                    onClick={
                        evt => {
                            evt.preventDefault() // Prevent browser from submitting the form
                            toggleEdit()}}
                    className="btn btn-secondary">
                    Cancel</button>
                <button type="submit"
                    onClick={
                        evt => {
                            evt.preventDefault() // Prevent browser from submitting the form
                            tagUpdate()}}
                    className="btn btn-primary">
                    Save Changes</button>
            </div>
        </div>
    </ModalBody>
</Modal>























                        <Button color="danger" onClick={toggle}>Delete</Button>
                        <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader toggle={toggle}>
                               Are you sure you want to delete {tag.name}?</ModalHeader>

                        <ModalBody className="TagModalBody">
                                <button type="submit"
                                    onClick={
                                        evt => {
                                            evt.preventDefault()
                                            toggle()}}
                                    className="btn btn-primary">
                                    Cancel</button>
                                <button type="submit"
                                    onClick={
                                        evt => {
                                            evt.preventDefault()
                                            deleteTag(tag.id).then(toggle)}}
                                    className="btn btn-danger">
                                    Delete</button>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}