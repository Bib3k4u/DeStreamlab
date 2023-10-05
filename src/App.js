import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import React from "react";
import Sidenav from "./components/Sidenav";
// import Carousel from "./components/Carousel";
import Browse from "./components/Connect/Browse";
import Profile from "./components/Connect/Profile";
import Following from "./components/Connect/Following";
// This is APp.js file 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/delab" element={<Home/>} exact>
          </Route>
          <Route path="/" element={<Home/>} exact>
          </Route>
          <Route path="/connect" element={<Profile/>} exact>
          </Route>
          <Route path="/browse" element={<Browse/>} exact>
          </Route>
          <Route path="/following" element={<Following/>} exact>
          </Route>
          
        </Routes>
      </Router>

    </>
  );
}

export default App;
