import React, { useState } from "react";
import ProfileHero from "./ProfileHero/ProfileHero";
import MonthlyInput from "./MonthlyInput/MonthlyInput";
import BalanceStats from "../../Components/Stats/BalanceStats";
import ResetAppModal from "./ResetAppModal/ResetAppModal";
import RedirectTabButtons from "../../Components/RedirectButtons/RedirectTabButtons";

const Main = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className=" h-screen w-screen  p-3  bg-gray-50 dark:bg-gray-900">
      {modal ? (
        <ResetAppModal setModal={setModal} />
      ) : (
        <>
          <ProfileHero />
          <MonthlyInput setModal={setModal} />
          <hr class="h-px my-4 bg-gray-100 border-0 dark:bg-gray-700" />
          <BalanceStats />
          <hr class="h-px my-4 bg-gray-100 border-0 dark:bg-gray-800" />
          <RedirectTabButtons text=" Use 80% Money for Needs & Wants "/>
          <RedirectTabButtons text=" Use 20% Money for Investments "/>
        </>
      )}
    </div>
  );
};

export default Main;
