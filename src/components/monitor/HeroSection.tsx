import Header from '@/components/shared/Header';
import EmailToolbar from './components/EmailToolBar';
import { HaveIbeenPwnedText } from '@/assets/types/have-i-been-pawned';

interface HeroSectionProps {
  textContent: HaveIbeenPwnedText['HeroSection'];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ textContent }) => {
  return (
    <section className="flex justify-center overflow-hidden pb-20 pt-32">
      <div className="flex w-full flex-col items-center justify-center space-y-10 px-4 md:max-w-[1000px]">
        <div className="flex w-full max-w-[895px] flex-col items-center justify-center text-center">
          <div className="my-4 flex items-center justify-center rounded-md  bg-gray-5 px-5 py-2">
            <p className="text-xl font-medium text-gray-80">{textContent.tagline}</p>
          </div>
          <Header isToolsPage>{textContent.title}</Header>
          <p className="pt-5 text-xl font-bold text-gray-80">{textContent.subtitle}</p>
          <p className="font-regular pt-5 text-xl text-gray-80">{textContent.description}</p>
        </div>

        <EmailToolbar textContent={textContent} />
      </div>
    </section>
  );
};
