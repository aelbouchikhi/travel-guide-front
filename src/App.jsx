// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Subscribe from "../sections/Subscribe";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Subscribe />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
