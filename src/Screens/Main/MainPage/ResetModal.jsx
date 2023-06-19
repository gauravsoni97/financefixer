import React from "react";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ResetModal = ({ setShowModal }) => {
  const { logOut } = UserAuth();
  const navigate = useNavigate();

  const handleResetApp = () => {
    localStorage.clear();
    setShowModal(false);
    logOut();
    navigate("/login");
  };

  return (
    <>
      <div
        id="popup-modal"
        className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-hidden md:inset-0 h-full max-h-full bg-[rgba(0,0,0,0.6)] flex items-center justify-center"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <CloseRoundedIcon />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <WarningAmberRoundedIcon style={{ fontSize: "5rem" }} />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete all transactions and restart
                entire app?
              </h3>
              <button
                onClick={handleResetApp}
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Yes, I'm sure
              </button>
              <button
                onClick={() => setShowModal(false)}
                data-modal-hide="popup-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetModal;
