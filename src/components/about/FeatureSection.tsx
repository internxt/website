import { CaretRight } from '@phosphor-icons/react';
import RevealX from '@/components/components/RevealX';
import { getImage } from '@/lib/getImage';
import HorizontalScrollableSection from './HorizontalScrollableSection';

const FeatureSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden" style={{ background: 'linear-gradient(180deg, #F4F8FF 63.1%, #FFFFFF 100%)' }}>
      <HorizontalScrollableSection textContent={textContent.ScrollableSection} />
      <section className="flex flex-col-reverse items-center justify-center gap-8 bg-white py-10 lg:flex-row lg:px-10 lg:py-20 xl:px-32 3xl:px-80">
        <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32 " />
        <RevealX direction="right" className="hidden lg:flex">
          <video
            width={500}
            height={520}
            className="rounded-2xl"
            autoPlay
            controls
            loop
            playsInline
            style={{ objectFit: 'cover' }}
          >
            <source src={getImage('/videos/about/INTRNXT_ANIM_MAIN_INGLES_1-1.mp4')} type="video/mp4" />
            <track kind="captions" srcLang="en" label="English" />
          </video>
        </RevealX>

        <RevealX direction="right" className="flex lg:hidden">
          <video
            width={345}
            height={324}
            className="rounded-2xl"
            controls
            autoPlay
            loop
            playsInline
            style={{ objectFit: 'cover' }}
          >
            <source src={getImage('/videos/about/INTRNXT_ANIM_MAIN_INGLES_1-1.mp4')} type="video/mp4" />
            <track kind="captions" srcLang="en" label="English" />
          </video>
        </RevealX>
        <div className="flex w-[554px] flex-col items-center justify-center space-y-6 md:items-start">
          <p className="w-[345px] text-30 font-bold leading-tight text-gray-100 lg:w-[480px] lg:text-5xl">
            {textContent.BetterFutureSection.title}
          </p>
          <p className="w-[345px] text-base font-normal leading-tight text-gray-55 lg:w-[554px]">
            {textContent.BetterFutureSection.description}
          </p>
          <div className="flex w-[345px] flex-row items-center justify-start space-x-1 hover:underline lg:w-full">
            <button
              className="cursor-pointer text-base font-medium text-primary hover:text-primary-dark"
              onClick={() => {
                window.open('https://internxt.com/pricing', '_blank', 'noopener noreferrer');
              }}
            >
              {textContent.BetterFutureSection.cta}
            </button>
            <CaretRight size={20} className="pt-[2px] text-primary" />
          </div>
        </div>
      </section>
    </section>
  );
};

export default FeatureSection;
