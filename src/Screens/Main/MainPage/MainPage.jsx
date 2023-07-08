import React, { useEffect, useState } from "react";
import HeroProfile from "./HeroProfile";
import HeroForm from "./HeroForm";
import TotalBalance from "./TotalBalance";
import RedirectToPage from "./RedirectToPage";
import ResetApp from "./ResetApp";

const MainPage = ({
  incomeForm,
  setNeedsWantsScreen,
  setInvestmentsScreen,
  totalAvailableBalance,
  totalUsedBalance,
  setResetModal,
  showHeroForm
}) => {


  return (
    <div>
      <HeroProfile />
      {showHeroForm ? <HeroForm incomeForm={incomeForm} /> : <></>}
      <TotalBalance
        totalAvailableBalance={totalAvailableBalance}
        totalUsedBalance={totalUsedBalance}
      />
      <RedirectToPage
        setNeedsWantsScreen={setNeedsWantsScreen}
        setInvestmentsScreen={setInvestmentsScreen}
      />
      <ResetApp />
    </div>
  );
};

export default MainPage;
