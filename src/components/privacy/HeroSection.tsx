import { useState } from 'react';
import YoutubeEmbed from '@/components/utils/youtube';
import { CaretRight } from '@phosphor-icons/react';
import Header from '@/components/shared/Header';

interface HeroSectionProps {
  textContent: Record<string, any>;
}

const HeroSection = ({ textContent }: HeroSectionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

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

            <h2 className="mb-8 w-full max-w-[850px] text-xl font-normal text-gray-80 sm:mb-10">
              {textContent.description}
            </h2>

            <div
              onClick={() => setIsOpen(true)}
              className="flex cursor-pointer flex-row items-center justify-center space-x-1 text-xl font-semibold text-blue-50 hover:underline sm:text-lg"
            >
              <p>{textContent.cta}</p>
              <CaretRight size={12} weight="bold" />
            </div>
          </div>
        </div>
      </section>
      <YoutubeEmbed videoID="SlU5zQCM1Lk" show={isOpen} setShow={setIsOpen} autoplay loop hideinfo jsapi />
    </>
  );
};

export default HeroSection;
