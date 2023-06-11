import React from "react";

const NeedsWantsForm = ({ needsWantsAmount, goToHome }) => {
  return (
    <div>
      <button onClick={() => goToHome()}> Go Back</button>
      NeedsWantsForm
      <br />
      This is input amoutn {needsWantsAmount}
    </div>
  );
};

export default NeedsWantsForm;
