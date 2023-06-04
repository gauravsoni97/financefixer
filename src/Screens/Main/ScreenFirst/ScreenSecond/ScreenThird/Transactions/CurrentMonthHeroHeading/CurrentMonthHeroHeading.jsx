import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";


const CurrentMonthHeroHeading = () => {
  return (
    <div className="flex items-center">
      <Link to="/">
        <span className="h-16 w-12  flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <ArrowBackIosRoundedIcon style={{ width: "16px" }} />
        </span>
      </Link>
      <div className=" w-[70vw] ml-auto max-w-md relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="relative flex justify-center items-center py-4">
          <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
            Transactions
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CurrentMonthHeroHeading;
