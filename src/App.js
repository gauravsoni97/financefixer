import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Screens/Login/Login";
import Main from "./Screens/Main/Main";

const App = () => {
  

  return (
    <div className="">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
