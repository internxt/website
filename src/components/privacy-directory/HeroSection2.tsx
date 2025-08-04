import { CaretRight } from '@phosphor-icons/react';
import SignUpBanner from '@/components/banners/SignUpBanner';

const HeroSection2 = ({ textContent, lang, bannerText }) => {
  return (
    <section className="flex flex-col py-[88px] lg:py-16">
      <div className="flex flex-col items-center bg-gradient-to-b from-primary to-primary-dark px-5 py-20">
        <h1 className="text-3xl font-semibold text-gray-100 lg:text-5xl">{textContent.header}</h1>
      </div>
      <div className="flex flex-col items-center justify-center space-y-16 px-10 py-20">
        <div className="flex flex-col space-y-9">
          <div className="flex max-w-[672px] flex-col items-center justify-center space-y-5 text-center lg:text-left">
            <p className=" text-2xl font-medium">{textContent.title}</p>
            <p className="text-xl font-normal">{textContent.description}</p>
          </div>
          <a
            href="/privacy"
            target={'_blank'}
            className="flex cursor-pointer flex-row items-center justify-center space-x-1"
          >
            <p className="text-lg font-semibold text-primary">{textContent.cta}</p>
            <CaretRight size={14} weight="bold" className="text-primary" />
          </a>
        </div>
        <SignUpBanner textContent={bannerText} lang={lang} />
      </div>
    </section>
  );
};

export default HeroSection2;
