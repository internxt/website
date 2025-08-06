import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import styles from '@/components/privacy/HeroSection.module.scss';
import HeroSafeArea from '../HeroSafeArea';
import Link from 'next/link';
import { Check } from '@phosphor-icons/react';

const HeroSection = ({ textContent }) => (
  <section
    className="flex h-[695px] w-full flex-row justify-center"
    style={{ background: 'linear-gradient(360deg, #FFFFFF 0%, #E5EFFF 85.17%)' }}
  >
    <HeroSafeArea>
      <div
        className={`${styles.cleanerTitleAndOnePlan} flex h-[535px] w-[498px] shrink-0 items-center justify-center rounded-20 shadow-soft backdrop-blur-55`}
      >
        <div className="flex h-[471px] w-[434px] flex-col justify-between">
          <div className="flex h-[391px] w-full flex-col justify-between">
            <div className="flex h-[215px] w-full flex-col justify-between">
              <div className="flex h-[26px] w-[75px] flex-col items-center justify-center rounded-2 border border-primary px-1 py-0.5 ">
                <p className="text-lg font-semibold text-primary">{textContent.topLabel}</p>
              </div>
              <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
            </div>
            <div className="flex h-[88px] w-full flex-col justify-between">
              {textContent.features.map((feat) => (
                <div key={feat} className="flex h-[24px] flex-row gap-2 ">
                  <Check className="hidden text-green-0 xs-md:block" weight="bold" size={24} />
                  <Check className="block text-green-0 xs-md:hidden" weight="bold" size={20} />
                  <p className="mb-2 text-left text-sm font-normal text-gray-95 xs-md:text-lg ">{feat}</p>
                </div>
              ))}
            </div>
            <div className="h-[24px] w-full">
              <p className="text-xl font-normal text-gray-95">{textContent.subTitle}</p>
            </div>
          </div>
          <div className="h-[48px] w-full">
            <Link
              href={'/pricing'}
              className="z-10 flex h-[48px] w-[139px] items-center justify-center rounded-sm-6 bg-primary text-base font-normal text-white hover:bg-primary-dark"
            >
              {textContent.cta}
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[535px] w-full items-center justify-center bg-red">
        <Image
          src={getImage('/images/cleaner/hero.png')}
          alt="Cleaner HeroSection"
          height={400}
          width={400}
          quality={100}
        />
      </div>
    </HeroSafeArea>
  </section>
);

export default HeroSection;
