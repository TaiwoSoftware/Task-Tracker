import React, { useState } from "react";
import TaskInput from "./TaskInput";
import Loading from "./Loading";
const Task = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setLoading(!loading);
    }, 3000);
  };

  return (
    <>
      {loading === true ? (
        <div className="mainTask">
          <TaskInput
            type="text"
            placeholder="Add your task"
            handleChange={handleChange}
          />
          <TaskInput type="date" handleChange={handleChange} />
          <TaskInput type="time" handleChange={handleChange} />

          <button onClick={handleSubmit} type="submit">
            Next
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Task;
