import React from "react";
import Checkout from "../components/Checkout.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App.js";
import Home from "../components/Home.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer";

// You cannot write anything inside the routes resides the route tag, or even outside the router
// If you want to add a div or anything, put it after initial browser router or after final route

// path="/" ==> Whenever you run the application, the default place is "/".

// In React you cannot go to a specific file or component. You have to route to a component.
// Routes do not appear in the front end, they are simply configurations.

// If user goes to '/' ==> got to 'Home' component.
// If they go to '/form' go to form component.

// BrowserRouter is a library that helps us deal with routes. Routes are just paths. Paths refer to components.

const Allroutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/form" element={<Checkout />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Allroutes;
