import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import { parseDynamicText, Replacements } from '@/components/utils/parse-dynamic-text';

const ROW_BG = { even: 'bg-green-100 dark:bg-green-1/15', odd: 'bg-green-110 dark:bg-green-1/10' };

interface InxtTableProps {
  textContent: any;
  TableTitleTag?: React.ElementType;
  replacements?: Replacements;
}

export const InxtTable = ({
  textContent,
  TableTitleTag = 'p',
  replacements = {},
}: InxtTableProps) => {
  const rowBg = ROW_BG;
  const logoClass = 'dark:brightness-0 dark:invert';
  const parseText = (text: string) => parseDynamicText(text, replacements);

  return (
    <div className="flex h-min w-[180.5px] flex-col rounded-l-16  lg:w-[570px]">
      <div
        className="flex h-[46.5px] w-full flex-col items-center justify-center gap-3 rounded-tl-16 bg-green-110 ring-green-120 dark:bg-green-1/10 dark:ring-gray-71 ring-[1px] lg:h-[112px]"
      >
        <Image
          width={180}
          height={32}
          src={getImage('/images/comparison/competitors/Internxt_Letters.webp')}
          alt="Internxt icon"
          className={`hidden lg:flex ${logoClass}`}
        />
        <Image
          width={108}
          height={13}
          src={getImage('/images/comparison/competitors/Internxt_Letters.webp')}
          alt="Internxt icon"
          className={`flex lg:hidden ${logoClass}`}
        />
        <TableTitleTag className="hidden text-lg font-normal text-gray-95 dark:text-white-95 lg:flex">
          {parseText(textContent.title)}
        </TableTitleTag>
      </div>

      <div className="flex flex-col justify-between">
        {textContent.features.map((item, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === textContent.features.length - 1;

          return (
            <div
              key={index}
              className={`h-[156px] lg:h-[110px] ${isEven ? rowBg.even : rowBg.odd} ${
                isLast ? 'rounded-bl-16' : ''
              } flex flex-col items-center justify-start gap-2 p-4 ring-[1px] ring-green-120 lg:justify-center`}
            >
              <p
                className="w-[156.5px] text-start text-xs font-semibold leading-tight text-gray-100 dark:text-white-95 lg:w-[538px] lg:text-center lg:text-base"
              >
                {parseText(item.title)}
              </p>
              <p
                className="w-[156.5px] text-start text-10 font-normal leading-tight text-gray-100 dark:text-white-95 lg:w-[538px] lg:text-center lg:text-sm"
              >
                {parseText(item.description)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
