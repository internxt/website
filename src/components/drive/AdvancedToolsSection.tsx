'use client';

import { DriveText } from '@/assets/types/drive';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import Link from 'next/link';
import { HighlightText } from '../components/HighlightText';
import { CommandTextInputCopy } from '../shared/CommandTextInputCopy';
import { ArrowUpRight, CaretRight, CaretLeft } from '@phosphor-icons/react';
import { useRef, useState, useEffect } from 'react';

interface AdvancedToolsProps {
  textContent: DriveText['AdvancedToolsSection'];
  lang?: string;
}

const AdvancedToolsSection = ({ textContent, lang = 'en' }: AdvancedToolsProps): JSX.Element => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const updateScrollButtons = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const scrollLeft = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      left: -309, // 293px de card + 16px de gap
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      left: 309,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || !isMobile) return;

    updateScrollButtons();
    scrollContainer.addEventListener('scroll', updateScrollButtons);
    const resizeObserver = new ResizeObserver(updateScrollButtons);
    resizeObserver.observe(scrollContainer);

    return () => {
      scrollContainer.removeEventListener('scroll', updateScrollButtons);
      resizeObserver.disconnect();
    };
  }, [isMobile]);

  return (
    <section className="flex min-h-0 w-full flex-col gap-12 p-20 px-5 lg:px-10 xl:px-32 3xl:px-80">
      <div className="flex w-full flex-col gap-12">
        <p className="text-4xl font-bold text-gray-95">{textContent.title}</p>
        <p className="text-xl font-normal text-gray-55">{textContent.description}</p>
      </div>

      <div className="rounded-16 border-[1px] border-green-120 bg-gray-1 py-12">
        <div className="flex min-h-0 w-full flex-col gap-8 lg:flex-row lg:gap-0">
          <div className="mx-4 flex flex-col gap-8 lg:mx-12 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <HighlightText
                text={textContent.powerUsers.title}
                className="whitespace-pre-line text-4xl font-bold text-gray-95"
              />
              <p className="whitespace-pre-line text-lg font-normal text-gray-55">
                {textContent.powerUsers.description}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold text-gray-100">{textContent.powerUsers.install.title}</p>
              <CommandTextInputCopy text={textContent.powerUsers.install.command} />
            </div>
          </div>

          <div className="flex min-h-0 flex-col px-4 lg:w-1/2 lg:px-0">
            <Image
              src={getImage('/images/drive/CLIConsole.webp')}
              alt="CLI Console Interface"
              width={1000}
              height={289}
              quality={100}
              className="min-h-0 w-full"
            />
          </div>
        </div>

        <div className="mx-4 h-[1px] bg-neutral-35 lg:mx-12" />

        <div className="flex flex-col gap-4 p-12 text-lg sm:flex-row sm:gap-8">
          <p className="text-lg text-gray-55">{textContent.powerUsers.learnMore.title}</p>

          <Link
            href="https://github.com/internxt/cli/tree/main?tab=readme-ov-file#readme"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-1 text-base font-medium text-primary hover:underline"
          >
            {textContent.powerUsers.learnMore.GitHub}
            <ArrowUpRight className="text-primary" width={18} height={18} />
          </Link>

          <Link
            href="https://help.internxt.com/en/articles/9178044-does-internxt-support-webdav?_gl=1*1j4uly1*_gcl_au*MTA5NDc4NjI1OC4xNzU5ODI0Nzc0LjEzMzE4MTk2MjcuMTc2MjQyMDk0MS4xNzYyNDIwOTQ0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-1 text-base font-medium text-primary hover:underline"
          >
            {textContent.powerUsers.learnMore.learnMore}
            <ArrowUpRight className="text-primary" width={18} height={18} />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          style={
            isMobile
              ? {
                  display: 'flex',
                  gap: '16px',
                  overflowX: 'auto',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  scrollBehavior: 'smooth',
                  paddingLeft: '20px',
                  paddingRight: 'calc(20px + 52px)',
                }
              : {}
          }
        >
          <Link
            href="https://internxt.com/webdav"
            className="flex flex-col gap-8 rounded-16 border-[1px] border-green-120 bg-neutral-15 p-6 transition-colors hover:bg-neutral-20"
            style={isMobile ? { width: '293px', flexShrink: 0 } : {}}
          >
            <p className="text-xl font-medium text-gray-100">{textContent.webDAV.title}</p>
            <p className="text-base font-normal text-gray-55">{textContent.webDAV.description}</p>
            <span className="flex flex-row items-center text-base font-medium text-primary">
              {textContent.webDAV.cta}
              <CaretRight className="text-primary" height={24} width={24} />
            </span>
          </Link>

          <Link
            href={`https://internxt.com/${lang}/webdav`}
            className="flex flex-col gap-8 rounded-16 border-[1px] border-green-120 bg-neutral-15 p-6 transition-colors hover:bg-neutral-20"
            style={isMobile ? { width: '293px', flexShrink: 0 } : {}}
          >
            <div className="flex flex-row items-center gap-2">
              <p className="text-xl font-medium text-gray-100">{textContent.Rclone.title}</p>
            </div>
            <p className="text-base font-normal text-gray-55">{textContent.Rclone.description}</p>
            <span className="flex flex-row items-center text-base font-medium text-primary">
              {textContent.Rclone.cta}
              <CaretRight className="text-primary" height={24} width={24} />
            </span>
          </Link>

          <Link
            href={`https://internxt.com/${lang}/nas`}
            className="flex flex-col gap-8 rounded-16 border-[1px] border-green-120 bg-neutral-15 p-6 transition-colors hover:bg-neutral-20"
            style={isMobile ? { width: '293px', flexShrink: 0 } : {}}
          >
            <div className="flex flex-row items-center gap-2">
              <p className="text-xl font-medium text-gray-100">{textContent.NAS.title}</p>
            </div>
            <p className="text-base font-normal text-gray-55">{textContent.NAS.description}</p>
            <span className="flex flex-row items-center text-base font-medium text-primary">
              {textContent.NAS.cta}
              <CaretRight className="text-primary" height={24} width={24} />
            </span>
          </Link>
        </div>

        {isMobile && (
          <div className="flex justify-end px-5">
            <div className="flex w-[120px] justify-between">
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-primary bg-transparent transition-all hover:bg-primary/10 ${
                  !canScrollLeft ? 'cursor-not-allowed opacity-30' : ''
                }`}
                aria-label="Anterior"
              >
                <CaretLeft className="h-[24px] w-[24px] text-primary" />
              </button>
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-full border border-primary bg-transparent transition-all hover:bg-primary/10 ${
                  !canScrollRight ? 'cursor-not-allowed opacity-30' : ''
                }`}
                aria-label="Siguiente"
              >
                <CaretRight className="h-[24px] w-[24px] text-primary" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdvancedToolsSection;
