'use client';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ConversionsSection from '@/components/file-converter/ConversionsSection';
import ToolsSection from '@/components/shared/ToolsSection';

const FileConverter = ({ metatagsDescriptions, navbarLang, textContent, footerLang, lang, toolsContent }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'file-converter');
  

  return (
    <Layout segmentName="Temporary email" title={metatags[0].title} description={metatags[0].description} lang={lang}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed />

      <ConversionsSection textContent={textContent.ConversionsSection} />

      <ToolsSection textContent={toolsContent} lang={lang} />

      <Footer textContent={footerLang} lang={lang} hideNewsletter={false} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/en/navbar.json`);
  const textContent = require(`@/assets/lang/en/file-converter.json`);
  const footerLang = require(`@/assets/lang/en/footer.json`);
  const toolsContent = require(`@/assets/lang/en/components/tools/ToolSection.json`);

  return {
    props: {
      metatagsDescriptions,
      navbarLang,
      textContent,
      footerLang,
      lang,
      toolsContent,
    },
  };
}

export default FileConverter;
