import PriceTable from '../../PriceTable';
import { Detective, FolderLock } from '@phosphor-icons/react';
import { OpenSource } from '@/components/shared/icons/OpenSource';
import { PromoCodeName } from '@/lib/types';
import { formatText } from '@/components/utils/format-text';
import { useRouter } from 'next/router';

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
  onButtonClicked?: () => void;
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
    <section id="payment" className="overflow-hidden">
      <div className="flex flex-col space-y-8 pt-20">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center px-6 text-center">  
            <span className="text-5xl font-semibold">
              {title.previousBlueText} 
              <span className="text-primary">
                {formatText(title.blueText, { percent: percent ?? '80' })}
              </span>
              {title.postBlueText}
            </span>
            <p className="pt-4 text-xl font-regular text-gray-80">{description}</p>
          </div>
        </div>
        <PriceTable
          lang={lang}
          discount={discount}
          couponCode={couponCode}
          showPriceBefore={showPriceBefore}
          lifetimeMode={lifetimeMode}
          currencySpecified={currencySpecified}
          onButtonClicked={onButtonClicked}
        />
        <div className="flex flex-col items-center justify-center space-y-8 py-10 text-center md:flex-row md:space-x-32 md:space-y-0">
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