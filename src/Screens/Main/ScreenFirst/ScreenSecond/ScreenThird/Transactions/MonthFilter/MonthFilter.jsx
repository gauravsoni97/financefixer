import React from "react";

const MonthFilter = () => {
  return (
    <div className="flex items-center justify-between py-5">
        <div className="flex items-center justify-center">Select Month</div>
        <select
          id="countries"
          class="bg-gray-50 borderdark:bg-gray-800 dark:border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20%] p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-auto dark:bg-gray-800 dark:border-gray-400"
        >
          <option selected>All</option>
          <option value="US">Jan</option>
          <option value="CA">Feb</option>
          <option value="FR">Mar</option>
          <option value="DE">Apr</option>
        </select>
    </div>
  );
};

export default MonthFilter;
