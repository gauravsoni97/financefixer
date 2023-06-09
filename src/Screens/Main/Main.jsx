import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import MainPage from "./MainPage/MainPage";
import NeedsWants from "./NeedsWants/NeedsWants";
import Investments from "./Investments/Investments";
import { useSliderRangeContext } from "../../context/SliderRangeValue";

const Main = () => {
  const contextValue = useSliderRangeContext();
  const { sliderValue } = contextValue || {};
  const [showHeroForm, setShowHeroForm] = useState(false);

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
        nwFromHome: (values.income * sliderValue) / 100,
        invFromHome: (values.income * (100 - sliderValue)) / 100,
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

  // --------------------------------------- Balance Check ----------------

  let needsWantsTotalListSum = arrayOfNeeds
    .map((obj) => obj.price)
    .reduce((acc, cur) => acc + cur, 0);

  let investTotalListSum = arrayOfInvest
    .map((obj) => obj.price)
    .reduce((acc, cur) => acc + cur, 0);

  const totalAvailableBalance =
    splitAmounts.nwFromHome + splitAmounts.invFromHome;
  const totalUsedBalance = needsWantsTotalListSum + investTotalListSum;

  // --------------------------------------- Delete List Items ----------------
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

 
  useEffect(() => {
    if (totalAvailableBalance - totalUsedBalance === 0) {
      setShowHeroForm(true);
    } else {
      setShowHeroForm(false);
    }
  }, [splitAmounts]);

  return (
    <div className="p-3 max-w-sm max-h-screen mx-auto">
      {activeScreen === 0 ? (
        <MainPage
          totalAvailableBalance={totalAvailableBalance}
          totalUsedBalance={totalUsedBalance}
          setNeedsWantsScreen={() => setActiveScreen(1)}
          setInvestmentsScreen={() => setActiveScreen(2)}
          incomeForm={incomeForm}
          showHeroForm={showHeroForm}
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
        <>Loading ...</>
      )}
    </div>
  );
};

export default Main;
