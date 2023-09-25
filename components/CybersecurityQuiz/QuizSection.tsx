import { useEffect, useRef, useState } from 'react';
import Checkbox from '../components/Checkbox';

type Views = 'initialState' | 'questions' | 'results';

interface ViewProps {
  view: Views;
}

const AnswerQuestionsSection = ({ textContent }) => {
  const height = useRef(null);
  const [view, setView] = useState<Views>('initialState');
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    height.current = window.innerHeight;

    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      setCurrentQuestion(parseInt(hash) - 1);
      setView('questions');
    }
  }, []);

  function handleNextQuestion() {
    setCurrentQuestion((previousQuestion) => previousQuestion + 1);
    window.location.hash = `#${currentQuestion + 1}`;
  }

  const View = (viewSelected: ViewProps) => {
    const view = {
      initialState: (
        <>
          <div className="flex max-w-[529px] flex-col space-y-5 pb-40 pt-44">
            <h1 className="text-6xl font-semibold">{textContent.title}</h1>
            <h1 className="text-3xl font-semibold">{textContent.subtitle}</h1>
            <h1 className="text-lg">{textContent.description}</h1>
            <button
              onClick={() => {
                setView('questions');
                window.location.hash = `#${currentQuestion + 1}`;
              }}
              className="w-max items-center rounded-lg bg-primary px-5 py-3"
            >
              {textContent.cta}
            </button>
          </div>
          <img src="/images/cyber-awareness/Frame.svg" alt="quiz-laptop" />
        </>
      ),
      questions: (
        <div id={`${currentQuestion + 1}`} className={`flex flex-col space-y-5 pb-40 pt-44`}>
          <p className="text-2xl font-semibold">
            {textContent.question} {currentQuestion + 1}:
          </p>
          <p className="text-4xl">{textContent.questions[currentQuestion].title}</p>
          <div className="flex flex-row items-center space-x-2 text-white">
            <Checkbox rounded="rounded-md" checked id="A" />
            <p className="text-xl">{textContent.questions[currentQuestion].A}</p>
          </div>
          <p className="text-xl">{textContent.questions[currentQuestion].B}</p>
          <p className="text-xl">{textContent.questions[currentQuestion].C}</p>
          <button onClick={handleNextQuestion} className="w-max items-center rounded-lg bg-primary px-5 py-3">
            {textContent.nextQuestion}
          </button>
        </div>
      ),
    };
    return view[viewSelected.view];
  };

  return (
    <section
      className="overflow-hidden"
      style={{
        background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #161616 100%)',
        height: height.current,
      }}
    >
      <div className="ml-24 flex flex-row justify-between px-5 text-white">
        <View view={view} />
      </div>
    </section>
  );
};

export default AnswerQuestionsSection;
