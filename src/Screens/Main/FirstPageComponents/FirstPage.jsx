import React, { useState } from "react";
import HeroProfile from "./HeroProfile";
import HeroForm from "./HeroForm";
import TotalBalance from "./TotalBalance";
import RedirectToPage from "./RedirectToPage";

const FirstPage = ({ incomeForm, goToneedsForm }) => {
  return (
    <div>
      <HeroProfile />
      <HeroForm incomeForm={incomeForm} />
      <TotalBalance />
      <RedirectToPage goToneedsForm={goToneedsForm} />
    </div>
  );
};

export default FirstPage;
