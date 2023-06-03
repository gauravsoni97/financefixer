import React, { useState } from "react";

import myImg from "../../../assets/Images/gauravsoni.png";

const ProfileHero = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="w-full max-w-md relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<div className="logoutButton absolute right-0 top-1.5">
<button type="button" class="py-2 px-3 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Logout</button>
</div>

       
        <div className="flex flex-col items-center py-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={myImg}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Hi, Gaurav Soni
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Welcome Back
          </span>
        </div>
      </div>
    </>
  );
};

export default ProfileHero;
