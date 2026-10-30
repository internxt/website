import { Check, HandCoins, Headset, Keyhole } from '@phosphor-icons/react';
import Link from 'next/link';

import { formatText } from '@/components/utils/format-text';
import { ChoosePlanSection as ChoosePlanSectionText, PlanCard } from '@/assets/types/test-ppc-leads';

interface ChoosePlanSectionProps {
  darkMode?: boolean;
  textContent: ChoosePlanSectionText;
  currency: string;
  minimumPrice: string;
  loadingCards?: boolean;
  getDealURL?: string;
  signUpURL?: string;
  sectionDetails?: string;
  topSeparationBar?: boolean;
}

const PriceSkeleton = ({  }: { darkMode?: boolean }) => (
  <span className="inline-block h-4 w-16 animate-pulse rounded bg-gray-10 dark:bg-gray-71 lg:h-5 lg:w-20" />
);

const PlanFeatures = ({ features }: { darkMode?: boolean; features: string[] }) => (
  <div className="flex flex-col gap-4">
    {features.map((feature) => (
      <div key={feature} className="flex flex-row items-start gap-3">
        <Check className="shrink-0 text-primary" weight="bold" size={24} />
        <p className="text-base font-normal leading-tight text-gray-55 dark:text-green-120">
          {feature}
        </p>
      </div>
    ))}
  </div>
);

const PlanHeader = ({
  darkMode = false,
  card,
  price,
  isLoading,
}: {
  darkMode?: boolean;
  card: PlanCard;
  price: string;
  isLoading?: boolean;
}) => (
  <div className="flex flex-col gap-2">
    <div className="flex flex-row items-center justify-between gap-2">
      <p className="text-base font-medium text-gray-100 dark:text-white-95">{card.label}</p>
      {card.badge && (
        <span className="flex items-center justify-center rounded-sm bg-neutral-37 dark:bg-purple-100 px-2 py-0.5 text-sm font-semibold text-primary">
          {card.badge}
        </span>
      )}
    </div>
    <div className="flex flex-row items-end gap-1">
      <p className="text-30 font-semibold leading-none text-gray-100 dark:text-white-95 lg:text-3xl">
        {card.storage}
      </p>
      <p className="pb-0.5 text-base font-normal text-gray-55 dark:text-green-120">
        {'· '}
        {isLoading ? <PriceSkeleton darkMode={darkMode} /> : price}
      </p>
    </div>
  </div>
);

export const ChoosePlanSection = ({
  darkMode = false,
  textContent,
  currency,
  minimumPrice,
  loadingCards = false,
  getDealURL = '/fb',
  signUpURL = '#heroSection',
  sectionDetails = 'bg-white dark:bg-gray-95 py-10 lg:py-20',
  topSeparationBar = true,
}: ChoosePlanSectionProps): JSX.Element => {
  const freePrice = formatText(textContent.freeCard.price, { currency });
  const premiumPrice = formatText(textContent.premiumCard.price, { currency, minimumPrice });

  const guarantees = [
    { icon: Headset, text: textContent.guarantees.premiumSupport },
    { icon: HandCoins, text: textContent.guarantees.moneyBack },
    { icon: Keyhole, text: textContent.guarantees.openSource },
  ];

  return (
    <section className={`relative flex w-full flex-col items-center overflow-hidden px-5 ${sectionDetails} dark:bg-gray-95`}>
      {topSeparationBar && (
        <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 dark:bg-gray-71 lg:left-32 lg:right-32" />
      )}
      <div className="flex w-full max-w-[1000px] flex-col items-center gap-10 lg:gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-30 font-semibold leading-tight text-gray-100 dark:text-white-95 lg:text-5xl">
            {textContent.title}
          </h2>
          <p className="text-base font-normal leading-tight text-gray-55 dark:text-green-120 lg:text-lg">
            {textContent.description}
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch justify-center gap-6 md:flex-row">
          <div className="flex w-full flex-col justify-between gap-8 rounded-16 border border-gray-10 bg-white dark:border-gray-71 dark:bg-gray-95 p-6 md:max-w-[420px] lg:p-8">
            <div className="flex flex-col gap-6">
              <PlanHeader card={textContent.freeCard} price={freePrice} darkMode={darkMode} />
              <PlanFeatures features={textContent.freeCard.features} darkMode={darkMode} />
            </div>
            <Link
              href={signUpURL}
              className="flex items-center justify-center rounded-lg border border-primary bg-white dark:bg-gray-95 px-6 py-3 text-base font-medium text-primary hover:bg-gray-1 dark:hover:bg-gray-105"
            >
              {textContent.freeCard.cta}
            </Link>
          </div>

          <div className="flex w-full flex-col justify-between gap-8 rounded-16 border-2 border-primary bg-white dark:bg-gray-95 p-6 md:max-w-[420px] lg:p-8">
            <div className="flex flex-col gap-6">
              <PlanHeader
                card={textContent.premiumCard}
                price={premiumPrice}
                isLoading={loadingCards}
                darkMode={darkMode}
              />
              <PlanFeatures features={textContent.premiumCard.features} darkMode={darkMode} />
            </div>
            <Link
              href={getDealURL}
              className="flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-dark"
            >
              {textContent.premiumCard.cta}
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-center md:gap-10 lg:gap-16">
          {guarantees.map((guarantee) => (
            <div key={guarantee.text} className="flex flex-row items-center gap-2">
              <guarantee.icon size={24} className="shrink-0 text-primary" />
              <p className="text-base font-medium text-gray-80 dark:text-cool-gray-30">
                {guarantee.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChoosePlanSection;
