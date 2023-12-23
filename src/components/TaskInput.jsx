import React from "react";

const TaskInput = ({ type, placeholder,handleChange,value}) => {
  

  return (
    <div className="mainTask">
      <input type={type} value={value} onChange={handleChange} placeholder={placeholder} required />
    </div>
  );
};

export default TaskInput;
