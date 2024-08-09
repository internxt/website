import { useState, useEffect } from 'react';
import { RangeSlider } from '../shared/RangeSlider';
import { useDebounce } from '@/hooks/useDebounce';
import { CloudObjectStorageText } from '@/assets/types/cloud-object-storage';

interface HowMuchYouNeedSectionProps {
  textContent: CloudObjectStorageText['HowMuchYouNeedSection'];
}

const INXT_PRICE_PER_TB = 6.99;
const MICROSOFT_PRICE_PER_TB = 23;
const AMAZON_PRICE_PER_TB = 21;
const GOOGLE_PRICE_PER_TB = 23;

const GraphComponent = ({
  price,
  priceLabel,
  background,
  activeBackground,
  maxPrice,
}: {
  price: number;
  priceLabel: number;
  background: string;
  activeBackground: string;
  maxPrice: number;
}): JSX.Element => {
  return (
    <div className={`flex h-full w-20 flex-col items-center justify-end overflow-y-hidden rounded-lg ${background}`}>
      <p>{priceLabel.toFixed(2)}$/per year</p>
      <div
        className={`flex w-full rounded-lg ${activeBackground}`}
        style={{
          height: `${(price / maxPrice) * 100}%`,
        }}
      />
    </div>
  );
};

type PricesProps = 'internxt' | 'microsoft' | 'amazon' | 'google';

export const HowMuchYouNeedSection = ({ textContent }: HowMuchYouNeedSectionProps): JSX.Element => {
  const [storageAmountValue, setStorageAmountValue] = useState<number>(500);
  const [percentDownloadValue, setPercentDownloadValue] = useState<number>(2);
  const [internxtGraphValue, setInternxtGraphValue] = useState<number>(0);
  const [microsoftGraphValue, setMicrosoftGraphValue] = useState<number>(0);
  const [amazonGraphValue, setAmazonGraphValue] = useState<number>(0);
  const [googleGraphValue, setGoogleGraphValue] = useState<number>(0);
  const [prices, setPrices] = useState<Record<PricesProps, number>>({
    internxt: 0,
    amazon: 0,
    google: 0,
    microsoft: 0,
  });

  const debouncedStorageAmountValue = useDebounce(storageAmountValue, 500);
  const debouncedPercentDownloadValue = useDebounce(percentDownloadValue, 500);

  useEffect(() => {
    const updatedInternxtPrice = debouncedStorageAmountValue * INXT_PRICE_PER_TB * 12;
    setPrices({
      internxt: updatedInternxtPrice,
      microsoft: debouncedStorageAmountValue * MICROSOFT_PRICE_PER_TB * 12,
      amazon: debouncedStorageAmountValue * AMAZON_PRICE_PER_TB * 12,
      google: debouncedStorageAmountValue * GOOGLE_PRICE_PER_TB * 12,
    });

    if (debouncedStorageAmountValue < 1500) return;

    setInternxtGraphValue(updatedInternxtPrice);
    setMicrosoftGraphValue(updatedInternxtPrice * 2);
    setAmazonGraphValue(updatedInternxtPrice * 4);
    setGoogleGraphValue(updatedInternxtPrice * 4);
  }, [debouncedStorageAmountValue, debouncedPercentDownloadValue]);

  const maxPrice = 2000000;

  function storageAmountValueLabelFormat(itemValue: number) {
    setStorageAmountValue(itemValue);
    return itemValue;
  }

  function percentDownloadValueLabelFormat(percentage: number) {
    setPercentDownloadValue(percentage);
    return percentage;
  }

  return (
    <section className="overflow-hidden bg-gray-1 px-5 py-20">
      <div className="flex w-full flex-col items-center gap-16">
        <div className="flex max-w-[774px] flex-col items-center gap-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
          <h3 className="text-xl text-gray-80">{textContent.description}</h3>
        </div>

        {/* Cards */}
        <div className="flex h-full w-full max-w-[1115px] flex-row items-stretch gap-16">
          <div className="flex w-full flex-col gap-2">
            {/* Pricing */}
            <div className="flex w-full flex-col gap-4 rounded-2xl bg-white p-9">
              <p className="font-medium text-gray-100">{textContent['pay-as-you-go']}</p>
              {/* Monthly price */}
              <div className="flex flex-row items-end gap-2">
                <p className="text-5xl font-semibold text-primary">${(internxtGraphValue / 12).toFixed(0)}</p>
                <p className="text-3xl text-gray-50">{textContent.perMonth}</p>
              </div>
              {/* Yearly price */}
              <div className="flex flex-row items-end gap-2">
                <p className="text-5xl font-semibold text-primary">${internxtGraphValue.toFixed(0)}</p>
                <p className="text-3xl text-gray-50">{textContent.perYear}</p>
              </div>
            </div>

            {/* Sliders */}
            <div className="flex w-full flex-col gap-4 rounded-2xl bg-white p-9">
              <p className="font-medium text-gray-100">{textContent.storageAmount}</p>
              {/* Storage amount slider */}
              <div className="flex flex-row items-end gap-4">
                <RangeSlider min={1} max={10240} rangeItems={[]} valueLabelFormat={storageAmountValueLabelFormat} />
                <div className="flex w-full max-w-[90px] items-center justify-center rounded-lg border border-gray-10 px-4 py-2.5">
                  <p className="font-medium text-gray-100">{storageAmountValue}TB</p>
                </div>
              </div>
              {/* Percent download slider */}
              <div className="flex flex-row items-end gap-4">
                <RangeSlider max={100} rangeItems={[]} valueLabelFormat={percentDownloadValueLabelFormat} />
                <div className="flex w-full max-w-[90px] items-center justify-center rounded-lg border border-gray-10 px-4 py-2.5">
                  <p className="font-medium text-gray-100">{percentDownloadValue}%</p>
                </div>
              </div>
            </div>
          </div>
          {/* Graphs (Comparison) */}
          <div className="flex w-full flex-col rounded-2xl bg-white px-9 py-10">
            <div className="flex h-full flex-row gap-12">
              <GraphComponent
                priceLabel={prices?.internxt}
                price={internxtGraphValue}
                activeBackground="bg-primary"
                background="bg-primary/7"
                maxPrice={maxPrice}
              />
              <GraphComponent
                priceLabel={prices?.microsoft}
                price={microsoftGraphValue}
                activeBackground="bg-yellow"
                background="bg-yellow/6"
                maxPrice={maxPrice}
              />
              <GraphComponent
                priceLabel={prices?.amazon}
                price={amazonGraphValue}
                activeBackground="bg-orange"
                background="bg-orange/6"
                maxPrice={maxPrice}
              />
              <GraphComponent
                priceLabel={prices?.google}
                price={googleGraphValue}
                activeBackground="bg-red-dark"
                background="bg-red/6"
                maxPrice={maxPrice}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
