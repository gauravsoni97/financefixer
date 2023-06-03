import React from "react";

const CurrentMonthHeroHeading = () => {
  return (
    <div>
      <div>
        <div className="w-full max-w-md relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center py-4">
            <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
              Current Month: May 2023
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentMonthHeroHeading;
