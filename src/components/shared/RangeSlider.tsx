import { Slider } from '@mui/material';
import { ReactNode } from 'react';

interface PricingRangeSliderProps {
  max: number;
  min?: number;
  valueLabelFormat: (value: number, index: number) => ReactNode;
  rangeItems: string[];
}

export const RangeSlider = ({ max, min = 0, rangeItems, valueLabelFormat }: PricingRangeSliderProps) => {
  return (
    <div className="flex w-full max-w-[840px] flex-col gap-2">
      <div className="inset-0 flex w-full items-center justify-between">
        {rangeItems.map((item) => (
          <span key={item} className="font-medium text-gray-100">
            {item}
          </span>
        ))}
      </div>
      <Slider
        aria-label="Storage"
        className="text-primary"
        defaultValue={0}
        valueLabelDisplay="auto"
        valueLabelFormat={valueLabelFormat}
        step={1}
        min={min}
        max={max}
      />
    </div>
  );
};
