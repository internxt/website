import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const TeraboxComparison = (props) => (
  <ComparisonPage
    {...props}
    competitor="Terabox"
    metaTagId="terabox-alternative"
    segmentName="PPC Terabox Comparison"
    logo="/images/comparison/terabox-Letters.webp"
    couponCodeName={PromoCodeName.META85}
    minimalLayout
    hideFreeCard
    ctaUrl="#billingButtons"
    ctaCustomTextPadding="px-10 lg:px-40"
    sectionsOrder={["tables", "pricing", "scrollable", "threeCards", "withPhotos"]}
    useComparisonScrollable
    useCouponsWithPhotos
    threeCardsBgColor="linear-gradient(180deg, #FFFFFF 0%, #D6F3DD 50%, #FFFFFF 100%)"
    threeCardsBottomSeparationBar
    customSections={{ showThreeCards: true }}
    robots="noindex, follow"
    tablesBottomSeparationBar
    headings={{
      comparisonTableH2: true,
      tablesSectionH2: true,
      tableTitleTag: 'h3',
      scrollableH2: true,
      scrollableH3: true,
      threeCardsH2: false,
      faqH3: false,
      withPhotosTitleTag: 'h2',
    }}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/terabox-alternative.json`);
  const navbarLang = require(`@/assets/lang/${lang}/navbar.json`);
  const footerLang = require(`@/assets/lang/${lang}/footer.json`);

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

export default TeraboxComparison;
