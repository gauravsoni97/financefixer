import React from "react";
import Login from "./Screens/Login/Login";
import Main from "./Screens/Main/Main";
import CommonFormPage from "./Screens/Main/ScreenFirst/ScreenSecond/CommonFormPage/CommonFormPage";
import Transactions from "./Screens/Main/ScreenFirst/ScreenSecond/ScreenThird/Transactions/Transactions";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="max-w-md mx-auto ">
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/commonform" Component={CommonFormPage} />
        <Route path="/transactions" Component={Transactions} />
        <Route path="/login" Component={Login} />
      </Routes>
    </div>
  );
};

export default App;
