import { Alarm } from '@phosphor-icons/react';
import Countdown from '../components/Countdown';
import Image from 'next/image';
import Header from '../shared/Header';
import Animation from '../home/components/Animation';
import { getImage } from '@/lib/getImage';

interface HeroSectionProps {
  textContent: any;
  hideTimer?: boolean;
  dt?: string;
  isCelebrationPage?: boolean;
  previewImg?: string;
  bgImage?: string;
  imageMobile?: string;
}

const HeroSection = ({
  textContent,
  hideTimer,
  isCelebrationPage,
  previewImg,
  bgImage = getImage('/images/lifetime/celebration/normal-bg.png'),
  dt,
  imageMobile,
}: HeroSectionProps) => {
  return (
    <section
      className={`overflow-hidden bg-cover bg-no-repeat py-20`}
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      <div className="relative flex h-full flex-col pt-10 ">
        <div className="lg:mx-10 xl:mx-32">
          <div className="relative mx-auto flex w-full max-w-screen-xl flex-col lg:flex-row">
            <div className="my-6 flex w-screen flex-shrink-0 flex-col items-center justify-center space-y-6 text-center sm:w-auto sm:px-0 md:my-8 lg:ml-0 lg:max-w-lg lg:items-start lg:text-left">
              {!hideTimer && (
                <div className="flex flex-row items-center rounded-lg py-2">
                  <Alarm size={32} className="mr-4 text-white" />
                  <Countdown textColor={'white'} dt={dt} />
                </div>
              )}
              <div className="flex px-5 lg:hidden">
                <Image
                  loading="eager"
                  src={imageMobile ?? getImage('/images/lifetime/image_mobile.webp')}
                  draggable="false"
                  quality={100}
                  width={600}
                  height={450}
                  alt="Laptop and phone with Internxt app"
                />
              </div>
              <div className="flex max-w-[650px] flex-col items-center px-5 text-center text-white lg:items-start lg:px-0 lg:text-start">
                <Header maxWidth="">{textContent.title}</Header>
                <p className="pt-6 text-2xl font-normal">{textContent.description}</p>
              </div>
              <button
                onClick={() => {
                  window.location.href = `#payment`;
                }}
                className="flex  cursor-pointer flex-col items-center rounded-lg bg-primary text-center hover:bg-primary-dark"
              >
                <p className="px-9 py-3 text-lg font-medium text-white">
                  {hideTimer ? textContent.cta2 : textContent.cta1}
                </p>
              </button>
            </div>
            {isCelebrationPage ? (
              <div className="absolute -top-36 right-0 hidden h-screen lg:flex">
                <Image
                  src={getImage('/images/lifetime/celebration/confetti.svg')}
                  alt="Confetti"
                  width={464}
                  height={603}
                />
              </div>
            ) : null}
            <div className="hidden h-[580px] lg:flex">
              <Animation previewImg={previewImg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
