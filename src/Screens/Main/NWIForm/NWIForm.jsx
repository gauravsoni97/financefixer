import React from "react";
import ProfileHeader from "./NWIComponents/ProfileHeader";
import NWICommonForm from "./NWIComponents/NWICommonForm";
import NWIBalanceStats from "./NWIComponents/NWIBalanceStats";
import GoToTransactions from "./NWIComponents/GoToTransactions";

const NWIForm = ({ goToHome, needsWantsAmount }) => {
  return (
    <div>
      <ProfileHeader goToHome={goToHome} />
      <NWICommonForm />
      <NWIBalanceStats />
      <GoToTransactions />
    </div>
  );
};

export default NWIForm;
