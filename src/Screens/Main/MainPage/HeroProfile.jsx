import React, { useState } from "react";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";

const HeroProfile = () => {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  const handleHeroDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-between p-4 mb-3">
      <div className="flex items-center w-[80%]">
        <img
          className="w-12 h-12 mr-3 rounded-full shadow-lg"
          src={user?.photoURL}
          alt="Profile Image"
        />
        <div className="w-[80%] overflow-hidden truncate">
          <h1 className="capitalize mb-1 text-lg font-medium text-gray-900 dark:text-white">
            Hi, {user?.displayName}
          </h1>
          <p className="text-xs font-extralight overflow-hidden truncate text-gray-400">
            {user?.email}
          </p>
        </div>
      </div>
      <div className="relative">
        <button
          onClick={handleHeroDropdown}
          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-800 rounded-lg text-sm p-1"
          type="button"
        >
          {dropdownOpen ? <CloseRoundedIcon /> : <WidgetsRoundedIcon />}
        </button>
        {dropdownOpen && (
          <div className="absolute right-8 top-[-.2rem] z-10 bg-white rounded-md shadow dark:bg-gray-700 text-center p-2 px-4">
            <ul>
              <li>
                <span
                  onClick={handleLogout}
                  className="text-sm dark:text-gray-200 dark:hover:text-white rounded-lg cursor-pointer"
                >
                  Logout
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroProfile;
