import React from "react";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const TransactionList = () => {
  return (
    <div className="py-3 max-h-[70vh] overflow-auto">
      <div className="flex item-center justify-between border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-800 dark:border-gray-400  dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2">
        <span>Item Name</span>
        <span>135432 </span>
        <span>
          <DeleteForeverRoundedIcon/>
        </span>
      </div>
     
    </div>
  );
};

export default TransactionList;
