import React, { useEffect, useContext, useState } from 'react'
import { Card, CardImg, CardBody } from "reactstrap";
import { ListGroupItem } from 'reactstrap'
import { PostContext } from '../providers/PostProvider'
import { useParams, Link } from 'react-router-dom'
import { TagsOnPost } from "./Tag/TagsOnPost";
import { CommentForm } from './CommentForm';

const PostDetails = () => {
  const [post, setPost] = useState()
  const [commentInput, setInput] = useState(false)
  const { getPost } = useContext(PostContext);
  const { id } = useParams()
  const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));

  useEffect(() => {
    getPost(id).then(setPost)
  }, [])

  const displayInput = () => {
    if (commentInput === true) {
      return <CommentForm postId={id} />
    }
  }

  if (!post) {
    return null
  }

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-sm-12 col-lg-6'>
          {
            (post.userProfileId === userProfile.id)
              ? <Link to={'/userposts'}><p>Back to My Posts</p></Link>
              : <Link to={'/posts'}>Back to All Posts</Link>
          }
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
            <Link to={`/comments/${id}`}>
              <p>View Comments</p>
            </Link>
            <button type="submit"
              onClick={
                evt => {
                  evt.preventDefault()
                  setInput(true)
                }
              }
              className="btn btn-primary">
              Add</button>
            <div>
              {displayInput()}
            </div>
          </Card>
          {
            (post.userProfileId === userProfile.id)
              ? <ListGroupItem><Link to={`/AddTagForm/post/${post.id}`}><h6>Manage Tags</h6></Link></ListGroupItem>
              : ""
          }
        </div>
      </div>
    </div>
  )
}

export default PostDetails
