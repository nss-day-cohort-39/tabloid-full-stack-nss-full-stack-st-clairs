import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import Header from "./components/Header";
import ApplicationViews from "./components/ApplicationViews";
import { CategoryProvider } from './providers/CategoryProvider';
import { TagProvider } from "./providers/TagProvider";
import { PostProvider } from './providers/PostProvider';
import { UserPostProvider } from './providers/UserPostProvider';
import { CommentProvider } from './providers/CommentProvider';
import { UserTypeProvider } from './providers/UserTypeProvider';

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <UserTypeProvider>
          <PostProvider>
            <UserPostProvider>
              <CategoryProvider>
                <CommentProvider>
                  <TagProvider>
                    <Header />
                    <ApplicationViews />
                  </TagProvider>
                </CommentProvider>
              </CategoryProvider>
            </UserPostProvider>
          </PostProvider>
        </UserTypeProvider>
      </UserProfileProvider>
    </Router>
  );
}

export default App;
