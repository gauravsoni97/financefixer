import React from "react";
import ProfileHeader from "./NWIComponents/ProfileHeader";
import NWICommonForm from "./NWIComponents/NWICommonForm";
import NWIBalanceStats from "./NWIComponents/NWIBalanceStats";
import GoToTransactions from "./NWIComponents/GoToTransactions";
import AllTransactions from "../AllTransactions/AllTransactions";

const NWIForm = ({
  needsForm,
  goToHome,
  splitAmounts,
  needsTotalListSum,
  selectedMonth,
  handleMonthFilter,
  arrayOfNeeds,
  filteredNeedsArray,
  deleteNeedsFromList,
  transactionScreen,
  setTransactionScreen,
  goToTransactions,
  goToForm
}) => {
  return (
    <>
      {transactionScreen ? (
        <AllTransactions goToForm={goToForm} />
      ) : (
        <div className="w-96 max-w-sm p-3">
          <ProfileHeader goToHome={goToHome} />
          <NWICommonForm needsForm={needsForm} />
          <NWIBalanceStats splitAmounts={splitAmounts} />
          <GoToTransactions goToTransactions={goToTransactions} />
        </div>
      )}
    </>
  );
};

export default NWIForm;
