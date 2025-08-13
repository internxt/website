import Link from 'next/link';
import { Check } from '@phosphor-icons/react';
import { formatText } from '../utils/format-text';
interface ComparisonHeaderProps {
  textContent: any;
  redirectUrl: string;
  percentage: number;
}

export const HeroSection = ({ textContent, redirectUrl, percentage }: ComparisonHeaderProps) => (
  <div
    className="flex h-[550px] w-full items-center justify-between gap-8 pt-20 lg:h-[569px] lg:justify-center lg:pt-16"
    style={{ background: 'linear-gradient(180deg, #E5EFFF 0%, #FFFFFF 100%)' }}
  >
    <div className="bg- flex h-full w-full flex-col items-center justify-between text-center xs-md:mx-10 lg:h-[389px] lg:justify-around xl:mx-32 3xl:mx-80 4xl:mx-96">
      <p className="w-[320px] pt-4 text-4xl font-semibold text-gray-95 lg:w-[860px] lg:pt-0 lg:text-5xl">
        {textContent.title}
      </p>
      <div className="flex h-[250px] w-[320px] flex-col justify-around  lg:h-[120px] lg:w-[860px] lg:flex-row">
        <p className="text-start text-base font-normal text-gray-55 lg:w-1/2 lg:text-xl">{textContent.description}</p>
        <div className="flex h-[88px] flex-col justify-between">
          {textContent.features.map((feat) => (
            <div key={feat} className="flex h-[24px] flex-row gap-2 ">
              <Check className="hidden text-green-dark xs-md:block" weight="bold" size={24} />
              <Check className="block text-green-dark xs-md:hidden" weight="bold" size={20} />
              <p className="mb-2 text-left text-sm font-normal text-gray-95 xs-md:text-lg ">{feat}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-2xl font-semibold text-gray-95">
        {formatText(textContent.getPrivacy, { percentage: percentage.toString() ?? '70' })}
      </p>
      <Link
        href={redirectUrl}
        className="z-10 flex h-[48px] w-[131px] items-center justify-center rounded-sm-6 bg-primary text-base font-normal text-white hover:bg-primary-dark"
      >
        {textContent.cta}
      </Link>
    </div>
  </div>
);
