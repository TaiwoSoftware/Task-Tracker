import React, { useState } from "react";
import TaskInput from "./TaskInput";
const Task = () => {
  const [handleDisplay, setHandleDisplay] = useState(false);

  

  return (
    <div className="mainTask">
      <TaskInput type="text" placeholder="Add your task" />
      <TaskInput type='date' />
      <TaskInput type='time' />
      
      <button disabled type="submit">Next</button>
    </div>
  );
};

export default Task;
