import React, { useState } from "react";
import HeroProfile from "./HeroProfile";
import HeroForm from "./HeroForm";
import TotalBalance from "./TotalBalance";
import RedirectToPage from "./RedirectToPage";

const MainPage = ({ incomeForm,  }) => {
  return (
    <div>
      <HeroProfile />
      <HeroForm incomeForm={incomeForm} />
      <TotalBalance />
      <RedirectToPage  />
    </div>
  );
};

export default MainPage;
