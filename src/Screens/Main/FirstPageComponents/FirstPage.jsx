import React, { useState } from "react";
import HeroProfile from "./HeroProfile";
import HeroForm from "./HeroForm";
import TotalBalance from "./TotalBalance";
import RedirectToPage from "./RedirectToPage";

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
