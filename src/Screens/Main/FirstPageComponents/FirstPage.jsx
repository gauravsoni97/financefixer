import React, { useState } from "react";
import HeroProfile from "./HeroProfile";
import HeroForm from "./HeroForm";
import TotalBalance from "./TotalBalance";
import RedirectToPage from "./RedirectToPage";

const FirstPage = ({ setInputAmount, goToNeedsWantsForm }) => {
  return (
    <div>
      <HeroProfile />
      <HeroForm setInputAmount={setInputAmount} />
      <TotalBalance />
      <RedirectToPage />
    </div>
  );
};

export default FirstPage;
