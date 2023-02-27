import React from "react";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import Signup from "./component/Signup";
import About from "./component/About";
import Contact from "./component/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
