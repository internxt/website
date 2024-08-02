import { CloudObjectStorageText } from '@/assets/types/cloud-object-storage';
import { useState } from 'react';
import { RangeSlider } from '../shared/RangeSlider';

interface HowMuchYouNeedSectionProps {
  textContent: CloudObjectStorageText['HowMuchYouNeedSection'];
}

export const HowMuchYouNeedSection = ({ textContent }: HowMuchYouNeedSectionProps): JSX.Element => {
  const [monthlyPrice, setMonthlyPrice] = useState<string>('3,495');
  const [yearlyPrice, setYearlyPrice] = useState<string>('41,940');
  const [storageAmountValue, setStorageAmountValue] = useState<number>(500);
  const [percentDownloadValue, setPercentDownloadValue] = useState<number>(2);

  function storageAmountValueLabelFormat(itemValue: number) {
    setStorageAmountValue(itemValue);
    return storageAmountValue;
  }

  function percentDownloadValueLabelFormat(itemValue: number) {
    setPercentDownloadValue(itemValue);
    return percentDownloadValue;
  }

  return (
    <section className="overflow-hidden bg-gray-1 py-20 px-5">
      <div className="flex flex-col items-center gap-16">
        <div className="flex max-w-[774px] flex-col items-center gap-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
          <h3 className="text-xl text-gray-80">{textContent.description}</h3>
        </div>

        {/* Cards */}
        <div className="flex flex-row gap-16">
          <div className="flex w-full max-w-[471px] flex-col gap-2">
            {/* Pricing */}
            <div className="flex w-full flex-col gap-4 rounded-2xl bg-white p-9">
              <p className="font-medium text-gray-100">{textContent['pay-as-you-go']}</p>
              {/* Monthly price */}
              <div className="flex flex-row items-end gap-2">
                <p className="text-5xl font-semibold text-primary">${monthlyPrice}</p>
                <p className="text-3xl text-gray-50">{textContent.perMonth}</p>
              </div>
              {/* Yearly price */}
              <div className="flex flex-row items-end gap-2">
                <p className="text-5xl font-semibold text-primary">${yearlyPrice}</p>
                <p className="text-3xl text-gray-50">{textContent.perMonth}</p>
              </div>
            </div>

            {/* Sliders */}
            <div className="flex w-full flex-col gap-4 rounded-2xl bg-white p-9">
              <p className="font-medium text-gray-100">{textContent.storageAmount}</p>
              {/* Storage amount slider */}
              <div className="flex flex-row items-end gap-2">
                <RangeSlider max={1000} rangeItems={[]} valueLabelFormat={storageAmountValueLabelFormat} />
                <div className="w-full max-w-[83px] rounded-lg border border-gray-10 px-4 py-2.5">
                  <p className="font-medium text-gray-100">{storageAmountValue}</p>
                </div>
              </div>
              {/* Yearly price */}
              <div className="flex flex-row items-end gap-2">
                <RangeSlider max={1000} rangeItems={[]} valueLabelFormat={percentDownloadValueLabelFormat} />
                <div className="w-full max-w-[83px] rounded-lg border border-gray-10 px-4 py-2.5">
                  <p className="font-medium text-gray-100">{percentDownloadValue}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Graphs (Comparison) */}
        </div>
      </div>
    </section>
  );
};
