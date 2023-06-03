import React, { useState } from "react";
import BalanceStats from "../../Components/Stats/BalanceStats";
import RedirectTabButtons from "../../Components/RedirectButtons/RedirectTabButtons";
import MonthlyInput from "./ScreenFirst/MonthlyInput/MonthlyInput";
import ProfileHero from "./ScreenFirst/ProfileHero/ProfileHero";
import ResetAppModal from "./ScreenFirst/ResetAppModal/ResetAppModal";

const Main = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className=" p-6 h-screen w-screen bg-gray-50 dark:bg-gray-900">
      {modal ? (
        <ResetAppModal setModal={setModal} />
      ) : (
        <>
          <ProfileHero />
          <MonthlyInput setModal={setModal} />
          <BalanceStats />
          <RedirectTabButtons text="Needs & Wants (70%)" />
          <RedirectTabButtons text="Investments (30%)" />
        </>
      )}
    </div>
  );
};

export default Main;
