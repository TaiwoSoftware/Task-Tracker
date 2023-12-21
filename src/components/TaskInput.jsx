import React, { useState } from "react";

const TaskInput = ({ type, placeholder }) => {
  const [value, setValue] = useState('')

  const handleChange = (e) =>  {
    setValue(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="mainTask">
      <input type={type} required value={value} onChange={handleChange} placeholder={placeholder} />
    </div>
  );
};

export default TaskInput;
