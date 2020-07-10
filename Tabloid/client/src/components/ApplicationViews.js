import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import { PostList } from "./PostList";
import PostForm from './PostForm'
import { TagList } from "../components/Tag/TagList";
import CategoryList from "./CategoryList";

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Hello /> : <Redirect to="/login" />}
        </Route>

        <Route path="/posts" exact>
          {isLoggedIn ? <PostList /> : <Redirect to="/login" />}
        </Route>

        <Route path='/posts/add'>
          <PostForm />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/category">
          <CategoryList />
        </Route>

        <Route path="/tags">
          <TagList />
        </Route>

      </Switch>
    </main>
  );
};
