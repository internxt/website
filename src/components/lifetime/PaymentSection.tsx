import PriceTable from './PriceTable';
import { CurrencyCircleDollar, Lifebuoy } from '@phosphor-icons/react';
import OpenSource from '../../../public/icons/open-source.svg';
import { PromoCodeName } from '@/lib/types';
import { formatText } from '../utils/format-text';
import { useRouter } from 'next/router';
import { PlanSelector, SwitchButtonOptions } from '../elections/PlanSelector';
import { highlightKeywords } from '@/utils/highlightKeywords';

export type LifetimeMode = 'celebration' | 'custom-disc' | 'normal' | 'redeem';

interface PaymentSectionProps {
  lang: string;
  textContent: any;
  discount?: number;
  couponCode?: PromoCodeName;
  showPriceBefore?: boolean;
  percent?: string;
  lifetimeMode?: LifetimeMode;
  currencySpecified?: string;
  isElectionsPage?: boolean;
  activeSwitchPlan?: SwitchButtonOptions;
  onButtonClicked?: () => void;
  onPlanTypeChange?: (activeSwitchPlan: SwitchButtonOptions) => void;
  isStackCommerce?: boolean;
  showOffer?: boolean;
}

const PaymentSection = ({
  lang,
  textContent,
  couponCode,
  discount,
  percent,
  showPriceBefore,
  lifetimeMode,
  currencySpecified,
  isElectionsPage,
  activeSwitchPlan,
  onPlanTypeChange,
  onButtonClicked,
  isStackCommerce,
  showOffer,
}: PaymentSectionProps): JSX.Element => {
  const router = useRouter();

  const features = [
    { icon: Lifebuoy, text: textContent.features.endToEnd },
    { icon: CurrencyCircleDollar, text: textContent.features.anonymousAccount },
    { icon: OpenSource, text: textContent.features.openSource },
  ];

  const title =
    router.pathname === '/dealmirror' || router.pathname === '/dealfuel' ? textContent.title2 : textContent.title;
  const description =
    router.pathname === '/dealmirror' || router.pathname === '/dealfuel'
      ? textContent.description2
      : textContent.description;

  return (
    <section id="payment" className="overflow-hidden bg-white">
      <div className="flex flex-col space-y-4 pt-10">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center px-6 text-center">
            {isElectionsPage ? (
              <div className="flex flex-col items-center gap-4">
                <p className="text-5xl font-bold leading-tight text-gray-100">
                  {title.normalText}
                  <span className="text-5xl font-bold text-primary">
                    {formatText(title.blueText, { percent: percent ?? '80' })}
                  </span>
                </p>
                <p className="font-regular text-xl text-gray-100">
                  <span dangerouslySetInnerHTML={{ __html: highlightKeywords(description.normalText) }} />
                  <span className="text-primary">{description.blueText}</span>
                </p>
                <p className="font-regular text-xl text-gray-100">
                  <span dangerouslySetInnerHTML={{ __html: highlightKeywords(description.normalText2) }} />
                </p>
              </div>
            ) : (
              <>
                <p className="text-4xl font-semibold leading-tight lg:text-5xl">
                  {title.previousBlueText && <span>{title.previousBlueText}</span>}
                  <span className="text-primary">{formatText(title.blueText, { percent: percent ?? '80' })}</span>
                  {title.postBlueText && <span>{title.postBlueText}</span>}
                  <br />
                  <span>{title.normalText}</span>
                </p>
                <p className="max-w-[1000px] items-center pt-4 text-center text-lg font-normal lg:text-xl">
                  <span dangerouslySetInnerHTML={{ __html: highlightKeywords(description) }} />
                </p>
              </>
            )}
          </div>
        </div>

        {isElectionsPage && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <PlanSelector
              textContent={textContent}
              activeSwitchPlan={activeSwitchPlan}
              onPlanTypeChange={onPlanTypeChange}
            />
          </div>
        )}

        <PriceTable
          lang={lang}
          discount={discount}
          couponCode={couponCode}
          showPriceBefore={showPriceBefore}
          lifetimeMode={lifetimeMode}
          currencySpecified={currencySpecified}
          onButtonClicked={onButtonClicked}
          isStackCommerce={isStackCommerce}
          showOffer={showOffer}
        />

        <div className="flex flex-col items-start justify-start space-y-8 pb-12 pl-10 text-center md:flex-row md:space-x-32 md:space-y-0 lg:justify-center">
          {features.map((feature) => (
            <div key={feature.text} className="flex flex-row items-center space-x-3">
              <feature.icon size={40} className="text-primary" />
              <p className="text-xl font-medium text-gray-80">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
