import React from "react";
import CurrentMonthHeroHeading from "./CurrentMonthHeroHeading/CurrentMonthHeroHeading";
import MonthFilter from "./MonthFilter/MonthFilter";
import TransactionList from "./TransactionList/TransactionList";

const Transactions = () => {
  return (
    <div className="p-6">
      <CurrentMonthHeroHeading />
      <MonthFilter />
      <TransactionList />
    </div>
  );
};

export default Transactions;
