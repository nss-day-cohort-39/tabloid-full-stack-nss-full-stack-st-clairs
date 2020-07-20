import React, { useEffect, useContext, useState } from 'react'
import { Card, CardImg, CardBody, ListGroupItem, Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { PostContext } from '../providers/PostProvider'
import { useParams, useHistory, Link } from 'react-router-dom'
import { TagsOnPost } from "./Tag/TagsOnPost";
import { EditPostForm } from './EditPostForm';


const PostDetails = () => {
  const [post, setPost] = useState()
  const { getPost, addTag } = useContext(PostContext);
  const { id } = useParams()
  const userProfileId = JSON.parse(sessionStorage.getItem("userProfile")).id;

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const [editModal, setEditModal] = useState(false);
  const toggleEdit = () => setEditModal(!editModal);

  useEffect(() => {
    getPost(id).then(setPost)
  }, [])



  if (!post) {
    return null
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-sm-12 col-lg-6'>
          <Card className="m-4">
            <p className="text-left px-2">Posted by: {post.userProfile.displayName}</p>
            <CardImg top src={post.imageLocation} />
            <CardBody>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
                <p>{post.publishDateTime}</p>
                <p>{post.category.name}</p>
            <ListGroupItem><div className="postTags"> <strong>Tags: </strong>  {post.postTags.map(pt => <TagsOnPost key={pt.id} postTag={pt} />)}</div></ListGroupItem>
            </CardBody>
            <Button color="info" onClick={toggleEdit}>
          {" "}
          Edit{" "}
        </Button>
        <Modal isOpen={editModal}>
        <ModalHeader>EDIT POST</ModalHeader>
        <ModalBody>
          <EditPostForm toggle={toggleEdit} post={post} />
        </ModalBody>
      </Modal>

            <Link to={`/comments/${id}`}>
            <p>View Comments</p>
          </Link>

        </Card>
        {
              (post.userProfileId === userProfileId)
                ? <ListGroupItem><Link to={`/AddTagForm/post/${post.id}`}><h6>Manage Tags</h6></Link></ListGroupItem>
                : ""
            }
        </div>
      </div>
    </div>
  )
}

export default PostDetails
