import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AuthDetails from "./components/AuthDetails";
import Dashboard from "./components/Dashboard";
const App = () => {
  return (
    <Router>
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
        <Route
          path="/dashboard"
          element={
            <>
              <Dashboard />
            </>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
