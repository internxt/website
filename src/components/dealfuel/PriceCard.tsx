/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
import { getImage } from '@/lib/getImage';

const PriceCard = ({ planType, storage, price, cta, country, popular }) => {
  const currency = () => {
    switch (country) {
      case 'US':
        return '$';
      case 'GB':
        return '£';
      default:
        return '€';
    }
  };

  const contentText = require(`../../assets/lang/en/priceCard.json`);

  return (
    <div
      className={`priceCard card ${
        popular ? 'border-2 border-primary  bg-blue-60 shadow-lg ring-2 ring-blue-60' : ''
      } m-2 flex max-w-xs flex-shrink-0 flex-grow-0 flex-col overflow-hidden rounded-2xl sm:m-4`}
    >
      <div
        className={`mostPopular ${
          popular ? '' : 'hidden'
        } flex flex-col items-center justify-center py-2 text-xs font-semibold text-white`}
      >
        {contentText.mostPopularPlan}
      </div>

      <div className={`info flex flex-col items-center justify-center bg-white p-6 `}>
        <div
          className={`storage flex max-w-min flex-row whitespace-nowrap rounded-full ${
            popular ? 'text-primary' : 'text-gray-50'
          } bg-neutral-20 px-4 py-1 pb-0.5 font-semibold`}
        >
          <p>{storage}</p>
        </div>

        <div className={`planPrice flex flex-col items-center justify-center p-5`}>
          <div
            className={`priceBreakdown flex flex-col items-center
            `}
          >
            <p className={`flex flex-row items-start space-x-0.5 font-semibold text-black`}>
              <span className={`currency ${price <= 0 ? 'hidden' : ''}`}>{currency()}</span>
              <span className="price text-4xl font-semibold">{price}</span>
            </p>
            <p className="pt-2 text-xs font-normal text-gray-50">{contentText.billingFrequencyLabel.lifetime}</p>
          </div>
        </div>

        <div
          // eslint-disable-next-line no-unused-expressions
          id={storage}
          className="flex w-full flex-row"
        >
          <div className="subscribePlan flex w-full origin-center transform cursor-pointer select-none items-center justify-center rounded-lg border border-transparent bg-blue-60 px-6 py-2  text-lg font-medium text-white transition-all duration-75 hover:bg-primary-dark focus:bg-blue-70 focus:outline-none focus:ring-2 focus:ring-blue-20 focus:ring-offset-2 active:translate-y-0.5 active:bg-blue-70 sm:text-base">
            <p className={`${price <= 0 ? 'hidden' : ''} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>
              {contentText.redeemCode}
            </p>

            <p className={`${price <= 0 ? '' : 'hidden'} ${planType.toLowerCase() === 'individual' ? '' : 'hidden'}`}>
              {contentText.cta.signUpNow}
            </p>

            <p className={`${planType.toLowerCase() === 'individual' ? 'hidden' : ''}`}>{contentText.cta.getStarted}</p>
          </div>
        </div>
      </div>

      <div className="featureList flex flex-col border-t border-neutral-20 bg-neutral-10 p-6 text-neutral-500">
        <div className="flex flex-col space-y-2 text-sm">
          <div className="flex flex-row items-start space-x-2">
            <img
              loading="lazy"
              className="mt-0.5 translate-y-px transform select-none"
              src={getImage('/icons/checkPrimary.svg')}
              draggable="false"
              alt="check icon"
            />

            <span>{contentText.features.encryptedFiles}</span>
          </div>

          <div className="flex flex-row items-start space-x-2">
            <img
              loading="lazy"
              className="mt-0.5 translate-y-px transform select-none"
              src={getImage('/icons/checkPrimary.svg')}
              draggable="false"
              alt="check icon"
            />

            <span>{contentText.features.accessFromAnywhere}</span>
          </div>

          <div className="flex flex-row items-start space-x-2">
            <img
              loading="lazy"
              className="mt-0.5 translate-y-px transform select-none"
              src={getImage('/icons/checkPrimary.svg')}
              draggable="false"
              alt="check icon"
            />

            <span>{contentText.features.allServices}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
