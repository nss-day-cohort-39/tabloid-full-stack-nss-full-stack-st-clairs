import React, { useContext, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { CommentContext } from '../providers/CommentProvider';

export const CommentForm = ({ postId }) => {
    const { addComment } = useContext(CommentContext)

    const subject = useRef('subject')
    const content = useRef('content')
    const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));
    const history = useHistory()

    const constructNewComment = () => {

        const newCommentObject = {
            subject: subject.current.value,
            content: content.current.value,
            createDateTime: new Date(),
            postId: parseInt(postId),
            userProfileId: userProfile.id,
        }

        console.log(newCommentObject)
        return addComment(newCommentObject)
    }

    return (
        <form className='commentForm'>
            <h2 className='commentForm__title'>New Comment</h2>
            <fieldset>
                <div className='form-group'>
                    <label htmlFor='commentSubject'>Comment subject: </label>
                    <input
                        type='text'
                        id='commentSubject'
                        ref={subject}
                        required
                        autoFocus
                        className='form-control'
                        placeholder='Comment Subject'
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className='form-group'>
                    <label htmlFor='commentContent'>Comment content: </label>
                    <input
                        type='textarea'
                        id='commentContent'
                        ref={content}
                        required
                        autoFocus
                        className='form-control'
                        placeholder='Comment content'
                    />
                </div>
            </fieldset>

            <button
                type='submit'
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewComment().then(p => history.push(`/comments/${postId}`))

                }}
                className='btn btn-primary'
            >
                Save Comment
      </button>
        </form>
    )
}
