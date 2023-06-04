import React, { useState } from "react";

const MonthlyInput = ({ setModal, incomeForm }) => {
  const handleResetModal = () => {
    setModal(true);
  };

  return (
    <div className="pt-6 max-w-md">
      <form onSubmit={incomeForm.handleSubmit}>
        <div class="mb-4">
          <label
            for="email"
            class="block mb-3 text-md font-medium text-gray-900 dark:text-white"
          >
            Enter your monthly income
          </label>
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="income"
            min={0}
            type="number"
            placeholder="100000"
            value={incomeForm.values.income}
            onChange={incomeForm.handleChange}
          />
          <p
            className={
              incomeForm.touched.income && incomeForm.errors.income
                ? "text-red-600  text-xs font-medium mt-2"
                : ""
            }
          >
            {incomeForm.touched.income && incomeForm.errors.income
              ? incomeForm.errors.income
              : ""}
          </p>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-md  w-full"
        >
          Add Amount
        </button>
      </form>
      <br />
      <hr class="h-px mb-4 bg-gray-100 border-0 dark:bg-gray-700 max-w-md" />

      <center>
        <button
          onClick={handleResetModal}
          type="button"
          class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 italic w-full"
        >
          Reset web app
        </button>
      </center>
    </div>
  );
};

export default MonthlyInput;
