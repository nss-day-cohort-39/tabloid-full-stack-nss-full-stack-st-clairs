import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { PostContext } from "../providers/PostProvider"
import { CategoryContext } from "../providers/CategoryProvider";


const title = useRef()
const content = useRef()
const imageLocation = useRef()

const { updatePost } = useContext(PostContext)
const { categoryId } = useContext(CategoryContext)

const [modal, setModal] = useState(false)
const toggle = () => setModal(!modal)

const [editModal, setEditModal] = useState(false)
    const toggleEdit = () => setEditModal(!editModal)


const psotUpdate = () => {
        updatepost({
            id: post.id,
            title: title.current.value,
            content: content.current.value,
            imageLocation: imageLocation.current.value,
            categoryId: categoryId
        }).then(toggleEdit)
    }


export const Post = ({ post }) => {
    return (
        <Card className="m-4">
            <p className="text-left px-2">Posted by: {post.userProfile.displayName}</p>
            <CardImg top src={post.imageUrl} alt={post.title} />
            <CardBody>
                <Link to={`/posts/${post.id}`}>
                    <strong>{post.title}</strong>
                </Link>
                <p>{post.category}</p>
            </CardBody>
        </Card>
    );
};