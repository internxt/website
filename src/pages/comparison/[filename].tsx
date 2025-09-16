import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '@/components/layout/navbars/Navbar';
import Layout from '@/components/layout/Layout';
import usePricing from '@/hooks/usePricing';
import { stripeService } from '@/services/stripe.service';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { PromoCodeName } from '@/lib/types';
import { ComparisonPageText } from '@/assets/types/comparisonPage';
import { TablesSection } from '@/components/comparison/pCloud-alternative/TablesSection';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import { HeroSection } from '@/components/comparison/pCloud-alternative/HeroSection';
import FloatingCtaSectionv2 from '@/components/shared/FloatingCtaSectionV2';
import HorizontalScrollableSection from '@/components/comparison/HorizontalScrollableSection';
import FAQSection from '@/components/shared/sections/FaqSection';
import { ComparisonTablePCloud } from '@/components/comparison/ComparisonTablePcloud';

interface PartnerDiscountProps {
  metatagsDescriptions: MetatagsDescription[];
  navbarLang: NavigationBarText;
  langJson: ComparisonPageText;
  footerLang: FooterText;
  pathname: string;
  lang: string;
}

const ALLOWED_PATHS = ['pcloud-alternative', 'mega-alternative', 'dropbox-alternative'];

const COUPON_CODES = {
  'pcloud-alternative': PromoCodeName.PCLOUD87,
  'mega-alternative': PromoCodeName.Mega87,
  'dropbox-alternative': PromoCodeName.Dropbox87,
};

const SpecialOfferPage = ({
  metatagsDescriptions,
  langJson,
  navbarLang,
  footerLang,
  pathname,
  lang,
}: PartnerDiscountProps): JSX.Element => {
  const router = useRouter();
  const selectedPathname = ALLOWED_PATHS.find((p) => p === pathname);

  useEffect(() => {
    if (!selectedPathname) {
      router.replace('/');
    }
  }, [selectedPathname, router]);

  const couponCode = COUPON_CODES[pathname];

  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'special-offer');

  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
  } = usePricing({
    couponCode,
  });

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    stripeService.redirectToCheckout(
      priceId,
      currencyValue,
      'individual',
      isCheckoutForLifetime,
      individualCoupon?.name,
    );
  };

  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;

  const percentageDiscount = decimalDiscount ? 100 - decimalDiscount : 0;

  const competitor =
    selectedPathname === 'pcloud-alternative' ? 'pCloud' : selectedPathname === 'mega-alternative' ? 'MEGA' : 'Dropbox';

  const competitorImage =
    selectedPathname === 'pcloud-alternative'
      ? '/images/comparison/competitors/pCloud.webp'
      : selectedPathname === 'mega-alternative'
      ? '/images/comparison/competitors/Mega_Letters.webp'
      : '/images/comparison/competitors/Dropbox_Letters.webp';

  const FAQSText =
    selectedPathname === 'pcloud-alternative'
      ? langJson.FaqSectionpCloud
      : selectedPathname === 'mega-alternative'
      ? langJson.FaqSectionMEGA
      : langJson.FaqSectionDropbox;

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="pCloud Comparison" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['priceTable']} fixed />

      <HeroSection
        textContent={langJson.HeroSection}
        redirectUrl={'/pricing'}
        percentage={percentageDiscount}
        competitor={competitor}
      />

      <ComparisonTablePCloud
        textContent={langJson.HeaderSection}
        competitor={competitor}
        logo="/images/comparison/competitors/pCloud.png"
      />

      <PricingSectionWrapper
        textContent={langJson.tableSection}
        decimalDiscount={{
          individuals: decimalDiscount,
          lifetime: decimalDiscount,
        }}
        lang={lang}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideSwitchSelector
        hideBusinessSelector
        backgroundGradientColor="linear-gradient(180deg, #F9F9FC 0%, #FFFFFF 100%)"
        sectionDetails="py-10 lg:py-20"
        showPromo={false}
      />

      <FloatingCtaSectionv2
        textContent={langJson.CtaSection}
        url={'/pricing'}
        customText={
          <>
            <div className="flex flex-col gap-4 px-10 text-center lg:px-0">
              <p className="text-2xl font-semibold text-gray-95 lg:text-4xl">{langJson.CtaSection.title}</p>
              <p className="text-base font-normal text-gray-55 lg:text-xl">{langJson.CtaSection.description}</p>
            </div>
          </>
        }
        containerDetails="shadow-lg backdrop-blur-[55px] bg-white"
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
      />

      <HorizontalScrollableSection
        textContent={langJson.HorizontalScrollableSection}
        competitor={competitor}
        bgGradient="linear-gradient(180deg, #FFFFFF 0%, #FFCECC 50%, #FFFFFF 100%)"
      />

      <TablesSection textContent={langJson.VersusSection} competitor={competitor} logo={competitorImage} />

      <FloatingCtaSectionv2
        textContent={langJson.CtaSection}
        url={'/pricing'}
        customText={
          <>
            <div className="flex flex-col gap-4 px-10 text-center lg:px-0">
              <p className="text-2xl font-semibold text-gray-95 lg:text-4xl">{langJson.CtaSection2.title}</p>
              <p className="text-base font-normal text-gray-55 lg:text-xl">{langJson.CtaSection2.description}</p>
            </div>
          </>
        }
        containerDetails="shadow-lg backdrop-blur-[55px] bg-white"
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
      />

      <HorizontalScrollableSection
        textContent={langJson.HorizontalScrollableSectionV2}
        competitor={competitor}
        bgGradient="linear-gradient(180deg, #FFFFFF 0%, #D6F3DD 50%, #FFFFFF 100%)"
      />

      <FloatingCtaSectionv2
        textContent={langJson.CtaSection}
        url={'/pricing'}
        customText={
          <>
            <div className="flex flex-col gap-4 px-10 text-center lg:px-0">
              <p className="text-2xl font-semibold text-gray-95 lg:text-4xl">{langJson.CtaSection2.title}</p>
              <p className="text-base font-normal text-gray-55 lg:text-xl">{langJson.CtaSection2.description}</p>
            </div>
          </>
        }
        containerDetails="shadow-lg backdrop-blur-[55px] bg-white"
        bgGradientContainerColor="linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)"
      />

      <FAQSection textContent={FAQSText} />

      <MinimalFooter footerLang={footerLang.FooterSection} lang={lang} bgColor="bg-gray-1" />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = 'en';
  const pathname = ctx.params.filename;

  const metatagsDescriptions = require(`@/assets/lang/es/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/comparisonPage.json`);
  const navbarLang = require(`@/assets/lang/es/navbar.json`);
  const footerLang = require(`@/assets/lang/es/footer.json`);

  return {
    props: {
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
      lang,
      pathname,
    },
  };
}

export default SpecialOfferPage;
