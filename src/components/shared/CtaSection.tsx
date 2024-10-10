import { getImage } from '@/lib/getImage';
import Link from 'next/link';

const CtaSection = ({
  textContent,
  url,
  maxWidth,
  target,
  bgImage,
  onClick
}: {
  textContent: any;
  url: string;
  maxWidth?: string;
  target?: string;
  bgImage?: string
  onClick?: ()=> void; 
}) => {
  const defaultBgImage = getImage('/images/cyber-awareness/Background.svg'); 
  return (
    <section
      style={{ 
        backgroundImage: `url(${bgImage ? getImage(bgImage) : defaultBgImage})` 
      }}
      className="overflow-hidden bg-primary bg-cover px-5 py-14"
    >
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className={`flex  ${maxWidth} flex-col items-center space-y-4 text-center text-white`}>
          <p className="text-4xl font-semibold">{textContent.title}</p>
          
            { textContent.description2 ? (
              <p className="w-full max-w-[308px] text-xl font-regular">
                <span className="font-bold">{textContent.description}</span>
                <br />
                {textContent.description2}
              </p>
            ) : (
              <p className="w-full max-w-[573px] text-xl font-normal">
                {textContent.description}
                <br />
              </p>
            )}
        </div>
        <Link
          href={url}
          target={target}
          className={`flex rounded-lg px-5 py-3 text-lg font-medium ${
          bgImage && bgImage !== defaultBgImage ? 'bg-primary text-white text-xl hover:bg-primary-dark' : 'bg-white text-primary hover:bg-blue-10'
        }`}
        onClick={onClick}
        >
          {textContent.cta}
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
