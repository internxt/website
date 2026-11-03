'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { getImage } from '@/lib/getImage';

interface HeroSectionProps {
    textContent: any;
}

const IMAGES = [
  { src: '/images/Levante/Levante1.webp', width: 452, height: 320 },
  { src: '/images/Levante/Levante2.webp', width: 365, height: 320 },
  { src: '/images/Levante/Levante4.webp', width: 558, height: 372 },
  { src: '/images/Levante/Levante5.webp', width: 558, height: 372 },
];

export default function HeroSection({
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

  const HighlightText = ({ text, className = 'lg:text-5xl text-30 text-start lg:text-center font-semibold leading-tight lg:whitespace-pre-line' }) => {
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
      className={`flex h-min flex-col w-full items-center justify-center overflow-hidden py-20 mt-8 lg:mt-16 px-6 lg:px-20 lg:gap-16 gap-10`}
      style={{ background: 'linear-gradient(360deg, #FFFFFF 0%, #F4F8FF 100%)' }}
    >
      <div className='flex flex-col lg:gap-6 gap-10'>
        <Image
          src={getImage('/images/Levante/InternxtLevanteOPCP.webp')}
          alt="Internxt x Levante Logo"
          width={850}
          height={116}
          quality={100}
        />
        <HighlightText text={textContent.title} />
      </div>

      <div className='hidden lg:flex flex-col gap-6'>
        <div className='flex flex-row justify-between gap-2.5'>
          <Image src={getImage('/images/Levante/Levante1.webp')} alt="Internxt x Levante" width={452} height={320} className='rounded-16' quality={100} />
          <Image src={getImage('/images/Levante/Levante2.webp')} alt="Internxt x Levante" width={365} height={320} className='rounded-16' quality={100} />
          <Image src={getImage('/images/Levante/Levante3.webp')} alt="Internxt x Levante" width={275} height={320} className='rounded-16' quality={100} />
        </div>
        <div className='flex flex-row justify-between gap-2.5'>
          <Image src={getImage('/images/Levante/Levante4.webp')} alt="Internxt x Levante" width={558} height={372} className='rounded-16' quality={100} />
          <Image src={getImage('/images/Levante/Levante5.webp')} alt="Internxt x Levante" width={558} height={372} className='rounded-16' quality={100} />
        </div>
      </div>

      <div
        ref={scrollRef}
        className='flex lg:hidden w-full overflow-x-auto snap-x snap-mandatory scroll-smooth gap-3'
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {IMAGES.map((img, i) => (
          <div key={i} className='flex-none w-full snap-center'>
            <Image
              src={getImage(img.src)}
              alt={`Internxt x Levante ${i + 1}`}
              width={img.width}
              height={img.height}
              className='rounded-xl w-full object-cover'
              style={{ maxHeight: '195px' }}
              quality={100}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
