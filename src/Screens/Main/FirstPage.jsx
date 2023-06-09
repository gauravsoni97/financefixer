import React, { useState } from "react";

const FirstPage = ({ setInputAmount, goToNeedsWantsForm }) => {
  const [inputAmountFirst, setInputAmountFirst] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputAmount(inputAmountFirst);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
      </button>
    </div>
  );
};

export default FirstPage;
