import React from 'react';
import styles from './BF-HeroSection.module.scss';
import ButtonDeal from './components/ButtonDeal';

const FooterSection = ({ textContent, lang, country }) => {
  const currency = () => {
    switch (country) {
      case 'US':
        return '$';
      case 'GB':
        return '£';
      default:
        return '€';
    }
  };

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col">
        <div className="relative flex flex-row items-center justify-center">
          <div className="absolute left-0 h-full w-1/2 pb-20 lg:w-80">
            <img
              src="/images/special-offer/black-friday/file_icons.png"
              className="h-full w-full object-cover object-right"
            />
          </div>
          <div className="z-10 flex max-w-[585px] flex-col items-center justify-center space-y-4 py-20 text-center text-white">
            <p className="text-3xl font-semibold">{textContent.FooterSection.title}</p>
            <div>
              <p className="text-xl font-normal">{textContent.FooterSection.subtitle}</p>
              <p className="text-xl font-semibold">{textContent.FooterSection.subtitle1}</p>
            </div>
            <p className="pt-4 text-3xl font-bold text-primary">Only 3.59 {currency()}/mo</p>
            <div className="pt-4">
              <ButtonDeal lang={lang} />
            </div>
            <div className="pt-16">
              <img src="/images/special-offer/black-friday/discount.png" />
            </div>
          </div>
          <div className="absolute right-0 h-full w-1/2 pt-20 lg:w-80">
            <img
              src="/images/special-offer/black-friday/file_icons.png"
              className="h-full w-full object-cover object-left"
            />
          </div>
        </div>
        <div className="flex flex-col items-center py-5">
          <p className="text-md font-medium text-gray-50">Copyright © 2022, Internxt Universal Technologies SL</p>
          <div className="flex flex-row space-x-5 text-gray-50">
            <a href="https://www.internxt.com/privacy" className="text-sm">
              {lang !== 'es' ? <p>Privacy</p> : <p>Privacidad</p>}
            </a>
            <a href="https://help.internxt.com/en/" className="text-sm">
              {lang !== 'es' ? <p>Contact us</p> : <p>Contacta con nosotros</p>}
            </a>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 -z-10 flex h-full w-screen ${styles.neonBlur} pointer-events-none origin-center`}
      />
    </section>
  );
};

export default FooterSection;
