import React, { useContext, useState } from "react";
import {
  SliderContext,
  useSliderRangeContext,
} from "../../../../context/SliderRangeValue";

const RangeSlider = () => {
  const contextValue = useSliderRangeContext();
  const { sliderValue, setSliderValue } = contextValue || {};

  const [rangeInputValue, setRangeInputValue] = useState(0);

  const handleSliderValue = (e) => {
    setRangeInputValue(e.target.value);
    setSliderValue(e.target.value);
  };


  console.log(sliderValue);

  return (
    <div className="flex items-center justify-between">
      <input
        style={{ width: "85%" }}
        type="range"
        min={10}
        max={100}
        step={5}
        value={rangeInputValue}
        onChange={handleSliderValue}
      />
      <div>{sliderValue}%</div>
    </div>
  );
};

export default RangeSlider;
