import React, { useEffect, useContext, useState } from 'react'
import { Card, CardImg, CardBody, Button } from "reactstrap";
import { ListGroupItem } from 'reactstrap'
import { PostContext } from '../providers/PostProvider'
import { useParams, Link, useHistory } from 'react-router-dom'
import { TagsOnPost } from "./Tag/TagsOnPost";
import { CommentForm } from './CommentForm';
import { format } from 'date-fns'


const PostDetails = () => {
  const [post, setPost] = useState()
  const [commentInput, setInput] = useState(false)
  const { getPost } = useContext(PostContext);
  const { id } = useParams()
  const history = useHistory();
  const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));

  useEffect(() => {
    getPost(id).then(setPost)
  }, [])

  const displayInput = () => {
    if (commentInput === true) {
      return <CommentForm postId={id} />
    }
  }

  const ViewComments = () => {
    return history.push(`/comments/${id}`)
  }

  const ManageTags = () => {
    return history.push(`/AddTagForm/post/${post.id}`)
  }

  if (!post) {
    return null
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-sm-12 col-lg-6'>
        <div className="backLink">
          {
            (post.userProfileId === userProfile.id)
              ? <Link className="backLink" to={'/userposts'}><Button className="backBtn secondary">Back to My Posts</Button></Link>
              : <Link className="backLink" to={'/posts'}><Button className="backBtn secondary">Back to All Posts</Button></Link>
          }
        </div>
        <Card className="m-4 postDetails">
          <CardImg className="postImg" top src={post.imageLocation} />
          <CardBody>
            <div className="postTitle">
              <h3>{post.title}</h3>
            </div>

            <div className="postItems">
              Content: <br />
              {post.content} <br /><br />
              <div>
                Posted by: <br />
                {post.userProfile.displayName} <br />
              </div>
              <div>
                Category: <br />
                {post.category.name} <br /><br />
              </div>
              <div>
                Date Published: <br />
                {format(new Date(post.publishDateTime), 'MM/dd/yyyy')} <br /><br />
              </div>
            </div>
            <div className="postTags">
              {
                (post.userProfileId === userProfile.id)
                  ? <Button className="mngTagBtn"
                    color="info"
                    onClick={
                      evt => {
                        evt.preventDefault()
                        ManageTags()
                      }
                    }>Manage Tags
                  </Button>
                  : ""
              }
              <ListGroupItem className="postTagList"><div className="postTags"> <strong>Tags: </strong>  {post.postTags.map(pt => <TagsOnPost key={pt.id} postTag={pt} />)}</div></ListGroupItem>
              <div></div>
            </div>
          </CardBody>

          <div className="commentBtns">
            <Button className="viewCommentBtn" color="secondary"
              onClick={
                evt => {
                  evt.preventDefault()
                  ViewComments()
                }
              }>View Comments
            </Button>

            <Button type="submit"
              color="primary"
              onClick={
                evt => {
                  evt.preventDefault()
                  setInput(true)
                }
              }
              className="addCommentBtn">
              Add Comment
            </Button>
          </div>

          <div>
            {displayInput()}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default PostDetails
