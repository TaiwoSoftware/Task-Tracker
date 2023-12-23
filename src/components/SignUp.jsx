import React, { useEffect } from "react";
import { useState } from "react";
import loginImage from "./image/sign.svg";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Logo from "./Logo";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, redirect to login page
        navigate("/login");
      }
    });

    // Cleanup function to unsubscribe from the auth state changes
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
          console.log("responding");
          console.log(userCredentials);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="signComponents">
        <img src={loginImage} alt="login-image" />
        <form onSubmit={handleSubmit}>
          {/* ... (your existing input fields) */}
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
