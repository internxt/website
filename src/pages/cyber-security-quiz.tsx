import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/Navbar';
import QuizSection from '@/components/CybersecurityQuiz/QuizSection';

const CyberSecurityQuiz = ({ metatagsDescriptions, navbarLang, textContent, footerLang, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'cyber-security-quiz');
  const [isQuizSection, setIsQuizSection] = useState(true);

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Cyber Security Quiz"
      lang={lang}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed isQuizSection={isQuizSection} />

      <QuizSection textContent={textContent} setIsQuizSection={setIsQuizSection} />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`../assets/lang/en/metatags-descriptions.json`);
  const navbarLang = require(`../assets/lang/en/navbar.json`);
  const textContent = require(`../assets/lang/en/cyber-security-quiz.json`);
  const footerLang = require(`../assets/lang/en/footer.json`);

  return {
    props: {
      metatagsDescriptions,
      navbarLang,
      textContent,
      footerLang,
      lang,
    },
  };
}

export default CyberSecurityQuiz;
