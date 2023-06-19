import React, { useState } from "react";
import ResetModal from "./ResetModal";

const ResetApp = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal ? <ResetModal setShowModal={setShowModal} /> : <></>}

      <div>
        <button onClick={()=>setShowModal(true)}
          type="button"
          className="py-3 px-5 mr-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full dark:text-red-400"
        >
          Restart App
        </button>
      </div>
    </>
  );
};

export default ResetApp;
