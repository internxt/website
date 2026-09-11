import { UltimateAnnualTemplate, UltimateAnnualTemplateProps } from "@/components/templates/ultimateAnnualTemplate";
import { GetStaticPropsContext } from "next";
import { PromoCodeName } from "@/lib/types";

const AnnualUltimateNinetyFour = (props: UltimateAnnualTemplateProps) => <UltimateAnnualTemplate {...props} couponCodeForLifetime={PromoCodeName.ultimate94}/>

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/specialOfferTemplate.json`);
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

export default AnnualUltimateNinetyFour;