import { Slider } from "@mui/material";
import React, { useState } from "react";

const HeroForm = ({ incomeForm }) => {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-3 md:p-8 shadow dark:bg-gray-800 dark:border-gray-700 mb-3">
      <form className="space-y-4" onSubmit={incomeForm.handleSubmit}>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Enter Your Monthly Income
        </label>
        <input
          type="number"
          name="income"
          id="income"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white"
          placeholder="100000"
          min={0}
          max={10000000000}
          value={incomeForm.values.income}
          onChange={incomeForm.handleChange}
        />

        <p
          className={
            incomeForm.touched.income && incomeForm.errors.income
              ? "text-red-600  text-xs font-medium"
              : ""
          }
        >
          {incomeForm.touched.income && incomeForm.errors.income
            ? incomeForm.errors.income
            : ""}
        </p>

        <button
          type="submit"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full w-max-sm"
        >
          Add Amount
        </button>
      </form>
    </div>
  );
};

export default HeroForm;
