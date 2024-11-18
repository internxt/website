import { HaveIbeenPwnedText } from '@/assets/types/have-i-been-pawned';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

export interface PwnedElementCardProps {
  textContent: HaveIbeenPwnedText['PwnedSection']['pwnedElement'];
}
const PwnedElementCard: React.FC<PwnedElementCardProps> = ({ textContent }) => {
  return (
    <div className="flex max-w-[1019px] flex-col pb-5 md:flex-row">
      <div className="order-1 mb-4 flex items-center justify-center bg-gray-5 p-4 md:order-2 md:mb-0">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white md:h-24 md:w-24">
          <Image src={getImage(textContent.logoPath)} alt="icon" width={172} height={172} />
        </div>
      </div>
      <div className="order-2 max-w-full space-y-5 bg-white px-6 pb-6 pt-6 text-center md:order-1 md:max-w-[1019px] md:px-10 md:pb-8 md:pt-8 md:text-left">
        <p className="text-xl font-bold text-gray-100 md:text-2xl">{textContent.title}</p>
        <p className="text-regular text-base text-gray-80 md:text-lg">{textContent.description}</p>
        <div className="inline-flex flex-col space-y-1 md:flex-row md:space-x-2 md:space-y-0">
          <p className="text-base font-bold text-gray-80 md:text-lg">{textContent.compromisedData}</p>
          <p className="text-regular text-base text-gray-80 md:text-lg">
            {textContent.dataClasses.map((dataClass, index) => (
              <span key={index} className="mr-2">
                {dataClass}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PwnedElementCard;
