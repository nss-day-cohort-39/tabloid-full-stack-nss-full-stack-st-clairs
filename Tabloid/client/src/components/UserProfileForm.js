// import React, { useContext, useRef } from "react"
// import { useHistory } from "react-router-dom"
// import { UserProfileContext } from "../providers/UserProfileProvider"

// export default props => {
//     const { editProfile } = useContext(UserProfileContext)

//     const history = useHistory();

//     const firstName = useRef("firstName")
//     const lastName = useRef("lastName")
//     const userTypeId = useRef("userTypeId")


//     const updateProfile = () => {
//         // create a new post object
//         const userProobj = {
//             firstName: firstName.current.value,
//             lastName: lastName.current.value,
//             userTypeId: parseInt(userTypeId.current.value)
//         }
//         console.log(newPostObj)
//         // and save it to the API.
//         return addPost(newPostObj).then(props.toggler)
//     }


//     return (
//         <form className="PostForm">
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="postTitle">Title: </label>
//                     <input
//                         type="text"
//                         id="postTitle"
//                         ref={firstName}
//                         required
//                         autoFocus
//                         className="form-control"
//                         placeholder="Title"
//                     />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="imageUrl">Image/GIF: </label>
//                     <input
//                         type="text"
//                         id="imageUrl"
//                         ref={lastName}
//                         required
//                         autoFocus
//                         className="form-control"
//                         placeholder="Url to image"
//                     />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="userProfileId">Assign to a User: </label>
//                     <input
//                         type="text"
//                         id="userProfileId"
//                         ref={userTypeId}
//                         required
//                         autoFocus
//                         className="form-control"
//                         placeholder="userProfileId goes here"
//                     />
//                 </div>
//             </fieldset>
//             <button type="submit"
//                 onClick={
//                     evt => {
//                         evt.preventDefault() // Prevent browser from submitting the form
//                         constructNewPost().then((p) => history.push("/"));
//                     }
//                 }
//                 className="btn btn-primary">
//                 Add Post
//             </button>
//         </form>
//     )
// }
