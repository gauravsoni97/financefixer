import React, { useEffect, useState } from "react";
import FirstPage from "./FirstPage";
import NeedsWantsForm from "./NeedsWantsForm";
import NeedsWantsTransactions from "./NeedsWantsTransactions";

const Main = () => {
  const [inputAmount, setInputAmount] = useState("");
  const [screen, setScreen] = useState(0);
useEffect(() => {
 setScreen(0)
}, [])

  return (
    <div>
      {screen === 0 ? (
        <FirstPage setInputAmount={setInputAmount}  goToNeedsWantsForm={()=>setScreen(1)}/>
      ) : screen === 1 ? (
        <NeedsWantsForm inputAmount={inputAmount} goToHome={()=>setScreen(0)} />
      ) : (
        <NeedsWantsTransactions />
      )}
    </div>
  );
};

export default Main;