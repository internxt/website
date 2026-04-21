import FaqAccordion from '@/components/shared/FAQAccordion';

interface FAQSectionProps {
  textContent: any;
  bgColor?: string;
  bgGradient?: string;
  cardColor?: string;
  textColor?: string;
  percentageDiscount?: string;
  needsH3?: boolean;
  needsSpecialH3?: boolean;
  needsH2?: boolean;
}

const FAQSection = ({
  textContent,
  bgColor,
  cardColor,
  textColor,
  percentageDiscount,
  needsH3 = true,
  bgGradient,
  needsSpecialH3 = false,
  needsH2 = false,
}: FAQSectionProps) => {
  const TitleTag = needsH2 ? 'h2' : 'p';
  return (
    <section
      className={`overflow-hidden ${bgColor ?? 'bg-white'}`}
      style={bgGradient ? { background: bgGradient } : undefined}
    >
      <div className="flex flex-col items-center justify-center space-y-10 px-10 py-10 pb-16 lg:pb-10 lg:pt-20">
        <TitleTag
          className={`text-center text-30 font-semibold lg:max-w-[850px] ${
            textColor ? textColor : 'text- gray-100'
          } lg:text-3xl`}
        >
          {textContent.title}
        </TitleTag>
        <div className="flex w-full flex-col space-y-2 lg:max-w-[850px]">
          {textContent.faq.map((item, index) => (
            <div className={`rounded-lg ${cardColor} border border-gray-20 px-5`} key={item.question}>
              <FaqAccordion
                key={item.question}
                question={item.question}
                answer={item.answer}
                isQuestionBigger
                textColor={textColor}
                percentageDiscount={percentageDiscount}
                needsH3={needsH3}
                needsSpecialH3={needsSpecialH3}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
