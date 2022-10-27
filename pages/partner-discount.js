import React from 'react';

const PartnerDiscount = ({ lang, metatagsDescriptions, navbarLang, langJson }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'partners-discount');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description} segmentName="Partners" lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const download = await downloadDriveByPlatform(ctx);

  const ua = ctx.req.headers['user-agent'];
  const device = userAgent.parse(ua).os.family;

  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const langJson = require(`../assets/lang/${lang}/photos.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      lang,
      download,
      device,
      metatagsDescriptions,
      langJson,
      navbarLang,
      footerLang,
    },
  };
}

export default PartnerDiscount;
