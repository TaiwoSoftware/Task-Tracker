import React, { useState } from "react";
import TaskInput from "./TaskInput";
const Task = () => {

    const [mainer, setMainer] = useState('text')


    const handleChange = () => {
       setMainer('date')
    }


  return (
    <div className="mainTask">
      {mainer === 'text' ? (
        <TaskInput 
        type={mainer}
        placeholder='Add your task'
      />
      ) : (
        <TaskInput 
        type={mainer}
        placeholder='Add your deadline'
      />
      )}
      <button onClick={handleChange} type="submit">Next</button>
    </div>
  );
};

export default Task;
