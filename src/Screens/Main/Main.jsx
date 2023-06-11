import React, { useEffect, useState } from "react";
import FirstPage from "./FirstPageComponents/FirstPage";
import NWIForm from "./NWIForm/NWIForm";

const Main = () => {
  const [screen, setScreen] = useState(0);
  const [inputAmount, setInputAmount] = useState(null);


  const needsWantsAmount = Math.round(inputAmount * 0.7);


  console.log(needsWantsAmount);

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
        <NWIForm
          needsWantsAmount={needsWantsAmount}
          goToHome={() => setScreen(0)}
        />
      ) : (
       <>Error Page</>
      )}
    </div>
  );
};

export default Main;
