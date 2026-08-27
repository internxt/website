import Image from 'next/image';
import { getImage } from '@/lib/getImage';
import Link from 'next/link';
import { HighlightText } from '../components/HighlightText';
import { Check, ShieldCheck } from '@phosphor-icons/react';

interface HeroSectionForPartnerProps {
  textContent: any;
  darkMode?: boolean;
  isValentinesMode?: boolean;
}

export default function HeroSection({
  textContent,
  darkMode = false,
}: Readonly<HeroSectionForPartnerProps>): JSX.Element {

  return (
    <section
      className={`mt-20 flex h-min w-full flex-row items-center justify-center overflow-hidden py-10 lg:mt-16 lg:h-[657px] lg:justify-between lg:pl-10 lg:pr-4 xl:pl-32 xl:pr-16 3xl:pl-80 3xl:pr-60`}
      style={{
        background: darkMode
          ? 'linear-gradient(180deg, #082D66 0%, #1C1C1C 100%)'
          : 'linear-gradient(180deg, #E5EFFF 0%, #FFFFFF 100%)',
      }}
    >
      <div className="flex h-min w-[345px] flex-col justify-start gap-6 lg:w-[606px] lg:justify-between">
        <h1
          className={`text-balance text-4xl font-semibold leading-tight ${
            darkMode ? 'text-white-95' : 'text-gray-100'
          } lg:max-w-[600px] lg:text-5xl`}
        >
          <HighlightText text={textContent.title} />
        </h1>

        <p
          className={`font-regular ${
            darkMode ? 'text-white-95' : 'text-gray-100'
          } text-lg leading-tight lg:text-xl`}
          >
            {textContent.description}
        </p>

        <div className="flex w-full flex-col items-start">
          {textContent.features.map((feat) => (
            <div key={feat} className="flex flex-row gap-2">
              <Check className="pt-2 text-green-1 lg:pt-0" weight="light" size={24} />
              <p className="text-left text-lg font-semibold text-black ">{feat}</p>
            </div>
          ))}
        </div>

        <div className="flex h-min w-full flex-col justify-center gap-4">
          <div className="flex w-full flex-row items-start gap-4 pt-2">
            <Link
              href={'#billingButtons'}
              className="z-10 flex items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary-dark"
            >
              {textContent.claimDeal}
            </Link>
          </div>
          <div className="flex flex-row items-center space-x-3 justify-start">
            <ShieldCheck size={24} color="#0069FF" weight="fill" />
            <p className="whitespace-nowrap  text-base lg:text-lg text-black">
              {textContent.guarantee}
            </p>
          </div>
        </div>
      </div>

      <div
        className={'h-[500px] w-[562px] hidden justify-center lg:flex'}
      >
        <Image
          src={getImage(`/images/influencers/internxt-private-cloud.webp`)}
          alt="Internxt Partners HeroSection Image"
          height={529}
          width={562}
          quality={100}
        />
      </div>
    </section>
  );
}
