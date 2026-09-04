import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const ProtonComparison = (props) => (
  <ComparisonPage
    {...props}
    competitor="proton-drive"
    metaTagId="proton-drive-alternative"
    segmentName="Drive Comparison"
    logo="/images/comparison/competitors/proton-drive-Letters.webp"
    couponCodeName={PromoCodeName.PROTONDRIVE}
    breadcrumbName="Proton alternative"
    urlSlug="proton-alternative"
    ctaUrl="#pricingTable"
    ctaCustomTextPadding="px-10 lg:px-32"
    sectionsOrder={["tables", "pricing", "scrollable", "threeCards", "withPhotos"]}
    useComparisonScrollable
    useCouponsWithPhotos
    customSections={{ showThreeCards: true }}
    threeCardsBgColor="linear-gradient(180deg, #FFFFFF 0%, #FFCECC 50%, #FFFFFF 100%)"
    threeCardsBottomSeparationBar
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
      withPhotosTitleCardTag: 'h3',
      footerH2: false,
    }}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/proton-drive-alternative.json`);
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

export default ProtonComparison;
