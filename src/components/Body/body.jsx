import React from "react";
import task from './image/task.svg';
const Body = () => {
  return (
    <main>
      <div className="header">
        <h1>Task-Tracker</h1>
        <p>To make you productive with your task and time</p>
        <img src={task} alt="working image" />
      </div>
    </main>
  );
};

export default Body;
