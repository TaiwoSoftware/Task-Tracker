import React from "react";
import TaskPriority from "./TaskPriority";

const Dashboard = () => {
  return (
    <div>
      <hr />
      <div className="dashboardContainer">
        <div className="mainDashboard">
          <h2>Dashboard</h2>
        </div>
        <div className="dashboardDetails">
          <div className="innerDetails">
            <h2>Tasks</h2>
            <div className="tasks">
              <TaskPriority
                details="Work on the frontend mentor task."
                date="21/20/2023"
                title="Write codes"
                priority="done"
              />
              <TaskPriority
                details="Work on the frontend mentor task."
                date="21/20/2023"
                title="Write codes"
                priority="pending"
              />
              <TaskPriority
                details="Work on the frontend mentor task."
                date="21/20/2023"
                title="Write codes"
                priority="started"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
