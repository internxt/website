import { ReactNode } from 'react';
import HeroSectionSafeArea from '../HeroSectionSafeArea';
import Image from 'next/image';

interface HeroSectionProps {
  TextComponent: ReactNode;
  imageProperties: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  background?: string;
}

export const HeroSection = ({ TextComponent, imageProperties, background }: HeroSectionProps) => {
  const { src, alt, width, height } = imageProperties;

  return (
    <HeroSectionSafeArea>
      <div className={`flex w-full flex-col items-center ${background} gap-10 lg:flex-row lg:justify-between`}>
        <div className="flex max-w-[550px] flex-col">{TextComponent}</div>
        <div className="flex flex-col items-center">
          <Image src={src} alt={alt} width={width} height={height} draggable={false} />
        </div>
      </div>
    </HeroSectionSafeArea>
  );
};
