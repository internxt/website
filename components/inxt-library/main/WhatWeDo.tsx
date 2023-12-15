import Image from 'next/image';
import { FileArrowDown } from '@phosphor-icons/react';
import { useRouter } from 'next/router';

const TextCard = ({ textContent, url }) => {
  const router = useRouter();

  return (
    <div className="flex max-w-[388px] flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
      <div className="flex w-max flex-row items-center space-x-3 rounded-lg bg-gray-5 py-2 px-4">
        <FileArrowDown className="text-primary" size={32} />
        <p className="text-xl font-medium text-gray-80">{textContent.label}</p>
      </div>
      <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
      <p className="text-xl text-gray-80">{textContent.subtitle}</p>
      <button
        className="flex w-max items-center rounded-lg bg-primary px-5 py-3 text-lg font-medium text-white"
        onClick={() => {
          router.push(url);
        }}
      >
        {textContent.cta}
      </button>
    </div>
  );
};

const WhatWeDo = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center justify-center py-20 px-5">
        <div className="flex flex-col items-center justify-center space-y-9">
          <div className="flex max-w-[774px] flex-col items-center justify-center space-y-4 text-center">
            <p className={`max-w-[550px] text-5xl font-semibold text-gray-100`}>{textContent.title}</p>
            <p className="text-2xl font-medium text-gray-100">{textContent.subtitle}</p>
            <div className="flex flex-col space-y-5">
              {textContent.firstParagraph.map((item) => {
                return (
                  <div key={item} className="flex flex-col text-left">
                    <p className="text-lg text-gray-80">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* GUIDE TO ONLINE PRIVACY */}
          <div className="flex flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:gap-[88px]">
            <div className="flex flex-col">
              <Image
                src="/images/inxt-library/Internxt_ebook_download.webp"
                alt="Internxt eBook download"
                width={496}
                height={520}
                draggable={false}
              />
            </div>
            <TextCard textContent={textContent.ebookCard} url={'/online-privacy-ebook'} />
          </div>

          {/* KEEPING KIDS SAFE ONLINE */}
          <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-[88px]">
            <TextCard textContent={textContent.childrenCard} url={'/child-safety-ebook'} />
            <div className="flex flex-col">
              <Image
                src="/images/inxt-library/kids_online_safety_ebook.webp"
                alt="Kids online safety eBook"
                width={496}
                height={520}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
