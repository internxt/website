import Image from 'next/image';
import RenderDescription from '../shared/RenderDescription';

const QuizSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center justify-center space-y-16 px-5 py-20">
        <div className="flex max-w-[672px] flex-col space-y-3">
          <p className="text-2xl font-medium text-gray-100">{textContent.title}</p>
          <RenderDescription description={textContent.description} />
        </div>
        <div
          className="flex cursor-pointer"
          onClick={() => {
            window.open(`${window.location.origin}/cyber-security-quiz`, '_blank');
          }}
        >
          <Image
            src={'/images/cyber-awareness/Internxt_CTA_Blog_CyberSecurityQuiz_EN-1.png'}
            width={897}
            height={350}
            alt="Quiz image"
          />
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
