import React, { useState } from "react";
import BalanceStats from "../../Components/Stats/BalanceStats";
import RedirectTabButtons from "../../Components/RedirectButtons/RedirectTabButtons";
import MonthlyInput from "./ScreenFirst/MonthlyInput/MonthlyInput";
import ProfileHero from "./ScreenFirst/ProfileHero/ProfileHero";
import ResetAppModal from "./ScreenFirst/ResetAppModal/ResetAppModal";
import { Link } from "react-router-dom";

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

          <Link to="/commonformpage">
            <button
              type="button"
              class="w-full text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-md  py-5 text-center mr-2 mb-4 max-w-md"
            >
              Needs + Wants (70%)
            </button>
          </Link>
          <Link to="/commonformpage">
            <button
              type="button"
              class="w-full text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-md  py-5 text-center mr-2 mb-4 max-w-md"
            >
              Investments (30%)
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Main;
