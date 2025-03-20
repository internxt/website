import { useState, useEffect } from 'react';
import { RangeSlider } from '../shared/RangeSlider';
import { CloudObjectStorageText } from '@/assets/types/cloud-object-storage';
import Image from 'next/image';

interface HowMuchYouNeedSectionProps {
  textContent: CloudObjectStorageText['HowMuchYouNeedSection'];
}

const GraphComponent = ({
  price,
  priceLabel,
  background,
  activeBackground,
  maxPrice,
  isBlueLabel,
  srcImg,
  altImg,
}: {
  price: number;
  priceLabel: number;
  background: string;
  activeBackground: string;
  maxPrice: number;
  isBlueLabel?: boolean;
  srcImg?: string;
  altImg?: string;
}): JSX.Element => {
  return (
    <div
      className={`relative flex h-64 w-20 flex-col items-center justify-end gap-5 rounded-lg lg:h-full ${background}`}
    >
      <div
        className={`${
          isBlueLabel ? 'bg-primary text-white' : 'bg-gray-5 text-gray-100'
        } z-40 flex w-screen max-w-[113px] items-center justify-center rounded-full px-3 py-1 text-sm font-semibold`}
      >
        <p className="lg:whitespace-nowrap">€{Math.round(Number(priceLabel) * 12).toLocaleString('en')}/yr</p>
      </div>
      <div
        className={`flex w-full rounded-lg ${activeBackground} items-end justify-center pb-4`}
        style={{
          height: `${(price / maxPrice) * 100}%`,
        }}
      >
        {srcImg && altImg ? <Image src={srcImg} alt={altImg} width={40} height={40} draggable={false} /> : undefined}
      </div>
    </div>
  );
};

export const HowMuchYouNeedSection = ({ textContent }: HowMuchYouNeedSectionProps): JSX.Element => {
  const [storageAmountValue, setStorageAmountValue] = useState<number>(500);
  const [percentDownloadValue, setPercentDownloadValue] = useState<number>(2);

  const [costs, setCosts] = useState<Record<string, any>>({
    internxt: 0,
    azure: {
      cost: 0,
      difference: 0,
    },
    aws: {
      cost: 0,
      difference: 0,
    },
    google: {
      cost: 0,
      difference: 0,
    },
  });

  const calculateCosts = () => {
    const tbDownloaded = storageAmountValue * (percentDownloadValue / 100);

    const wasabiCost = 6.99 * storageAmountValue;
    const azureCost = 19.25 * storageAmountValue + 0.082 * 1024 * tbDownloaded;
    const awsCost = 23.55 * storageAmountValue + 0.09 * 1024 * tbDownloaded;
    const googleCost = 23.55 * storageAmountValue + 0.12 * 1024 * tbDownloaded;

    const calculateDifference = (providerCost) => ((providerCost - wasabiCost) / wasabiCost) * 100;

    setCosts({
      internxt: {
        cost: wasabiCost,
      },
      azure: {
        cost: azureCost,
        difference: calculateDifference(azureCost),
      },
      aws: {
        cost: awsCost,
        difference: calculateDifference(awsCost),
      },
      google: {
        cost: googleCost,
        difference: calculateDifference(googleCost),
      },
    });
  };

  useEffect(() => {
    calculateCosts();
  }, [storageAmountValue, percentDownloadValue]);

  const maxPrice = Math.max(costs.internxt.cost, costs.azure.cost, costs.aws.cost, costs.google.cost);

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
          <h2 className="text-4xl font-semibold text-gray-100 lg:text-4xl lg:text-5xl">{textContent.title}</h2>
          <h3 className="text-xl text-gray-80">{textContent.description}</h3>
        </div>

        {/* Cards */}
        <div className="flex h-full w-full max-w-[1115px] flex-col items-stretch gap-16 md:flex-row">
          <div className="flex w-full flex-col gap-2">
            {/* Pricing */}
            <div className="flex w-full flex-col gap-4 rounded-2xl bg-white p-9">
              <p className="font-medium text-gray-100">{textContent['pay-as-you-go']}</p>
              {/* Monthly price */}
              <div className="flex flex-row items-end gap-2">
                <p className="text-4xl font-semibold text-primary lg:text-5xl">
                  €{Math.round((costs?.internxt.cost * 12) / 12).toLocaleString('en')}
                </p>
                <p className="text-3xl text-gray-50">{textContent.perMonth}</p>
              </div>
              {/* Yearly price */}
              <div className="flex flex-row items-end gap-2">
                <p className="text-4xl font-semibold text-primary lg:text-5xl">
                  €{Math.round(costs?.internxt.cost * 12).toLocaleString('en')}
                </p>
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
              <p className="font-medium text-gray-100">{textContent.percentDownloadPerMonth}</p>
              <div className="flex flex-row items-end gap-4">
                <RangeSlider min={1} max={100} rangeItems={[]} valueLabelFormat={percentDownloadValueLabelFormat} />
                <div className="flex w-full max-w-[90px] items-center justify-center rounded-lg border border-gray-10 px-4 py-2.5">
                  <p className="font-medium text-gray-100">{percentDownloadValue}%</p>
                </div>
              </div>
            </div>
          </div>
          {/* Graphs (Comparison) */}
          <div className="flex w-full flex-col rounded-2xl bg-white px-9 py-10">
            <div className="flex h-full flex-row flex-wrap justify-center gap-12">
              <div className="flex flex-col items-center gap-2">
                <GraphComponent
                  priceLabel={costs?.internxt.cost}
                  price={costs?.internxt.cost}
                  activeBackground="bg-primary"
                  background="bg-primary/7"
                  isBlueLabel
                  maxPrice={maxPrice}
                />
                <p className="text-lg font-bold">{textContent.companies[0]}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <GraphComponent
                  priceLabel={costs?.azure.cost}
                  price={(costs?.internxt.cost * costs?.azure.difference) / 100}
                  activeBackground="bg-yellow"
                  background="bg-yellow/6"
                  maxPrice={maxPrice}
                />
                <p className="text-lg font-medium">{textContent.companies[1]}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <GraphComponent
                  priceLabel={costs?.aws.cost}
                  price={(costs?.internxt.cost * costs?.aws.difference) / 100}
                  activeBackground="bg-orange"
                  background="bg-orange/6"
                  maxPrice={maxPrice}
                />
                <p className="text-lg font-medium">{textContent.companies[2]}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <GraphComponent
                  priceLabel={costs?.google.cost}
                  price={(costs?.internxt.cost * costs?.google.difference) / 100}
                  activeBackground="bg-red-dark"
                  background="bg-red/6"
                  maxPrice={maxPrice}
                />
                <p className="text-lg font-medium">{textContent.companies[3]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
