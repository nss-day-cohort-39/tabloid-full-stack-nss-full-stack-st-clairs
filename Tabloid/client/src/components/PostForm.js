import React, { useContext, useRef } from 'react'
import { PostContext } from '../providers/PostProvider'
import { useHistory } from 'react-router-dom'

export default props => {
  const { addPost, posts } = useContext(PostContext)
  const title = useRef('title')
  const content = useRef('content')
  const category = useRef('category')
  const imageUrl = useRef('imageUrl')
  const publicationDate  = useRef('PublicationDate')
  const history = useHistory()

  const constructNewPost = () => {
    const newPostObject = {
      title: title.current.value,
      content: content.current.value,
      category: category.current.value,
      imageUrl: parseInt(imageUrl.current.value),
      publicationDate: new Date()
    }
    console.log(newPostObject)
    return addPost(newPostObject).then(props.toggler)
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
          <label htmlFor='postCategory'>Post category: </label>
          <input
            type='text'
            id='postCategory'
            ref={category}
            required
            autoFocus
            className='form-control'
            placeholder='Post category'
          />
        </div>
      </fieldset>

      <fieldset>
        <div className='form-group'>
          <label htmlFor='postImageUrl'>Post imageUrl: </label>
          <input
            type='text'
            id='postImageUrl'
            ref={imageUrl}
            required
            autoFocus
            className='form-control'
            placeholder='Post imageUrl'
          />
        </div>
      </fieldset>
     
      <fieldset>
        <div className='form-group'>
          <label htmlFor='postPublicationDate'>Post publicationDate: </label>
          <input
            type='text'
            id='postPublicationDate'
            ref={publicationDate}
            required
            autoFocus
            className='form-control'
            placeholder='Post publicationDate'
          />
        </div>
      </fieldset>

      <button
        type='submit'
        onClick={evt => {
          evt.preventDefault() // Prevent browser from submitting the form
          constructNewPost().then(p => history.push('/'))
        }}
        className='btn btn-primary'
      >
        Save Post
      </button>
    </form>
  )
}
