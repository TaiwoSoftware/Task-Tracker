import React, { useEffect, useState } from "react";

const TaskPriority = ({  task}) => {
  const [counter, setCounter] = useState(0);

useEffect(() => {
  setCounter( counter + 1 );
},[])

  return (
    <div className="allPriority">
      {/* <div className='pie'>
        <h2>{title}</h2>
        <p>{details}</p>
        <p>{date}</p>
        <p className={priority}>Whatever</p>
      </div> */}
      {
        task.map((work) => (
          <div className="pie" key={counter}>
          <h2>{work.title}</h2>
          <p>{work.details}</p>
          <p>{work.date}</p>
          <p className={work.priority}>{work.priority}</p>
          </div>
        ))
      }
    </div>
  );
};

export default TaskPriority;
