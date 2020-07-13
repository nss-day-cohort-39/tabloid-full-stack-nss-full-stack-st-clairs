import React, { useEffect, useContext, useState } from 'react'
import { Card, CardImg, CardBody } from "reactstrap";
import { ListGroup, ListGroupItem } from 'reactstrap'
import { PostContext } from '../providers/PostProvider'
import { useParams } from 'react-router-dom'
import { Post } from './Post'

const PostDetails = () => {
  const [post, setPost] = useState()
  const { getPost } = useContext(PostContext)
  const { id } = useParams()

  console.log(id);

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
            <CardImg top src={post.imageLocation} alt={post.title} />
            <CardBody>
                <h4>{post.title}</h4>
                <p>{post.content}</p>
                <p>{post.publishDateTime}</p>
                <p>{post.category.name}</p>
            </CardBody>
        </Card>
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
