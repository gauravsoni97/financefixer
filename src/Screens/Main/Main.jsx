import React, { useEffect, useState } from "react";
import FirstPage from "./FirstPageComponents/FirstPage";
import NeedsWantsForm from "./NeedsWants/NeedsWantsForm";
import NeedsWantsTransactions from "./NeedsWants/NeedsWantsTransactions";

const Main = () => {
  const [screen, setScreen] = useState(0);
  const [inputAmount, setInputAmount] = useState("");


  const needsWantsAmount = Math.round(inputAmount * 0.7);


  useEffect(() => {
    setScreen(0);
  }, []);

  return (
    <div className="max-w-sm ">
      {screen === 0 ? (
        <FirstPage
          setInputAmount={setInputAmount}
          goToNeedsWantsForm={() => setScreen(1)}
        />
      ) : screen === 1 ? (
        <NeedsWantsForm
          needsWantsAmount={needsWantsAmount}
          goToHome={() => setScreen(0)}
        />
      ) : (
        <NeedsWantsTransactions />
      )}
    </div>
  );
};

export default Main;
