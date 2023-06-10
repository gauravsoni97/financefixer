import React, { useEffect } from "react";
import Login from "./Screens/Login/Login";
import { Route, Routes } from "react-router-dom";
import Main from "./Screens/Main/Main";

const App = () => {
  return (
    <div className="max-w-sm max-h-screen mx-auto  ">
      <Login />
    </div>
  );
};

export default App;
