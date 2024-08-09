import { Check } from '@phosphor-icons/react';
import { checkout } from '@/lib/auth';

const currencyValue = {
  '€': 'eur',
  $: 'usd',
};

const PriceCard = ({
  plan,
  price,
  currency,
  annualPrice,
  billedAnnually,
  cta,
  info,
  month,
  isPopular,
  mostPopular,
}) => {
  const features = [
    {
      feat: info.info1,
    },
    {
      feat: info.info2,
    },
    {
      feat: info.info3,
    },
    {
      feat: info.info4,
    },
  ];

  const getFeatures = () => {
    return features.map((feature, index) => {
      return (
        <div className={'flex flex-row items-start justify-start space-x-2'} key={index}>
          <Check weight="bold" size={18} className="my-px" />
          <span className={`${index === 0 ? 'font-semibold' : ''}`}>{feature.feat}</span>
        </div>
      );
    });
  };

  // border border-primary if it's needed add it to the className (it's a border for the popular plan)

  return (
    <div
      className={`${
        isPopular && 'ring-6 ring-primary ring-opacity-10'
      } m-3 flex w-80 flex-col space-y-4 rounded-xl bg-white p-6 sm:space-y-6 sm:p-8 `}
    >
      <div className="flex flex-row items-center justify-start space-x-2">
        {/* Storage / Plan */}
        <h2 className="text-4xl font-medium text-primary">{plan}</h2>
        {isPopular && (
          <h3 className="flex h-8 flex-row items-center rounded-full bg-primary bg-opacity-10 px-4 text-base font-medium text-primary sm:h-6 sm:px-3 sm:text-xs">
            {mostPopular}
          </h3>
        )}
      </div>

      {/* Separator */}
      <div className="h-px w-full bg-gray-10" />

      {/* Prices and billing */}
      <div className="flex flex-col">
        <span className="text-2xl font-medium">
          {price} {currency}
          {month}
        </span>
        <span className="text-gray-50">
          {annualPrice}
          {currency} {billedAnnually}
        </span>
      </div>

      {/* Checkout button */}
      <button
        type="button"
        onClick={() => {
          checkout({ planId: cta[1], planType: 'individual', currency: currencyValue[currency] });
        }}
        className="button-primary"
      >
        Buy {plan}
      </button>

      {/* Plan features */}
      <div className="hidden flex-col items-start justify-start space-y-1.5 text-sm sm:flex">{getFeatures()}</div>
    </div>
  );
};

export default PriceCard;
