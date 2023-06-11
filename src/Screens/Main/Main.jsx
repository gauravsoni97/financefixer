import React, { useEffect, useState } from "react";
import FirstPage from "./FirstPageComponents/FirstPage";
import NWIForm from "./NWIForm/NWIForm";
import { useFormik } from "formik";
import * as Yup from "yup";

const Main = () => {
  const [screen, setScreen] = useState(0);
  const [splitAmounts, setSplitAmounts] = useState({
    nwFromHome: 0,
    invFromHome: 0,
  });

  console.log(splitAmounts.nwFromHome, "needsWantFromHome");
  // ---------------------------------------------

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
      incomeForm.resetForm();
    },
  });

  useEffect(() => {
    setScreen(0);
  }, []);

  return (
    <div className="max-w-sm ">
      {screen === 0 ? (
        <FirstPage
          incomeForm={incomeForm}
          goToNeedsWantsForm={() => setScreen(1)}
        />
      ) : screen === 1 ? (
        <NWIForm splitAmounts={splitAmounts} goToHome={() => setScreen(0)} />
      ) : (
        <>Error Page</>
      )}
    </div>
  );
};

export default Main;
