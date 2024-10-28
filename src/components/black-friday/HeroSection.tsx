import { Alarm, CircleWavyCheck } from '@phosphor-icons/react';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';
import ButtonDeal from '@/components/black-friday/components/ButtonDeal';
import Countdown from '@/components/components/Countdown';
import Header from '@/components/shared/Header';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

const HeroSection = ({ textContent, lang }) => {
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
    <section className="relative flex w-full flex-col overflow-hidden">
      <div className="relative flex items-center justify-center overflow-hidden">
        <div className="flex w-full max-w-screen-xl flex-col items-center justify-center space-y-10 py-10 sm:mb-6 sm:pt-0 md:flex-row md:space-y-0 lg:mx-32 lg:justify-between lg:space-x-11">
          <div className="mt-16 flex w-screen flex-shrink-0 flex-col items-center justify-center space-y-6 pt-5 text-center sm:w-auto md:my-8 md:max-w-md md:items-start md:text-left lg:max-w-lg">
            <div className="flex flex-row">
              <Alarm size={32} className="mr-4 text-primary" />
              <Countdown dt={'2024-11-29T00:00:00'} textColor={'white'} />
            </div>
            <p className="text-white text-6xl font-bold">
              {textContent.HeroSection.title.line1}
              <br />
              {textContent.HeroSection.title.line2}
            </p>
            <p className='text-4xl text-white font-bold'>{textContent.HeroSection.description}</p>
            <div className="">
              <ButtonDeal lang={lang} />
            </div>
          </div>
          <div className="flex w-full  flex-col md:mt-0 md:max-w-none md:flex-row">
            <div className="relative flex items-center justify-center md:h-[600px] lg:left-16 lg:mt-10">
              <Image src={getImage('/images/black-friday/internxt_black_friday_2024.webp')} alt={'BFCampaign'} width={520} height={520} />
            </div>
          </div>
        </div>
        <div
          className={`absolute left-0 top-0 -z-10 flex h-full w-screen ${styles.radialGradient} pointer-events-none origin-center`}
        />
      </div>

      <div className="sm:gap-x-30 flex flex-row flex-wrap items-center bg-highlight justify-center gap-x-20 gap-y-10 py-14">
        {features.map((feature, index) => (
          <div key={index} className={`flex max-w-[230px] flex-col items-center justify-center space-y-4 text-center text-white`}>
            <CircleWavyCheck size={40} weight="fill" className="text-primary" />
            <p className="text-xl font-semibold ">{lang === 'fr' ? feature.frenchText : feature.text}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
};
export default HeroSection;
