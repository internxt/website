import Link from 'next/link';
import { Alarm, CircleWavyCheck } from '@phosphor-icons/react';
import React from 'react';
import styles from './BF-HeroSection.module.scss';
import ButtonDeal from './components/ButtonDeal';
import Countdown from '../components/Countdown';

const HeroSection = ({ textContent, lang, country, isAffiliate }) => {
  const HeroSectionDescription = isAffiliate
    ? textContent.HeroSection.description.replace('6', '7')
    : textContent.HeroSection.description;

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

  const features = [
    {
      id: 0,
      text: 'Encrypted file storage and sharing',
      frenchText: 'Stockage et partage de fichiers cryptés',
    },
    {
      id: 1,
      text: 'Access your files from any device',
      frenchText: 'Accédez à vos fichiers depuis tous vos appareils',
    },
    {
      id: 2,
      text: 'Get access to all our services',
      frenchText: 'Accédez à tous nos services',
    },
    {
      id: 3,
      text: 'No unauthorized data access',
      frenchText: 'Aucun accès non autorisé aux données',
    },
  ];

  return (
    <section className="relative -mt-16 flex w-full flex-col overflow-hidden">
      <div className="relative flex items-center justify-center overflow-hidden">
        <div className="flex w-full max-w-screen-xl flex-col items-center justify-center py-16 sm:mb-6 md:flex-row lg:mx-32">
          <div className="my-6 flex w-screen flex-shrink-0 flex-col items-center justify-center pt-5 text-center sm:w-auto md:my-8 md:max-w-md md:items-start md:text-left lg:max-w-lg">
            <Link href="/" passHref legacyBehavior>
              <img src="/logos/internxt/white.svg" alt="Internxt logo" className="-mt-5 cursor-pointer" />
            </Link>
            {/* <div className="flex flex-row pb-6 pt-16">
              <Alarm size={32} className="mr-4 text-primary" />
              <Countdown dt={'2022-12-04T00:00:00'} textColor={'white'} />
            </div> */}
            <h1 className="text-7xl font-semibold text-white">
              {textContent.HeroSection.title.line1}
              <br />
              {textContent.HeroSection.title.line2}
            </h1>
            {/*<p className="mt-6 text-3xl text-white">{HeroSectionDescription}</p>
             <p className="pt-3 text-5xl font-bold text-primary">
              {currency() === '€' ? (
                <>
                  {textContent.HeroSection.pricingTable.only} {currency()}
                  {isAffiliate ? '2.69' : textContent.HeroSection.pricingTable.priceNow}
                  <span className="text-3xl">{textContent.HeroSection.pricingTable.month}</span>
                </>
              ) : (
                <>
                  {textContent.HeroSection.pricingTable.only}{' '}
                  {isAffiliate ? '2.69' : textContent.HeroSection.pricingTable.priceNow} {currency()}
                  {textContent.HeroSection.pricingTable.month}
                </>
              )}
            </p> */}
            <div className="pt-10">
              <ButtonDeal lang={lang} />
            </div>
          </div>
          <div className="mt-8 flex w-full max-w-md flex-col md:mx-0 md:mt-0 md:max-w-none md:flex-row ">
            <div className="relative flex h-[590px] items-center justify-center lg:left-16">
              <div className="flex">
                <img src="/images/special-offer/black-friday/file_icons.png" alt="File icons" />
              </div>
              {/* {isAffiliate ? (
                <div className="absolute m-auto flex max-h-[300px] max-w-[612px]">
                  <img src="/images/special-offer/black-friday/discount-70.png" alt="70% off image" />
                </div>
              ) : (
                <div className="absolute m-auto flex max-h-[300px] max-w-[612px]">
                  <img src="/images/special-offer/black-friday/discount.png" alt="discount image" />
                </div>
              )} */}
              <div className="absolute m-auto flex max-h-[300px] max-w-[300px]">
                <img src="/images/special-offer/black-friday/inxtBF.png" alt="inxtBF image" />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute top-0 left-0 -z-10 flex h-full w-screen ${styles.neonBlur} pointer-events-none origin-center`}
        />
      </div>

      <div className="sm:gap-x-30 flex flex-row flex-wrap items-center justify-center gap-y-10 gap-x-20 py-14">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex ${
              lang === 'fr' ? 'max-w-[230px]' : 'max-w-[185px]'
            } flex-col items-center justify-center space-y-4 text-center`}
          >
            <CircleWavyCheck size={40} weight="fill" className="text-primary" />
            <p className="text-xl font-semibold ">{lang === 'fr' ? feature.frenchText : feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
