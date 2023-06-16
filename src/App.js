import React, { useEffect, useState } from "react";
import Login from "./Screens/Login/Login";
import { Route, Routes } from "react-router-dom";
import Main from "./Screens/Main/Main";

import { auth, provider } from "./Utils/firebase";

import { signInWithPopup } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleGoogleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setUser(data.user.email);
      localStorage.setItem("userEmail", data.user.email);
      navigate("/");
    });
  };

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    setUser(userEmail);
    if (userEmail) {
      navigate("/");
    }
  }, []);

  return (
    <div className="max-w-sm max-h-screen mx-auto  ">
      {user ? <Main /> : <Login handleGoogleClick={handleGoogleClick} />}
    </div>
  );
};

export default App;
