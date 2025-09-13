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
  const description =
    competitor === 'pCloud'
      ? textContent.pCloudDescription
      : competitor === 'MEGA'
      ? textContent.megaDescription
      : textContent.dropboxDescription;

  return (
    <div
      className="flex h-[680px] w-full flex-col items-center justify-between gap-8 py-20 pt-20 lg:h-min lg:justify-center "
      style={{ background: 'linear-gradient(180deg, #E5EFFF 0%, #FFFFFF 100%)' }}
    >
      <div className="flex h-full w-full flex-col items-center justify-around text-center xs-md:mx-10 lg:h-[389px] lg:justify-around xl:mx-32 3xl:mx-80 4xl:mx-96">
        <div className="flex h-[390px] w-[320px] flex-col justify-between text-4xl lg:h-[271px] lg:w-min lg:whitespace-nowrap">
          <p
            className="text-start text-30 font-semibold text-gray-95 lg:text-center lg:text-5xl"
            dangerouslySetInnerHTML={{ __html: parseText(textContent.title) }}
          />
          <div className="flex h-[250px] flex-col-reverse justify-around lg:h-[120px] lg:flex-row">
            <p className="whitespace-pre-line text-start text-base font-normal leading-tight text-gray-55 lg:text-xl">
              {description}
            </p>
            <div className="flex h-[88px] flex-col justify-between">
              {textContent.features?.map((feat) => (
                <div key={feat} className="flex h-[24px] flex-row items-center gap-2">
                  <Check className="hidden text-green-1 xs-md:block" size={24} />
                  <Check className="block text-green-1 xs-md:hidden" size={20} />
                  <p className=" break-keep text-left text-sm font-medium text-gray-95 xs-md:text-lg">{feat}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-lg font-semibold text-gray-95 lg:text-2xl">
            {formatText(parseText(textContent.getPrivacy), { percentage: percentage?.toString() ?? '70' })}
          </p>
        </div>
        <Link
          href={redirectUrl}
          className="z-10 flex h-[48px] w-[131px] items-center justify-center rounded-sm-6 bg-primary text-base font-normal text-white hover:bg-primary-dark"
        >
          {textContent.cta}
        </Link>
      </div>
    </div>
  );
};
