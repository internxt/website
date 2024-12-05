import Link from 'next/link';
import { CaretRight, GlobeSimple, HardDrives, Lock, PaperPlaneTilt } from '@phosphor-icons/react';
import RevealY from '@/components/components/RevealY';

const Globe = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <rect width="256" height="256" fill="none" />
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <path
        d="M168,128c0,64-40,96-40,96s-40-32-40-96,40-96,40-96S168,64,168,128Z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="37.46"
        y1="96"
        x2="218.54"
        y2="96"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="37.46"
        y1="160"
        x2="218.54"
        y2="160"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
    </svg>
  );
};

const SuiteSection = ({ textContent }) => {
  const suiteCards = [
    {
      img: HardDrives,
      title: textContent.cards['title-1'],
      body: textContent.cards['body-1'],
      textUrl: textContent.cards['textUrl-1'],
      url: '/drive',
    },
    {
      img: GlobeSimple,
      title: textContent.cards['title-2'],
      body: textContent.cards['body-2'],
      textUrl: textContent.cards['textUrl-2'],
      url: '/vpn',
    },
    {
      img: PaperPlaneTilt,
      title: textContent.cards['title-3'],
      body: textContent.cards['body-3'],
      textUrl: textContent.cards['textUrl-3'],
      url: 'https://send.internxt.com',
    },
    {
      img: Lock,
      title: textContent.cards['title-4'],
      body: textContent.cards['body-4'],
      textUrl: textContent.cards['textUrl-4'],
      url: 'https://help.internxt.com/en/articles/6220768-free-tools-for-improving-online-security',
    },
  ];

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center space-y-20 p-10 px-5 sm:p-20">
        <p className="text-center text-5xl font-semibold md:w-full md:max-w-xl">{textContent.title}</p>
        <RevealY className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2">
          {suiteCards.map((card, index) => (
            <div key={index} className="flex flex-col space-y-4 rounded-2xl bg-gray-1 p-10 ">
              <card.img size={30} className="text-primary" />
              <p className="text-2xl font-medium">{card.title}</p>
              <p className="max-w-[408px] text-lg font-normal">{card.body}</p>
              <Link
                href={card.url}
                rel="noopener noreferrer"
                target={'_blank'}
                className="flex cursor-pointer flex-row items-center space-x-1"
              >
                <p className="text-lg font-semibold text-primary hover:underline">{card.textUrl}</p>
                <CaretRight size={16} weight="bold" className="text-primary" />
              </Link>
            </div>
          ))}
        </RevealY>
      </div>
    </section>
  );
};

export default SuiteSection;
