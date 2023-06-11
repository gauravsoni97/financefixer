import React from "react";

const TotalBalance = () => {
  return (
    <div className="w-full max-w-sm px-4 py-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
      <div className="flex justify-between">
        <span className="text-base font-medium text-blue-700 dark:text-white">
          Available Balance
        </span>
        <span className="text-md font-medium text-blue-700  flex items-center dark:text-white">
          ₹ 2134
        </span>
      </div>
    </div>
  );
};

export default TotalBalance;
