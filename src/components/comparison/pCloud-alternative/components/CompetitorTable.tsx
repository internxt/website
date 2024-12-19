import { getImage } from '@/lib/getImage';
import { X } from '@phosphor-icons/react';

interface CompetitorTableProps {
  textContent: any;
  logo?: string;
}

export const CompetitorTable = ({ textContent, logo }: CompetitorTableProps) => {
  const logoImage = logo ?? getImage('/logos/pcloud-alternative/pCloud.svg');
  return (
    <div className="flex h-full w-screen max-w-[400px] flex-col px-5 md:px-0">
      <div className="flex w-full items-center space-x-4 bg-primary/5 py-4 pl-6">
        <img src={logoImage} alt="pCloud icon" />
        <p className="text-lg font-semibold text-gray-100">{textContent.title}</p>
      </div>
      <div className="flex h-full flex-col">
        {textContent.features.map((item) => (
          <div className="flex h-full w-full flex-row items-center bg-red/5 bg-opacity-3" key={item.title}>
            <div className="flex h-full w-full max-w-xs flex-row items-center justify-between border-b border-primary border-opacity-3 bg-gray-1 pl-6">
              <div className="flex flex-col space-y-4 py-4 pr-3">
                <p className="text-lg font-semibold text-gray-100">{item.title}</p>
                <p className="text-gray-100">{item.description}</p>
              </div>
            </div>
            <div className="mx-auto flex h-full w-max flex-col justify-center">
              <div className="flex ">
                <X size={32} className="text-red-dark" weight="bold" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
