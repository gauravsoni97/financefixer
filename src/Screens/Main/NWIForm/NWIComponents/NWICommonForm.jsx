import React from "react";

const NWICommonForm = ({ needsForm }) => {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-3 md:p-8 shadow dark:bg-gray-800 dark:border-gray-700 mb-3">
      <form className="space-y-3" onSubmit={needsForm.handleSubmit}>
        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
          Enter Date
        </label>
        <input
          type="date"
          name="itemDate"
          id="itemDate"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white"
          placeholder="MM"
          value={needsForm.values.itemDate}
          onChange={needsForm.handleChange}
        />
        <p
          className={
            needsForm.touched.itemDate && needsForm.errors.itemDate
              ? "text-red-600  text-xs  font-medium"
              : ""
          }
        >
          {needsForm.touched.itemDate && needsForm.errors.itemDate
            ? needsForm.errors.itemDate
            : ""}
        </p>

        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
          Enter Name
        </label>
        <input
          name="itemName"
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white"
          placeholder="Sugar"
          value={needsForm.values.itemName}
          onChange={needsForm.handleChange}
        />
        <p
          className={
            needsForm.touched.itemName && needsForm.errors.itemName
              ? "text-red-600  text-xs  font-medium"
              : ""
          }
        >
          {needsForm.touched.itemName && needsForm.errors.itemName
            ? needsForm.errors.itemName
            : ""}
        </p>

        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
          Enter Amount
        </label>
        <input
          name="itemPrice"
          type="number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white"
          min="0"
          placeholder="10000"
          value={needsForm.values.itemPrice}
          onChange={needsForm.handleChange}
        />
        <p
          className={
            needsForm.touched.itemPrice && needsForm.errors.itemPrice
              ? "text-red-600  text-xs  font-medium"
              : ""
          }
        >
          {needsForm.touched.itemPrice && needsForm.errors.itemPrice
            ? needsForm.errors.itemPrice
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

export default NWICommonForm;
