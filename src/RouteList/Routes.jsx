import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Screens/Login/Login";
import Main from "../Screens/Main/Main";
import NWIForm from "../Screens/Main/NWIForm/NWIForm";
import AllTransactions from "../Screens/Main/AllTransactions/AllTransactions";

const Routes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<Main />} />
      <Route path="/nwiform" element={<NWIForm />} />
      <Route path="/transactions" element={<AllTransactions />} />
    </Routes>
  );
};

export default Routes;
