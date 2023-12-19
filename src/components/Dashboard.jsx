import React from "react";

const Dashboard = () => {

    const handleClick = () => {
        alert('click');
    }

  return (
    <div>
      <div className="addTask">
        <button onClick={handleClick}>+</button>
      </div>
      <form>
        <input type="text" placeholder="add your task"/>
        <label htmlFor="start">Deadline to the task</label>
        <input id="start" type="date" name="" placeholder="date of your task" />
        <label htmlFor="aboutToStart">Just started</label>
        <input type="radio" name="taskDuration" id="aboutToStart" />

        <label htmlFor="inProgress"></label>
        <input type="radio" name="taskDuration" id="inProgress" />

        <input type="radio" name="taskDuration" id="" />
      </form>
    </div>
  );
};

export default Dashboard;
