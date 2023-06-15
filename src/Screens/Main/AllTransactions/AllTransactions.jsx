import React from "react";
import TransactionsHeader from "./TransactionsComponents/TransactionsHeader";
import TransactionsList from "./TransactionsComponents/TransactionsList";

const AllTransactions = ({}) => {
  return (
    <div>
      <TransactionsHeader />
      <TransactionsList/>
    </div>
  );
};

export default AllTransactions;
