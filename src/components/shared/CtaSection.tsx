import { getImage } from '@/lib/getImage';
import Link from 'next/link';

const CtaSection = ({
  textContent,
  url,
  maxWidth,
  target,
  bgImage,
  onClick,
  customDescription,
}: {
  textContent: any;
  url: string;
  maxWidth?: string;
  target?: string;
  bgImage?: string;
  onClick?: () => void;
  customDescription?: React.ReactNode;
}) => {
  const defaultBgImage = getImage('/images/cyber-awareness/Background.svg');

  const handleClick = () => {
    const callback = () => {
      if (url) {
        window.location.href = url;
      }
    };

    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-728922855/-RgbCLv9z4caEOf1ydsC',
        value: 1.0,
        currency: 'EUR',
        event_callback: callback,
      });
    } else {
      callback();
    }
  };

  return (
    <section
      style={{
        backgroundImage: `url(${bgImage ? getImage(bgImage) : defaultBgImage})`,
      }}
      className="overflow-hidden bg-primary bg-cover px-5 py-14"
    >
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className={`flex ${maxWidth} flex-col items-center space-y-4 text-center text-white`}>
          <p className="text-4xl font-semibold">{textContent.title}</p>
          {customDescription}
        </div>
        <Link
          href={url}
          target={target}
          onClick={
            onClick
              ? () => {
                  onClick();
                  handleClick();
                }
              : handleClick
          } // Combina onClick existente con la lógica de conversión
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
