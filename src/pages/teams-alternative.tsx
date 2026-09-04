import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const TeamsComparison = (props) => (
  <ComparisonPage
    {...props}
    competitor="Teams"
    metaTagId="teams-alternative"
    segmentName="Drive Comparison"
    logo="/images/comparison/Teams_Letters.webp"
    couponCodeName={PromoCodeName.TEAMS}
    breadcrumbName="Microsoft teams alternative"
    urlSlug="teams-alternative"
    ctaUrl="#pricingTable"
    ctaCustomTextPadding="px-10 lg:px-32"
    sectionsOrder={["tables", "pricing", "threeCards", "withPhotos", "scrollable"]}
    useComparisonScrollable
    useCouponsWithPhotos
    customSections={{ showThreeCards: true }}
    threeCardsBgColor="linear-gradient(180deg, #F4F8FF 0%, #FFCECC 50%, #FFFFFF 100%)"
    threeCardsBottomSeparationBar
    tablesBottomSeparationBar
    headings={{
      comparisonTableH2: true,
      tablesSectionH2: true,
      scrollableH2: true,
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
  const langJson = require(`@/assets/lang/${lang}/teams-alternative.json`);
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

export default TeamsComparison;
