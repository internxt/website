import PriceTable from './PriceTable';
import { Detective, FolderLock } from '@phosphor-icons/react';
import OpenSource from '../../../public/icons/open-source.svg';
import { PromoCodeName } from '@/lib/types';
import { formatText } from '../utils/format-text';
import { useRouter } from 'next/router';
import { PlanSelector, SwitchButtonOptions } from '../elections/PlanSelector';

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
}: PaymentSectionProps): JSX.Element => {
  const router = useRouter();
  const features = [
    {
      icon: FolderLock,
      text: textContent.features.endToEnd,
    },
    {
      icon: OpenSource,
      text: textContent.features.openSource,
    },
    {
      icon: Detective,
      text: textContent.features.anonymousAccount,
    },
  ];

  const title =
    router.pathname === '/dealmirror' || router.pathname === '/dealfuel' ? textContent.title2 : textContent.title;
  const description =
    router.pathname === '/dealmirror' || router.pathname === '/dealfuel'
      ? textContent.description2
      : textContent.description;

  return (
    <section id="payment" className="overflow-hidden bg-white">
      <div className="flex flex-col space-y-8 pt-20">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center px-6 text-center">
            <p>
              {isElectionsPage ? (
                <>
                  <span className="text-5xl font-bold text-gray-100">{title.normalText}</span>
                  <br />

                  <span className="text-5xl font-bold text-primary">
                    {formatText(title.blueText, {
                      percent: percent ?? '70',
                    })}
                  </span>
                  <br />
                  <br />
                  <span className="font-regular text-xl text-gray-100 ">
                    {description.normalText}
                    <span className="text-primary">{description.blueText}</span>
                  </span>
                  <br />
                  <br />
                  <span className="font-regular text-xl text-gray-100 ">{description.normalText}</span>
                </>
              ) : (
                <>
                  <p className="w-full text-5xl font-semibold leading-tight">
                    {title.previousBlueText && <span>{title.previousBlueText}</span>}
                    <span className="text-primary">
                      {formatText(title.blueText, {
                        percent: percent ?? '70',
                      })}
                    </span>
                    {title.postBlueText && <span>{title.postBlueText}</span>}
                    <br />
                    <span>{title.normalText}</span>
                    <p className="max-w-[839px] pt-4 text-xl font-normal">{description}</p>
                  </p>
                </>
              )}
            </p>
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
        />
        <div className="flex flex-col items-center justify-center space-y-8 bg-gray-1 bg-white py-10 text-center md:flex-row md:space-x-32 md:space-y-0">
          {features.map((feature) => (
            <div key={feature.text} className="flex flex-row items-center space-x-3 ">
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
