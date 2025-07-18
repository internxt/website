import React from 'react';
import styles from '../../components/privacy/HeroSection.module.scss';
import SignUpBanner from '@/components/banners/SignUpBanner';

const HeroSection = ({ textContent, lang, bannerText }) => (
  <>
    <section className={`relative flex w-full flex-col overflow-hidden pt-10 filter ${styles.neonBlur}`}>
      <div className="flex h-[300px] w-screen flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-gray-100 lg:text-5xl">{textContent.title}</h1>
      </div>
    </section>
    <section className="flex flex-col  py-16">
      <div className="flex flex-col items-center justify-center space-y-16 px-10">
        <div className="flex max-w-[720px] flex-col items-center justify-center space-y-16">
          <p className="text-center text-2xl font-semibold">{textContent.brief.intro}</p>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-normal">{textContent.brief.body.paragraph1}</p>
            <p className="pt-7 text-lg font-normal">{textContent.brief.body.paragraph2}</p>
            <p className="text-lg font-normal">{textContent.brief.body.paragraph3}</p>
            <p className="pt-7 text-lg font-normal">{textContent.brief.body.paragraph4}</p>
          </div>
        </div>
        <SignUpBanner textContent={bannerText} lang={lang} />
      </div>
    </section>
  </>
);

export default HeroSection;
