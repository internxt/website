import { getImage } from '@/lib/getImage';
import { Check } from '@phosphor-icons/react';
import Image from 'next/image';

export const InxtTable = ({ textContent }) => (
  <div className="flex h-full w-screen max-w-[400px] flex-1 flex-col px-5 md:px-0">
    <div className="flex w-full items-center space-x-4 bg-primary/5 py-4 pl-6">
      <Image
        width={32}
        height={32}
        src={getImage('/images/comparison/competitors/internxt.webp')}
        alt="Internxt icon"
      />
      <p className="text-lg font-semibold text-gray-100">{textContent.title}</p>
    </div>
    <div className="flex h-full flex-col">
      {textContent.features.map((item) => (
        <div className="flex h-full w-full flex-row items-center bg-green-dark/7 bg-opacity-3" key={item.title}>
          <div className="flex h-full w-full max-w-xs flex-row items-center justify-between border-b border-primary border-opacity-3 bg-gray-1 pl-6">
            <div className="flex flex-col space-y-4 py-4 pr-3">
              <p className="text-lg font-semibold text-gray-100">{item.title}</p>
              <p className="text-gray-100">{item.description}</p>
            </div>
          </div>
          <div className="mx-auto flex h-full w-max flex-col">
            <div className="flex flex-grow flex-col items-center justify-center">
              <Check size={32} className="text-green-dark" weight="bold" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
