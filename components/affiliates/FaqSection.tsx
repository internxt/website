import FaqAccordion from '../shared/FAQAccordion';

const FaqSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-white">
      <div className="flex flex-col items-center justify-center space-y-10 px-10 py-20">
        <p className="text-center text-4xl font-semibold">{textContent.title}</p>
        <div className="flex w-full max-w-[850px] flex-col space-y-2">
          {textContent.faq.map((item) => (
            <div className="rounded-lg border border-gray-20 px-5" key={item.question}>
              <FaqAccordion key={item.question} question={item.question} answer={item.answer} isQuestionBigger />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
