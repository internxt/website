import React from 'react';
import Link from 'next/link';
import { ArrowsCounterClockwise, Bug, CaretRight, Envelope, Password, ShieldCheck } from '@phosphor-icons/react';

const ToolsSection = ({ textContent, lang }: { textContent: any; lang: string }) => {
  const cards = [
    {
      icon: Password,
      title: textContent.toolsCard[0].title,
      cta: textContent.toolsCard[0].cta,
      pathname: textContent.toolsCard[0].pathname,
    },
    {
      icon: ShieldCheck,
      title: textContent.toolsCard[1].title,
      cta: textContent.toolsCard[1].cta,
      pathname: textContent.toolsCard[1].pathname,
    },
    {
      icon: ArrowsCounterClockwise,
      title: textContent.toolsCard[2].title,
      cta: textContent.toolsCard[2].cta,
      pathname: textContent.toolsCard[2].pathname,
    },
    {
      icon: Envelope,
      title: textContent.toolsCard[3].title,
      cta: textContent.toolsCard[3].cta,
      pathname: textContent.toolsCard[3].pathname,
    },
    {
      icon: Bug,
      title: textContent.toolsCard[4].title,
      cta: textContent.toolsCard[4].cta,
      pathname: textContent.toolsCard[4].pathname,
    },
  ];

  return (
    <section className="overflow-hidden py-20">
      <div className="flex flex-col items-center justify-center space-y-16 px-5">
        <p className="max-w-[720px] text-center text-4xl font-semibold sm:text-5xl">
          {textContent.title.text1}
          <span className="text-primary">{textContent.title.blueText}</span>
          {textContent.title.text2}
        </p>
        <div className="flex w-full  max-w-[850px] flex-col gap-5 lg:gap-2">
          {cards.map((tool) => (
            <div
              key={tool.title}
              className="flex w-full flex-col items-center justify-between gap-4 rounded-[10px] border border-gray-10 bg-white px-10 py-6 lg:flex-row lg:gap-0"
            >
              <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:text-left">
                <tool.icon size={32} className="text-primary" />
                <p className="text-2xl font-medium">
                  <span className="font-semibold text-primary">{textContent.free}</span> {tool.title}
                </p>
              </div>
              <div className=" flex flex-row items-center gap-2 text-lg font-semibold text-primary hover:underline">
                <Link
                  href={tool.pathname}
                  locale={lang}
                  passHref
                  target="_self"
                  className="hover:text-primary">

                  {tool.cta}

                </Link>
                <CaretRight size={16} weight="bold" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
