import React, { useState } from "react";
import profileImage from "./image/user.png";
import { useNavigate } from "react-router-dom";

const ProfileDiv = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    console.log('clicked')

    navigate('/signup');
    
  };

  return (
    <div onClick={handleClick} className="profileSetting">
          <img src={profileImage} alt="profile image" />
          <p>Sign in</p>
    </div>
  )
  }

export default ProfileDiv;
