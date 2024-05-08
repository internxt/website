import Image from 'next/legacy/image';
import RenderDescription from '@/components/shared/RenderDescription';
import Link from 'next/link';

const QuizSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center justify-center space-y-16 px-5 py-20">
        <div className="flex max-w-[672px] flex-col space-y-3">
          <p className="text-2xl font-medium text-gray-100">{textContent.title}</p>
          <RenderDescription description={textContent.description} />
        </div>

        <Link href={'/cyber-security-quiz'} target="_blank" className="hidden cursor-pointer lg:flex">
          <Image
            src={'/images/cyber-awareness/Internxt_CTA_Blog_CyberSecurityQuiz_EN-1.png'}
            width={897}
            height={350}
            loading="eager"
            alt="Quiz image"
          />
        </Link>

        <div className="flex flex-col rounded-[20px] bg-primary bg-opacity-5 p-8 lg:hidden">
          <div className="flex max-w-[263px] flex-col space-y-6 text-center">
            <div className="flex flex-col space-y-2">
              <p className="text-2xl font-semibold">{textContent.mobileBanner.title}</p>
              <p className="text-lg text-gray-80">{textContent.mobileBanner.description}</p>
            </div>
            <div className="flex w-full flex-col items-center">
              <button
                onClick={() => {
                  window.open(`${window.location.origin}/cyber-security-quiz`, '_self');
                }}
                className="rounded-lg bg-primary px-5 py-3 text-white"
              >
                {textContent.mobileBanner.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
