import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const TaskInput = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");


  const handleSubmit = (e) => {
    
    e.preventDefault();
    

    const work = { title, time, date };
    console.log(work);

    fetch('https://run.mocky.io/v3/75c4d0f4-b6e8-48f4-987e-b47b17f47ae8', {
      method: 'POST',
      headers: { 'content-type' : 'application/json' },
      body: JSON.stringify(work)
    }).then(res => {
      console.log('new task added successfully');
      if(res.ok) {
        
      }
    });
    navigate('/dashboard');
  };
  return (
    <>
      <div className="mainTask">
          <input
            type="text"
            placeholder="Add your task"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
          <input type="date" onChange={(e) => setDate(e.target.value)}  value={date} required />
          <input type="time" onChange={(e) => setTime(e.target.value)}  value={time} required />
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </div>
    </>
  );
};

export default TaskInput;
