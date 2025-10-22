<<<<<<< Updated upstream
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import Footer from '@/components/layout/footers/Footer';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import { stripeService } from '@/services/stripe.service';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import FAQSection from '@/components/shared/sections/FaqSection';
import usePricing from '@/hooks/usePricing';
import { PromoCodeName } from '@/lib/types';
import { BlackFridayText } from '@/assets/types/blackFriday';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import ThreeCardsSection from '@/components/shared/sections/ThreeCardsSection';
import TitleAndDescriptionSection from '@/components/shared/components/TitleAndDescriptionSection';
import HeroSection from '@/components/deals/HeroSection';
import HorizontalScrollableSection from '@/components/black-friday/HorziontalScrollableSection';

interface BlackFridayDealConfig {
  heroImage: string;
  metatagsId: string;
  couponCode: PromoCodeName;
  couponCodeForLifetime: PromoCodeName;
  popularPlanSize?: string;
  hideBusinessCards?: boolean;
  hideBusinessSelector?: boolean;
}

interface BlackFridayDealsTemplateProps {
  lang: string;
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  textContent: BlackFridayText;
  footerLang: FooterText;
  config: BlackFridayDealConfig;
}

const BlackFridayDealsTemplate = ({
  metatagsDescriptions,
  textContent,
  lang,
  navbarLang,
  footerLang,
  config,
}: BlackFridayDealsTemplateProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === config.metatagsId);

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: config.couponCode,
    couponCodeForLifetime: config.couponCodeForLifetime,
  });

  const navbarCta = 'chooseStorage';

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    const couponCodeForCheckout = isCheckoutForLifetime ? lifetimeCoupon : individualCoupon;

    stripeService.redirectToCheckout(
      priceId,
      currencyValue,
      'individual',
      isCheckoutForLifetime,
      couponCodeForCheckout?.name,
    );
=======
import { CaretRight } from '@phosphor-icons/react';

interface MoreDealsSectionProps {
  textContent: {
    title: string;
    description: string;
    cards: {
      card1: {
        title: string;
        description: string;
        cta: string;
      };
      card2: {
        title: string;
        description: string;
        cta: string;
      };
    };
>>>>>>> Stashed changes
  };
  urls: {
    card1: string;
    card2: string;
  };
  darkMode?: boolean;
}

const MoreDealsSection = ({ textContent, urls, darkMode = false }: MoreDealsSectionProps) => {
  const cards = [textContent.cards.card1, textContent.cards.card2];
  const urlsArray = [urls.card1, urls.card2];

  return (
<<<<<<< Updated upstream
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="BlackFridayDeals" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={[navbarCta]} fixed />

      <HeroSection textContent={textContent.HeroSection} percentOff={percentOff} image={config.heroImage} />

      <TitleAndDescriptionSection textContent={textContent.DontMissSection} darkMode />

      <PricingSectionWrapper
        textContent={textContent.TableSection}
        decimalDiscount={{
          individuals: decimalDiscount,
          lifetime: decimalDiscountForLifetime,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={lang}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideBusinessCards={config.hideBusinessCards ?? true}
        hideBusinessSelector={config.hideBusinessSelector ?? true}
        popularPlanBySize={config.popularPlanSize || '5TB'}
        sectionDetails="bg-[#1C1C1C] lg:py-20"
        darkMode
      />

      <ThreeCardsSection textContent={textContent.WhyChooseSection} darkMode />

      <FloatingCtaSectionv2
        textContent={textContent.CtaSection}
        url={'#billingButtons'}
        customText={
          <div className="flex flex-col items-center gap-4 px-10 text-center lg:px-0">
            <p className="text-2xl font-semibold leading-tight text-white lg:text-4xl">
              {textContent.CtaSection.title}
            </p>
            <p className="text-base font-normal leading-tight text-white lg:w-[633px] lg:text-center lg:text-xl">
              {textContent.CtaSection.description}
            </p>
=======
    <section
      className={`flex w-full flex-col items-center justify-center gap-16 overflow-hidden py-20 xl:px-32 3xl:px-80 ${
        darkMode ? 'bg-[#1C1C1C]' : 'bg-white'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <h2 className={`text-30 font-bold lg:text-3xl ${darkMode ? 'text-white-95' : 'text-gray-95'}`}>
          {textContent.title}
        </h2>
        <p className="text-sm font-normal text-white-95 lg:text-lg">{textContent.description}</p>
      </div>
      <div className="flex w-full flex-row items-stretch justify-center gap-8">
        {cards.map((card, index) => (
          <div key={index} className="flex w-full max-w-[50%] flex-1 flex-col gap-8 rounded-16 bg-gray-105 p-8">
            <h3 className="text-xl font-medium text-white-95">{card.title}</h3>
            <p className="flex-grow text-base font-normal text-green-120">{card.description}</p>
            <a
              href={urlsArray[index]}
              className="flex w-max cursor-pointer flex-row items-center gap-1 text-base font-normal leading-tight text-primary hover:text-primary-dark hover:underline"
            >
              {card.cta}
              <CaretRight className="pt-[2px] text-primary" size={24} />
            </a>
>>>>>>> Stashed changes
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoreDealsSection;
