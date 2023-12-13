import React from "react";
import ProfileDiv from './profileDiv';
import Body from './Body/body';
const Home = () => {
  return (
    <div>
      <div className="bodyHeader">
        <header>
          <h2>TTW</h2>
          <ProfileDiv />
          
        </header>
        <Body />
      </div>
    </div>
  );
};

export default Home;
