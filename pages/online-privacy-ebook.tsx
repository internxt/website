import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/inxt-library/shared/HeroSection';

const OnlinePrivacyEbook = ({ lang, metatagsDescriptions, navbar, textContent, footer }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'online-privacy-ebook');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description}>
      <Navbar fixed lang="en" textContent={navbar} cta={['default']} />

      <HeroSection
        textContent={textContent.HeroSection}
        imageUrl={'/images/inxt-library/internxt_ebook_download.webp'}
        altImage={'Internxt eBook download'}
      />

      <Footer textContent={footer} lang={'en'} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/en/metatags-descriptions.json`);
  const navbar = require(`../assets/lang/en/navbar.json`);
  const textContent = require(`../assets/lang/en/online-privacy-ebook.json`);
  const footer = require(`../assets/lang/en/footer.json`);

  return {
    props: {
      lang,
      metatagsDescriptions,
      navbar,
      textContent,
      footer,
    },
  };
}

export default OnlinePrivacyEbook;
