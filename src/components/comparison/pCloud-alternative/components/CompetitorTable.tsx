import { getImage } from '@/lib/getImage';
import Image from 'next/image';

interface CompetitorTableProps {
  textContent: any;
  logo?: string;
}

export const CompetitorTable = ({ textContent, logo }: CompetitorTableProps) => {
  return (
    <div className="flex h-min w-[180.5px] flex-col rounded-r-16  lg:w-[570px]">
      <div className="flex h-[46.5px] w-full flex-col items-center justify-center gap-3 rounded-tr-16 bg-red-old-15 ring-[1px] ring-green-120 lg:h-[112px]">
        {logo ? (
          <Image width={92} height={22} src={getImage(logo)} alt="Internxt icon" className="flex lg:hidden" />
        ) : null}
        {logo ? (
          <Image width={120} height={32} src={getImage(logo)} alt="Internxt icon" className="hidden lg:flex" />
        ) : null}
        <p className="hidden text-lg font-normal text-gray-95 lg:flex">{textContent.title}</p>
      </div>
      <div className="flex flex-col justify-between">
        {textContent.features.map((item, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === textContent.features.length - 1;

          return (
            <div
              key={index}
              className={`h-[136px] lg:h-[110px] ${isEven ? 'bg-red-old-25' : 'bg-red-old-15'} ${
                isLast ? 'rounded-br-16' : ''
              } flex  flex-col items-center justify-start gap-2  p-4 ring-[1px] ring-green-120 lg:justify-center`}
            >
              <p className="w-[156.5px] text-start text-xs font-semibold leading-tight text-gray-100 lg:w-[538px] lg:text-center lg:text-base">
                {item.title}
              </p>
              <p className="text-10  w-[156.5px] text-start font-normal leading-tight text-gray-100 lg:w-[538px] lg:text-center lg:text-sm">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
