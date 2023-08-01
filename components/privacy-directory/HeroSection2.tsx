import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import SignUpBanner from '../banners/SignUpBanner';
import Header from '../shared/Header';

const HeroSection2 = ({ textContent, lang, bannerText }) => {
  return (
    <section className="flex flex-col py-[88px] lg:py-16">
      <div className="flex flex-col items-center bg-gradient-to-b from-primary to-primary-dark py-20 px-5">
        <Header className="text-center text-white">{textContent.header}</Header>
      </div>
      <div className="flex flex-col items-center justify-center space-y-16 py-20 px-10">
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
