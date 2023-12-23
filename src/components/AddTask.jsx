import React, { useState } from "react";
import Task from "./Task";

const AddTask = () => {

  const [isClicked, setIsClicked] = useState(false);
  const [toggleDisplay, setToggleDisplay] = useState(true);

    const handleDisplay = () => {
      setToggleDisplay(!toggleDisplay);
      setIsClicked(!isClicked);
    }

  return (
    <div>
      {toggleDisplay && <div className="addTask">
        <button onClick={handleDisplay} >+</button>
      </div>}
      {isClicked && <Task />}
    </div>
  );
};

export default AddTask;
