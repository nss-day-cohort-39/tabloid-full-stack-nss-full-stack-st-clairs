import React, { useContext, useState, useEffect, useRef } from "react";
import { PostContext } from "../providers/PostProvider";
import { CategoryContext } from "../providers/CategoryProvider";
import { Button, Form } from "reactstrap";
import { useHistory, useParams } from "react-router-dom";


export const EditPostForm = ({ post }) => {
    const { updatePost, getPost} = useContext(PostContext);
    const { categories, getAllCategories } = useContext(CategoryContext)
    const [updatedPost, setPost] = useState(post);
    const history = useHistory()
    const { id } = useParams()


    const title = useRef()
    const content = useRef()
    const imageLocation = useRef()
    const publishDateTime = useRef()
    const categoryId = useRef()


    const handleControlledInputChange = (event) => {
        const newPost = {
            id: post.id,
            title: title.current.value,
            content: content.current.value,
            imageLocation: imageLocation.current.value,
            publishDateTime: publishDateTime.current.value,
            createDateTime: post.createDateTime,
            categoryId: categoryId,
            userProfileId: post.userProfileId
        } 
        setPost(newPost);
    };

    useEffect(() => {
        getAllCategories()
        getPost(id)
    }, [])

    const editPost = () => {
        updatedPost.categoryId = parseInt(updatedPost.categoryId)
        console.log(updatedPost)
        updatePost(updatedPost).then(history.push("/posts"));
    }

    return (
        <>
            <Form className="editPostForm">
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="title">
                            Title:
                    <input
                                type="text"
                                name="title"
                                required
                                autoFocus
                                className="form-control"
                                placeholder="Edit post title"
                                defaultValue={post.title}
                                onChange={handleControlledInputChange}
                            />
                            Content:
                    <input
                                type="textarea"
                                name="content"
                                rows="20"
                                columns="50"
                                required
                                autoFocus
                                className="form-control"
                                placeholder="Edit content"
                                defaultValue={post.content}
                                onChange={handleControlledInputChange}
                            />
                            Category:
                    <select
                                name="categoryId"
                                required
                                className="form-control"
                                defaultValue={post.categoryId}
                                onChange={handleControlledInputChange}
                            >
                                <option value={post.categoryId}>{post.category.name}</option>
                                {categories.map((e) => (
                                    <option key={e.id} value={e.id}>
                                        {e.name}
                                    </option>
                                ))}
                            </select>
                            Header Image:
                     <input
                                type="text"
                                name="imageLocation"
                                className="form-control"
                                placeholder="Edit post image"
                                defaultValue={post.imageLocation}
                                onChange={handleControlledInputChange}
                            />
                            Published Date:
                     <input
                                type="date"
                                name="publishDateTime"
                                className="form-control"
                                placeholder="Edit publish date"
                                defaultValue={post.publishDateTime.split("T")[0]}
                                onChange={handleControlledInputChange}
                            />
                        </label>
                    </div>
                </fieldset>

                <Button
                    color="primary"
                    onClick={(e) => {
                        e.preventDefault();
                        editPost();
                    }}
                >
                    Save Updates
                </Button>
            </Form>
        </>
    );

}