import React, { useEffect, useState } from "react";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import myImg from "../../../assets/Images/gauravsoni.png";
import { Route, Routes, useNavigate } from "react-router-dom";

const HeroProfile = ({}) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleResetApp = () => {
    localStorage.clear();
    window.location.reload();
  };
  const handleLogoutButton = () => {
    localStorage.removeItem("userEmail");
    // navigate("/login");
  };
  
  const handleHeroDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setToggleIcon(!toggleIcon);
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center space-between p-4 mb-3">
      <div className="flex  items-center w-[80%]">
        <img
          className="w-12 h-12 mr-3 rounded-full shadow-lg"
          src={myImg}
          alt="Profile Image"
        />
        <h1 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
          Hi, Gaurav
        </h1>
      </div>
      <div className=" w-[20%] relative flex justify-end ">
        <button
          onClick={handleHeroDropdown}
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-800 rounded-lg text-sm p-1 "
          type="button"
        >
          {toggleIcon ? <CloseRoundedIcon /> : <WidgetsRoundedIcon />}
        </button>
        {dropdownOpen ? (
          <div
            id="dropdown"
            className="z-10 absolute top-8 text-base list-none bg-white  rounded-md shadow w-24 dark:bg-gray-700"
          >
            <ul aria-labelledby="dropdownButton">
              <li>
                <span
                  onClick={handleLogoutButton}
                  className="block px-4 py-1.5 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white rounded-lg cursor-pointer "
                >
                  Logout
                </span>
              </li>
              <li>
                <span
                  onClick={handleResetApp}
                  className="block px-4 py-1.5 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white rounded-lg cursor-pointer"
                >
                  Reset App
                </span>
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
