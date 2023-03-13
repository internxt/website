import Image from 'next/image';
import { CaretRight, DotsThree } from 'phosphor-react';
import DriveItem from '../../public/icons/file-types/excel.svg';
import RevealY from '../components/RevealY';
import RevealX from '../components/RevealX';

const FileItem = ({ encrypted }: { encrypted?: boolean }) => {
  return (
    <div className="flex w-[375px] flex-row bg-white px-4 py-3 shadow-2xl">
      <div className={`flex w-full flex-row items-center justify-between space-x-2`}>
        <div className="flex flex-row space-x-2">
          <DriveItem className={`h-10 w-10 ${encrypted && 'opacity-40'}`} />
          <div className="flex flex-col">
            <p className={`text-base ${encrypted ? 'opacity-40' : ''}`}>Marketing Q1 Recap.csv</p>
            {encrypted ? (
              <p className="text-xs text-primary">Encrypting...</p>
            ) : (
              <div className="flex flex-row space-x-1 text-xs text-gray-50">
                <p>2.5MB</p>
                <p>·</p>
                <p>27 April 2022 at 17:08</p>
              </div>
            )}
          </div>
        </div>
        <div className={`flex items-center justify-center text-gray-50 ${encrypted && 'opacity-40'}`}>
          <DotsThree size={24} weight="bold" />
        </div>
      </div>
    </div>
  );
};

const FirstWhatWeDoSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden py-20">
      <div className="flex flex-col items-center justify-center space-y-16 px-5">
        <RevealY className="flex flex-col items-center justify-center md:flex-row md:space-x-20">
          <div className="flex h-[520px] w-[496px] flex-col rounded-3xl bg-black"></div>
          <div className="flex w-full max-w-[390px] flex-col space-y-6">
            <p className="text-5xl font-semibold">{textContent.card1.title}</p>
            <p className="text-xl">{textContent.card1.description}</p>
            <div className="flex flex-row items-center text-primary">
              <p>{textContent.card1.cta}</p>
              <CaretRight size={8} />
            </div>
          </div>
        </RevealY>
        <RevealY className="flex flex-col items-center justify-center space-y-5 md:flex-row md:space-x-20">
          <div className="flex w-full max-w-[390px] flex-col space-y-6">
            <p className="text-5xl font-semibold">{textContent.card2.title}</p>
            <p className="text-xl">{textContent.card2.description}</p>
            <div className="flex flex-row items-center text-primary">
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
            <RevealX direction="left" className="absolute top-14 -right-10 bg-gradient-to-b from-white to-gray-1">
              <FileItem encrypted />
            </RevealX>
            <RevealX direction="right" className="absolute top-36 -right-28 bg-gradient-to-b from-white to-gray-1">
              <FileItem />
            </RevealX>
          </div>
        </RevealY>
        <RevealY className="flex flex-col items-center justify-center md:flex-row md:space-x-20">
          <div className="flex h-[520px] w-[496px] flex-col rounded-3xl bg-black"></div>
          <div className="flex w-full max-w-[390px] flex-col space-y-6">
            <p className="text-5xl font-semibold">{textContent.card3.title}</p>
            <p className="text-xl">{textContent.card3.description}</p>
            <div className="flex flex-row items-center text-primary">
              <p>{textContent.card3.cta}</p>
            </div>
          </div>
        </RevealY>
      </div>
    </section>
  );
};

export default FirstWhatWeDoSection;
