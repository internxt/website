import FaqAccordion from '@/components/shared/FAQAccordion';

interface FAQSectionProps {
  darkMode?: boolean;
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
  darkMode = false,
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
      className={`overflow-hidden ${bgGradient ?? bgColor ?? 'bg-white dark:bg-gray-95'}`}
    >
      <div className="flex flex-col items-center justify-center space-y-10 px-10 py-10 pb-16 lg:pb-10 lg:pt-20">
        <TitleTag
          className={`text-center text-[30px] leading-tight font-semibold lg:max-w-[850px] ${textColor ?? ('text-gray-100 dark:text-white-95')} lg:text-3xl`}
        >
          {textContent.title}
        </TitleTag>
        <div className="flex w-full flex-col space-y-2 lg:max-w-[850px]">
          {textContent.faq.map((item, index) => (
            <div className={`rounded-lg ${cardColor} border border-gray-20 dark:border-gray-71 px-5`} key={item.question}>
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
                totalItems={textContent.faq.length}
                darkMode={darkMode}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
