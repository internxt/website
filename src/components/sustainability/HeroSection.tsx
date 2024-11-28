import { SustainabilityText } from '@/assets/types/sustainabilty';
import Header from '@/components/shared/Header';

export interface HeroSectionProps {
  textContent: SustainabilityText['HeroSection'];
}

const HeroSection = ({ textContent }: HeroSectionProps) => {
  return (
    <>
      <section className="relative flex w-full flex-col overflow-hidden pt-14">
        <div className="flex flex-col items-center py-16 pb-20 lg:py-20">
          {/* Main title */}
          <div className="flex flex-col items-center justify-center space-y-10 px-6 text-center">
            <Header>
              {textContent.title.normalText}
              <span className="text-primary">{textContent.title.blueText}</span>
            </Header>

            <h2 className="font-regular mb-8 w-full max-w-[850px] text-xl text-gray-80 sm:mb-10">
              {textContent.description}
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
