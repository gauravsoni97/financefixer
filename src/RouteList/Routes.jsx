import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Screens/Login/Login";
import Main from "../Screens/Main/Main";
import NeedsWants from "../Screens/Main/NeedsWants/NeedsWants";
import Investments from "../Screens/Main/Investments/Investments";

const Routes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default Routes;
