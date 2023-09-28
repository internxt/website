import { useEffect, useRef, useState } from 'react';
import Checkbox from './Checkbox';
import Footer from '../layout/Footer';
import CheckQuestions from './CheckQuestions';
import Link from 'next/link';

type Views = 'initialState' | 'questions' | 'quizCompleted' | 'results';

interface ViewProps {
  view: Views;
}

const AnswerQuestionsSection = ({ textContent, setIsQuizSection }) => {
  const height = useRef(null);
  const [view, setView] = useState<Views>('initialState');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentCheckbox, setCurrentCheckbox] = useState<string>('');
  const [savedAnswers, setSavedAnswers] = useState<string[]>([]);

  const footerLang = require(`../../assets/lang/en/footer.json`);

  useEffect(() => {
    height.current = window.innerHeight;
  }, []);

  function handleNextQuestion() {
    if (currentQuestion + 1 === 8) {
      setView('quizCompleted');
    } else {
      setCurrentQuestion((previousQuestion) => previousQuestion + 1);
    }
    setSavedAnswers((previousAnswers) => [...previousAnswers, currentCheckbox]);
    setCurrentCheckbox('');
  }

  function handleCheckbox(answer: string) {
    if (answer === currentCheckbox) {
      setCurrentCheckbox('');
      setSavedAnswers((previousAnswers) => previousAnswers.filter((item) => item !== answer));
    } else {
      setCurrentCheckbox(answer);
    }
  }

  const View = (viewSelected: ViewProps) => {
    const view = {
      initialState: (
        <section
          id="initialState"
          className="flex h-screen items-center justify-center"
          style={{
            background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #161616 100%)',
            height: height.current,
          }}
        >
          <div className="flex h-full w-full flex-row px-5 text-white lg:ml-8 xl:overflow-hidden">
            <div className="mx-auto flex w-full items-center justify-center xl:max-w-screen-xl xl:justify-between 2xl:ml-44 2xl:max-w-full 2xl:justify-center 2xl:space-x-2">
              <div className="flex max-w-[529px] flex-col items-center justify-center space-y-5 py-32 text-center xl:ml-3 xl:items-start xl:pb-40 xl:pt-44 xl:text-left">
                <h1 className="text-5xl font-semibold xl:text-6xl">{textContent.QuizSection.title}</h1>
                <p className="text-3xl font-semibold">{textContent.QuizSection.subtitle}</p>
                <p className="text-lg">{textContent.QuizSection.description}</p>
                <button
                  onClick={() => {
                    setView('questions');
                  }}
                  className="w-full rounded-lg bg-primary px-5 py-3 xl:w-max"
                >
                  {textContent.QuizSection.cta}
                </button>
              </div>
              <img
                src="/images/cyber-awareness/Frame.svg"
                alt="quiz-laptop"
                className="fixed right-0 top-0 hidden xl:flex"
              />
            </div>
          </div>
        </section>
      ),
      questions: (
        <section
          className="h-screen overflow-y-auto"
          style={{
            background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #161616 100%)',
            height: height.current,
          }}
        >
          <div className="flex flex-col items-center justify-start px-5 text-white md:ml-5 md:items-start xl:ml-28 2xl:mx-auto 2xl:max-w-screen-xl">
            <div
              id={`${currentQuestion + 1}`}
              className={`flex flex-col space-y-8 py-24 xl:items-start xl:space-y-5 xl:pb-40 xl:pt-44`}
            >
              <p className=" text-2xl font-semibold ">
                {textContent.QuizSection.question} {currentQuestion + 1}:
              </p>
              <p className="text-4xl">{textContent.QuizSection.questions[currentQuestion].title}</p>
              <div className="flex flex-col space-y-8 xl:space-y-5">
                <div
                  onClick={() => handleCheckbox('A')}
                  className="flex cursor-pointer flex-row items-center space-x-2 text-white"
                >
                  <Checkbox
                    onClick={() => handleCheckbox('A')}
                    rounded="rounded-md"
                    checked={currentCheckbox === 'A'}
                    id="A"
                  />
                  <p className="text-xl">{textContent.QuizSection.questions[currentQuestion].A}</p>
                </div>
                <div
                  onClick={() => handleCheckbox('B')}
                  className="flex cursor-pointer flex-row items-center space-x-2 text-white"
                >
                  <Checkbox
                    onClick={() => handleCheckbox('B')}
                    checked={currentCheckbox === 'B'}
                    rounded="rounded-md"
                    id="B"
                  />
                  <p className="text-xl">{textContent.QuizSection.questions[currentQuestion].B}</p>
                </div>
                <div
                  onClick={() => handleCheckbox('C')}
                  className="flex cursor-pointer flex-row items-center space-x-2 text-white"
                >
                  <Checkbox
                    onClick={() => handleCheckbox('C')}
                    rounded="rounded-md"
                    checked={currentCheckbox === 'C'}
                    id="C"
                  />
                  <p className="text-xl">{textContent.QuizSection.questions[currentQuestion].C}</p>
                </div>
                {textContent.QuizSection.questions[currentQuestion].D && (
                  <div
                    onClick={() => handleCheckbox('D')}
                    className="flex cursor-pointer flex-row items-center space-x-2 text-white"
                  >
                    <Checkbox
                      onClick={() => handleCheckbox('D')}
                      rounded="rounded-md"
                      checked={currentCheckbox === 'D'}
                      id="C"
                    />
                    <p className="text-xl">{textContent.QuizSection.questions[currentQuestion].D}</p>
                  </div>
                )}
              </div>

              <button
                disabled={currentCheckbox === ''}
                onClick={handleNextQuestion}
                className={`${
                  currentCheckbox === '' ? 'cursor-not-allowed bg-gray-20' : 'cursor-pointer bg-primary'
                } flex w-full flex-col items-center justify-center rounded-lg px-5 py-3 md:w-max`}
              >
                {textContent.QuizSection.nextQuestion}
              </button>
            </div>
          </div>
        </section>
      ),
      quizCompleted: (
        <section
          id="quizCompleted"
          className="h-screen overflow-auto xl:overflow-hidden"
          style={{
            background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #161616 100%)',
            height: height.current,
          }}
        >
          <div className="flex w-full flex-row px-5 text-white lg:ml-8">
            <div className="mx-auto flex w-full items-center justify-center xl:max-w-screen-xl xl:justify-between 2xl:ml-44 2xl:max-w-full 2xl:justify-center 2xl:space-x-2">
              <div className="flex max-w-[529px] flex-col items-start space-y-5 py-24 lg:pt-44 xl:pb-40">
                <p className="text-center text-6xl font-semibold xl:text-left">
                  {textContent.QuizSection.quizCompleted.title}
                </p>
                <p className="text-center text-2xl font-semibold xl:text-left">
                  {textContent.QuizSection.quizCompleted.subtitle}
                </p>
                <p className="text-center text-lg xl:text-left">{textContent.QuizSection.quizCompleted.description}</p>
                <ul className="flex list-[square] flex-col space-y-1.5 pl-6">
                  <li className="cursor-pointer text-lg font-bold hover:underline">
                    <Link href={'/cyber-awareness'}>{textContent.QuizSection.quizCompleted.cyberAwareness}</Link>
                  </li>
                  <li className="cursor-pointer text-lg font-bold hover:underline">
                    <Link href={'/images/cyber-awareness/Internxt-Checklist.pdf'}>
                      {textContent.QuizSection.quizCompleted.cyberSecurityChecklist}
                    </Link>
                  </li>
                  <li className="cursor-pointer text-lg font-bold hover:underline">
                    <Link href={'/what-does-google-know-about-me'}>
                      {textContent.QuizSection.quizCompleted.whatGoogleKnows}
                    </Link>
                  </li>
                  <li className="cursor-pointer text-lg font-bold hover:underline">
                    <Link href={'/password-generator'}>{textContent.QuizSection.quizCompleted.passwordGenerator}</Link>
                  </li>
                  <li className="cursor-pointer text-lg font-bold hover:underline">
                    <Link href={'/virus-scanner'}>{textContent.QuizSection.quizCompleted.freeVirusScanner}</Link>
                  </li>
                  <li className="cursor-pointer text-lg font-bold hover:underline">
                    <Link href={'/password-checker'}>{textContent.QuizSection.quizCompleted.passwordChecker}</Link>
                  </li>
                </ul>

                <button
                  onClick={() => {
                    setView('results');
                    setIsQuizSection(false);
                  }}
                  className="w-full items-center justify-center rounded-lg bg-primary px-5 py-3 xl:w-max"
                >
                  {textContent.QuizSection.quizCompleted.cta}
                </button>
              </div>
              <img
                src="/images/cyber-awareness/Frame.svg"
                alt="quiz-laptop"
                className="fixed right-0 top-0 hidden xl:flex"
              />
            </div>
          </div>
        </section>
      ),
      results: (
        <>
          <CheckQuestions
            textContent={textContent.CheckQuestions}
            answers={savedAnswers}
            correctAnswers={textContent.QuizSection.correctAnswers}
          />
          <Footer textContent={footerLang} lang="en" />
        </>
      ),
    };
    return view[viewSelected.view];
  };

  return (
    <>
      <View view={view} />
    </>
  );
};

export default AnswerQuestionsSection;
