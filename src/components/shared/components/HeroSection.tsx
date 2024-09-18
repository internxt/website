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
}

export const HeroSection = ({
  TextComponent,
  style,
  ImageComponent,
  imageProperties,
  background,
}: HeroSectionProps): JSX.Element => {
  return (
    <section className="overflow-hidden px-5 py-20" style={style}>
      <HeroSectionSafeArea>
        <div className={`flex w-full flex-col items-center ${background} gap-10 lg:flex-row lg:justify-between`}>
          <div className="flex max-w-[550px] flex-col">{TextComponent}</div>
          <div className="flex flex-col items-center">
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
