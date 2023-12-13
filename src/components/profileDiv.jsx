import React, { useState } from "react";
import profileImage from "./image/user.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
const ProfileDiv = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

  const handleClick = () => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  };

  return (
    <div onClick={handleClick} className="profileSetting">
      {authUser ? (
        navigate("/dashboard")
      ) : (
        <>
          <img src={profileImage} alt="profile image" />
          <p>Sign in</p>
        </>
      )}
    </div>
  );
};

export default ProfileDiv;
