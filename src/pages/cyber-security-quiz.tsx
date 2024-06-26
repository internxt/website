import { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/layout/navbars/Navbar';
import QuizSection from '@/components/CybersecurityQuiz/QuizSection';
import { CyberSecurityQuizViews } from '@/lib/types';

const CyberSecurityQuiz = ({ metatagsDescriptions, navbarLang, textContent, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'cyber-security-quiz');
  const [isQuizSection, setIsQuizSection] = useState(true);
  const [view, setView] = useState<CyberSecurityQuizViews>();

  const onViewChange = (view: CyberSecurityQuizViews) => {
    setView(view);
  };

  useEffect(() => {
    setView('initialState');
  }, []);

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Cyber Security Quiz"
      lang={lang}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed isQuizSection={isQuizSection} />

      <QuizSection
        textContent={textContent}
        setIsQuizSection={setIsQuizSection}
        onViewChange={onViewChange}
        view={view}
      />
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;

  const metatagsDescriptions = require(`@/assets/lang/en/metatags-descriptions.json`);
  const navbarLang = require(`@/assets/lang/en/navbar.json`);
  const textContent = require(`@/assets/lang/en/cyber-security-quiz.json`);

  return {
    props: {
      metatagsDescriptions,
      navbarLang,
      textContent,
      lang,
    },
  };
}

export default CyberSecurityQuiz;
