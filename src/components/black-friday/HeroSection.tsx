import { Alarm, CheckCircle, CircleWavyCheck } from '@phosphor-icons/react';
import styles from '@/components/black-friday/BF-HeroSection.module.scss';
import ButtonDeal from '@/components/black-friday/components/ButtonDeal';
import Countdown from '@/components/components/Countdown';
import Header from '@/components/shared/Header';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import Button from '../shared/Button';
import { Icon } from '@mui/material';
const HeroSection = ({ textContent, lang }) => {

const icon=CheckCircle;
  return (
    <section className="relative flex w-full flex-col overflow-hidden">
      <div className="relative flex items-center justify-center overflow-hidden">
        <div className="flex w-full max-w-screen-xl flex-col items-center justify-center space-y-10 py-10 sm:mb-6 sm:pt-0 md:flex-row md:space-y-0 lg:mx-32 lg:justify-between lg:space-x-11">
          <div className="mt-16 flex w-screen flex-shrink-0 flex-col items-center justify-center space-y-6 pt-5 text-center sm:w-auto md:my-8 md:max-w-md md:items-start md:text-left lg:max-w-lg">
            <div className="flex flex-row">
              <Alarm size={32} className="mr-4 text-primary" />
              <Countdown dt={'2022-12-04T00:00:00'} textColor={'white'} />
            </div>
            <Header className="text-white text-7xl text-bold">
              {textContent.HeroSection.title.line1}
              <br />
              {textContent.HeroSection.title.line2}
              <br />
               {textContent.HeroSection.title.line3}
            </Header>
            <span className="text-white text-4xl text-bold">{textContent.HeroSection.description}</span>
           <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button text={textContent.HeroSection.cta} />
              <div className="flex items-center space-x-2">
                <Icon component={icon} className="text-primary" />
                <span className="text-white text-lg text-medium">{textContent.HeroSection.advertising}</span>
              </div>
            </div>
          </div>
          <div className="flex w-full  flex-col md:mt-0 md:max-w-none md:flex-row">
            <div className="relative flex items-center justify-center md:h-[600px] lg:left-16 lg:mt-10">
              <div className="hidden lg:mt-24 lg:flex">
                <Image src={getImage('/images/black-friday/internxt_black_friday_2024.webp')} alt="BlackFriday" width={520} height={555}/>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute left-0 top-0 -z-10 flex h-full w-screen ${styles.radiantGradient} pointer-events-none origin-center`}
        />
      </div>

    </section>
  );
};
export default HeroSection;
