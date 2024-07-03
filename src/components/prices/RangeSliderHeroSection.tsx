import { useState } from 'react';
import Header from '../shared/Header';
import { Slider } from '@mui/material';
import Button from '../shared/Button';

interface RangeSliderHeroSectionProps {
  textContent: Record<string, any>;
}

const STORAGE_RANGE = ['50GB', '100GB', '200GB', '500GB', '1TB', '2TB', '4TB', '8TB', '10TB'];

const PricingRangeSlider = () => {
  const [valueLabel, setValueLabel] = useState<string>();

  function valueLabelFormat(itemValue: number) {
    setValueLabel(STORAGE_RANGE[itemValue]);
    return STORAGE_RANGE[itemValue];
  }

  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border-4 border-primary/7 bg-primary/2 p-10">
      <div className="flex flex-row items-center gap-6">
        <div className="flex w-screen max-w-[700px] flex-col gap-2">
          <div className="flex flex-row items-end gap-10">
            <div className="flex h-full w-max flex-col items-center justify-center">
              <div className="py- flex rounded-lg border border-gray-10 bg-white px-4 py-2.5">
                <p className="font-medium text-gray-100">{valueLabel}</p>
              </div>
            </div>
            <div className="flex w-full flex-col">
              <div className="inset-0 flex w-full items-center justify-between font-medium text-gray-100">
                <span>50GB</span>
                <span>1TB</span>
                <span>10TB</span>
              </div>
              <Slider
                aria-label="Storage"
                defaultValue={0}
                valueLabelDisplay="auto"
                valueLabelFormat={valueLabelFormat}
                step={1}
                min={0}
                max={STORAGE_RANGE.length - 1}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Button text={'Calculate storage'} onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const RangeSliderHeroSection = ({ textContent }: RangeSliderHeroSectionProps) => {
  return (
    <section className="overflow-hidden py-20 px-5">
      <div className="flex flex-col items-center gap-10 pt-10">
        <div className="flex max-w-[840px] flex-col items-center gap-4 text-center">
          <Header>{textContent.title}</Header>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        <PricingRangeSlider />
      </div>
    </section>
  );
};
