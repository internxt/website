import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import styles from '@/components/privacy/HeroSection.module.scss';
import HeroSafeArea from '../HeroSafeArea';
import Link from 'next/link';
import { Check } from '@phosphor-icons/react';

const HeroSection = ({ textContent }) => (
  <section
    className="h-[600 px]
    flex w-full flex-row justify-center lg:h-[695px]"
    style={{ background: 'linear-gradient(360deg, #FFFFFF 0%, #E5EFFF 85.17%)' }}
  >
    <HeroSafeArea>
      <div
        className={`${styles.cleanerTitleAndOnePlan} flex h-[500px] w-[360px] shrink-0 items-center justify-center rounded-20 shadow-soft backdrop-blur-55 lg:h-[535px] lg:w-[498px]`}
      >
        <div className="flex h-[400px] w-[330px] flex-col justify-between lg:h-[471px] lg:w-[434px]">
          <div className="flex h-[340px] w-full flex-col justify-between lg:h-[391px]">
            <div className="flex h-[190px] w-full flex-col justify-between  lg:h-[190px]">
              <div className="flex h-[26px] w-[75px] flex-col items-center justify-center rounded-2 border border-primary px-1 py-0.5 ">
                <p className="text-lg font-semibold text-primary">{textContent.topLabel}</p>
              </div>
              <p className="text-3xl font-semibold leading-tight text-gray-100 lg:text-5xl">{textContent.title}</p>
            </div>
            <div className="flex h-[88px] w-full flex-col justify-between ">
              {textContent.features.map((feat) => (
                <div key={feat} className="flex h-[24px] flex-row gap-2 ">
                  <Check className="hidden text-green-dark xs-md:block" weight="bold" size={24} />
                  <Check className="block text-green-dark xs-md:hidden" weight="bold" size={20} />
                  <p className="mb-2 text-left text-sm font-normal text-gray-95 xs-md:text-lg ">{feat}</p>
                </div>
              ))}
            </div>
            <div className="h-[44px] w-full lg:h-min">
              <p className="text-base font-normal text-gray-95 lg:text-xl">{textContent.subTitle}</p>
            </div>
          </div>
          <div className="h-[48px] w-full">
            <Link
              href={'/pricing'}
              className="z-10 flex h-[48px] min-w-[139px] max-w-[200px] items-center justify-center rounded-sm-6 bg-primary text-base font-normal text-white hover:bg-primary-dark"
            >
              {textContent.cta}
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden h-[535px] w-[498px] overflow-hidden lg:flex">
        <div className="relative hidden h-full w-full  lg:flex">
          <Image
            src={getImage('/images/cleaner/Frame 1727.png')}
            alt="Cleaner HeroSection"
            width={900}
            height={478}
            quality={100}
            className="absolute right-48 top-52 z-10"
          />
          <Image
            src={getImage('/images/cleaner/Cleaner Enabled.png')}
            alt="Cleaner HeroSection"
            width={900}
            height={478}
            quality={100}
            className="absolute left-10 top-20 z-0"
          />
        </div>
      </div>
    </HeroSafeArea>
  </section>
);

export default HeroSection;
