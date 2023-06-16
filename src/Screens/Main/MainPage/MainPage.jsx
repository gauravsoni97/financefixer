import React, { useState } from "react";
import HeroProfile from "./HeroProfile";
import HeroForm from "./HeroForm";
import TotalBalance from "./TotalBalance";
import RedirectToPage from "./RedirectToPage";

const MainPage = ({
  incomeForm,
  setNeedsWantsScreen,
  setInvestmentsScreen,
  totalAvailableBalance,
totalUsedBalance,
}) => {
  return (
    <div>
      <HeroProfile />
      <HeroForm incomeForm={incomeForm} />
      <TotalBalance
       totalAvailableBalance={totalAvailableBalance}
       totalUsedBalance={totalUsedBalance}
      />
      <RedirectToPage
        setNeedsWantsScreen={setNeedsWantsScreen}
        setInvestmentsScreen={setInvestmentsScreen}
      />
    </div>
  );
};

export default MainPage;
