import React from "react";

const NeedsWantsForm = ({ inputAmount, goToHome }) => {
  return (
    <div>
      <button onClick={() => goToHome()}> Go Back</button>
      NeedsWantsForm
      <br />
      This is input amoutn {inputAmount}
    </div>
  );
};

export default NeedsWantsForm;
