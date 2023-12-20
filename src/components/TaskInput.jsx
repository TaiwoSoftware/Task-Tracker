import React from "react";

const TaskInput = ({ type, placeholder }) => {



  return (
    <div className="mainTask">
      <input type={type} required placeholder={placeholder} />
    </div>
  );
};

export default TaskInput;
