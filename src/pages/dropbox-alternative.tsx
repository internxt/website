import { DropboxAlternativeText } from '@/assets/types/dropbox-alternative';
import { FooterText, MetatagsDescription, NavigationBarText } from '@/assets/types/layout/types';
import { CouponSection } from '@/components/comparison/pCloud-alternative/CouponSection';
import { WhyChooseInxtSection } from '@/components/comparison/pCloud-alternative/WhyChooseInxtSection';
import { CompetitorTable } from '@/components/comparison/pCloud-alternative/components/CompetitorTable';
import { InxtTable } from '@/components/comparison/pCloud-alternative/components/InxtTable';
import Layout from '@/components/layout/Layout';
import { MinimalFooter } from '@/components/layout/footers/MinimalFooter';
import Navbar from '@/components/layout/navbars/Navbar';
import CtaSection from '@/components/shared/CtaSection';
import { PricingSectionWrapper } from '@/components/shared/pricing/PricingSectionWrapper';
import usePricing from '@/hooks/usePricing';
import cookies from '@/lib/cookies';
import { getImage } from '@/lib/getImage';
import { PromoCodeName } from '@/lib/types';
import { stripeService } from '@/services/stripe.service';
import ReactMarkdown from 'react-markdown';
import { HeroSection } from '@/components/comparison/HeroSection';
import { ComparisonHeader } from '@/components/comparison/pCloud-alternative/ComparisonHeader';

interface DropboxComparisonProps {
  metatagsDescriptions: MetatagsDescription[];
  langJson: DropboxAlternativeText;
  lang: string;
  navbarLang: NavigationBarText;
  footerLang: FooterText;
}

const IsDropboxSafe = ({ textContent }: { textContent: DropboxAlternativeText['IsDropboxSafeSection'] }) => (
  <div className="flex flex-col items-center gap-16 px-5 py-20">
    <div className="flex max-w-[850px] flex-col gap-6 text-center">
      <h2 className="text-4xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</h2>
      <h3 className="text-xl text-gray-80">{textContent.description}</h3>
    </div>
    {textContent.breaches.map((breach) => (
      <div key={breach.title} className="flex max-w-[800px] flex-col gap-3">
        <p className="text-3xl font-semibold text-gray-100">{breach.title}</p>
        <ReactMarkdown className="markdown text-xl text-gray-80">{breach.description}</ReactMarkdown>
      </div>
    ))}
  </div>
);

const DropboxComparison = ({
  metatagsDescriptions,
  langJson,
  lang,
  navbarLang,
  footerLang,
}: DropboxComparisonProps): JSX.Element => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'dropbox-alternative');
  const {
    products,
    loadingCards,
    currencyValue,
    coupon: individualCoupon,
    lifetimeCoupons,
  } = usePricing({
    couponCode: PromoCodeName.Dropbox87,
  });

  const onCheckoutButtonClicked = (priceId: string, isCheckoutForLifetime: boolean) => {
    const couponCodeForCheckout = individualCoupon?.name;

    stripeService.redirectToCheckout(
      priceId,
      currencyValue,
      'individual',
      isCheckoutForLifetime,
      couponCodeForCheckout,
    );
  };

  const decimalDiscount = individualCoupon?.percentOff && 100 - individualCoupon.percentOff;

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Dropbox Comparison"
      lang={lang}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />
      <HeroSection textContent={langJson.HeaderSection} redirectUrl={'/pricing'} percentage={25} />

      <ComparisonHeader textContent={langJson.HeroSection} hideTooltip logo={getImage('/logos/dropbox-logo.svg')} />
      <PricingSectionWrapper
        textContent={langJson.tableSection}
        decimalDiscount={{
          individuals: decimalDiscount,
          lifetime: decimalDiscount,
        }}
        lifetimeCoupons={lifetimeCoupons}
        lang={lang}
        products={products}
        loadingCards={loadingCards}
        onCheckoutButtonClicked={onCheckoutButtonClicked}
        hideSwitchSelector
        hideBusinessSelector
        hideFreeCard
        CustomDescription={
          <span className="text-regular max-w-[800px] text-xl text-gray-80">
            {langJson.tableSection.planDescription}
          </span>
        }
        backgroundColorComponent="bg-gray-1"
        showPromo={false}
      />
      <IsDropboxSafe textContent={langJson.IsDropboxSafeSection} />
      <CtaSection textContent={langJson.CtaSection} url="" />
      <div className="flex flex-col items-center gap-16 px-5 py-20">
        <div className="flex max-w-[850px] flex-col gap-6 text-center">
          <h2 className="text-3xl font-semibold lg:text-5xl">{langJson.TablesSection.title}</h2>
          <h3 className="text-xl text-gray-80">{langJson.TablesSection.description}</h3>
        </div>
        <div className="flex flex-col gap-16">
          {langJson.TablesSection.tables.map((table) => (
            <div key={table.title} className="flex flex-col items-center gap-10 lg:gap-16">
              <p className="text-center text-3xl font-semibold text-gray-100">{table.title}</p>
              <div className=" flex h-full flex-col gap-10 md:flex-row">
                <InxtTable textContent={table.inxtTable} />
                <CompetitorTable textContent={table.table} logo={getImage('/icons/dropbox-icon.svg')} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <CouponSection textContent={langJson.UseCodeSection} redirectUrl="/pricing" />
      <WhyChooseInxtSection textContent={langJson.WhyChooseInxtSection} />
      <MinimalFooter footerLang={footerLang.FooterSection} lang={lang} bgColor="bg-gray-1" />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = 'en';

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/dropbox-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default DropboxComparison;
