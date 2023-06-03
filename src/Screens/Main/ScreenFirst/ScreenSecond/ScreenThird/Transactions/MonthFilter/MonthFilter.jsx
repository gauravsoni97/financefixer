import React from "react";

const MonthFilter = () => {
  return (
    <div className="flex item-center justify-between py-5">
        <div className="flex item-center justify-center ">Select Month</div>
        <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-auto"
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
