import React, { useState } from "react";
import HeroProfile from "./FirstPageComponents/HeroProfile";
import HeroForm from "./FirstPageComponents/HeroForm";
import TotalBalance from "./FirstPageComponents/TotalBalance";
import RedirectToPage from "./FirstPageComponents/RedirectToPage";

const FirstPage = ({ setInputAmount, goToNeedsWantsForm }) => {
  const [inputAmountFirst, setInputAmountFirst] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setInputAmount(inputAmountFirst);
  // };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input
          className="bg-gray-800"
          type="number"
          value={inputAmountFirst}
          onChange={(e) => setInputAmountFirst(e.target.value)}
        />{" "}
        <br />
        <button type="submit"> add Amount</button>
      </form>

      <button onClick={() => goToNeedsWantsForm()}>
        Go to Needs Wants Form
      </button> */}

      {/* ------------------------------------------------------------------------ */}
      {/* ------------- NEW  UI ----------------  */}
      {/* ------------------------------------------------------------------------ */}

      <HeroProfile />
      <HeroForm />
      <TotalBalance />
      <RedirectToPage />
    </div>
  );
};

export default FirstPage;
