import React, { useState } from "react";
import ResetAppModal from "../ResetAppModal/ResetAppModal";

const MonthlyInput = ({setModal}) => {

  const handleResetModal = () => {
    setModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onSubmit = () => {};

  return (
    <div className="pt-6 pb-4">
      <form onSubmit={handleSubmit}>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-3 text-md font-medium text-gray-900 dark:text-white"
          >
            Enter your monthly income
          </label>
          <input
            type="number"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="100000"
            required
            min={1}
            max={999999999}
          />
        </div>
        <button
          onSubmit={onSubmit}
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Amount
        </button>
      </form>

      <center>
        <button
          onClick={handleResetModal}
          type="button"
          class="py-2.5 px-5 mt-6 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 italic w-full"
        >
          Reset web app
        </button>
      </center>
    </div>
  );
};

export default MonthlyInput;
