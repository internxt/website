import FaqAccordion from '@/components/shared/FAQAccordion';

interface FAQSectionProps {
  textContent: any;
  bgColor?: string;
  cardColor?: string;
}

const FAQSection = ({ textContent, bgColor, cardColor }: FAQSectionProps) => {
  return (
    <section className={`overflow-hidden ${bgColor ?? 'bg-white'}`}>
      <div className="flex flex-col items-center justify-center space-y-10 px-10 pb-16 pt-10 lg:py-20">
        <p className="text-center text-30 font-semibold text-gray-100 lg:text-3xl ">{textContent.title}</p>
        <div className="flex w-full max-w-[850px] flex-col space-y-2">
          {textContent.faq.map((item) => (
            <div className={`rounded-lg ${cardColor} border border-gray-20 px-5`} key={item.question}>
              <FaqAccordion key={item.question} question={item.question} answer={item.answer} isQuestionBigger />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
