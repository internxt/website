import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import { parseDynamicText, Replacements } from '@/components/utils/parse-dynamic-text';
import { DARK_MODE_LOGO_FILTER } from '@/theme.config';

const ROW_BG = { even: 'bg-red-old-25 dark:bg-red/15', odd: 'bg-red-old-15 dark:bg-red/10' };

interface CompetitorTableProps {
  textContent: any;
  logo?: string;
  TableTitleTag?: React.ElementType;
  replacements?: Replacements;
}

export const CompetitorTable = ({
  textContent,
  logo,
  TableTitleTag = 'p',
  replacements = {},
}: CompetitorTableProps) => {
  const rowBg = ROW_BG;
  const logoClass = DARK_MODE_LOGO_FILTER;
  const parseText = (text: string) => parseDynamicText(text, replacements);

  return (
    <div className="flex h-min w-[180.5px] flex-col rounded-r-16  lg:w-[570px]">
      <div className="flex h-[46.5px] w-full flex-col items-center justify-center gap-3 rounded-tr-16 bg-red-old-15 ring-green-120 dark:bg-red/10 dark:ring-gray-71 ring-[1px] lg:h-[112px]">
        {logo ? (
          <Image width={92} height={22} src={getImage(logo)} alt="Competitor icon" className={`flex lg:hidden ${logoClass}`} />
        ) : null}
        {logo ? (
          <Image width={120} height={32} src={getImage(logo)} alt="Competitor icon" className={`hidden lg:flex ${logoClass}`} />
        ) : null}
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
                isLast ? 'rounded-br-16' : ''
              } flex flex-col items-center justify-start gap-2 p-4 ring-[1px] ring-green-120 lg:justify-center`}
            >
              <p className="w-[156.5px] text-start text-xs font-semibold leading-tight text-gray-100 dark:text-white-95 lg:w-[538px] lg:text-center lg:text-base">
                {parseText(item.title)}
              </p>
              <p className="w-[156.5px] text-start text-10 font-normal leading-tight text-gray-100 dark:text-white-95 lg:w-[538px] lg:text-center lg:text-sm">
                {parseText(item.description)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
