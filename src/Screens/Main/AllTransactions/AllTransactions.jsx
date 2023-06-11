import React from "react";
import TransactionsHeader from "./TransactionsComponents/TransactionsHeader";
import TransactionsList from "./TransactionsComponents/TransactionsList";

const AllTransactions = ({goToForm}) => {
  return (
    <div>
      <TransactionsHeader goToForm={goToForm} />
      <TransactionsList/>
    </div>
  );
};

export default AllTransactions;
