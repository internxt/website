import { useEffect, useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';
import ReactMarkdown from 'react-markdown';
import { formatText } from '../utils/format-text';
import { parseDynamicText } from '../utils/parse-dynamic-text';

const PLACEHOLDER_REGEX = /\{\{\w+\}\}/;

export default function FaqAccordion({
  question,
  answer,
  isQuestionBigger = false,
  textColor,
  percentageDiscount,
  needsH3,
  needsSpecialH3 = false,
  index,
  totalItems,
}: {
  question: string;
  answer: string[];
  isQuestionBigger?: boolean;
  textColor?: string;
  percentageDiscount?: string;
  needsH3?: boolean;
  needsSpecialH3?: boolean;
  index?: number;
  totalItems?: number;
}): JSX.Element {
  const [active, setActive] = useState(false);
  const isDiscountPending = !percentageDiscount || percentageDiscount === '0';

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

  const isSpecialParagraph = 
    needsSpecialH3 &&
    typeof index === 'number' &&
    typeof totalItems === 'number' &&
    index < totalItems - 2;

  const defaultTag = needsH3 ? 'h3' : 'p';

  const QuestionTag = isSpecialParagraph ? 'h3' : defaultTag;

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
        } duration-250 whitespace-wrap w-full pr-14 text-left text-base lg:text-lg ${
          textColor ? textColor : 'text-gray-60'
        } transition-all ease-in-out`}
      >
        {(Array.isArray(answer) ? answer : [answer]).map((text) => {
          const hasPlaceholder = typeof text === 'string' && PLACEHOLDER_REGEX.test(text);

          // The discount comes from a client-only Stripe fetch, so it is unknown while the
          // page is rendered on the server. ReactMarkdown only accepts a string, so in that
          // window the answer is rendered as plain text with a skeleton where the number
          // goes, instead of leaking "{{percentage}}" or a 0% discount into the HTML.
          if (hasPlaceholder && isDiscountPending) {
            return <p key={text}>{parseDynamicText(text, { percentage: undefined, discount: undefined })}</p>;
          }

          return (
            <ReactMarkdown key={text}>
              {hasPlaceholder
                ? formatText(text, { percentage: percentageDiscount as string, discount: percentageDiscount as string })
                : text}
            </ReactMarkdown>
          );
        })}
      </span>
    </div>
  );
}
