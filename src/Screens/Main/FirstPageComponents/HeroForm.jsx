import React from "react";

const HeroForm = () => {
  return (
    <div class="w-full max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow sm:p-3 md:p-8 shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
      <form class="space-y-4">
        <div>
          <label
            for="income"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Enter Your Monthly Income
          </label>
          <input
            type="number"
            name="income"
            id="income"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white"
            placeholder="100000"
            required
          />
        </div>
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full w-max-sm">Add Amount</button>

      </form>

      <div class="text-sm font-medium text-gray-500 dark:text-gray-300 text-center pt-3">
        Want to Restart Again? &nbsp;
        <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">
          Restart App
        </a>
      </div>
    </div>
  );
};

export default HeroForm;
