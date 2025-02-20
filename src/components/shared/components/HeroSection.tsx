import { CSSProperties, ReactNode } from 'react';
import HeroSectionSafeArea from '../HeroSectionSafeArea';
import Image from 'next/image';

interface HeroSectionProps {
  TextComponent: ReactNode;
  ImageComponent?: ReactNode;
  imageProperties?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  style?: CSSProperties;
  background?: string;
  className?: string;
}

export const HeroSection = ({
  TextComponent,
  style,
  ImageComponent,
  imageProperties,
  background,
}: HeroSectionProps): JSX.Element => {
  return (
    <section className={`overflow-hidden  py-20 ${background}`} style={style}>
      <HeroSectionSafeArea>
        <div className={`flex w-full flex-col items-center  gap-10 lg:flex-row lg:justify-between`}>
          <div className="flex max-h-[570px] min-h-[570px] flex-col">{TextComponent}</div>
          <div className="flex max-h-[570px] flex-col items-center pt-20 md:min-h-[570px]">
            {ImageComponent}
            {imageProperties && (
              <Image
                src={imageProperties.src}
                alt={imageProperties.alt}
                width={imageProperties.width}
                height={imageProperties.height}
                draggable={false}
              />
            )}
          </div>
        </div>
      </HeroSectionSafeArea>
    </section>
  );
};
