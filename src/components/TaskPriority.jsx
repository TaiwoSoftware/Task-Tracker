import React from "react";

const TaskPriority = ({ title, priority, details, date}) => {
  return (
    <div className="allPriority">
      <div className='pie'>
        <h2>{title}</h2>
        <p>{details}</p>
        <p>{date}</p>
        <p className={priority}>Whatever</p>
      </div>
    </div>
  );
};

export default TaskPriority;
