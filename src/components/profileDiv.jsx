import React, { useState, useEffect } from "react";
import profileImage from "./image/user.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const ProfileDiv = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {authUser ? (
        <div className="profileSetting">
          <p> {authUser.email}</p>
        </div>
      ) : (
        <div onClick={handleClick} className="profileSetting">
          <img src={profileImage} alt="profile image" />
          <p>Sign in</p>
        </div>
      )}
    </div>
  );
};

export default ProfileDiv;
