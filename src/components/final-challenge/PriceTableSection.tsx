import { HandCoins, Headset, Keyhole } from '@phosphor-icons/react';

import CardSkeleton from '@/components/components/CardSkeleton';
import { PriceCard } from '@/components/shared/pricing/PriceCard';
import { Interval, ProductsDataProps } from '@/services/stripe.service';

const PREMIUM_STORAGE = '3TB';
const ULTIMATE_STORAGE = '5TB';

export interface PriceTableText {
  planTitles: {
    header: string;
  };
  billingFrequency: {
    lifetime: string;
  };
  features: {
    premiumSupport: string;
    guarantee: string;
    openSource: string;
  };
}

interface PriceTableSectionProps {
  textContent: PriceTableText;
  products: ProductsDataProps | undefined;
  loadingCards: boolean;
  lang: string;
  decimalDiscountForLifetime?: number;
  onCheckoutButtonClicked: (planId: string, isCheckoutForLifetime: boolean, interval: string, storage: string) => void;
}

export const PriceTableSection = ({
  textContent,
  products,
  loadingCards,
  lang,
  decimalDiscountForLifetime,
  onCheckoutButtonClicked,
}: Readonly<PriceTableSectionProps>): JSX.Element => {
  const lifetimeProducts = products?.individuals[Interval.Lifetime] ?? [];
  const premiumProduct = lifetimeProducts.find((product) => product.storage === PREMIUM_STORAGE);
  const ultimateProduct = lifetimeProducts.find((product) => product.storage === ULTIMATE_STORAGE);

  const premiumProductAtUltimatePrice =
    premiumProduct && ultimateProduct ? { ...premiumProduct, price: ultimateProduct.price } : premiumProduct;

  const features = [
    {
      icon: Headset,
      text: textContent.features.premiumSupport,
    },
    {
      icon: HandCoins,
      text: textContent.features.guarantee,
    },
    {
      icon: Keyhole,
      text: textContent.features.openSource,
    },
  ];

  return (
    <section id="billingButtons" className="overflow-hidden bg-[#1C1C1C] lg:px-5 lg:py-20">
      <div className="flex flex-col items-center gap-6 py-10 lg:gap-16 lg:py-0">
        <p id="priceTable" className="text-30 font-semibold text-white-95 lg:text-3xl">
          {textContent.planTitles.header}
        </p>

        <div className="flex h-[38px] w-[212px] flex-row rounded-lg bg-neutral-90/10">
          <div className="m-1 flex w-full flex-row items-center justify-center rounded-lg bg-white text-lg font-semibold text-primary shadow-sm">
            {textContent.billingFrequency.lifetime}
          </div>
        </div>

        {loadingCards ? (
          <>
            <div className="hidden flex-row items-end justify-center p-6 py-14 lg:flex">
              <CardSkeleton />
              <CardSkeleton />
            </div>
            <div className="flex flex-row items-end justify-center lg:hidden">
              <CardSkeleton />
            </div>
          </>
        ) : (
          <>
            <div className="hidden w-full flex-nowrap items-stretch justify-center gap-6 px-2 pb-8 lg:flex">
              {premiumProductAtUltimatePrice && (
                <div className="flex [&_button]:pointer-events-none [&_button]:invisible">
                  <PriceCard
                    product={premiumProductAtUltimatePrice}
                    label={premiumProductAtUltimatePrice.storage}
                    popular={false}
                    productCardPlan="individuals"
                    isCheckoutForLifetime
                    decimalDiscountValue={decimalDiscountForLifetime}
                    onCheckoutButtonClicked={onCheckoutButtonClicked}
                    lang={lang}
                    darkMode
                  />
                </div>
              )}
              {ultimateProduct && (
                <PriceCard
                  product={ultimateProduct}
                  label={ultimateProduct.storage}
                  popular
                  productCardPlan="individuals"
                  isCheckoutForLifetime
                  decimalDiscountValue={decimalDiscountForLifetime}
                  onCheckoutButtonClicked={onCheckoutButtonClicked}
                  lang={lang}
                  darkMode
                />
              )}
            </div>

            <div className="flex w-[345px] flex-col lg:hidden">
              {ultimateProduct && (
                <PriceCard
                  product={ultimateProduct}
                  label={ultimateProduct.storage}
                  popular
                  productCardPlan="individuals"
                  isCheckoutForLifetime
                  decimalDiscountValue={decimalDiscountForLifetime}
                  onCheckoutButtonClicked={onCheckoutButtonClicked}
                  lang={lang}
                  darkMode
                />
              )}
            </div>
          </>
        )}

        <div className="w-full lg:px-10 xl:px-32 3xl:px-80">
          <div className="hidden flex-row items-start justify-between space-x-16 text-center md:flex">
            {features.map((feature) => (
              <div key={feature.text} className="flex max-w-[33%] flex-row items-start gap-3">
                <feature.icon size={36} className="!h-[36px] !w-[36px] shrink-0 text-primary" />
                <p className="pt-[6px] text-xl font-medium text-white">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="flex h-min w-full flex-col items-center justify-center gap-2 text-start md:hidden">
            {features.map((feature) => (
              <div key={feature.text} className="flex h-min w-[347px] flex-row items-start justify-start gap-2 px-6">
                <div>
                  <feature.icon size={24} className="shrink-0 text-primary" />
                </div>
                <p className="justify-end text-base font-medium text-white">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
