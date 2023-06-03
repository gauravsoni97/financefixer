import React from "react";

const BalanceStats = ({}) => {
  return (
    <>
      <hr class="h-px my-4 bg-gray-100 border-0 dark:bg-gray-700" />
      <div className="flex item-center justify-between">
        <div class="w-[48%] max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-600">
          <span class="text-2xl font-bold tracking-tight ">₹ 1663</span>
          <p class=" text-sm font-small text-gray-500 mt-2 dark:text-green-400">
            Available Amount
          </p>
        </div>
        <div class="w-[48%] max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-600">
          <span class="text-2xl font-bold tracking-tight ">₹ 1866399</span>
          <p class="text-sm font-small text-gray-500 mt-2 dark:text-red-400 ">
            Used Amount
          </p>
        </div>
      </div>
      <hr class="h-px my-4 bg-gray-100 border-0 dark:bg-gray-800" />
    </>
  );
};

export default BalanceStats;
