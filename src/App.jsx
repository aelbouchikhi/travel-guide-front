import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Nav from "./Components/Nav"
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Destinations from "./Pages/Destinations";
import Contact from "./Pages/Contact";
import Places from "./Pages/Places";
import PlacesContextProvider from "../Context/placesContext";

const App = () => {
  return (
    <PlacesContextProvider>
      <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/destinations" element={<Destinations/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/places" element={<Places/>}/>
      </Routes>
      <Footer/>
    </Router>
    </PlacesContextProvider>
  );
};

export default App;
