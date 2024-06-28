import { useState } from 'react';
import { UilPlayCircle } from '@iconscout/react-unicons';
import YoutubeEmbed from '@/components/utils/youtube';
import styles from './HeroSection.module.scss';
import Header from '@/components/shared/Header';

interface HeroSectionProps {
  textContent: Record<string, any>;
}

const HeroSection2 = ({ textContent }: HeroSectionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="relative flex w-full flex-col overflow-hidden bg-cool-gray-100 pt-24">
        <div className="z-10 flex flex-col items-center py-16 pb-20 lg:py-40">
          {/* Main title */}
          <div className="flex w-full max-w-2xl flex-col items-center justify-center space-y-8 px-6 text-center sm:space-y-10">
            <Header className="text-white">{textContent.title}</Header>

            <h2 className="text-xl font-normal text-white sm:text-base">
              {textContent.subtitle.line1} {textContent.subtitle.line2} {textContent.subtitle.line3}{' '}
              {textContent.subtitle.line4} {textContent.subtitle.line5}
            </h2>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="flex flex-row items-center justify-center space-x-2 text-xl text-blue-50 hover:underline sm:mx-auto sm:text-base"
            >
              <span>{textContent.cta}</span>
              <UilPlayCircle className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div
          className={`absolute top-0 left-0 h-full w-full ${styles.neonBlur} pointer-events-none origin-center scale-[105] blur-lg filter`}
        />
      </section>
      <YoutubeEmbed
        videoID="SlU5zQCM1Lk"
        show={isOpen}
        setShow={setIsOpen}
        autoplay
        loop
        hideinfo
        jsapi
        hidecontrols={false}
        mute={false}
      />
    </>
  );
};
export default HeroSection2;
