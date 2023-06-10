import React from "react";

const RedirectToPage = () => {
  return (
    <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 shadow dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-center mb-4 italic">Using Money For...</h3>
      <button
        type="button"
        className="py-4 px-5  mb-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full"
      >
        Needs + Wants (70%)
      </button>
      <button
        type="button"
        className="py-4 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full"
      >
       Investments (30%)
      </button>
    </div>
  );
};

export default RedirectToPage;