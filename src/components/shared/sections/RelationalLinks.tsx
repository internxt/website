import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { LinkTo } from '../../drive/components/LinkTo';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface Card {
  cta: string;
  link: string;
}

interface RelationalLinksProps {
  textContent: {
    title: string;
    links: Card[];
  };
}

const shuffleData = (data: Card[]): Card[] => {
  const shuffled = [...data];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const RelationalLinks = ({ textContent }: RelationalLinksProps) => {
  const [cards, setCards] = useState<Card[]>([]);
  const router = useRouter();

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({
    canGoLeft: false,
    canGoRight: true,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    if (textContent?.links) {
      const filteredLinks = textContent.links.filter((link) => link.link !== router.asPath);
      const shuffledLinks = shuffleData(filteredLinks);
      setCards(shuffledLinks.slice(0, 9));
    }
  }, [textContent, router.asPath]);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current === null) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    
    const maxScrollLeft = scrollWidth - clientWidth;
    
    setScrollState({
      canGoLeft: scrollLeft > 2,
      canGoRight: scrollLeft < maxScrollLeft - 2,
    });
  };

  const getScrollAmount = () => {
    const cardWidth = isMobile ? 300 : 350;
    const gap = 24; // gap-6 refers to 1.5rem which is 24px
    return cardWidth + gap;
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current === null) return;
    scrollContainerRef.current.scrollBy({
      left: -getScrollAmount(),
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    if (scrollContainerRef.current === null) return;
    scrollContainerRef.current.scrollBy({
      left: getScrollAmount(),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer === null) return;

    updateScrollButtons();
    scrollContainer.addEventListener('scroll', updateScrollButtons);

    const resizeObserver = new ResizeObserver(updateScrollButtons);
    resizeObserver.observe(scrollContainer);

    return () => {
      scrollContainer.removeEventListener('scroll', updateScrollButtons);
      resizeObserver.disconnect();
    };
  }, [isMobile, cards]);

  if (cards.length === 0) return null;

  return (
    <section className="flex w-full flex-col items-center justify-center overflow-hidden py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-0">
        <p className="mb-8 text-center text-4xl font-semibold text-gray-100 lg:mb-14 lg:text-5xl">
          {textContent.title}
        </p>
      </div>

      <div className="flex w-full flex-col items-center gap-6 lg:gap-8">
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex w-full flex-row gap-6 overflow-x-auto scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingLeft: isMobile ? '24px' : 'max(24px, calc((100vw - 1280px) / 2))',
            paddingRight: isMobile ? '24px' : 'max(24px, calc((100vw - 1280px) / 2))',
          }}
        >
          {cards.map((card) => (
            <div
              key={card.link}
              className="flex-shrink-0"
              style={{
                width: isMobile ? '300px' : '350px',
              }}
            >
              <div className="flex h-full w-full flex-col justify-between whitespace-pre-wrap rounded-2xl bg-gray-1 p-10 transition-colors hover:bg-neutral-20">
                <LinkTo linkToRedirect={card.link} text={card.cta} />
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto flex w-full max-w-7xl justify-end px-6 lg:px-0">
          <div className="flex w-[120px] justify-between">
            <button
              onClick={scrollLeft}
              disabled={!scrollState.canGoLeft}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-full border border-primary bg-transparent transition-all hover:bg-primary/10 ${
                !scrollState.canGoLeft ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'
              }`}
              aria-label="Anterior"
            >
              <CaretLeft className="text-primary" size={24} />
            </button>
            <button
              onClick={scrollRight}
              disabled={!scrollState.canGoRight}
              className={`flex h-[48px] w-[48px] items-center justify-center rounded-full border border-primary bg-transparent transition-all hover:bg-primary/10 ${
                !scrollState.canGoRight ? 'cursor-not-allowed opacity-30' : 'cursor-pointer'
              }`}
              aria-label="Siguiente"
            >
              <CaretRight className="text-primary" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelationalLinks;