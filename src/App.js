import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Screens/Login/Login";
import Main from "./Screens/Main/Main";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./Protected";

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Protected>
              <Main />
            </Protected>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
