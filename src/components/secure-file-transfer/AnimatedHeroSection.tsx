import { ImageConfig } from '@/assets/types/private-cloud-storage-solutions';
import Animation from '@/components/shared/Animation'

interface AnimatedHeroSectionProps {
  textComponent: JSX.Element;
  bgGradient?: string;
}

export default function AnimatedHero({
  textComponent,
}: Readonly<AnimatedHeroSectionProps>): JSX.Element {
  const images: ImageConfig[] = [
    {
      src: '/images/secure-file-sharing/hero.webp',
      alt: 'Browser window',
      animationDelay: 200,
      size: { width: 650, height: 520 },
      position: { top: '12%', left: '140px' },
      borderRadius: '24px',
      className: 'rounded-2xl',
    },
  ];

  return (
      <section
        className={`overflow-hidden mb-0 bg-gradient-to-t from-[#001D6C] to-[#121923]`}
      >
        <div className="relative mx-4 xl:mx-32">
          <div
            className={`absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat lg:block`}
          />
          <div className="relative mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center lg:flex-row lg:items-center lg:pb-24">
            <div className="absolute inset-y-0 left-1/2 z-0 hidden w-screen -translate-x-1/2 bg-cover bg-center bg-no-repeat md:flex" />
            <div
              className={`flex w-screen flex-shrink-0 flex-col items-center justify-center gap-5 px-5 text-center sm:w-auto sm:px-0 md:ml-2 lg:ml-0 lg:items-start lg:text-left`}
            >
              <div
                className={`mt-20 flex lg:h-[530px]  h-[450px] w-full lg:w-[580px]'
                } lg:mt-40 flex-col items-center justify-evenly px-2 text-start lg:items-start lg:px-0`}
              >
                {textComponent}
              </div>
            </div>
            <div className=" hidden min-h-[700px] w-1/2 justify-center pt-24 lg:flex">
              <Animation images={images} />;
            </div>
          </div>
        </div>
      </section>
  );
}
