import React, { useContext, useRef } from 'react'
import { PostContext } from '../providers/PostProvider'
import { useHistory } from 'react-router-dom'

export default props => {
  const { addPost, posts } = useContext(PostContext)
  const title = useRef('title')
  const content = useRef('content')
  const categoryId = useRef('categoryId')
  const imageLocation = useRef('imageLocation')
  const publishDateTime = useRef('publishDateTime')
  const history = useHistory()
// debugger
  const constructNewPost = () => {
    const newPostObject = {
      title: title.current.value,
      content: content.current.value,
      dateCreated: new Date(),
      categoryId: categoryId.current.value,
      imageLocation: imageLocation.current.value,
      publishDateTime: publishDateTime.current.value,
    }
    console.log(newPostObject)
    return addPost(newPostObject).then(props)
  }

  return (
    <form className='postForm'>
      <h2 className='postForm__title'>New Post</h2>
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
            placeholder='Post title'
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
            placeholder='Post content'
          />
        </div>
      </fieldset>

      <fieldset>
        <div className='form-group'>
          <label htmlFor='postCategoryId'>Post categoryId: </label>
          <input
            type='text'
            id='postCategoryId'
            ref={categoryId}
            required
            autoFocus
            className='form-control'
            placeholder='Post categoryId'
          />
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
            placeholder='Post imageLocation'
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
            placeholder='Post publishDateTime'
          />
        </div>
      </fieldset>

      <button
        type='submit'
        onClick={evt => {
          evt.preventDefault() // Prevent browser from submitting the form
          constructNewPost().then(p => ('/'))
        }}
        className='btn btn-primary'
      >
        Save Post
      </button>
    </form>
  )
}
