import React from 'react';
import styles from './BF-HeroSection.module.scss';
import ButtonDeal from './components/ButtonDeal';

const FooterSection = ({ textContent, lang, country, isAffiliates }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col">
        <div className="relative flex flex-row items-center justify-center">
          {/* <div className="absolute left-0 h-full w-1/2 pb-20 lg:w-80">
            <img
              src="/images/special-offer/black-friday/file_icons.png"
              className="h-full w-full object-cover object-right"
              alt="file icons"
            />
          </div> */}
          <div className="z-10 flex max-w-[585px] flex-col items-center justify-center space-y-4 py-16 text-center text-white">
            <p className="text-5xl font-semibold">{textContent.FooterSection.title}</p>
            {/* <div>
              <p className="text-xl font-normal">{textContent.FooterSection.subtitle}</p>
              <p className="text-xl font-semibold">{affiliates}</p>
            </div>
            <p className="pt-4 text-5xl font-bold text-primary">
              {currency() === '€' ? (
                <>
                  {textContent.FooterSection.only} {currency()}
                  {isAffiliates ? '2.69' : textContent.FooterSection.priceNow}
                  <span className="text-3xl">{textContent.FooterSection.month}</span>
                </>
              ) : (
                <>
                  {textContent.FooterSection.only} {isAffiliates ? '2.69' : textContent.FooterSection.priceNow}{' '}
                  {currency()}
                  {textContent.FooterSection.month}
                </>
              )}
            </p> */}
            <div className="pt-4">
              <ButtonDeal lang={lang} />
            </div>
            {/* {isAffiliates ? (
              <div className="pt-16">
                <img src="/images/special-offer/black-friday/discount-70.png" alt="70% off image" />
              </div>
            ) : (
              <div className="pt-16">
                <img src="/images/special-offer/black-friday/discount.png" alt="discount image" />
              </div>
            )} */}
          </div>
        </div>
        <div className="flex flex-col items-center py-5">
          <p className="text-md font-medium text-gray-50">Copyright © 2022, Internxt Universal Technologies SL</p>
          <div className="flex flex-row space-x-5 text-gray-50">
            <a href="https://www.internxt.com/privacy" className="text-sm">
              {lang !== 'es' ? <p>Privacy</p> : <p>Privacidad</p>}
            </a>
            <div
              onClick={() => {
                window.open('https://help.internxt.com/en', '_blank');
              }}
              className="cursor-pointer text-sm"
            >
              {lang !== 'es' ? <p>Contact us</p> : <p>Contacta con nosotros</p>}
            </div>
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
