import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MainPage from "./MainPage/MainPage";
import NeedsWants from "./NeedsWants/NeedsWants";
import Investments from "./Investments/Investments";

const Main = () => {
  const [activeScreen, setActiveScreen] = useState(null);

  const [splitAmounts, setSplitAmounts] = useState(
    JSON.parse(localStorage.getItem("splitAmounts")) || {
      nwFromHome: 0,
      invFromHome: 0,
    }
  );

  const [selectedMonth, setSelectedMonth] = useState(0);

  const [arrayOfNeeds, setArrayOfNeeds] = useState(
    JSON.parse(localStorage.getItem("needsArray")) || []
  );

  const [arrayOfInvest, setArrayOfInvest] = useState(
    JSON.parse(localStorage.getItem("investArray")) || []
  );

  const [filteredNeedsArray, setFilteredNeedsArray] = useState([]);
  const [filteredInvestArray, setFilteredInvestArray] = useState([]);

  const handleMonthFilter = (e) => {
    setSelectedMonth(e.target.value);
    const splitArrayOfNeeds = arrayOfNeeds.filter((ele) => {
      const month = Math.floor(parseInt(ele.pickedDate.split("-")[1]));
      return month === e.target.value;
    });
    const splitArrayOfInvest = arrayOfNeeds.filter((ele) => {
      const month = Math.floor(parseInt(ele.pickedDate.split("-")[1]));
      return month === e.target.value;
    });

    setFilteredNeedsArray(splitArrayOfNeeds);
    setFilteredInvestArray(splitArrayOfInvest);
  };

  // ------------------- Income form code --------------------------

  const incomeForm = useFormik({
    initialValues: { income: "" },

    validationSchema: Yup.object({
      income: Yup.number()
        .max(1000000000000, "Enter amount less than 1 Trillion*")
        .required("Amount is Required*"),
    }),

    onSubmit: (values) => {
      setSplitAmounts({
        nwFromHome: values.income * 0.7,
        invFromHome: values.income * 0.3,
      });
      console.log(values);
      incomeForm.resetForm();
    },
  });

  // --------------------- Needs Wants form -----------------------------

  const needsForm = useFormik({
    initialValues: {
      itemDate: "",
      itemName: "",
      itemPrice: "",
    },

    validationSchema: Yup.object({
      itemDate: Yup.date().required("Date is Required*"),
      itemName: Yup.string()
        .max(20, "Enter name less than 20 character*")
        .required("Name is Required*"),

      itemPrice: Yup.number()
        .max(1000000000000, "Enter amount less than 1 Trillion*")
        .required("Amount is Required*"),
    }),

    onSubmit: (values) => {
      setArrayOfNeeds((preval) => {
        return [
          {
            pickedDate: values.itemDate,
            name: values.itemName,
            price: values.itemPrice,
          },
          ...preval,
        ];
      });
      // setSelectedMonth(0);
      needsForm.resetForm();
    },
  });
  const investForm = useFormik({
    initialValues: {
      itemDate: "",
      itemName: "",
      itemPrice: "",
    },

    validationSchema: Yup.object({
      itemDate: Yup.date().required("Date is Required*"),
      itemName: Yup.string()
        .max(20, "Enter name less than 20 character*")
        .required("Name is Required*"),

      itemPrice: Yup.number()
        .max(1000000000000, "Enter amount less than 1 Trillion*")
        .required("Amount is Required*"),
    }),

    onSubmit: (values) => {
      setArrayOfInvest((preval) => {
        return [
          {
            pickedDate: values.itemDate,
            name: values.itemName,
            price: values.itemPrice,
          },
          ...preval,
        ];
      });
      // setSelectedMonth(0);
      investForm.resetForm();
    },
  });

  let needsWantsTotalListSum = arrayOfNeeds
    .map((obj) => obj.price)
    .reduce((acc, cur) => acc + cur, 0);

  let investTotalListSum = arrayOfInvest
    .map((obj) => obj.price)
    .reduce((acc, cur) => acc + cur, 0);

  const deleteNeedsFromList = (curInd) => {
    const updatedList = arrayOfNeeds.filter((ele, arrInd) => {
      return arrInd !== curInd;
    });
    setArrayOfNeeds(updatedList);
  };
  const deleteInvestFromList = (curInd) => {
    const updatedList = arrayOfInvest.filter((ele, arrInd) => {
      return arrInd !== curInd;
    });
    setArrayOfInvest(updatedList);
  };

  // ------------------------------------- use Effects ----------------------------
  useEffect(() => {
    localStorage.setItem("splitAmounts", JSON.stringify(splitAmounts));
  }, [splitAmounts]);

  useEffect(() => {
    localStorage.setItem("needsArray", JSON.stringify(arrayOfNeeds));
  }, [arrayOfNeeds]);

  useEffect(() => {
    localStorage.setItem("investArray", JSON.stringify(arrayOfInvest));
  }, [arrayOfInvest]);

  useEffect(() => {
    const splitArrayOfNeeds = arrayOfNeeds.filter((ele) => {
      const month = Math.floor(parseInt(ele.pickedDate.split("-")[1]));
      return month === selectedMonth;
    });
    const splitArrayOfInvest = arrayOfInvest.filter((ele) => {
      const month = Math.floor(parseInt(ele.pickedDate.split("-")[1]));
      return month === selectedMonth;
    });
    setFilteredInvestArray(splitArrayOfInvest);
  }, []);



  // -------------- on intial render  - main screen ----------------

  useEffect(() => {
    setActiveScreen(0);
  }, []);

  return (
    <div className="max-w-sm p-3">
      {activeScreen === 0 ? (
        <MainPage
          setNeedsWantsScreen={() => setActiveScreen(1)}
          setInvestmentsScreen={() => setActiveScreen(2)}
          incomeForm={incomeForm}
        />
      ) : activeScreen === 1 ? (
        <NeedsWants
          goToHome={() => setActiveScreen(0)}
          needsForm={needsForm}
          initialAmount={splitAmounts.nwFromHome}
          needsWantsTotalListSum={needsWantsTotalListSum}
          arrayOfNeeds={arrayOfNeeds}
          filteredNeedsArray={filteredNeedsArray}
          deleteNeedsFromList={deleteNeedsFromList}
          selectedMonth={selectedMonth}
          handleMonthFilter={handleMonthFilter}
        />
      ) : activeScreen === 2 ? (
        <Investments
          goToHome={() => setActiveScreen(0)}
          investForm={investForm}
          initialAmount={splitAmounts.invFromHome}
          investTotalListSum={investTotalListSum}
          arrayOfInvest={arrayOfInvest}
          filteredInvestArray={filteredInvestArray}
          deleteInvestFromList={deleteInvestFromList}
          selectedMonth={selectedMonth}
          handleMonthFilter={handleMonthFilter}
        />
      ) : (
        <>Error page</>
      )}
    </div>
  );
};

export default Main;
