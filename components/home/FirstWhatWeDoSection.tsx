import Image from 'next/image';
import { CaretRight, DotsThree } from 'phosphor-react';
import PdfItem from '../../public/icons/file-types/pdf.svg';
import PPTItem from '../../public/icons/file-types/ppt.svg';
import RevealY from '../components/RevealY';
import RevealX from '../components/RevealX';
import FileItem from './components/FileItem';
import Referrals from './components/Referrals';
import { useState } from 'react';

const FirstWhatWeDoSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden py-20">
      <div className="flex flex-col items-center justify-center space-y-16 px-5">
        <RevealY className="flex flex-col-reverse items-center justify-center space-y-5 space-y-reverse md:flex-row md:space-y-0 md:space-x-20">
          <div className="relative rounded-3xl">
            <Image
              src="/images/home/GlobalImg.png"
              width={496}
              height={520}
              quality={100}
              layout="fixed"
              className="rounded-3xl"
            />
            <RevealX direction="right" className="absolute top-14 -left-20 rounded-lg bg-gray-1">
              <Referrals />
            </RevealX>
          </div>
          <div className="flex w-full max-w-[390px] flex-col space-y-6">
            <p className="text-5xl font-semibold">{textContent.card3.title}</p>
            <p className="text-xl">{textContent.card3.description}</p>
            <div className="flex cursor-pointer flex-row items-center space-x-2 text-primary">
              <p>{textContent.card3.cta}</p>
              <CaretRight size={8} />
            </div>
          </div>
        </RevealY>
        <RevealY className="flex flex-col items-center justify-center space-y-5 md:flex-row md:space-x-20">
          <div className="flex w-full max-w-[390px] flex-col space-y-6">
            <p className="text-5xl font-semibold">{textContent.card2.title}</p>
            <p className="text-xl">{textContent.card2.description}</p>
            <div className="flex cursor-pointer flex-row items-center space-x-2 text-primary">
              <p>{textContent.card2.cta}</p>
              <CaretRight size={8} />
            </div>
          </div>
          <div className="relative rounded-3xl">
            <Image
              src="/images/home/GirlAlone.png"
              width={444}
              height={520}
              quality={100}
              layout="intrinsic"
              className="rounded-3xl"
            />
            <RevealX
              direction="left"
              className="absolute top-14 -right-12 rounded-lg bg-gradient-to-b from-white to-gray-1"
            >
              <FileItem encrypted title={'Cybersecurity_Presentation.ppt'} className="rounded-t-lg" ItemImg={PPTItem} />
              <FileItem title="Invoice.pdf" className="rounded-b-lg" ItemImg={PdfItem} />
            </RevealX>
          </div>
        </RevealY>
        <RevealY className="flex flex-col-reverse items-center justify-center space-y-5 space-y-reverse md:flex-row md:space-y-0 md:space-x-20">
          <div className="relative rounded-3xl">
            <Image
              src="/images/home/GirlWithLaptop.png"
              width={496}
              height={520}
              quality={100}
              layout="fixed"
              className="rounded-3xl"
            />
            <RevealX direction="right" className="absolute top-14 -left-20 rounded-lg bg-gray-1">
              <Referrals />
            </RevealX>
          </div>
          <div className="flex w-full flex-col space-y-5">
            <div className="flex max-w-[390px] flex-col space-y-6">
              <p className="text-5xl font-semibold">{textContent.card3.title}</p>
              <p className="text-xl">{textContent.card3.description}</p>
            </div>
            <div className="flex w-max cursor-pointer flex-row items-center rounded-lg bg-primary px-5 py-3 text-white">
              <p>{textContent.card3.cta}</p>
            </div>
          </div>
        </RevealY>
      </div>
    </section>
  );
};

export default FirstWhatWeDoSection;
