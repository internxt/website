'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { getImage } from '@/lib/getImage';
import { DARK_MODE_ENABLED } from '@/theme.config';

interface HeroSectionProps {
  darkMode?: boolean;
  textContent: any;
}

const IMAGES = [
  { src: '/images/Levante/Levante1.webp', width: 452, height: 320 },
  { src: '/images/Levante/Levante2.webp', width: 365, height: 320 },
  { src: '/images/Levante/Levante4.webp', width: 558, height: 372 },
  { src: '/images/Levante/Levante5.webp', width: 558, height: 372 },
];

export default function HeroSection({
  darkMode = DARK_MODE_ENABLED,
  textContent,
}: Readonly<HeroSectionProps>): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      indexRef.current = (indexRef.current + 1) % IMAGES.length;
      el.scrollTo({ left: indexRef.current * el.clientWidth, behavior: 'smooth' });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const HighlightText = ({
    text,
    className = 'lg:text-5xl text-30 text-start lg:text-center font-semibold leading-tight lg:whitespace-pre-line',
  }) => {
    const parts = text.split(/(\*\*.*?\*\*)/);

    return (
      <span className={className}>
        {parts.map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <span key={index} className="text-primary">
                {part.slice(2, -2)}
              </span>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </span>
    );
  };

  return (
    <section
      className={`mt-8 flex h-min w-full flex-col items-center justify-center gap-10 overflow-hidden px-6 py-20 lg:mt-16 lg:gap-16 lg:px-20`}
      style={{
        background: darkMode
          ? 'linear-gradient(360deg, #1C1C1C 0%, #0D0D0D 100%)'
          : 'linear-gradient(360deg, #FFFFFF 0%, #F4F8FF 100%)',
      }}
    >
      <div className="flex flex-col gap-10 lg:gap-6">
        <Image
          src={getImage('/images/Levante/InternxtLevanteOPCP.webp')}
          alt="Internxt x Levante Logo"
          width={850}
          height={116}
          quality={100}
        />
        <HighlightText text={textContent.title} />
      </div>

      <div className="hidden flex-col gap-6 lg:flex">
        <div className="flex flex-row justify-between gap-2.5">
          <Image
            src={getImage('/images/Levante/Levante1.webp')}
            alt="Internxt x Levante"
            width={452}
            height={320}
            className="rounded-16"
            quality={100}
          />
          <Image
            src={getImage('/images/Levante/Levante2.webp')}
            alt="Internxt x Levante"
            width={365}
            height={320}
            className="rounded-16"
            quality={100}
          />
          <Image
            src={getImage('/images/Levante/Levante3.webp')}
            alt="Internxt x Levante"
            width={275}
            height={320}
            className="rounded-16"
            quality={100}
          />
        </div>
        <div className="flex flex-row justify-between gap-2.5">
          <Image
            src={getImage('/images/Levante/Levante4.webp')}
            alt="Internxt x Levante"
            width={558}
            height={372}
            className="rounded-16"
            quality={100}
          />
          <Image
            src={getImage('/images/Levante/Levante5.webp')}
            alt="Internxt x Levante"
            width={558}
            height={372}
            className="rounded-16"
            quality={100}
          />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex w-full snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth lg:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {IMAGES.map((img, i) => (
          <div key={i} className="w-full flex-none snap-center">
            <Image
              src={getImage(img.src)}
              alt={`Internxt x Levante ${i + 1}`}
              width={img.width}
              height={img.height}
              className="w-full rounded-xl object-cover"
              style={{ maxHeight: '195px' }}
              quality={100}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
