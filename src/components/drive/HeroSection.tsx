/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect } from 'react';
import { ArrowCircleDown } from '@phosphor-icons/react';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import styles from '@/components/privacy/HeroSection.module.scss';
import Link from 'next/link';
import { Check } from '@phosphor-icons/react';
import { HighlightText } from '../components/HighlightText';

type OSType = 'Android' | 'iPhone' | 'Windows' | 'MacOS' | 'Linux';

const detectOS = (): OSType => {
  if (typeof window === 'undefined') return 'Windows';

  const userAgent = navigator.userAgent.toLowerCase();

  if (/iphone|ipad|ipod/.test(userAgent)) return 'iPhone';
  if (/android/.test(userAgent)) return 'Android';
  if (/mac/.test(userAgent)) return 'MacOS';
  if (/win/.test(userAgent)) return 'Windows';
  if (/linux/.test(userAgent)) return 'Linux';

  return 'Windows';
};

interface HeroSectionProps {
  textContent: any;
  download: Record<OSType, string>;
  ChecksTag?: keyof JSX.IntrinsicElements;
}

const HeroSection = ({ textContent, download, ChecksTag = 'p' }: HeroSectionProps) => {
  const [OS, setOS] = useState<OSType>('Windows');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setOS(detectOS());
  }, []);

  const downloadUrl = isClient ? download[OS] : download.Windows;
  const osName = textContent.DownloadSection[OS] || 'your device';

  return (
    <section
      className="flex w-full flex-col items-center px-5 py-20 pt-24 lg:flex-row lg:justify-between lg:px-10 lg:py-20 lg:pt-32 xl:px-32 3xl:px-80"
      style={{ background: 'linear-gradient(360deg, #FFFFFF 0%, #E5EFFF 85.17%)' }}
    >
      <div
        className={`${styles.cleanerTitleAndOnePlan} z-20 flex w-full shrink-0 items-center justify-center rounded-20 shadow-soft backdrop-blur-55 lg:w-1/2`}
      >
        <div className="z-10 flex flex-col justify-between gap-10 p-6 lg:p-8">
          <div className="flex w-full flex-col justify-between gap-10">
            <div className="flex w-full flex-col justify-center gap-8 ">
              <div className="flex h-[26px] w-[75px] flex-col items-center justify-center rounded-2 border border-primary px-1 py-0.5">
                <p className="text-lg font-semibold text-primary">{textContent.eyebrow}</p>
              </div>
              <HighlightText
                text={textContent.title}
                className="text-30 font-semibold leading-tight text-gray-100 lg:text-5xl"
                TitleTag={'h1'}
              />
              <p className="text-base font-normal leading-tight text-gray-55 lg:text-xl">{textContent.subtitle}</p>
            </div>
            <div className="hidden w-full flex-col justify-between gap-2 lg:flex">
              {textContent.features.map((feat) => (
                <div key={feat} className="flex h-[24px] flex-row gap-2">
                  <Check className="hidden text-green-dark xs-md:block" weight="bold" size={24} />
                  <Check className="block text-green-dark xs-md:hidden" weight="bold" size={20} />
                  <ChecksTag className="mb-2 text-left text-sm font-normal text-gray-55 xs-md:text-lg">
                    {feat}
                  </ChecksTag>
                </div>
              ))}
            </div>
          </div>

          <div className="flex w-1/2 flex-row gap-3 lg:w-5/6">
            <Link
              href={'/pricing'}
              className="flex h-[48px] w-min flex-1 items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary px-6 py-4 text-base font-medium text-white transition-colors hover:bg-primary-dark"
            >
              {textContent.cta}
            </Link>

            <a
              href={downloadUrl}
              className="hidden h-[48px] w-min flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-sm-6 border border-primary bg-white px-6 py-4 text-base font-medium text-primary transition-colors hover:bg-gray-1 lg:flex"
            >
              <ArrowCircleDown size={24} weight="bold" />
              <span>
                {textContent.DownloadSection.downloadFor} {osName}
              </span>
            </a>
          </div>
        </div>
      </div>

      <Image
        src={getImage('/images/home/NewDesign/mockup.png')}
        alt="Internxt Drive panel interface"
        height={508}
        width={508}
        quality={100}
      />

      <a
        href={downloadUrl}
        className="flex h-[48px] w-min flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-sm-6 border border-primary bg-white px-6 py-4 text-base font-medium text-primary transition-colors hover:bg-gray-1 lg:hidden"
      >
        <ArrowCircleDown size={24} weight="bold" />
        <span>
          {textContent.DownloadSection.downloadFor} {osName}
        </span>
      </a>
    </section>
  );
};

export default HeroSection;
