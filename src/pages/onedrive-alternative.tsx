import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const OneDriveComparison = (props) => (
  <ComparisonPage
    {...props}
    competitor="OneDrive"
    metaTagId="onedrive-alternative"
    segmentName="Drive Comparison"
    logo="/images/comparison/OneDrive-Letters.webp"
    couponCodeName={PromoCodeName.ONEDRIVE}
    breadcrumbName="Onedrive alternative"
    urlSlug="onedrive-alternative"
    ctaUrl="#pricingTable"
    ctaCustomTextPadding="px-10 lg:px-32"
    sectionsOrder={["tables", "pricing", "scrollable", "withPhotos", "threeCards"]}
    useComparisonScrollable
    useCouponsWithPhotos
    customSections={{ showThreeCards: true }}
    threeCardsBgColor="linear-gradient(180deg, #FFFFFF 0%, #FFCECC 50%, #FFFFFF 100%)"
    threeCardsTopSeparationBar={false}
    threeCardsBottomSeparationBar={false}
    tablesBottomSeparationBar
    headings={{
      comparisonTableH2: true,
      tablesSectionH2: true,
      tableTitleTag: 'h3',
      faqH3: false,
      withPhotosTitleCardTag: 'h3',
      footerH2: false,
    }}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/onedrive-alternative.json`);
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

export default OneDriveComparison;
