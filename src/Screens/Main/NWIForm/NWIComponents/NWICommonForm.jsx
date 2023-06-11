import React from "react";

const NWICommonForm = () => {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-3 md:p-8 shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
      <form className="space-y-3">
        <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
          Enter Date
        </label>
        <input
          type="number"
          name="income"
          id="income"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white"
          placeholder="100000"
          required
          // value={inputAmountFirst}
          // onChange={(e) => setInputAmountFirst(e.target.value)}
        />

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
