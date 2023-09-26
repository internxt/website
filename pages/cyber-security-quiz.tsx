import { useState } from 'react';
import CheckQuestions from '../components/CybersecurityQuiz/CheckQuestions';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import QuizSection from '../components/CybersecurityQuiz/QuizSection';

const CyberSecurityQuiz = ({ metatagsDescriptions, navbarLang, textContent, footerLang, lang }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'cyber-security-quiz');
  const [questionsAnswers, setQuestionsAnswers] = useState([]);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  return (
    <Layout
      title={metatags[0].title}
      description={metatags[0].description}
      segmentName="Cyber Security Quiz"
      lang={lang}
    >
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} fixed isQuizSection />

      <QuizSection textContent={textContent} setQuestionsAnswers={setQuestionsAnswers} />

      {/* <CheckQuestions textContent={textContent.CheckQuestions} /> */}

      {/* <Footer textContent={footerLang} lang={lang} /> */}
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
