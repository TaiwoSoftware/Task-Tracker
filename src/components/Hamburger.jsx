import React, { useState } from "react";
import ProfileDiv from "./profileDiv";
import HamburgerNavigation from "./HamburgerNavigation";

const Hamburger = () => {
  const [clicked, IsClicked] = useState(false);

  const handleClick = () => {
    console.log('cliked');
    IsClicked(!clicked)
  };

  return (
    <>
      {clicked && <HamburgerNavigation />}

      <div onClick={handleClick} className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Hamburger;
