/** @format */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function LoginPage() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    try {
      signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form_div">
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default LoginPage;
