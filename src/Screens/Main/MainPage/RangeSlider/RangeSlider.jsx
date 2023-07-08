import React, { useContext, useState } from "react";
import {
  SliderContext,
  useSliderRangeContext,
} from "../../../../context/SliderRangeValue";

const RangeSlider = () => {
  const contextValue = useSliderRangeContext();
  const { sliderValue, setSliderValue } = contextValue || {};

  const [rangeInputValue, setRangeInputValue] = useState(70);

  const handleSliderValue = (e) => {
    setRangeInputValue(e.target.value);
    setSliderValue(e.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <span className="text-sm">Needs + Wants</span>
        <span className="text-sm">Investments</span>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div>{rangeInputValue}%</div>
        <input
          style={{ width: "85%" }}
          type="range"
          min={10}
          max={100}
          step={5}
          value={rangeInputValue}
          onChange={handleSliderValue}
        />
        <div>{100 - rangeInputValue}%</div>
      </div>
    </>
  );
};

export default RangeSlider;
