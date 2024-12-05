import { MutableRefObject, useEffect, useRef, useState } from 'react';
import Footer from '@/components/layout/footers/Footer';
import CheckQuestions from './CheckQuestions';
import { CyberSecurityQuizViews } from '@/lib/types';
import Link from 'next/link';
import Checkbox from '../components/Checkbox';
import { getImage } from '@/lib/getImage';

interface ViewProps {
  view: CyberSecurityQuizViews | undefined;
  textContent: any;
  height: MutableRefObject<number>;
  currentQuestion: number;
  currentCheckbox: string;
  savedAnswers: string[];
  onViewChange: (view: CyberSecurityQuizViews) => void;
  handleCheckbox: (answer: string) => void;
  setIsQuizSection: (isQuizSection: boolean) => void;
  handleNextQuestion: () => void;
}

interface AnswerQuestionsSectionProps {
  textContent: any;
  view: CyberSecurityQuizViews | undefined;
  setIsQuizSection: (isQuizSection: boolean) => void;
  onViewChange: (newView: CyberSecurityQuizViews) => void;
}

const View = (viewSelected: ViewProps | undefined) => {
  const footerLang = require(`../../assets/lang/en/footer.json`);
  if (viewSelected?.view === undefined) return <></>;

  const {
    textContent,
    height,
    currentQuestion,
    currentCheckbox,
    savedAnswers,
    onViewChange,
    handleCheckbox,
    setIsQuizSection,
    handleNextQuestion,
  } = viewSelected;

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
            <div className="flex w-full max-w-[529px] flex-col items-center justify-center space-y-5 py-32 text-center xl:ml-3 xl:items-start xl:pb-40 xl:pt-44 xl:text-left">
              <h1 className="text-5xl font-semibold xl:text-6xl">{textContent.QuizSection.title}</h1>
              <p className="text-3xl font-semibold">{textContent.QuizSection.subtitle}</p>
              <p className="text-lg">{textContent.QuizSection.description}</p>
              <button
                onClick={() => {
                  onViewChange('questions');
                }}
                className="w-full rounded-lg bg-primary px-5 py-3 xl:w-max"
              >
                {textContent.QuizSection.cta}
              </button>
            </div>
            <div className="flex flex-col">
              <img
                src={getImage('/images/cyber-awareness/Frame.svg')}
                alt="quiz-laptop"
                className="fixed right-0 top-0 hidden h-screen xl:flex 2xl:relative"
              />
            </div>
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
              <button
                onClick={() => handleCheckbox('A')}
                className="flex cursor-pointer flex-row items-center space-x-2 text-white"
              >
                <Checkbox
                  onClick={() => handleCheckbox('A')}
                  rounded="rounded-md"
                  showCheckIcon
                  checked={currentCheckbox === 'A'}
                  id="A"
                />
                <p className="text-xl">{textContent.QuizSection.questions[currentQuestion].A}</p>
              </button>
              <button
                onClick={() => handleCheckbox('B')}
                className="flex cursor-pointer flex-row items-center space-x-2 text-white"
              >
                <Checkbox
                  onClick={() => handleCheckbox('B')}
                  checked={currentCheckbox === 'B'}
                  showCheckIcon
                  rounded="rounded-md"
                  id="B"
                />
                <p className="text-xl">{textContent.QuizSection.questions[currentQuestion].B}</p>
              </button>
              <button
                onClick={() => handleCheckbox('C')}
                className="flex cursor-pointer flex-row items-center space-x-2 text-white"
              >
                <Checkbox
                  onClick={() => handleCheckbox('C')}
                  rounded="rounded-md"
                  checked={currentCheckbox === 'C'}
                  showCheckIcon
                  id="C"
                />
                <p className="text-xl">{textContent.QuizSection.questions[currentQuestion].C}</p>
              </button>
              {textContent.QuizSection.questions[currentQuestion].D && (
                <button
                  onClick={() => handleCheckbox('D')}
                  className="flex cursor-pointer flex-row items-center space-x-2 text-white"
                >
                  <Checkbox
                    onClick={() => handleCheckbox('D')}
                    rounded="rounded-md"
                    checked={currentCheckbox === 'D'}
                    showCheckIcon
                    id="C"
                  />
                  <p className="text-xl">{textContent.QuizSection.questions[currentQuestion].D}</p>
                </button>
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
        <div className="flex h-full w-full flex-row px-5 text-white lg:ml-8">
          <div className="mx-auto flex w-full items-center justify-center xl:max-w-screen-xl xl:justify-between 2xl:ml-44 2xl:max-w-full 2xl:justify-center 2xl:space-x-2">
            <div className="flex w-full max-w-[529px] flex-col space-y-5 pt-20 lg:pt-44 xl:pb-40">
              <p className="text-center text-5xl font-semibold xl:text-left xl:text-6xl">
                {textContent.QuizSection.quizCompleted.title}
              </p>
              <p className="text-center text-2xl font-semibold xl:text-left">
                {textContent.QuizSection.quizCompleted.subtitle}
              </p>
              <p className="text-center text-lg xl:text-left">{textContent.QuizSection.quizCompleted.description}</p>
              <ul className="flex list-[square] flex-col space-y-1.5 pl-6">
                <li className="cursor-pointer text-lg font-bold hover:underline">
                  <Link href="/cyber-awareness" target="_blank">
                    {textContent.QuizSection.quizCompleted.cyberAwareness}
                  </Link>
                </li>
                <li className="cursor-pointer text-lg font-bold hover:underline">
                  <button
                    className="cursor-pointer"
                    onClick={() =>
                      window.open(`${window.origin}/images/cyber-awareness/Internxt-Checklist.pdf`, '_blank')
                    }
                  >
                    {textContent.QuizSection.quizCompleted.cyberSecurityChecklist}
                  </button>
                </li>
                <li className="cursor-pointer text-lg font-bold hover:underline">
                  <Link href={'/what-does-google-know-about-me'} target="_blank">
                    {textContent.QuizSection.quizCompleted.whatGoogleKnows}
                  </Link>
                </li>
                <li className="cursor-pointer text-lg font-bold hover:underline">
                  <Link href={'/password-generator'} target="_blank">
                    {textContent.QuizSection.quizCompleted.passwordGenerator}
                  </Link>
                </li>
                <li className="cursor-pointer text-lg font-bold hover:underline">
                  <Link href={'/virus-scanner'} target="_blank">
                    {textContent.QuizSection.quizCompleted.freeVirusScanner}
                  </Link>
                </li>
                <li className="cursor-pointer text-lg font-bold hover:underline">
                  <Link href={'/password-checker'} target="_blank">
                    {textContent.QuizSection.quizCompleted.passwordChecker}
                  </Link>
                </li>
              </ul>

              <button
                onClick={() => {
                  onViewChange('results');
                  setIsQuizSection(false);
                }}
                className="w-full items-center justify-center rounded-lg bg-primary px-5 py-3 xl:w-max"
              >
                {textContent.QuizSection.quizCompleted.cta}
              </button>
            </div>
            <div className="flex flex-col">
              <img
                src="/images/cyber-awareness/Frame.svg"
                alt="quiz-laptop"
                className="fixed right-0 top-0 hidden h-screen xl:flex 2xl:relative"
              />
            </div>
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

  if (viewSelected?.view === undefined) return view.initialState;

  return view[viewSelected.view];
};

const AnswerQuestionsSection = ({ textContent, view, setIsQuizSection, onViewChange }: AnswerQuestionsSectionProps) => {
  const height = useRef(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentCheckbox, setCurrentCheckbox] = useState<string>('');
  const [savedAnswers, setSavedAnswers] = useState<string[]>([]);

  useEffect(() => {
    height.current = window.innerHeight;
  }, []);

  function handleNextQuestion() {
    if (currentQuestion + 1 === 8) {
      onViewChange('quizCompleted');
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

  return (
    <View
      view={view}
      currentCheckbox={currentCheckbox}
      currentQuestion={currentQuestion}
      handleCheckbox={handleCheckbox}
      handleNextQuestion={handleNextQuestion}
      height={height}
      onViewChange={onViewChange}
      savedAnswers={savedAnswers}
      setIsQuizSection={setIsQuizSection}
      textContent={textContent}
    />
  );
};

export default AnswerQuestionsSection;
