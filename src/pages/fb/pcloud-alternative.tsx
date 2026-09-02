import { ComparisonPage } from '@/components/templates/comparisonPageTemplate';
import { PromoCodeName } from '@/lib/types';
import { GetStaticPropsContext } from 'next';

const PCloudComparison = (props) => (
  <ComparisonPage
    {...props}
    competitor="pCloud"
    metaTagId="pcloud-alternative"
    segmentName="PPC pCloud Comparison"
    logo="/images/comparison/competitors/pCloud.webp"
    couponCodeName={PromoCodeName.META85}
    minimalLayout
    hideFreeCard
    ctaUrl="/pricing"
    ctaCustomTextPadding="px-10 text-center lg:px-0"
    sectionsOrder={["pricing", "tables", "scrollable"]}
    useComparisonScrollable
    useCouponsWithPhotos
    scrollableSections={[
      { key: "HorizontalScrollableSection", bgGradient: "linear-gradient(180deg, #FFFFFF 0%, #FFCECC 50%, #FFFFFF 100%)" },
      { key: "HorizontalScrollableSectionV2", bgGradient: "linear-gradient(180deg, #FFFFFF 0%, #D6F3DD 50%, #FFFFFF 100%)", needsH2: true, needsH3: true },
    ]}
    tablesCompetitor="pCloud"
    ctaTextKey="CtaSection2"
    ctaTitleTag="h2"
    ctaSkipDynamicText
    ctaBgPadding=""
    faqSkipPercentage
    robots="noindex, follow"
    tablesBottomSeparationBar
    headings={{
      comparisonTableH2: true,
      tablesSectionH2: true,
      faqH3: false,
    }}
  />
);

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/pcloud-alternative.json`);
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

export default PCloudComparison;
