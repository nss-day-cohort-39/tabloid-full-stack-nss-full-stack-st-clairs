import React, { useContext, useRef, useEffect } from 'react'
import { PostContext } from '../providers/PostProvider'
import { useHistory } from 'react-router-dom'
import { CategoryContext } from "../providers/CategoryProvider";

export default props => {
  const { addPost, posts } = useContext(PostContext)
  const { categories, getAllCategories } = useContext(CategoryContext);

  const title = useRef('title')
  const content = useRef('content')
  const category = useRef('category')
  const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));
  const imageLocation = useRef('imageLocation')
  const publishDateTime = useRef('publishDateTime')
  const history = useHistory()
  const constructNewPost = () => {
    
    const newPostObject = {
      title: title.current.value,
      content: content.current.value,
      createDateTime: new Date(),
      categoryId: parseInt(category.current.value),
      userProfileId: userProfile.id,
      imageLocation: imageLocation.current.value,
      publishDateTime: publishDateTime.current.value,
    }
    console.log(newPostObject)
    return addPost(newPostObject).then(props)
  }

  useEffect(() => {
    getAllCategories();
}, []);

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
      <label htmlFor='postCategory'>Category: </label>
            <select
              defaultValue=''
              name='category'
              ref={category}
              id='category'
              className='form-control'
              placeholder='category'
              required
              autoFocus
            >
              <option value='0'>Select a category</option>
              {categories.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
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
          constructNewPost().then(p => history.push('/userposts'))

        }}
        className='btn btn-primary'
      >
        Save Post
      </button>
    </form>
  )
}
