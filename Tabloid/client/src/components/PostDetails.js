import React, { useEffect, useContext, useState } from 'react'
import { Card, CardImg, CardBody } from "reactstrap";
import { ListGroup, ListGroupItem } from 'reactstrap'
import { PostContext } from '../providers/PostProvider'
import { useParams, useHistory, Link } from 'react-router-dom'
import { Post } from './Post'
import { TagsOnPost } from "./Tag/TagsOnPost";

const PostDetails = () => {
  const [post, setPost] = useState()
  const { getPost, addTag } = useContext(PostContext);
  const { id } = useParams()
  const userProfileId = JSON.parse(sessionStorage.getItem("userProfile")).id;

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);


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
        </Card>

        {
              (post.userProfileId === userProfileId)
                ? <ListGroupItem><Link to={`/AddTagForm/post/${post.id}`}><h6>Manage Tags</h6></Link></ListGroupItem>
                : ""
            }
          {/* <ListGroup>
            {post.title.map(c => (
              <ListGroupItem>{c.content}</ListGroupItem>
            ))}
          </ListGroup> */}
        </div>
      </div>
    </div>
  )
}

export default PostDetails
