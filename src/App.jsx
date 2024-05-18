// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import NotFoundPage from "./Pages/NotFoundPage";
import ForumBrowsing from "./Pages/ForumBrowsing";
import { UserContextProvider } from "./UserContext/UserContext";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <Router>
      <UserContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forum" element={<ForumBrowsing />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </Router>
  );
};

export default App;
