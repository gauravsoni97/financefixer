import React, { useState } from "react";
import HeroProfile from "./HeroProfile";
import HeroForm from "./HeroForm";
import TotalBalance from "./TotalBalance";
import RedirectToPage from "./RedirectToPage";

const FirstPage = ({ incomeForm, goToNeedsWantsForm }) => {
  return (
    <div>
      <HeroProfile />
      <HeroForm incomeForm={incomeForm} />
      <TotalBalance />
      <RedirectToPage goToNeedsWantsForm={goToNeedsWantsForm} />
    </div>
  );
};

export default FirstPage;
