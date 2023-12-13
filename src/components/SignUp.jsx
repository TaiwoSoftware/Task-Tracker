import React from "react";
import { useState } from "react";
import loginImage from "./image/sign.svg";
const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault()
    
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    else {
        alert("Passwords match");
    }
  };

  return (
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
      </form>
    </div>
  );
};

export default SignUp;
