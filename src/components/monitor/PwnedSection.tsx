import { ArrowCircleDown, SmileyMeh, WarningCircle } from '@phosphor-icons/react';
import PwnedElementCard from './PwnedElement';
import { Breach, HaveIbeenPwnedText, Paste } from '@/assets/types/have-i-been-pawned';
import Link from 'next/link';

export interface PwnedSectionProps {
  textContent: HaveIbeenPwnedText['HeroSection']['PwnedSection'];
  pwnedElements: Breach[];
  pasteCount: Paste[];
}

export const PwnedSection: React.FC<PwnedSectionProps> = ({ textContent, pwnedElements, pasteCount }) => {
  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <SmileyMeh className="text-red" height={64} width={64} />
      <p className="text-3xl font-semibold text-gray-100">{textContent.title}</p>
      <div className="my-4 flex items-center justify-center rounded-md bg-red8 px-10 py-2 text-center">
        <WarningCircle className="h-12 w-12 text-red md:h-6 md:w-6" weight="fill" />
        <p className="font-regular ml-2 text-base text-gray-100">
          {textContent.description}
          {pwnedElements.length} {pwnedElements.length === 1 ? textContent.breach : textContent.breaches}
          {pasteCount.length || 0}
          {textContent.pastes}
        </p>
      </div>
      <p className="font-regular px-5 text-center text-base text-gray-100">{textContent.recomendation}</p>
      <ArrowCircleDown className="mb-10 mt-10 h-10 w-10 animate-bounce text-primary md:h-8 md:w-8" />
      <div className="flex w-full flex-col items-center justify-center space-y-8 bg-gray-1 pt-20 text-center">
        <p className="w-full text-5xl font-semibold text-gray-100">{textContent.breachesSection.title}</p>
        <p className=" max-w-[914px] px-5 text-center text-xl font-bold text-gray-80">
          {textContent.breachesSection.description}
        </p>
        <div className="font-regular flex w-full flex-wrap justify-center px-5 text-center text-xl text-gray-80">
          <p className="ml-2 mr-2">{textContent.breachesSection.linkToPasswordGenerator.previousText}</p>
          <Link href="/password-generator" target="_blank" className="underline hover:text-gray-100 hover:underline">
            {textContent.breachesSection.linkToPasswordGenerator.linkText}
          </Link>
          <p className="ml-2">{textContent.breachesSection.linkToPasswordGenerator.otherText}</p>
        </div>
        <div className="flex w-full flex-wrap justify-center gap-6 px-5">
          {pwnedElements.map((pwnedItem, index) => (
            <PwnedElementCard
              key={index}
              textContent={{
                logoPath: pwnedItem.LogoPath,
                title: pwnedItem.Title,
                description: pwnedItem.Description,
                compromisedData: textContent.compromisedData,
                dataClasses: pwnedItem.DataClasses,
                domain: pwnedItem.Title,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
