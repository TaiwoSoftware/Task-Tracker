import React, { useEffect, useState } from "react";
import TaskPriority from "./TaskPriority";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/addTask')
  }

  const [task, setTask] = useState(null)


  useEffect(() => {

    fetch('https://run.mocky.io/v3/75c4d0f4-b6e8-48f4-987e-b47b17f47ae8')
    .then(res => {
        return res.json()
    })

    .then(data => {
        console.log(data);
        setTask(data)
    })

}, [])

  return (
    <div>
      <hr />
      <div className="dashboardContainer">
        <div className="mainDashboard">
          <h2>Dashboard</h2>
          <button onClick={handleClick}>Add Task</button>
        </div>
        <div className="dashboardDetails">
          <div className="innerDetails">
            <h2>Tasks</h2>
            <div className="tasks">
              {task && <TaskPriority
                task={task}
              />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
