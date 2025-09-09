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
    src: '/images/about/logos/lanzadera.webp',
    alt: 'Lanzadera Logo',
    width: 254,
    height: 32,
  },
  {
    src: '/images/about/logos/telefónica.webp',
    alt: 'Telefonica Logo',
    width: 133,
    height: 32,
  },
  {
    src: '/images/about/logos/deloitte.webp',
    alt: 'Deloitte Logo',
    width: 147,
    height: 32,
  },
  {
    src: '/images/about/logos/startup.webp',
    alt: 'Startup Logo',
    width: 90,
    height: 32,
  },
  {
    src: '/images/about/logos/gobierno.webp',
    alt: 'Gobierno Logo',
    width: 83,
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

export const CompanyLogosRecognitions = () => (
  <div className="relative w-full overflow-hidden lg:py-12">
    <div
      className="flex animate-[scroll_30s_linear_infinite] hover:animate-none"
      style={{ width: `${200 * logos.length * 2}px` }}
    >
      {logos.map((logo, index) => (
        <div key={`first-${index}`} className="flex min-w-[50px] flex-shrink-0 items-center justify-center px-8">
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
      {logos.map((logo, index) => (
        <div key={`second-${index}`} className="flex min-w-[1px] flex-shrink-0 items-center justify-center px-8">
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

    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent"></div>
    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent"></div>
  </div>
);
