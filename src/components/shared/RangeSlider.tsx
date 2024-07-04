import { Slider } from '@mui/material';
import { ReactNode } from 'react';

interface PricingRangeSliderProps {
  max: number;
  valueLabelFormat: (value: number, index: number) => ReactNode;
  rangeItems: string[];
}

export const RangeSlider = ({ max, rangeItems, valueLabelFormat }: PricingRangeSliderProps) => {
  return (
    <div className="flex w-full max-w-[840px] flex-col">
      <div className="inset-0 flex w-full items-center justify-between">
        {rangeItems.map((item) => (
          <span key={item} className="font-medium text-gray-100">
            {item}
          </span>
        ))}
      </div>
      <Slider
        aria-label="Storage"
        defaultValue={0}
        valueLabelDisplay="auto"
        valueLabelFormat={valueLabelFormat}
        step={1}
        min={0}
        max={max}
      />
    </div>
  );
};
