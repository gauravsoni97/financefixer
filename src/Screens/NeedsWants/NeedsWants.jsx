import React from "react";
import NeedsWantsForm from "./NeedsWantsForm/NeedsWantsForm";
import NeedsWantsHeading from "./NeedsWantsHeading/NeedsWantsHeading";
import RedirectTabButtons from "../../Components/RedirectButtons/RedirectTabButtons";
import BalanceStats from "../../Components/Stats/BalanceStats";

const NeedsWants = () => {
  return (
    <div className="p-6">
      <NeedsWantsHeading />
      <NeedsWantsForm />
      <BalanceStats />
      <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full">See all transactions</button>

    </div>
  );
};

export default NeedsWants;
