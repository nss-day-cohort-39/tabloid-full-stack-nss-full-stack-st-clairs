import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import { PostList } from "./PostList";
import PostForm from './PostForm'
import { TagList } from "../components/Tag/TagList";
import CategoryList from "./CategoryList";
import { UserPostList } from "./UserPostList";
import PostDetails from "./PostDetails";
import { EditPostForm } from "./EditPostForm";
import { CommentList } from "./CommentList";
import { UserProfileList } from "./UserProfileList";
import { AddTagForm } from "./Tag/AddTagForm";
import UserProfileDetails from "./UserProfileDetails";
import { CommentForm } from "./CommentForm";
import { UserTypeForm } from "./UserTypeForm";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);
  const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Login /> : <Redirect to="/login" />}
        </Route>

        <Route path="/posts" exact>
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
        </Route>

        <Route path='/posts/add' exact>
          {isLoggedIn ? <PostForm /> : <Redirect to="/login" />}
        </Route>

        <Route path='/posts/:id' exact>
          {isLoggedIn ? <PostDetails /> : <Redirect to="/login" />}
        </Route>

        <Route path='/posts/update/:id' exact>
          <EditPostForm />
        </Route>

        <Route path="/userposts" exact>
          {isLoggedIn ? <UserPostList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/comments/:id" exact>
          {isLoggedIn ? <CommentList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/comments/add/:id" exact>
          {isLoggedIn ? <CommentForm /> : <Redirect to="/login" />}
        </Route>

        <Route path="/categories">
          {isLoggedIn && userProfile.userTypeId === 1 ? <CategoryList /> : <Redirect to="/posts" />}
        </Route>

        <Route path="/tags">
          {isLoggedIn && userProfile.userTypeId === 1 ? <TagList /> : <Redirect to="/posts" />}
        </Route>

        <Route path="/addTagForm/post/:id">
          {isLoggedIn && userProfile.userTypeId === 1 ? <AddTagForm /> : <Redirect to="/posts" />}
        </Route>

        <Route path='/profiles/:id' exact>
          {isLoggedIn && userProfile.userTypeId === 1 ? <UserProfileDetails /> : <Redirect to="/posts" />}
        </Route>

        <Route path="/profiles">
          {isLoggedIn && userProfile.userTypeId === 1 ? <UserProfileList /> : <Redirect to="/posts" />}
        </Route>

        <Route path='/profiles/update/:id' exact>
          <UserTypeForm />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>


      </Switch>
    </main>
  );
};
