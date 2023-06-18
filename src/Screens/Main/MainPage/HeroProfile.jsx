import React, { useEffect, useState } from "react";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import myImg from "../../../assets/Images/gauravsoni.png";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../../context/AuthContext";

const HeroProfile = ({}) => {
  const navigate = useNavigate()
  const { user, logOut } = UserAuth();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login')
    } catch (error) {
      console.log(error);
    }
  };

  const handleHeroDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setToggleIcon(!toggleIcon);
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center space-between p-4 mb-3">
      <div className="flex  items-center w-[80%] ">
        <img
          className="w-12 h-12 mr-3 rounded-full shadow-lg"
          src={user?.photoURL}
          alt="Profile Image"
        />
        <div className="mb-1 text-lg font-medium text-gray-900 dark:text-white w-[80%]  overflow-hidden truncate">
          <h1 className=" capitalize mb-1 text-lg font-medium text-gray-900 dark:text-white w-[80%]  overflow-hidden truncate">
            Hi, {user?.displayName}
          </h1>

          <p className="text-xs font-extralight	w-[80%]  overflow-hidden truncate text-gray-400 ">
          {user?.email}
          </p>
        </div>
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
            className="z-10 absolute right-8 top-[-.2rem] text-base list-none bg-white  rounded-md shadow dark:bg-gray-700 text-center p-2 px-4 "
          >
            <ul aria-labelledby="dropdownButton">
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
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default HeroProfile;
