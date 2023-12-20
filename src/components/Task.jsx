import React, { useState } from "react";
import TaskInput from "./TaskInput";
const Task = () => {
  const [handleDisplay, setHandleDisplay] = useState(false);

  // const [closeButton, setCloseButton] = useState(true);

  // const handleChange = () => {
  //   setHandleDisplay(!handleDisplay);
  // };

  return (
    <div className="mainTask">
      <TaskInput type="text" placeholder="Add your task" />
      {handleDisplay && <TaskInput type="time" placeholder="Add your task" />}
      {/* {closeButton && (
        <button onClick={handleChange} type="submit">
          Next
        </button>
        c
      )} */}
      <button  type="submit">Next</button>
    </div>
  );
};

export default Task;
