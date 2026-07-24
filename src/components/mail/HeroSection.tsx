// import Image from 'next/image';
import Link from 'next/link';
import { HighlightText } from '../components/HighlightText';
// import { getImage } from '@/lib/getImage';
import { CheckCircle } from '@phosphor-icons/react';
import Animation from '@/components/shared/Animation';
import { ImageConfig } from '@/assets/types/mail'
import { useState, useEffect } from 'react';

export const HeroSection = ({ textContent }) => {
    const [scale, setScale] = useState<number>(1);

    useEffect(() => {
      const checkIsMobile = () => {
        setScale(window.innerWidth < 1024 ? 0.49 : 1);
      }

      checkIsMobile();

      window.addEventListener('resize', checkIsMobile);
    }, []);

    const images: ImageConfig[] = [
      {
        src: '/images/mail/mail.webp',
        alt: 'Mail window',
        animationDelay: 200,
        size: { width: 694 * scale, height: 250 * scale },
        position: { top: `${40*scale}px`, left: '0px' },
        boxShadow: 'drop-shadow(8px 16px 16px rgba(0,0,0,0.1)) opacity(1)',
        borderRadius: '24px',
        className: 'rounded-2xl',
      },
      {
        src: '/images/mail/messages.webp',
        alt: 'Message',
        animationDelay: 600,
        size: { width: 116 * scale, height: 118 * scale },
        position: { top: `${250*scale}px`, left: `${30*scale*-1}px` },
        filter: 'drop-shadow(8px 16px 16px rgba(0,0,0,.1)) opacity(1)',
      },
      {
        src: '/images/mail/newMessage.webp',
        alt: 'New message',
        animationDelay: 800,
        size: { width: 257 * scale, height: 127 * scale },
        position: { top: `${280*scale}px`, left: `${480*scale}px` },
        filter: 'drop-shadow(8px 16px 16px rgba(0,0,0,.1)) opacity(1)',
      },
    ]

  return (
    <section
      className="flex h-min w-full flex-col items-center justify-between gap-8 px-8 pt-28 lg:flex-row lg:gap-20 lg:px-10 lg:pt-10 xl:px-32 3xl:px-80"
      style={{ background: 'linear-gradient(360deg, #FFFFFF 0%, #E5EFFF 85.17%)' }}
    >
      <div
        className={`z-20 flex h-min w-[360px] shrink-0 flex-col items-start justify-center gap-4 rounded-xl p-6 shadow-soft backdrop-blur-55 lg:h-min lg:w-[566px] lg:gap-8 lg:rounded-16 lg:p-8`}
        style={{
          background: 'linear-gradient(115.95deg, rgba(244, 248, 255, 0.75) 10.92%, rgba(255, 255, 255, 0.08) 96.4%)',
        }}
      >
        <div className="flex h-min w-min flex-col rounded-2 border border-primary px-1">
          <p className="flex whitespace-nowrap text-sm font-semibold text-primary lg:text-lg">{textContent.label}</p>
        </div>
        <h1 className="flex flex-col text-3xl font-semibold leading-tight text-gray-100 lg:gap-2 lg:text-6xl">
          <HighlightText text={textContent.title} />
        </h1>
        <p className="text-base font-normal leading-tight text-gray-55 lg:text-xl">{textContent.description}</p>
        <div className="flex flex-col">
          <Link
            href="/pricing"
            className="z-10 flex h-min w-min items-center justify-center whitespace-nowrap rounded-sm-6 bg-primary px-6 py-4 text-base font-normal text-white hover:bg-primary-dark"
          >
            {textContent.cta}
          </Link>
          <div className="flex flex-row items-center justify-center gap-2 pt-3 lg:justify-start">
            <CheckCircle size={24} color="#32C356" weight="fill" />
              <p className="whitespace-nowrap  text-lg text-gray-55">
                {textContent.garantee}
              </p>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[320px] lg:min-h-[700px] lg:w-1/2 lg:justify-center lg:pt-24 lg:flex">
        <Animation images={images} />
      </div>
    </section>
  );
};
