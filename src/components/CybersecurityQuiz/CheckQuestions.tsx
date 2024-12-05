import { getImage } from '@/lib/getImage';
import QuestionsSection from './QuestionsSection';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

const CheckQuestions = ({ textContent, answers, correctAnswers }) => {
  const isCorrectAnswer = correctAnswers.map((answer, index) => {
    return answers[index] === answer;
  });

  const correctAnswerLength = isCorrectAnswer.filter((answer) => answer === true).length;

  const shareUrlFacebook = 'https://www.facebook.com/sharer/sharer.php';
  const shareUrlTwitter = 'https://twitter.com/intent/tweet';
  const urlToShare = `${window.location.origin}/cyber-security-quiz`;
  const linkedinTitle = 'Internxt Cybersecurity Quiz';
  const textToShare = `I just scored ${correctAnswerLength}${textContent.totalQuestions} on Internxt’s cybersecurity quiz! Can you beat my score? Try it and find out!`;

  const facebookShareLink = `${shareUrlFacebook}?u=${encodeURIComponent(
    urlToShare,
  )}survey.php?title=${encodeURIComponent(textToShare)}`;
  const twitterShareLink = `${shareUrlTwitter}?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(
    textToShare,
  )}`;
  const linkedInShareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    urlToShare,
  )}&title=${encodeURIComponent(linkedinTitle)}`;

  function getTitle() {
    if (correctAnswerLength <= 3) {
      return { title: textContent.lessThan3.title, subtitle: textContent.lessThan3.subtitle };
    } else if (correctAnswerLength <= 5) {
      return {
        title: textContent.lessThan5.title,
        subtitle: textContent.lessThan5.subtitle,
      };
    } else if (correctAnswerLength > 5) {
      return {
        title: textContent.moreThan6.title,
        subtitle: textContent.moreThan6.subtitle,
      };
    }
  }

  return (
    <section className="overflow-hidden">
      <div className="flex  flex-col items-center justify-center px-5 pt-32 xl:pt-40">
        <div className="flex w-full max-w-[847px] flex-col space-y-6 text-center">
          <p className="text-5xl font-semibold text-gray-100">{getTitle()?.title}</p>
          <ReactMarkdown className="markdown text-xl text-gray-80">{getTitle()?.subtitle}</ReactMarkdown>
          <p className="text-9xl font-bold text-primary">
            {correctAnswerLength}
            {textContent.totalQuestions}
          </p>
          <p className="text-xl text-gray-80">{textContent.shareTheResults}</p>
          <div className="flex flex-row items-center justify-center space-x-6">
            <p className="text-xl font-bold text-gray-80">{textContent.shareYourResults}</p>
            <div className="flex flex-row space-x-4">
              <a href={twitterShareLink} target="_blank" rel="noopener noreferrer">
                <Image
                  width={18}
                  height={18}
                  src={getImage(`/icons/social/cool-gray-60/twitter.svg`)}
                  draggable="false"
                  alt="twitter icon"
                />
              </a>
              <a href={facebookShareLink} target="_blank" rel="noopener noreferrer">
                <Image
                  width={18}
                  height={18}
                  src={getImage(`/icons/social/cool-gray-60/facebook.svg`)}
                  draggable="false"
                  alt="facebook icon"
                />
              </a>
              <a href={linkedInShareLink} target="_blank" rel="noopener noreferrer">
                <Image
                  width={18}
                  height={18}
                  src={getImage(`/icons/social/cool-gray-60/linkedin.svg`)}
                  draggable="false"
                  alt="linkedin icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center xl:py-16">
          <div className="flex flex-col items-center space-y-16">
            <QuestionsSection textContent={textContent.QuestionsSection} isCorrectAnswer={isCorrectAnswer} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckQuestions;
