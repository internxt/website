import { useState, useEffect } from 'react';
import Header from '@/components/shared/Header';
import EmailToolbar from './components/EmailToolBar';
import { HaveIbeenPwnedText } from '@/assets/types/have-i-been-pawned';
import { PwnedSection } from './PwnedSection';
import { AllGoodSection } from './AllGoodSection';

interface HeroSectionProps {
  textContent: HaveIbeenPwnedText['HeroSection'];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ textContent }) => {
  const [result, setResult] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [queryMade, setQueryMade] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleResultChange = (data: any[]) => {
    setQueryMade(true);
    setResult(data);
    setError(null);
  };

  const handleErrorChange = (err: string | null) => {
    setQueryMade(true);
    setResult([]);
    setError(err);
  };

  useEffect(() => {
    if (queryMade) {
      const timer = setTimeout(() => {
        setShowResult(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [queryMade]);

  return (
    <section className="flex justify-center overflow-hidden pt-32">
      <div className="flex w-full flex-col items-center justify-center space-y-5 px-4 md:max-w-[1000px]">
        <div className="flex w-full max-w-[895px] flex-col items-center justify-center text-center">
          <Header isToolsPage>{textContent.title}</Header>
          <p className="pt-5 text-xl font-bold text-gray-80">{textContent.subtitle}</p>
          <p className="font-regular pt-5 text-xl text-gray-80">{textContent.description}</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center  pb-10">
          <EmailToolbar
            textContent={textContent.EmailToolBar}
            onResultChange={handleResultChange}
            onErrorChange={handleErrorChange}
          />
        </div>
        {showResult && (
          <>
            {result.length > 0 ? (
              <PwnedSection
                textContent={textContent.PwnedSection}
                pwnedElements={result.map((pwnedItem) => ({
                  logoPath: pwnedItem.LogoPath,
                  title: pwnedItem.Title,
                  description: pwnedItem.Description,
                  compromisedData: pwnedItem.compromisedData,
                  dataClasses: pwnedItem.DataClasses,
                  domain: pwnedItem.Domain,
                  BreachDate: pwnedItem.BreachDate,
                }))}
              />
            ) : (
              <AllGoodSection textContent={textContent.AllGoodSection} />
            )}
          </>
        )}
      </div>
    </section>
  );
};
