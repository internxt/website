import { getImage } from '@/lib/getImage';
import Image from 'next/image';

export const InxtTable = ({ textContent }) => (
  <div className="flex h-min w-[570px] flex-col rounded-16 border-b border-l border-t border-green-120">
    <div className="flex h-[112px] w-full flex-col items-center justify-center gap-3 rounded-tl-16 bg-green-110">
      <Image
        width={180}
        height={32}
        src={getImage('/images/comparison/competitors/Internxt_Letters.webp')}
        alt="Internxt icon"
      />
      <p className="text-lg font-normal text-gray-95">{textContent.title}</p>
    </div>
    <div className="flex flex-col justify-between">
      {textContent.features.map((item, index) => {
        const isEven = index % 2 === 0;
        const isLast = index === textContent.features.length - 1;

        return (
          <div
            key={index}
            className={`h-[110px] ${isEven ? 'bg-green-100' : 'bg-green-110'} ${
              isLast ? 'rounded-bl-16' : ''
            } flex  flex-col items-center justify-center gap-2`}
          >
            <p className="text-base font-semibold leading-tight text-gray-100">{item.title}</p>
            <p className="w-[538px] text-center text-sm font-normal leading-tight text-gray-100">{item.description}</p>
          </div>
        );
      })}
    </div>
  </div>
);
