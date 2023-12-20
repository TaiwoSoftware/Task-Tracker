import React from "react";
import aboutImage from "./image/about.svg";
const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <img src={aboutImage} alt="joint-imae" />
        <div className="details">
          <h1>About us</h1>
          <p>
            This is another project as your disposal for tracking your necessary
            task. I am a CTO of a company where i have task to work on as the
            cto, i have to start writing the details of the task in different
            folder.
          </p>
          <p>
            Later in the month i needed that folder i'll have to start looking
            for the folder and if am done with it i'll have to start ticking or
            disposing the folder which is a lot of stress
          </p>
          <p>
            The project was invented by Taiwo Akerele(front-end developer) to
            make life easier for everybody in the world to locate their task and
            meet them up. The project is to build myself in frontend development
            tools and have more experience.
          </p>

          <p>
            Are you still looking at the about us page common give a trial and
            click on the sigin in there 😋😋
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
