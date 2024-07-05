import { useState } from 'react';

import Header from '../../shared/Header';
import Button from '@/components/shared/Button';
import { RangeSlider } from '../../shared/RangeSlider';

interface RangeSliderHeroSectionProps {
  textContent: Record<string, any>;
  onButtonClick: (valueLabel: string) => void;
}

const PRICING_RANGE_SLIDER_VALUES = ['50B', '1TB', '10TB'];

const STORAGE_RANGE = ['50GB', '100GB', '200GB', '500GB', '1TB', '2TB', '4TB', '8TB', '10TB'];

export const RangeSliderHeroSection = ({ textContent, onButtonClick }: RangeSliderHeroSectionProps) => {
  const [valueLabel, setValueLabel] = useState<string>();

  function valueLabelFormat(itemValue: number) {
    setValueLabel(STORAGE_RANGE[itemValue]);
    return STORAGE_RANGE[itemValue];
  }

  const handleOnButtonClick = () => {
    onButtonClick(valueLabel as string);
  };

  return (
    <section className="overflow-hidden py-20 px-5">
      <div className="flex flex-col items-center gap-10 pt-10">
        <div className="flex max-w-[840px] flex-col items-center gap-4 text-center">
          <Header>{textContent.title}</Header>
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
        <div className="flex w-full flex-col items-center rounded-2xl border-4 border-primary/7 bg-primary/2 px-10 pt-10 pb-7 lg:w-max">
          <div className="flex w-full max-w-[700px] flex-col gap-5 lg:w-screen">
            <div className="flex w-full flex-col items-end gap-10 lg:flex-row">
              <div className="flex w-full items-center justify-center rounded-lg border border-gray-10 bg-white py-2.5 lg:w-screen lg:max-w-[85px]">
                <p className="font-medium text-gray-100">{valueLabel}</p>
              </div>
              <RangeSlider
                max={STORAGE_RANGE.length - 1}
                valueLabelFormat={valueLabelFormat}
                rangeItems={PRICING_RANGE_SLIDER_VALUES}
              />
            </div>
            <div className="flex flex-col items-center">
              <Button text={textContent.cta} onClick={handleOnButtonClick} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
