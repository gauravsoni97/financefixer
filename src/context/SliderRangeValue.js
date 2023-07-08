import React, { useContext, useState, createContext } from "react";

const SliderRangeValue = createContext();

export const SliderContext = ({ children }) => {
  const [sliderValue, setSliderValue] = useState(70);

  return (
    <SliderRangeValue.Provider value={{ setSliderValue, sliderValue }}>
      {children}
    </SliderRangeValue.Provider>
  );
};

export const useSliderRangeContext = () => {
  return useContext(SliderRangeValue);
};
