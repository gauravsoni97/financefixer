import React from "react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { FormControl, MenuItem, Select } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const InvestmentTransactions = ({
  backToInvestmentForm,
  arrayOfInvest,
  filteredInvestArray,
  deleteInvestFromList,
  selectedMonth,
  handleMonthFilter,
}) => {
  return (
    <>
      <div className="w-full max-w-sm mb-3 flex items-center justify-between">
        <button
          onClick={() => backToInvestmentForm()}
          type="button"
          className="text-center w-[15%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center p-4 cursor-pointer "
        >
          <ArrowBackIosRoundedIcon style={{ width: "16px" }} />
        </button>
        <div className="text-center w-[85%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center justify-center ml-3 p-4">
          Transactions
        </div>
      </div>

      <div>
        <div className="monthFilter flex items-center justify-between p-2 px-0 w-full">
          <h3>Select Month</h3>
          <FormControl
            style={{ minWidth: "50px", fontSize: ".8rem" }}
            size="small"
          >
            <Select
              style={{ fontSize: ".8rem", color: "white", padding: "0.2rem" }}
              size="small"
              value={selectedMonth}
              onChange={handleMonthFilter}
              className="border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={1}>Jan</MenuItem>
              <MenuItem value={2}>Feb</MenuItem>
              <MenuItem value={3}>Mar</MenuItem>
              <MenuItem value={4}>Apr</MenuItem>
              <MenuItem value={5}>May</MenuItem>
              <MenuItem value={6}>Jun</MenuItem>
              <MenuItem value={7}>Jul</MenuItem>
              <MenuItem value={8}>Aug</MenuItem>
              <MenuItem value={9}>Sep</MenuItem>
              <MenuItem value={10}>Oct</MenuItem>
              <MenuItem value={11}>Nov</MenuItem>
              <MenuItem value={12}>Dec</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="max-h-[75vh] overflow-auto flex items-center flex-col">
          <div className="w-full  flex items-center justify-between flex-col py-2 w-full">
            {(arrayOfInvest.length === 0 ||
              (filteredInvestArray.length === 0 && selectedMonth !== 0)) && (
              <p className="text-center text-sm h-24 text-gray-600 w-full flex items-center justify-center">
                No data found
              </p>
            )}

            {/* =========  Show all Data ====================== */}

            {selectedMonth === 0 &&
              arrayOfInvest.map((e, ind) => {
                return (
                  <div
                    className="flex align-center justify-between w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  p-3 px-4 my-1"
                    key={ind}
                  >
                    <span>{e.name}</span>
                    <span>{e.price}</span>
                    <span>
                      <DeleteForeverIcon
                        onClick={() => deleteInvestFromList(ind)}
                      />
                    </span>
                  </div>
                );
              })}

            {/* =========================== Filtered Array on select Month ========================== */}

            {selectedMonth > 0 &&
              filteredInvestArray.length > 0 &&
              filteredInvestArray.map((e, ind) => {
                return (
                  <div
                    className="flex align-center justify-between w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  p-3 px-4 my-1"
                    key={ind}
                  >
                    <span>{e.name}</span>
                    <span>{e.price}</span>
                    <span>
                      <DeleteForeverIcon
                        onClick={() => deleteInvestFromList(ind)}
                      />
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentTransactions;
