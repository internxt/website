import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const IcedriveComparison = (props) => (
  <ComparisonPage
    {...props}
    competitor="Icedrive"
    metaTagId="icedrive-alternative"
    segmentName="Icedrive Comparison"
    logo="/images/comparison/icedrive-Letters.webp"
    couponCodeName={PromoCodeName.Ice}
    breadcrumbName="Icedrive alternative"
    urlSlug="icedrive-alternative"
    ctaUrl="/drive"
    ctaCustomTextPadding="px-10 lg:px-40"
    sectionsOrder={["tables", "pricing", "scrollable", "threeCards", "withPhotos"]}
    useComparisonScrollable
    useCouponsWithPhotos
    customSections={{ showThreeCards: true }}
    threeCardsBgColor="linear-gradient(180deg, #FFFFFF 0%, #D6F3DD 50%, #FFFFFF 100%)"
    tablesCompetitor="Icedrive"
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
      footerH2: false,
    }}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/icedrive-alternative.json`);
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

export default IcedriveComparison;
