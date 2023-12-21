import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AuthDetails from "./components/AuthDetails";
import AddTask from "./components/AddTask";
import About from "./components/About";
import Contact from "./components/Contact";
import Works from "./components/Works";
import ProfileDiv from "./components/profileDiv";
import Hamburger from "./components/Hamburger";
import Dashboard from "./components/Dashboard";
const App = () => {
  return (
    <>
      <Router>
        <div className="headerNav">
          <header>
            <h2 className="mainLogo">TTW</h2>
            <div className="profile">
              <ProfileDiv />
            </div>
          </header>
          <nav>
            <ul>
              <Link className="a" to="/">
                <li>Home</li>
              </Link>

              <Link className="a" to="/about">
                <li>About us</li>
              </Link>

              <Link className="a" to="/contact">
                <li>Contact us</li>
              </Link>

              <Link className="a" to="/works">
                <li>How it works</li>
              </Link>
            </ul>
            <Hamburger />
          </nav>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addTask" element={<AddTask />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
