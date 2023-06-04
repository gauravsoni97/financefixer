import React from "react";

const RedirectTabButtons = ({text}) => {
  return (
    <>
      <button
        type="button"
        class="w-full text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-md  py-5 text-center mr-2 mb-4 max-w-md" 
      >
        {text}
      </button>
    </>
  );
};

export default RedirectTabButtons;