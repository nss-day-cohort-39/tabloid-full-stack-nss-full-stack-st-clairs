import React, { useState, useContext, useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import { PostContext } from "../../providers/PostProvider";
import { useParams, useHistory } from "react-router-dom";



export const AddTag = ({ tag }) => {
    const history = useHistory();

    const { addTagtoPost, removeTagFromPost, getPost } = useContext(PostContext);
    const { id } = useParams();

    const [post, setPost] = useState();

    useEffect(() => {
        getPost(parseInt(id)).then(setPost);
    }, []);


    const addThisTag = (tagId) => {
       return addTagtoPost({
            postId: parseInt(id),
            TagId: tagId
        }).then(() => {
            getPost(parseInt(id)).then(setPost).then(() => history.push(`/posts/${post.id}`));
        })
    }

    if (!post) {
        return null;
    }

    return (
        <Card className="tagCard">
            <CardBody>
                <div className="tagCardBody">
                    <h4>{tag.name}</h4>
                    <div className="tagButtonContainer">

                        {
                            (!post.postTags.find(pt => pt.tagId === tag.id))
                                ? <button type="submit"
                                    onClick={
                                        evt => {
                                            evt.preventDefault() // Prevent browser from submitting the form
                                            addThisTag(tag.id)
                                        }}
                                    className="btn btn-primary">
                                    Add Tag to Post
                            </button>

                                : <button type="submit"
                                    onClick={
                                        evt => {
                                            evt.preventDefault() // Prevent browser from submitting the form
                                            const postTag = post.postTags.find(pt => pt.tagId === tag.id)
                                            removeTagFromPost(postTag.id).then(() => {
                                                getPost(parseInt(id)).then(setPost).then(() => history.push(`/posts/${post.id}`))
                                            })
                                        }}
                                    className="btn btn-danger">
                                    Remove Tag From Post
                        </button>
                        }
                    </div>
                </div>
            </CardBody>
        </Card>

    )

}
