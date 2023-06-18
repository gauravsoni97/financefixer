import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Screens/Login/Login";
import Main from "./Screens/Main/Main";
import { auth, provider } from "./Utils/firebase";
import { signInWithPopup } from "firebase/auth";

const App = () => {
  const [loginUser, setLoginUser] = useState("");
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { user } = result;
      setLoginUser(user.email);
      setUserData({
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
      });
      localStorage.setItem("userEmail", user.email);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    setLoginUser(userEmail);
  }, [navigate]);


  return (
    <div className="max-w-sm max-h-screen mx-auto">
      <Routes>
        <Route
          path="/login"
          element={<Login handleGoogleClick={() => handleGoogleClick()} />}
        />
        <Route path="/" element={<Main userData={userData} />} />
      </Routes>
    </div>
  );
};

export default App;
