import { getImage } from '@/lib/getImage';
import Image from 'next/image';

interface InxtTableProps {
  textContent: any;
  TableTitleTag?: React.ElementType;
}

export const InxtTable = ({ textContent, TableTitleTag = 'p' }: InxtTableProps) => {
  return (
    <div className="flex h-min w-[180.5px] flex-col rounded-l-16  lg:w-[570px]">
      <div className="flex h-[46.5px] w-full flex-col items-center justify-center gap-3 rounded-tl-16 bg-green-110 ring-[1px] ring-green-120 lg:h-[112px]">
        <Image
          width={180}
          height={32}
          src={getImage('/images/comparison/competitors/Internxt_Letters.webp')}
          alt="Internxt icon"
          className="hidden lg:flex"
        />
        <Image
          width={108}
          height={13}
          src={getImage('/images/comparison/competitors/Internxt_Letters.webp')}
          alt="Internxt icon"
          className="flex lg:hidden"
        />
        <TableTitleTag className="hidden text-lg font-normal text-gray-95 lg:flex">{textContent.title}</TableTitleTag>
      </div>

      <div className="flex flex-col justify-between">
        {textContent.features.map((item, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === textContent.features.length - 1;

          return (
            <div
              key={index}
              className={`h-[156px] lg:h-[110px] ${isEven ? 'bg-green-100' : 'bg-green-110'} ${
                isLast ? 'rounded-bl-16' : ''
              } flex flex-col items-center justify-start gap-2 p-4 ring-[1px] ring-green-120 lg:justify-center`}
            >
              <p className="w-[156.5px] text-start text-xs font-semibold leading-tight text-gray-100 lg:w-[538px] lg:text-center lg:text-base">
                {item.title}
              </p>
              <p className="w-[156.5px] text-start text-10 font-normal leading-tight text-gray-100 lg:w-[538px] lg:text-center lg:text-sm">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
