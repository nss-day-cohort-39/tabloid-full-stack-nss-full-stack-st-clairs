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
import { CommentList } from "./CommentList";
import { UserProfileList } from "./UserProfileList";
import { AddTagForm } from "./Tag/AddTagForm";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);

  return (
    <main>
      <Switch>

        <Route path="/posts" exact>
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
        </Route>

        <Route path='/posts/add' exact>
          {isLoggedIn ? <PostForm /> : <Redirect to="/login" />}
        </Route>

        <Route path='/posts/:id' exact>
          {isLoggedIn ? <PostDetails /> : <Redirect to="/login" />}
        </Route>

        <Route path="/userposts" exact>
          {isLoggedIn ? <UserPostList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/comments/:id" exact>
          {isLoggedIn ? <CommentList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/categories">
          {isLoggedIn ? <CategoryList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/tags">
          {isLoggedIn ? <TagList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/profiles">
          {isLoggedIn ? <UserProfileList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/addTagForm/post/:id">
          {isLoggedIn ? <AddTagForm /> : <Redirect to="/login" />}
        </Route>


      </Switch>
    </main>
  );
};
