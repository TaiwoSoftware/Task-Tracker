import React from "react";
import workImage from "./image/work.svg";
const Works = () => {
  return (
    <div>
      <div className="allTogether">
        <div className="worksImg">
          <img src={workImage} alt="how-it-works-img" />
        </div>
        <div className="workDetails">
          <h1>How it works</h1>
          <p>
            Anytime you add your task to your dashboard it stores it in our
            database.
          </p>
          <p>
            It gives you a reminder that about your task date and the deadline
          </p>
          <p>
            On the categories if you set a state of in progress it moves them to
            the progress par of the channel{" "}
          </p>
          <p>
            It gives the ability to filter through the multiples of task you
            want to work on
          </p>
          <p>You can logout </p>
          <p>
            There are other features in it try the web-app and experience them
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
