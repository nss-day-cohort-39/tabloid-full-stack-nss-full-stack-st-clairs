import React, { useContext, useState, useEffect } from "react";
import { PostContext } from "../providers/PostProvider";
import { CategoryContext } from "../providers/CategoryProvider";
import { Button, Form } from "reactstrap";
import { useHistory } from "react-router-dom";

export const EditPostForm = (props) => {
  const { updatePost } = useContext(PostContext);
  const { categories, getAllCategories } = useContext(CategoryContext);
  const [profileUpdate, setPost] = useState(props.post);
  const history = useHistory();

  const handleControlledInputChange = (event) => {
    const newPost = Object.assign({}, profileUpdate);
    newPost[event.target.name] = event.target.value;
    setPost(newPost);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const editPost = () => {
    profileUpdate.categoryId = parseInt(profileUpdate.categoryId);
    updatePost(profileUpdate).then(props.toggle).then(history.push(`/posts/${props.post.id}`));
  };

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
                defaultValue={props.post.title}
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
                defaultValue={props.post.content}
                onChange={handleControlledInputChange}
              />
              Category:
              <select
                name="categoryId"
                required
                className="form-control"
                defaultValue={
                  props.post.category.isDeleted ? null : props.post.categoryId
                }
                onChange={handleControlledInputChange}
              >
                <option
                  value={
                    props.post.category.isDeleted ? null : props.post.categoryId
                  }
                >
                  {props.post.category.isDeleted
                    ? "Select a Category"
                    : props.post.category.name}
                </option>
                {categories.map((e) =>
                  e.isDeleted ? null : (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  )
                )}
              </select>
              Header Image:
              <input
                type="text"
                name="imageLocation"
                className="form-control"
                placeholder="Edit post image"
                defaultValue={props.post.imageLocation}
                onChange={handleControlledInputChange}
              />
              Published Date:
              <input
                type="date"
                name="publishDateTime"
                className="form-control"
                placeholder="Edit publish date"
                defaultValue={props.post.publishDateTime.split("T")[0]}
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
        <Button onClick={props.toggle}>Cancel</Button>
      </Form>
    </>
  );
};