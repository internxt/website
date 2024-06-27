import { getImage } from '@/lib/getImage';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export const MinimalNavbar = ({ lang }) => {
  const [scrolled, setScrolled] = useState<boolean>(true);

  const handleScroll = () => setScrolled(window.pageYOffset > 0);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <div
      id="navbar"
      className={`fixed flex h-20 w-full items-center justify-center bg-white backdrop-blur-lg backdrop-saturate-150 backdrop-filter transition-all duration-100 lg:h-16 ${
        scrolled ? 'border-opacity-5 bg-opacity-90' : 'border-opacity-0'
      } z-50 border-b border-black`}
    >
      <div className="flex w-full flex-col items-center justify-center">
        <Link href={'/'} locale={lang} passHref className="flex flex-shrink-0">
          <img
            loading="lazy"
            className="select-none"
            src={getImage(`/logos/internxt/cool-gray-90.svg`)}
            alt="Internxt logo"
          />
        </Link>
      </div>
    </div>
  );
};
