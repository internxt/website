import { UltimateAnnualTemplate, UltimateAnnualTemplateProps } from "@/components/templates/ultimateAnnualTemplate";
import { GetServerSidePropsContext } from "next";
import cookies from "@/lib/cookies";
import { PromoCodeName } from "@/lib/types";

const AnnualUltimateNinetyFour = (props: UltimateAnnualTemplateProps) => <UltimateAnnualTemplate {...props} couponCodeForLifetime={PromoCodeName.ultimate94}/>

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`@/assets/lang/${lang}/specialOfferTemplate.json`);
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

export default AnnualUltimateNinetyFour;