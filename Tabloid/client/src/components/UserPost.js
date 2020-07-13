import React, { useContext, useState, useRef, useEffect } from "react";
import { Card, CardImg, CardBody, ModalHeader, ModalBody, Modal, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { PostContext } from "../providers/PostProvider";
import { CategoryContext } from "../providers/CategoryProvider";


export const UserPost = ({ post }) => {

    const title = useRef('title')
    const content = useRef('content')
    const category = useRef('category')
    const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));
    const imageLocation = useRef('imageLocation')
    const publishDateTime = useRef('publishDateTime')

    const { deletePost, updatePost } = useContext(PostContext)
    const { categories, getAllCategories } = useContext(CategoryContext);


    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)

    const PostUpdate = () => {
        updatePost({
            id: post.id,
            title: title.current.value,
            content: content.current.value,
            imageLocation: content.current.value,
            userProfileId: userProfile.id,
            publishDateTime: publishDateTime.current.value,
            categoryId: parseInt(category.current.value)

        }).then(toggleEdit)
    }

    useEffect(() => {
        getAllCategories();
    }, []);
    
    return (
        <Card className="postCard">
            <p className="text-left px-2">Posted by: {post.userProfile.displayName}</p>
            <CardImg top src={post.imageLocation} alt={post.title} />
            <CardBody>
                <Link to={`/posts/${post.id}`}>
                    <strong>{post.title}</strong>
                </Link>
                <p>{post.category}</p>
                <Button color="primary" onClick={toggleEdit}>Edit</Button>

                <Modal isOpen={editModal} toggle={toggleEdit}>
                    <ModalHeader toggle={toggleEdit}>
                        Edit {post.title}</ModalHeader>
                    <ModalBody >
                        <form className='postForm'>
                            <h2 className='postForm__title'>Edit Post</h2>
                            <fieldset>
                                <div className='form-group'>
                                    <label htmlFor='postTitle'>Post title: </label>
                                    <input
                                        type='text'
                                        id='postTitle'
                                        ref={title}
                                        required
                                        autoFocus
                                        className='form-control'
                                        placeholder={post.title}
                                    />
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className='form-group'>
                                    <label htmlFor='postContent'>Post content: </label>
                                    <input
                                        type='text'
                                        id='postContent'
                                        ref={content}
                                        required
                                        autoFocus
                                        className='form-control'
                                        placeholder={post.content}
                                    />
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className='form-group'>
                                    <label htmlFor='postCategory'>Category: </label>
                                    <select
                                        defaultValue=''
                                        name='category'
                                        ref={category}
                                        id='category'
                                        className='form-control'
                                        placeholder={post.category}
                                        required
                                        autoFocus
                                    >
                                        <option value='0'>Select a category</option>
                                        {categories.map(c => (
                                            <option key={c.id} value={c.id}>
                                                {c.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className='form-group'>
                                    <label htmlFor='postImageLocation'>Post imageLocation: </label>
                                    <input
                                        type='text'
                                        id='postImageLocation'
                                        ref={imageLocation}
                                        required
                                        autoFocus
                                        className='form-control'
                                        placeholder={post.imageLocation}
                                    />
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className='form-group'>
                                    <label htmlFor='postPublishDateTime'>Post publishDateTime: </label>
                                    <input
                                        type='date'
                                        id='postPublishDateTime'
                                        ref={publishDateTime}
                                        required
                                        autoFocus
                                        className='form-control'
                                        placeholder={post.publishDateTime}
                                    />
                                </div>
                            </fieldset>
                            <div className="">
                                        <button type="submit"
                                            onClick={
                                                evt => {
                                                    evt.preventDefault() // Prevent browser from submitting the form
                                                    toggleEdit()
                                                }}
                                            className="btn btn-secondary">
                                            Cancel</button>
                                        <button type="submit"
                                            onClick={
                                                evt => {
                                                    evt.preventDefault() // Prevent browser from submitting the form
                                                    PostUpdate()
                                                }}
                                            className="btn btn-primary">
                                            Save Changes</button>
                                    </div>
                        </form>
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
                    </ModalBody>
                </Modal>
            </CardBody>
        </Card>
    )
} 