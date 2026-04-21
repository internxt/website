import { useEffect, useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';
import ReactMarkdown from 'react-markdown';
import { formatText } from '../utils/format-text';

export default function FaqAccordion({
  question,
  answer,
  isQuestionBigger = false,
  textColor,
  percentageDiscount = '70',
  needsH3,
  needsSpecialH3 = false,
  index,
}: {
  question: string;
  answer: string[];
  isQuestionBigger?: boolean;
  textColor?: string;
  percentageDiscount?: string;
  needsH3?: boolean;
  needsSpecialH3?: boolean;
  index?: number;
}): JSX.Element {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const bulletedList = document.querySelectorAll('.markdown ul');
    bulletedList.forEach((list) => {
      list.classList.add('list-disc', 'list-inside');
    });

    const links = document.querySelectorAll('.markdown a');
    links.forEach((link) => {
      link.setAttribute('target', '_blank');
    });
  }, []);

  const QuestionTag =
    needsSpecialH3 && typeof index === 'number' ? (index < 5 ? 'h3' : 'p') : needsH3 ? 'h3' : 'p';
  return (
    <div className="flex flex-col items-stretch justify-start">
      <button
        type="button"
        onClick={() => {
          setActive(!active);
        }}
        className="my-5 flex cursor-pointer flex-row items-center justify-between space-x-6 text-left hover:text-primary"
      >
        <QuestionTag
          className={`w-full text-lg font-medium ${textColor ? textColor : 'text-gray-100'} ${
            isQuestionBigger ? 'md:text-2xl' : 'md:text-xl'
          }`}
        >
          {question}
        </QuestionTag>
        <PlusCircle size={32} className={`${active && 'rotate-45'} duration-250 transition-transform ease-in-out`} />
      </button>

      <span
        className={`markdown will-change-height flex h-auto flex-col space-y-3 overflow-hidden ${
          active ? 'max-h-double-screen pb-8 opacity-100' : 'max-h-0 opacity-50'
        } duration-250 whitespace-wrap w-full pr-14 text-left text-lg ${
          textColor ? textColor : 'text-gray-60'
        } transition-all ease-in-out`}
      >
        {(Array.isArray(answer) ? answer : [answer]).map((text) => {
          return (
            <ReactMarkdown key={text}>
              {formatText(text, { percentage: percentageDiscount?.toString() ?? '70' })}
            </ReactMarkdown>
          );
        })}
      </span>
    </div>
  );
}
