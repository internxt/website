import ReactMarkdown from 'react-markdown';
import RenderDescription from '../shared/RenderDescription';
import SignUpBanner from '../banners/SignUpBanner';
import FaqAccordion from '../shared/FAQAccordion';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { stripeService } from '@/services/stripe.service';
import { PromoCodeName } from '@/lib/types';
import usePricing from '@/hooks/usePricing';

export const WebDAVSupportSection = ({ textContent, lang }) => {
  const bannerLang = require('../../assets/lang/en/banners.json');

  const {
        products,
        loadingCards,
        currencyValue,
        coupon: individualCoupon,
        lifetimeCoupon,
        lifetimeCoupons,
    } = usePricing({ couponCode: PromoCodeName.seolp, couponCodeForLifetime: PromoCodeName.seolp });

    const decimalDiscountForLifetime = lifetimeCoupon?.percentOff && 100 - lifetimeCoupon.percentOff;
    const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;

    const onCheckoutButtonClicked = async (
        priceId: string,
        isCheckoutForLifetime: boolean,
        interval: string,
        storage: string,
    ) => {
        const couponCodeForCheckout = isCheckoutForLifetime ? lifetimeCoupon : individualCoupon;

        const finalPrice = await stripeService.calculateFinalPrice(
            priceId,
            interval,
            currencyValue,
            'individuals',
            couponCodeForCheckout,
        );

        stripeService.redirectToCheckout(
            priceId,
            finalPrice,
            currencyValue,
            'individual',
            isCheckoutForLifetime,
            interval,
            storage,
            couponCodeForCheckout?.name,
        );
    };

  return (
    <section
      className="overflow-hidden bg-white px-5 py-20"
      style={{ background: 'linear-gradient(360deg, #F4F8FF 0%, #FFFFFF 100%)' }}
    >
      <div className={`absolute left-8 right-8 top-0 h-[1px] ${'bg-neutral-35'} lg:left-32 lg:right-32 lg:top-0`}></div>
      <div className="flex flex-col items-center gap-12">
        <h2 className="max-w-[749px] text-center text-30 font-bold leading-tight text-gray-100 lg:text-3xl">
          {textContent.title}
        </h2>
        <div className="flex w-full max-w-[672px] flex-col gap-12 lg:py-10">
          <RenderDescription description={textContent.description} />

          <div className="flex flex-col gap-6 md:gap-3">
            <p className="text-center text-2xl font-medium text-gray-100 md:text-left">
              {textContent.howToInstall.title}
            </p>
            <div className="flex flex-col gap-3">
              {textContent.howToInstall.steps.map((steps) => (
                <div className="flex flex-row items-start gap-3 md:items-center">
                  <div className="flex whitespace-nowrap rounded-lg bg-gray-1 px-4 py-2">
                    <p className="text-base font-semibold text-gray-55 lg:text-lg">{steps.step}</p>
                  </div>
                  <ReactMarkdown className="markdown text-base font-normal text-gray-55 lg:text-lg">
                    {steps.description}
                  </ReactMarkdown>
                </div>
              ))}
            </div>
          </div>
        </div>
        <PricingSectionWrapper
                textContent={textContent.tableSection}
                decimalDiscount={{
                    individuals: decimalDiscount,
                    lifetime: decimalDiscountForLifetime,
                }}
                lifetimeCoupons={lifetimeCoupons}
                lang={lang}
                products={products}
                loadingCards={loadingCards}
                onCheckoutButtonClicked={onCheckoutButtonClicked}
                hideBusinessCards
                hideBusinessSelector
                popularPlanBySize="5TB"
                sectionDetails="bg-white lg:py-20"
                hideFreeCard
                backgroundGradientColor='linear-gradient(360deg, #F4F8FF 0%, #FFFFFF 100%)'
        />
        <SignUpBanner textContent={bannerLang.SignUpWebDAVBanner} lang="en" />
        <div className="flex w-full flex-col space-y-2 lg:max-w-[850px] lg:pt-10">
          {textContent.questions.map((item) => (
            <div className={`rounded-lg border border-gray-20 px-5`} key={item.question}>
              <FaqAccordion
                key={item.question}
                question={item.question}
                answer={item.answer}
                isQuestionBigger
                textColor={'text-gray-100'}
                needsH3={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
