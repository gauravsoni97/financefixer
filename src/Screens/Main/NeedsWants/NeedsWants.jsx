import React, { useEffect, useState } from "react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import NeedsWantsTransactions from "./NeedsWantsTransactions";

const NeedsWants = ({
  setTotalBalance,
  needsForm,
  goToHome,
  initialAmount,
  needsWantsTotalListSum,
  arrayOfNeeds,
  filteredNeedsArray,
  deleteNeedsFromList,
  selectedMonth,
  handleMonthFilter,
}) => {
  const [showTransactions, setShowTransactions] = useState(false);
  return (
    <>
      {showTransactions ? (
        <NeedsWantsTransactions
          backToNeedsWantsForm={() => setShowTransactions(false)}
          arrayOfNeeds={arrayOfNeeds}
          filteredNeedsArray={filteredNeedsArray}
          deleteNeedsFromList={deleteNeedsFromList}
          selectedMonth={selectedMonth}
          handleMonthFilter={handleMonthFilter}
        />
      ) : (
        <div>
          <div className="w-full max-w-sm mb-3 flex items-center justify-between">
            <button
              onClick={() => goToHome()}
              type="button"
              className="text-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center p-4 cursor-pointer "
            >
              <ArrowBackIosRoundedIcon style={{ width: "16px" }} />
            </button>
            <div className="text-center  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center ml-3 p-4  w-full">
              Needs + Wants
            </div>
          </div>

          {/* --------- */}

          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-3 md:p-8 shadow dark:bg-gray-800 dark:border-gray-700 mb-3">
            <form className="space-y-3" onSubmit={needsForm.handleSubmit}>
              <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                Enter Date
              </label>
              <input
                type="date"
                name="itemDate"
                id="itemDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white"
                placeholder="MM"
                value={needsForm.values.itemDate}
                onChange={needsForm.handleChange}
              />
              <p
                className={
                  needsForm.touched.itemDate && needsForm.errors.itemDate
                    ? "text-red-600  text-xs  font-medium"
                    : ""
                }
              >
                {needsForm.touched.itemDate && needsForm.errors.itemDate
                  ? needsForm.errors.itemDate
                  : ""}
              </p>

              <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                Enter Name
              </label>
              <input
                name="itemName"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white"
                placeholder="Sugar"
                value={needsForm.values.itemName}
                onChange={needsForm.handleChange}
              />
              <p
                className={
                  needsForm.touched.itemName && needsForm.errors.itemName
                    ? "text-red-600  text-xs  font-medium"
                    : ""
                }
              >
                {needsForm.touched.itemName && needsForm.errors.itemName
                  ? needsForm.errors.itemName
                  : ""}
              </p>

              <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                Enter Amount
              </label>
              <input
                name="itemPrice"
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white"
                min="0"
                placeholder="10000"
                value={needsForm.values.itemPrice}
                onChange={needsForm.handleChange}
              />
              <p
                className={
                  needsForm.touched.itemPrice && needsForm.errors.itemPrice
                    ? "text-red-600  text-xs  font-medium"
                    : ""
                }
              >
                {needsForm.touched.itemPrice && needsForm.errors.itemPrice
                  ? needsForm.errors.itemPrice
                  : ""}
              </p>

              <button
                type="submit"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full w-max-sm"
              >
                Add Amount
              </button>
            </form>
          </div>

          {/* ------------------ */}

          <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow shadow dark:bg-gray-800 dark:border-gray-700 mb-3">
            <div className="flex justify-between mb-3">
              <span className="text-base font-medium text-blue-700 dark:text-white">
                Available Balance
              </span>
              <span className="text-base font-medium text-blue-700  flex items-center dark:text-green-400">
                ₹ {initialAmount - needsWantsTotalListSum}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-base font-medium text-blue-700 dark:text-white">
                Used Balance
              </span>
              <span className="text-base font-medium text-blue-700  flex items-center dark:text-red-400">
                ₹ {needsWantsTotalListSum}
              </span>
            </div>
          </div>

          {/* ---------------- */}

          <div className="w-full max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow sm:p-4 md:p-4 shadow dark:bg-gray-800 dark:border-gray-700">
            <button
              onClick={() => setShowTransactions(true)}
              type="button"
              className="py-3 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full"
            >
              See All Transactions
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NeedsWants;
