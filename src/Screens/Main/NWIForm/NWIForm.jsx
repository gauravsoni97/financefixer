import React from "react";
import ProfileHeader from "./NWIComponents/ProfileHeader";
import NWICommonForm from "./NWIComponents/NWICommonForm";
import NWIBalanceStats from "./NWIComponents/NWIBalanceStats";
import GoToTransactions from "./NWIComponents/GoToTransactions";
import AllTransactions from "../AllTransactions/AllTransactions";

const NWIForm = ({
  needsForm,
  splitAmounts,
  needsTotalListSum,
  selectedMonth,
  handleMonthFilter,
  arrayOfNeeds,
  filteredNeedsArray,
  deleteNeedsFromList,
  transactionScreen,
  setTransactionScreen,
}) => {
  return (
    <>
      {transactionScreen ? (
        <AllTransactions />
      ) : (
        <div className="w-96 max-w-sm p-3">
          <ProfileHeader />
          <NWICommonForm needsForm={needsForm} />
          <NWIBalanceStats splitAmounts={splitAmounts} />
          <GoToTransactions  />
        </div>
      )}
    </>
  );
};

export default NWIForm;
