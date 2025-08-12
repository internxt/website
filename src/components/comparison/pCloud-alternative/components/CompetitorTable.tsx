import { getImage } from '@/lib/getImage';
import Image from 'next/image';

interface CompetitorTableProps {
  textContent: any;
  logo?: string;
}

export const CompetitorTable = ({ textContent, logo }: CompetitorTableProps) => {
  return (
    <div className="flex h-min w-[570px] flex-col rounded-16 border-b border-r border-t  border-green-120">
      <div className="flex h-[112px] w-full flex-col items-center justify-center gap-3 rounded-tr-16 bg-red-old-15">
        {logo ? <Image width={180} height={32} src={getImage(logo)} alt="Internxt icon" /> : null}
        <p className="text-lg font-normal text-gray-95">{textContent.title}</p>
      </div>

      <div className="flex flex-col justify-between">
        {textContent.features.map((item, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === textContent.features.length - 1;

          return (
            <div
              key={index}
              className={`h-[110px] ${isEven ? 'bg-red-old-25' : 'bg-red-old-15'} ${
                isLast ? 'rounded-br-16' : ''
              } flex  flex-col items-center justify-center gap-2 `}
            >
              <p className="text-base font-semibold leading-tight text-gray-100">{item.title}</p>
              <p className="w-[538px] text-center text-sm font-normal leading-tight text-gray-100">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
