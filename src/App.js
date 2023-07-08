import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Screens/Login/Login";
import Main from "./Screens/Main/Main";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./Protected";
import { SliderContext } from "./context/SliderRangeValue";

const App = () => {
  return (
    <AuthContextProvider>
      <SliderContext>
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
      </SliderContext>
    </AuthContextProvider>
  );
};

export default App;
