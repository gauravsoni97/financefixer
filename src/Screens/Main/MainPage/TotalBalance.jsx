import React from "react";

const TotalBalance = () => {
  return (
    <div className="w-full max-w-sm p-8 px-6 bg-white border border-gray-200 rounded-lg shadow shadow dark:bg-gray-800 dark:border-gray-700 mb-3">
    <div className="flex justify-between mb-3">
      <span className="text-base font-medium text-blue-700 dark:text-white">
        Available Balance
      </span>
      <span className="text-base font-medium text-blue-700  flex items-center dark:text-green-400">
        ₹ 2134
      </span>
    </div>
    <div className="flex justify-between">
      <span className="text-base font-medium text-blue-700 dark:text-white">
        Used Balance
      </span>
      <span className="text-base font-medium text-blue-700  flex items-center dark:text-red-400">
        ₹ 2134
      </span>
    </div>
  </div>
  );
};

export default TotalBalance;
