import React, { useState, useContext } from "react";
import { Card, CardBody, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { TagContext } from "../../providers/TagProvider";

export const Tag = ({ tag }) => {
    
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const { deleteTag } = useContext(TagContext)

    return (
        <Card className="tagCard">
            <CardBody>
                <div className="TagCardBody">
                    <h4>{tag.name}</h4>
                    <div>
                        <button type="submit"
                            onClick={
                                evt => {
                                    evt.preventDefault()}}
                            className="btn btn-primary">
                            Edit</button>
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