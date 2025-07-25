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
    <section className={`overflow-hidden  ${background}`} style={style}>
      <HeroSectionSafeArea>
        <div className={`flex h-[850px] w-full flex-col items-center lg:h-[600px] lg:flex-row lg:justify-between`}>
          <div className="flex w-[350px] flex-col lg:w-[750px]  ">{TextComponent}</div>
          <div className="flex  flex-col items-center ">
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
