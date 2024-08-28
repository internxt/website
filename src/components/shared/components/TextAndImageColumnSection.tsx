import Image from 'next/image';
import { ReactNode } from 'react';

interface TextAndImageColumnSectionProps {
  TextComponent: ReactNode;
  imageProperties: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  background?: string;
}

export const TextAndImageColumnSection = ({
  TextComponent,
  imageProperties,
  background,
}: TextAndImageColumnSectionProps) => {
  const { src, alt, width, height } = imageProperties;

  return (
    <section className={`overflow-hidden ${background} px-5 py-20`}>
      <div className="flex flex-col items-center gap-16 text-center">
        {TextComponent}
        <div className="content flex flex-col">
          <Image src={src} alt={alt} width={width} height={height} draggable={false} />
        </div>
      </div>
    </section>
  );
};
