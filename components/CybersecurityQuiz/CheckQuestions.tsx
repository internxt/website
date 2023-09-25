import { InstagramLogo } from '@phosphor-icons/react';
import { TwitterIcon } from 'next-share';
import QuestionsSection from './QuestionsSection';

const CheckQuestions = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex  flex-col items-center justify-center py-40 px-5">
        <div className="flex w-full max-w-[847px] flex-col space-y-6 text-center">
          <h1 className="text-5xl font-semibold text-gray-100">{textContent.lessThan3.title}</h1>
          <p className="text-xl text-gray-80">{textContent.lessThan3.subtitle}</p>
          <p className="text-9xl font-bold text-primary">X{textContent.totalQuestions}</p>
          <p className="text-xl text-gray-80">{textContent.shareTheResults}</p>
          <div className="flex flex-row items-center justify-center space-x-6">
            <p className="text-xl font-bold text-gray-80">{textContent.shareYourResults}</p>
            <div className="flex flex-row space-x-4">
              <InstagramLogo size={18} />
              <TwitterIcon size={18} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-16">
          <div className="flex flex-col items-center space-y-16">
            <QuestionsSection textContent={textContent.QuestionsSection} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckQuestions;
