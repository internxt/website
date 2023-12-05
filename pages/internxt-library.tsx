import HeroSection from '../components/inxt-library/HeroSection';
import WhatWeDo from '../components/inxt-library/WhatWeDo';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import CtaSection from '../components/shared/CtaSection';

const InternxtLibrary = ({ lang, metatagsDescriptions, navbar, inxtLibrary, footer }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'home');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description}>
      <Navbar fixed lang="en" textContent={navbar} cta={['default']} />

      <HeroSection textContent={inxtLibrary.HeroSection} />

      <WhatWeDo
        textContent={inxtLibrary.WhatWeDo1}
        downloadCardImgUrl={'/images/inxt-library/Internxt_ebook_download.webp'}
        downloadCardImgAlt={'Internxt eBook download'}
        imageCardURL={'/images/inxt-library/online_privacy_ebook.webp'}
        imageCardAlt={'Online privacy eBook'}
        bookUrl={'/inxt-library/Guide_to_Online_Privacy.pdf'}
      />

      <CtaSection textContent={inxtLibrary.firstCta} url="https://drive.internxt.com/new" maxWidth="max-w-[507px]" />

      <WhatWeDo
        textContent={inxtLibrary.WhatWeDo2}
        downloadCardImgUrl={'/images/inxt-library/kids_online_safety_ebook.webp'}
        downloadCardImgAlt={'Kids online safety eBook'}
        imageCardURL={'/images/inxt-library/parents_guide_ebook.webp'}
        imageCardAlt={'Parents guide eBook'}
        bookUrl={'/inxt-library/Keeping_Kids_Safe_Online.pdf'}
      />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/en/metatags-descriptions.json`);
  const navbar = require(`../assets/lang/en/navbar.json`);
  const inxtLibrary = require(`../assets/lang/en/internxt-library.json`);
  const footer = require(`../assets/lang/en/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbar,
      inxtLibrary,
      footer,
    },
  };
}

export default InternxtLibrary;
