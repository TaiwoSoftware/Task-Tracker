import React, { useEffect } from "react";
import { useState } from "react";
import loginImage from "./image/sign.svg";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import Registered from "./Registered";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/Login');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        <Registered />;
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          // Set the display name after user creation
          updateProfile(userCredentials.user, {
            displayName: fullName,
          })
            .then(() => {
              console.log(userCredentials.user.displayName);
            })
            .catch((error) => {
              console.error("Error updating user display name:", error);
            });

          console.log("responding");
          console.log(userCredentials);
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className="signComponents">
        <img src={loginImage} alt="login-image" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            required
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            required
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            name=""
            id=""
            placeholder="create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            required
            name=""
            id=""
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            type="checkbox"
            required
            id="terms"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
          />
          <label htmlFor="terms">Terms and Conditions</label>
          <input type="submit" value="Create an account" />
          <p className="already">
            Already have an account <span onClick={handleLogin}>Login?</span>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
