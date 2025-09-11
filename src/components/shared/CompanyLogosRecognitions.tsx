import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const logos: Logo[] = [
  {
    src: '/images/about/logos/valencia.webp',
    alt: 'Valencia Logo',
    width: 408,
    height: 408,
  },
  {
    src: '/images/about/logos/forbes.webp',
    alt: 'Forbes Logo',
    width: 123,
    height: 32,
  },
  {
    src: '/images/about/logos/lanzadera.png',
    alt: 'Lanzadera Logo',
    width: 254,
    height: 32,
  },
  {
    src: '/images/about/logos/Telefónica_2021.png',
    alt: 'Telefonica Logo',
    width: 250,
    height: 1024,
  },
  {
    src: '/images/about/logos/deloitte.webp',
    alt: 'Deloitte Logo',
    width: 147,
    height: 32,
  },

  {
    src: '/images/about/logos/levante.webp',
    alt: 'Levante Logo',
    width: 408,
    height: 408,
  },
  {
    src: '/images/about/logos/mashable.webp',
    alt: 'Mashable Logo',
    width: 201,
    height: 32,
  },
  {
    src: '/images/about/logos/prosegur.webp',
    alt: 'Prosegur Logo',
    width: 170,
    height: 32,
  },
  {
    src: '/images/about/logos/valencia.webp',
    alt: 'Valencia Logo',
    width: 408,
    height: 408,
  },
  {
    src: '/images/about/logos/forbes.webp',
    alt: 'Forbes Logo',
    width: 123,
    height: 32,
  },
  {
    src: '/images/about/logos/lanzadera.png',
    alt: 'Lanzadera Logo',
    width: 254,
    height: 32,
  },
  {
    src: '/images/about/logos/Telefónica_2021.png',
    alt: 'Telefonica Logo',
    width: 250,
    height: 1024,
  },
  {
    src: '/images/about/logos/deloitte.webp',
    alt: 'Deloitte Logo',
    width: 147,
    height: 32,
  },

  {
    src: '/images/about/logos/levante.webp',
    alt: 'Levante Logo',
    width: 408,
    height: 408,
  },
  {
    src: '/images/about/logos/mashable.webp',
    alt: 'Mashable Logo',
    width: 201,
    height: 32,
  },
  {
    src: '/images/about/logos/prosegur.webp',
    alt: 'Prosegur Logo',
    width: 170,
    height: 32,
  },
];

const logosMobile: Logo[] = [
  {
    src: '/images/about/logos/valencia.webp',
    alt: 'Valencia Logo',
    width: 204,
    height: 204,
  },
  {
    src: '/images/about/logos/forbes.webp',
    alt: 'Forbes Logo',
    width: 61,
    height: 16,
  },
  {
    src: '/images/about/logos/lanzadera.png',
    alt: 'Lanzadera Logo',
    width: 127,
    height: 16,
  },
  {
    src: '/images/about/logos/Telefónica_2021.png',
    alt: 'Telefonica Logo',
    width: 125,
    height: 512,
  },
  {
    src: '/images/about/logos/deloitte.webp',
    alt: 'Deloitte Logo',
    width: 73,
    height: 16,
  },

  {
    src: '/images/about/logos/levante.webp',
    alt: 'Levante Logo',
    width: 204,
    height: 204,
  },
  {
    src: '/images/about/logos/mashable.webp',
    alt: 'Mashable Logo',
    width: 100,
    height: 16,
  },
  {
    src: '/images/about/logos/prosegur.webp',
    alt: 'Prosegur Logo',
    width: 85,
    height: 16,
  },
  {
    src: '/images/about/logos/valencia.webp',
    alt: 'Valencia Logo',
    width: 204,
    height: 204,
  },
  {
    src: '/images/about/logos/forbes.webp',
    alt: 'Forbes Logo',
    width: 61,
    height: 16,
  },
  {
    src: '/images/about/logos/lanzadera.png',
    alt: 'Lanzadera Logo',
    width: 127,
    height: 16,
  },
  {
    src: '/images/about/logos/Telefónica_2021.png',
    alt: 'Telefonica Logo',
    width: 125,
    height: 512,
  },
  {
    src: '/images/about/logos/deloitte.webp',
    alt: 'Deloitte Logo',
    width: 73,
    height: 16,
  },

  {
    src: '/images/about/logos/levante.webp',
    alt: 'Levante Logo',
    width: 204,
    height: 204,
  },
  {
    src: '/images/about/logos/mashable.webp',
    alt: 'Mashable Logo',
    width: 100,
    height: 16,
  },
  {
    src: '/images/about/logos/prosegur.webp',
    alt: 'Prosegur Logo',
    width: 85,
    height: 16,
  },
  {
    src: '/images/about/logos/valencia.webp',
    alt: 'Valencia Logo',
    width: 204,
    height: 204,
  },
  {
    src: '/images/about/logos/forbes.webp',
    alt: 'Forbes Logo',
    width: 61,
    height: 16,
  },
  {
    src: '/images/about/logos/lanzadera.png',
    alt: 'Lanzadera Logo',
    width: 127,
    height: 16,
  },
  {
    src: '/images/about/logos/Telefónica_2021.png',
    alt: 'Telefonica Logo',
    width: 125,
    height: 512,
  },
  {
    src: '/images/about/logos/deloitte.webp',
    alt: 'Deloitte Logo',
    width: 73,
    height: 16,
  },

  {
    src: '/images/about/logos/levante.webp',
    alt: 'Levante Logo',
    width: 204,
    height: 204,
  },
  {
    src: '/images/about/logos/mashable.webp',
    alt: 'Mashable Logo',
    width: 100,
    height: 16,
  },
  {
    src: '/images/about/logos/prosegur.webp',
    alt: 'Prosegur Logo',
    width: 85,
    height: 16,
  },
];

export const CompanyLogosRecognitions = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];
  const duplicatedLogosMobile = [...logosMobile, ...logosMobile, ...logosMobile, ...logosMobile, ...logosMobile];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 1;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        const logoWidth = 200;
        const singleSetWidth = logos.length * logoWidth;

        if (scrollContainer.scrollLeft >= singleSetWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="relative w-full lg:py-12">
      <div
        ref={scrollRef}
        className="overflow-x-auto"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div className="hidden lg:flex">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="flex min-w-[50px] flex-shrink-0 items-center justify-center px-8"
            >
              <Image
                src={getImage(logo.src)}
                width={logo.width}
                height={logo.height}
                loading="lazy"
                alt={logo.alt}
                draggable={false}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex lg:hidden">
          {duplicatedLogosMobile.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="flex min-w-[50px] flex-shrink-0 items-center justify-center px-4"
            >
              <Image
                src={getImage(logo.src)}
                width={logo.width}
                height={logo.height}
                loading="lazy"
                alt={logo.alt}
                draggable={false}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent"></div>
    </div>
  );
};
