import React, { useState } from "react";

const HeroForm = ({setInputAmount}) => {
  const [inputAmountFirst, setInputAmountFirst] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputAmount(inputAmountFirst);
    setInputAmountFirst("")
  };
  return (
    <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow sm:p-3 md:p-8 shadow dark:bg-gray-800 dark:border-gray-700 mb-3">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Your Monthly Income
          </label>
          <input
            type="number"
            name="income"
            id="income"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white"
            placeholder="100000"
            required
            value={inputAmountFirst}
            onChange={(e) => setInputAmountFirst(e.target.value)}
          />
        </div>
        <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full w-max-sm">Add Amount</button>

      </form>

      <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center mt-5 italic">
        Want to Restart Again? &nbsp;
        <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
          Restart App
        </a>
      </div>
    </div>
  );
};

export default HeroForm;
