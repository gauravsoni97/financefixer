import React from "react";
import { useSliderRangeContext } from "../../../context/SliderRangeValue";

const RedirectToPage = ({ setNeedsWantsScreen, setInvestmentsScreen }) => {
  const contextValue = useSliderRangeContext();
  const { sliderValue } = contextValue || {};


  return (
    <div className="w-full max-w-sm p-4 py-6 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 shadow dark:bg-gray-800 dark:border-gray-700 mb-3">
      <button onClick={()=>setNeedsWantsScreen()}
        type="button"
        className="py-4 px-5  mb-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full"
      >
        Needs & Wants ({sliderValue}%)
      </button>
      <button onClick={()=>setInvestmentsScreen()}
        type="button"
        className="py-4 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full"
      >
        Investments ({100 - sliderValue}%)
      </button>
    </div>
  );
};

export default RedirectToPage;
