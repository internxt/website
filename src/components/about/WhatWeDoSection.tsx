import Image from 'next/legacy/image';
import RevealX from '@/components/components/RevealX';
import { getImage } from '@/lib/getImage';

const WhatWeDoSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden bg-gray-1 py-20">
      <div className="flex flex-col items-center justify-center space-y-16 px-5">
        <p className="text-center text-5xl font-semibold text-gray-100">{textContent.title}</p>
        {/* Section 1 */}
        <div className="flex flex-col-reverse items-center justify-center lg:flex-row lg:space-x-20">
          <RevealX direction="right" className="flex pt-7 lg:pt-0">
            <Image
              src={getImage('/images/about/photos/Fran-Villalba-Segarra.png')}
              width={496}
              height={520}
              alt="Fran Villalba Segarra"
              loading="eager"
            />
          </RevealX>
          <div className="flex max-w-sm flex-col items-center justify-center space-y-5 text-center lg:text-left">
            <p className="text-2xl font-medium text-gray-100">{textContent.section1.title}</p>
            <div className="flex flex-col space-y-5">
              {textContent.section1.description.map((text: string) => {
                return (
                  <p key={text} className="text-xl text-gray-80">
                    {text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-20">
          <div className="flex max-w-sm flex-col items-center justify-center space-y-5 text-center lg:text-left">
            <p className="text-2xl font-medium text-gray-100">{textContent.section2.title}</p>
            <div className="flex flex-col space-y-5">
              {textContent.section2.description.map((text: string) => {
                return (
                  <p key={text} className="text-xl text-gray-80">
                    {text}
                  </p>
                );
              })}
            </div>
          </div>
          <RevealX direction="left" className="flex pt-7 lg:pt-0">
            <Image
              src={getImage('/images/about/photos/work-at-Internxt.png')}
              loading="eager"
              width={496}
              height={520}
              alt="Work at Internxt"
            />
          </RevealX>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
