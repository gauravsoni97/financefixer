import React from "react";

const TotalBalance = () => {
  return (
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
      <div class="flex justify-between mb-1">
        <span class="text-base font-medium text-blue-700 dark:text-white">
          Available Balance
        </span>
        <span class="text-sm font-medium text-blue-700  flex items-center dark:text-white">
          {" "}
          ₹ 2134
        </span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          class="bg-blue-600 h-2.5 rounded-full"
          style={{ width: "45%" }}
        ></div>
      </div>
    </div>
  );
};

export default TotalBalance;
