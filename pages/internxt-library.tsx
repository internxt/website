import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';

const InternxtLibrary = ({ lang, metatagDescription, navbar, inxtLibrary, footer }) => {
  const metatags = metatagDescription.find((item) => item.page === 'internxt-library');

  return (
    <Layout title={metatags[0].title} description={metatags[0].description}>
      <Navbar lang="en" textContent={navbar} cta={['default']} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagDescription = require(`../assets/lang/en/metatags-descriptions.json`);
  const navbar = require(`../assets/lang/en/navbar.json`);
  const inxtLibrary = require(`../assets/lang/en/internxt-library.json`);
  const footer = require(`../assets/lang/en/footer.json`);

  return {
    props: {
      lang,
      metatagDescription,
      navbar,
      inxtLibrary,
      footer,
    },
  };
}

export default InternxtLibrary;
