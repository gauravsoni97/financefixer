import React, { useState } from "react";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import myImg from "../../../assets/Images/gauravsoni.png"

const HeroProfile = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleHeroDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setToggleIcon(!toggleIcon);
  };
  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center space-between p-6 mb-2">
    
      <div class="flex  items-center w-[80%]">
        <img
          class="w-12 h-12 mr-3 rounded-full shadow-lg"
          src={myImg}
          alt="Profile Image"
        />
        <h1 class="mb-1 text-lg font-medium text-gray-900 dark:text-white">
        Hi, Gaurav Soni
        </h1>
      </div>
      <div class=" w-[20%] relative flex justify-end ">
        <button
          onClick={handleHeroDropdown}
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-800 rounded-lg text-sm p-1 "
          type="button"
        >
          {toggleIcon ?  <CloseRoundedIcon/> : <WidgetsRoundedIcon /> }
        </button>
        {dropdownOpen ? (
          <div
            id="dropdown"
            class="z-10 absolute right-8 text-base list-none bg-white  rounded-md shadow w-18 dark:bg-gray-700"
          >
            <ul class="" aria-labelledby="dropdownButton">
              <li>
                <a
                  href="#"
                  class="block px-4 py-1.5 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white rounded-lg "
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default HeroProfile;
