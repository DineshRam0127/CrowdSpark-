import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgetPassword from "./components/ForgetPassword";
import Home from "./components/Home";
import Project from "./components/Project";
import Donation from "./components/Donation";
import About from "./components/About";

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/" replace />;
};

const BodyClassManager = () => {
  const location = useLocation();
  useEffect(() => {
    const body = document.body;
    if (location.pathname === "/" || location.pathname === "/signup") {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }, [location.pathname]);
  
  return null;
};

const App = () => {
  return (
    <Router>
      <BodyClassManager />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ForgetPassword />} />

        {/* Protected Routes */}
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/projects" element={<ProtectedRoute element={<Project />} />} />
        <Route path="/donation" element={<ProtectedRoute element={<Donation />} />} />
        <Route path="/about" element={<ProtectedRoute element={<About />} />} />
      </Routes>
    </Router>
  );
};

export default App;
