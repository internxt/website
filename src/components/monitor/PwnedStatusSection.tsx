import React from 'react';
import { Breach, HaveIbeenPwnedText, Paste } from '@/assets/types/have-i-been-pawned';
import { PwnedSection } from './PwnedSection';
import { AllGoodSection } from './AllGoodSection';

interface PwnedStatusSectionProps {
  breaches: Breach[];
  resultPastes: Paste[];
  textContent: {
    PwnedSection: HaveIbeenPwnedText['HeroSection']['PwnedSection'];
    AllGoodSection: HaveIbeenPwnedText['HeroSection']['AllGoodSection'];
  };
}

const PwnedStatusSection: React.FC<PwnedStatusSectionProps> = ({ breaches, resultPastes, textContent }) => {
  return breaches.length > 0 ? (
    <PwnedSection textContent={textContent.PwnedSection} pwnedElements={breaches} pasteCount={resultPastes} />
  ) : (
    <AllGoodSection textContent={textContent.AllGoodSection} />
  );
};

export default PwnedStatusSection;
