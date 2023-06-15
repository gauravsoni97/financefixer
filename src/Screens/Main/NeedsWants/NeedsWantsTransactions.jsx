import React from "react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const NeedsWantsTransactions = () => {
  return (
    <>
      <div className="w-full max-w-sm mb-3 flex items-center justify-between">
        <button
          type="button"
          className="text-center w-[15%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center p-4 cursor-pointer "
        >
          <ArrowBackIosRoundedIcon style={{ width: "16px" }} />
        </button>
        <div className="text-center w-[85%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center ml-3 p-4 w-72 ">
          All Transactions
        </div>
      </div>

      <div>
        <div className="monthFilter flex items-center justify-between p-2 w-full">
          <h3>Select Month</h3>
          <div>All</div>
        </div>

        <div className=" max-h-[80vh] overflow-auto flex items-center flex-col">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  p-4 my-1 flex items-center justify-between py-2 w-full">
            <span>Item</span>
            <span>324</span>
            <span>x</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NeedsWantsTransactions;
