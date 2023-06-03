import React, { useState } from "react";
import ProfileHero from "./ProfileHero/ProfileHero";
import MonthlyInput from "./MonthlyInput/MonthlyInput";
import BalanceStats from "../../Components/Stats/BalanceStats";
import ResetAppModal from "./ResetAppModal/ResetAppModal";

const Main = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className=" h-screen w-screen  p-3  bg-gray-50 dark:bg-gray-900">
      {modal ? (
        <ResetAppModal  setModal={setModal}/>
      ) : (
        <>
          <ProfileHero />
          <MonthlyInput setModal={setModal} />
          <BalanceStats />
        </>
      )}
    </div>
  );
};

export default Main;
