import React, { useState } from "react";
import HeroProfile from "./HeroProfile";
import HeroForm from "./HeroForm";
import TotalBalance from "./TotalBalance";
import RedirectToPage from "./RedirectToPage";

const FirstPage = ({ incomeForm,  }) => {
  return (
    <div>
      <HeroProfile />
      <HeroForm incomeForm={incomeForm} />
      <TotalBalance />
      <RedirectToPage  />
    </div>
  );
};

export default FirstPage;
