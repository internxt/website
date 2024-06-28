import Image from 'next/legacy/image';
import Header from '@/components/shared/Header';

interface HeroSectionProps {
  textContent: Record<string, any>;
}

const HeroSection = ({ textContent }: HeroSectionProps): JSX.Element => {
  return (
    <section className="overflow-hidden pt-14">
      <div className="w-full lg:mx-4">
        <div className="flex max-w-screen-xl items-center justify-center lg:mx-auto lg:justify-start">
          <div className="flex flex-col space-y-10 space-x-0 py-16 px-5 pb-20 lg:flex-row lg:space-y-0 lg:space-x-32 lg:py-20">
            <div className="flex max-w-[533px] flex-col space-y-8 text-center lg:text-left">
              <Header>
                {textContent.title.how} <span className="text-primary">{textContent.title.blueText}</span>{' '}
                {textContent.title.normalText}
              </Header>
              <p className="text-xl text-gray-80">{textContent.description}</p>
              <button
                onClick={() => {
                  window.scrollTo({ top: document.getElementById('whatWeDo')!.offsetTop - 70, behavior: 'smooth' });
                }}
                className="flex w-max flex-col items-center rounded-lg bg-primary py-3 px-5 text-lg font-medium text-white"
              >
                {textContent.learnMore}
              </button>
            </div>
            <div className="flex flex-col">
              <Image
                src={`/images/success-stories/${textContent.image.src}`}
                alt={textContent.image.alt}
                width={496}
                height={520}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
