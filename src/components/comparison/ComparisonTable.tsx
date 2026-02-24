/* eslint-disable @next/next/no-img-element */
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface ComparisonTableProps {
  textContent: {
    title: string;
    description: string;
    tableSection: {
      comparisons: string[];
      internxtFeatures: string[];
      competitorFeatures: string[];
    };
  };
  logo?: string;
  competitor:
    | 'pCloud'
    | 'MEGA'
    | 'Dropbox'
    | 'Drive'
    | 'Koofr'
    | 'Icedrive'
    | 'OneDrive'
    | 'Degoo'
    | 'Elephantdrive'
    | 'FileJump'
    | 'Drime'
    | 'GoogleMeet'
    | 'TeraBox'
    | 'Filen'
    | 'idrive'
    | 'Terabox'
    | 'sync'
    | 'proton-drive'
    | 'zoom'
    | 'Teams'
    | 'ChatGPT'
    | 'Copilot'
    | 'deepseek'
    | 'gemini'
    | 'grok';
  hideTooltip?: boolean;
  needH2?: boolean;
}

export const ComparisonTable = ({ textContent, logo, competitor, needH2 = false }: ComparisonTableProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const parseText = (text: string): string => {
    return typeof text === 'string' ? text.replace(/{{competitor}}/g, competitor) : text;
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const handleScroll = () => {
      setIsScrolled(scrollElement.scrollLeft > 0);
    };

    scrollElement.addEventListener('scroll', handleScroll);
    return () => scrollElement.removeEventListener('scroll', handleScroll);
  }, []);

  const COMPETITOR_CONFIG = {
    pCloud: {
      defaultLogo: '/images/comparison/competitors/pCloud.webp',
    },
    MEGA: {
      defaultLogo: '/images/comparison/competitors/Mega_Letters.webp',
    },
    Dropbox: {
      defaultLogo: '/images/comparison/competitors/Dropbox_Letters.webp',
    },
    Drive: {
      defaultLogo: '/images/comparison/competitors/Drive-Letters.webp',
    },
    Koofr: {
      defaultLogo: '/images/comparison/Koofr-Letters.webp',
    },
    Icedrive: {
      defaultLogo: '/images/comparison/icedrive-Letters.webp',
    },
    OneDrive: {
      defaultLogo: '/images/comparison/OneDrive-Letters.webp',
    },
    Drime: {
      defaultLogo: '/images/comparison/Drime_Letters.webp',
    },
    Degoo: {
      defaultLogo: '/images/comparison/Degoo_Letters.webp',
    },
    FileJump: {
      defaultLogo: '/images/comparison/FileJump_Letters.webp',
    },
    Elephantdrive: {
      defaultLogo: '/images/comparison/Elephantdrive_Letters.webp',
    },
    GoogleMeet: {
      defaultLogo: '/images/comparison/google-meet-Letters.webp',
    },
    Terabox: {
      defaultLogo: '/images/comparison/terabox-Letters.webp',
    },
    Filen: {
      defaultLogo: '/images/comparison/filen-Letters.webp',
    },
    idrive: {
      defaultLogo: '/images/comparison/idrive-Letters.webp',
    },
    sync: {
      defaultLogo: '/images/comparison/sync-Letters.webp',
    },
    'proton-drive': {
      defaultLogo: '/images/comparison/proton-drive-Letters.webp',
    },
    zoom: {
      defaultLogo: '/images/comparison/zoom-Letters.webp',
    },
    Teams: {
      defaultLogo: '/images/comparison/Teams_Letters.webp',
    },
    ChatGPT: {
      defaultLogo: '/images/comparison/chatGPT-Letters.webp',
    },
    Copilot: {
      defaultLogo: '/images/comparison/copilot-Letters.webp',
    },
    deepseek: {
      defaultLogo: '/images/comparison/deepseek-Letters.webp',
    },
    gemini: {
      defaultLogo: '/images/comparison/gemini-Letters.webp',
    },
    grok: {
      defaultLogo: '/images/comparison/grok-Letters.webp',
    },
  } as const;

  const competitors = [
    {
      name: 'Internxt',
      logo: '/images/comparison/competitors/Internxt_Letters.webp',
    },
    {
      name: competitor,
      logo: logo || COMPETITOR_CONFIG[competitor].defaultLogo,
    },
  ];

  const createTableRows = () => {
    return textContent.tableSection.comparisons.map((comparison, index) => ({
      id: index,
      title: comparison,
      internxtFeature: textContent.tableSection.internxtFeatures[index] || '',
      competitorFeature: textContent.tableSection.competitorFeatures[index] || '',
    }));
  };

  const tableRows = createTableRows();
  const TitleTag = needH2 ? 'h2' : 'p';

  return (
    <section className="overflow-hidden bg-white px-4 py-12 lg:px-5 lg:py-20">
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32"></div>
      <div className="flex flex-col items-center justify-center gap-8 lg:gap-16">
        <div className="flex flex-col items-center gap-4 text-center lg:gap-6">
          <TitleTag className="text-2xl font-semibold text-gray-100 lg:text-3xl">
            {parseText(textContent.title)}
          </TitleTag>
          <p className="max-w-[345px] text-sm leading-tight text-gray-80 lg:max-w-[774px] lg:text-xl">
            {parseText(textContent.description)}
          </p>
        </div>

        <div className="w-full overflow-hidden lg:flex lg:justify-center">
          <div className="flex">
            <div
              className={`relative flex-shrink-0 ${isScrolled ? '' : ''}`}
              style={{
                boxShadow: isScrolled
                  ? '4px 0px 6px -1px rgba(0, 0, 0, 0.1), 2px 0px 4px -2px rgba(0, 0, 0, 0.1)'
                  : 'none',
              }}
            >
              <div className="relative z-10 w-[140px] bg-white sm:w-[170px] lg:w-[247px]">
                <div className="h-[48px] lg:h-[128px]"></div>

                {tableRows.map((row, index) => (
                  <div
                    key={`fixed-${row.id}`}
                    className={`flex h-[50px] flex-col items-start justify-center border border-green-120 px-2 sm:px-3 lg:h-[64px] lg:px-6 ${
                      index % 2 === 0 ? 'bg-neutral-10' : 'bg-white'
                    } ${index === 0 ? 'rounded-tl-2xl' : ''} ${index === tableRows.length - 1 ? 'rounded-bl-2xl' : ''}`}
                  >
                    <p className="text-xs font-normal leading-tight text-gray-95 lg:text-base">{row.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-x-auto">
              <div className="w-[430px] lg:w-[830px]">
                <div className="flex">
                  <div className="w-1/2">
                    <div className="flex h-[48px] flex-col items-center justify-center rounded-tl-2xl border border-green-120 bg-neutral-17 p-3 lg:h-[128px] lg:px-20 lg:py-12">
                      <Image
                        loading="lazy"
                        src={getImage(competitors[0].logo)}
                        draggable="false"
                        alt={`${competitors[0].name} logo`}
                        className="h-auto max-h-[24px] max-w-full lg:max-h-none"
                        quality={100}
                        width={160}
                        height={32}
                      />
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex h-[48px] flex-col items-center justify-center rounded-tr-2xl border border-green-120 bg-white p-3 lg:h-[128px] lg:px-20 lg:py-12">
                      <Image
                        loading="lazy"
                        src={getImage(competitors[1].logo)}
                        draggable="false"
                        alt={`${competitors[1].name} logo`}
                        className="h-auto max-h-[216px] max-w-full lg:max-h-none"
                        width={128}
                        height={32}
                        quality={100}
                      />
                    </div>
                  </div>
                </div>

                {tableRows.map((row, index) => (
                  <div key={`scroll-${row.id}`} className="flex">
                    <div className="w-1/2">
                      <div
                        className={`flex h-[50px] flex-col items-center justify-center border border-green-120 px-2 lg:h-[64px] lg:px-4 ${
                          index % 2 === 0 ? 'bg-neutral-37' : 'bg-neutral-17'
                        }`}
                      >
                        <span className="text-center text-xs font-semibold text-gray-100 lg:text-base">
                          {row.internxtFeature}
                        </span>
                      </div>
                    </div>

                    <div className="w-1/2">
                      <div
                        className={`flex h-[50px] flex-col items-center justify-center border border-green-120 px-2 lg:h-[64px] lg:px-4 ${
                          index % 2 === 0 ? 'bg-white-95' : 'bg-white'
                        } ${index === tableRows.length - 1 ? 'rounded-br-2xl' : ''}`}
                      >
                        <span className="text-center text-xs font-normal text-gray-100 lg:text-base">
                          {row.competitorFeature}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
