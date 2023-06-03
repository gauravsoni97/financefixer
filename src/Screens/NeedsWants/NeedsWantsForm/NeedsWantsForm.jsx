import React from "react";

const NeedsWantsForm = () => {
  return (
    <>
      <div className="pt-6 pb-4">
        <form>
          <div class="mb-4">
            <label
              for="email"
              class="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Enter date
            </label>
            <input
              type="number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="100000"
              required
              min={1}
              max={999999999}
            />
          </div>

          <div class="mb-4">
            <label
              for="email"
              class="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Enter Name
            </label>
            <input
              type="number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="100000"
              required
              min={1}
              max={999999999}
            />
          </div>

          <div class="mb-4">
            <label
              for="email"
              class="block mb-2 text-md font-medium text-gray-900 dark:text-white"
            >
              Enter Price
            </label>
            <input
              type="number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="100000"
              required
              min={1}
              max={999999999}
            />
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Amount
          </button>
        </form>
      </div>
    </>
  );
};

export default NeedsWantsForm;
