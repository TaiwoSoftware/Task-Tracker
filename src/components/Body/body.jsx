import React, { useState } from "react";
import task from "./image/task.svg";
import { useNavigate } from "react-router-dom";
const Body = () => {

  const navigate = useNavigate('/signup');
  const handleSubmit = () => {
    navigate('/signup');
  }

  return (
    <main>
      <div className="header">
        <div className="first-header">
          <div className="inner-header">
            <h1>Task-Tracker</h1>
            <p>To make you productive with your task and time</p>
            <button onClick={handleSubmit} className="getStartedButton">Get started</button>
          </div>
        </div>
        <img src={task} alt="working image" />
      </div>
    </main>
  );
};

export default Body;
