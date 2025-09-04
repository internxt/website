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
      <div
        className={`mt-20 flex h-min w-full flex-col items-center p-10 lg:h-min lg:flex-row lg:justify-between lg:gap-16 lg:p-20`}
      >
        <div className="flex w-[350px] flex-col lg:w-[656px] ">{TextComponent}</div>
        <div className="flex flex-col items-center ">
          {ImageComponent}
          {imageProperties && (
            <Image
              src={imageProperties.src}
              alt={imageProperties.alt}
              width={imageProperties.width}
              height={imageProperties.height}
              draggable={false}
              className="hidden lg:flex"
            />
          )}
        </div>
      </div>
    </section>
  );
};
