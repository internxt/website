import Link from 'next/link';
import { Check } from '@phosphor-icons/react';
import { formatText } from '@/components/utils/format-text';

interface ComparisonHeaderProps {
  textContent: any;
  redirectUrl: string;
  percentage: number;
  competitor: string;
}

export const HeroSection = ({ textContent, redirectUrl, percentage, competitor }: ComparisonHeaderProps) => {
  const parseText = (text: string) => (typeof text === 'string' ? text.replace(/{{competitor}}/g, competitor) : text);

  return (
    <div
      className="flex h-min w-full flex-col items-center justify-between gap-8 lg:h-min lg:justify-center"
      style={{ background: 'linear-gradient(180deg, #E5EFFF 0%, #FFFFFF 100%)' }}
    >
      <div className="flex h-full w-[355px] flex-col items-center justify-around gap-8 pb-20 pt-32 text-center lg:h-min lg:w-full lg:justify-around">
        <div className="flex h-min w-[355px] flex-col items-center justify-center gap-8 text-4xl xs-md:px-10 lg:h-min lg:w-full xl:px-32 3xl:px-80 4xl:px-96">
          <p
            className="text-start text-30 font-semibold text-gray-95 lg:text-center lg:text-5xl"
            dangerouslySetInnerHTML={{ __html: parseText(textContent.title) }}
          />
          <div className="flex h-[250px] w-full flex-col-reverse justify-center  gap-8  lg:h-min lg:flex-row">
            <p className="w-[393px] whitespace-pre-line  text-start text-base font-normal leading-tight text-gray-55 lg:text-xl">
              {textContent.description}
            </p>
            <div className="flex h-[88px] flex-col justify-between ">
              {textContent.features?.map((feat) => (
                <div key={feat} className="flex h-[24px] flex-row items-start gap-1 lg:items-center lg:gap-2">
                  <Check className="hidden text-green-1 xs-md:block" size={20} />
                  <Check className="block text-green-1 xs-md:hidden" size={18} />
                  <p className="text-left text-sm font-medium text-gray-95 xs-md:text-lg">{feat}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="w-[240px] items-center justify-center text-lg font-semibold text-gray-95 lg:w-full lg:text-2xl">
            {formatText(parseText(textContent.getPrivacy), { percentage: percentage?.toString() ?? '70' })}
          </p>
        </div>
        <Link
          href={'#billingButtons'}
          className="z-10 flex h-[48px] w-min items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary px-6 text-base font-normal text-white hover:bg-primary-dark"
        >
          {textContent.cta}
        </Link>
      </div>
    </div>
  );
};
