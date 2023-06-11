import React from "react";
import ProfileHeader from "./NWIComponents/ProfileHeader";
import NWICommonForm from "./NWIComponents/NWICommonForm";
import NWIBalanceStats from "./NWIComponents/NWIBalanceStats";
import GoToTransactions from "./NWIComponents/GoToTransactions";

const NWIForm = ({ needsForm, goToHome, splitAmounts }) => {
  return (
    <div className="w-96 max-w-sm p-3">
      <ProfileHeader goToHome={goToHome} />
      <NWICommonForm needsForm={needsForm} />
      <NWIBalanceStats />
      <GoToTransactions />
    </div>
  );
};

export default NWIForm;
