import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import Header from "./components/Header";
import ApplicationViews from "./components/ApplicationViews";
import { TagProvider } from "./providers/TagProvider"
function App() {
  return (
    <Router>
      <UserProfileProvider>
        <TagProvider>
        <Header />
        <ApplicationViews />
        </TagProvider>
      </UserProfileProvider>
    </Router>
  );
}

export default App;
