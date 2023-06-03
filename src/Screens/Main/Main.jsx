import React, { useState } from "react";
import ProfileHero from "./ProfileHero/ProfileHero";
import MonthlyInput from "./MonthlyInput/MonthlyInput";
import BalanceStats from "../../Components/Stats/BalanceStats";
import ResetAppModal from "./ResetAppModal/ResetAppModal";
import RedirectTabButtons from "../../Components/RedirectButtons/RedirectTabButtons";

const Main = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className=" h-screen w-screen  p-6  bg-gray-50 dark:bg-gray-900">
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
