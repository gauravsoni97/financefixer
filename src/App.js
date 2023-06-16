import React, { useEffect, useState } from "react";
import Login from "./Screens/Login/Login";
import { Route, Routes } from "react-router-dom";
import Main from "./Screens/Main/Main";

import { auth, provider } from "./Utils/firebase";

import { signInWithPopup } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const App = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();

  const handleGoogleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setLoginUser(data?.user?.email);
      localStorage.setItem("userEmail", data.user.email);
      window.location.reload();
      navigate("/");
    });
  };
  console.log(loginUser);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    setLoginUser(userEmail);
    if (userEmail) {
      navigate("/");
    }
  }, []);

  return (
    <div className="max-w-sm max-h-screen mx-auto  ">
      {loginUser ? <Main /> : <Login handleGoogleClick={handleGoogleClick} />}
    </div>
  );
};

export default App;
