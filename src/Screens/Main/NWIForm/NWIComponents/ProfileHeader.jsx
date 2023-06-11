import React from "react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const ProfileHeader = ({goToHome}) => {
  return (
    <div className="w-full max-w-sm mb-3 flex items-center justify-between">
      <button onClick={()=>goToHome()}
        type="button"
        className="text-center w-[15%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center p-4 cursor-pointer "
      >
        <ArrowBackIosRoundedIcon style={{ width: "16px" }} />
      </button>
      <div className="text-center w-[85%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center ml-3 p-4 w-72 ">
        Needs + Wants
      </div>
    </div>
  );
};

export default ProfileHeader;
