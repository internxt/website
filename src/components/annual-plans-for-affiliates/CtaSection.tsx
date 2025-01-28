import { getImage } from '@/lib/getImage';
import Link from 'next/link';
import Image from 'next/image';
import { X } from '@phosphor-icons/react';

const CtaSection = ({
  textContent,
  url,
  maxWidth,
  target,
  bgImage,
  onClick,
  customDescription,
  isBrave,
}: {
  textContent: any;
  url: string;
  maxWidth?: string;
  target?: string;
  bgImage?: string;
  onClick?: () => void;
  customDescription?: React.ReactNode;
  isBrave?: boolean;
}) => {
  const defaultBgImage = getImage('/images/cyber-awareness/Background.svg');
  const BraveLabel = () => {
    return (
      <div className="flex flex-row items-center space-x-3.5">
        <Image
          src={getImage('/images/partnerships/brave/internxt_x_brave.svg')}
          width={287}
          height={36}
          alt="Brave logo"
        />
      </div>
    );
  };
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage ? getImage(bgImage) : defaultBgImage})`,
      }}
      className="overflow-hidden bg-primary bg-cover px-5 py-14"
    >
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        {isBrave ? <BraveLabel /> : null}
        <div className={`flex ${maxWidth} flex-col items-center space-y-4 text-center text-white`}>
          <p className="text-4xl font-semibold">{textContent.title}</p>
          {customDescription}
        </div>
        <Link
          href={url}
          target={target}
          className={`flex rounded-lg px-5 py-3 text-lg font-medium ${
            bgImage && bgImage !== defaultBgImage
              ? 'bg-primary text-xl text-white hover:bg-primary-dark'
              : 'bg-white text-primary hover:bg-blue-10'
          }`}
        >
          {textContent.cta}
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
