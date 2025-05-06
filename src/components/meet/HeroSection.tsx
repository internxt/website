/* eslint-disable max-len */
import DownloadComponent from '@/components/shared/DownloadComponent';
import Header from '@/components/shared/Header';
import { getImage } from '@/lib/getImage';
import { Image } from 'react-bootstrap';

const HeroSection = ({ textContent }) => (
  <section className="flex w-full flex-col">
    <div className="flex flex-col items-center pb-32 pt-32">
      {/* Main title */}
      <div className="flex flex-col items-center justify-center space-y-6 px-5 text-center">
        <div className="flex w-max items-center justify-center rounded-lg bg-gray-5 px-4 py-2">
          <h2 className="text-xl font-medium text-gray-80">{textContent.eyebrow}</h2>
        </div>

        <Header className="text-gray-100 ">
          <span className="text-5xl"> {textContent.title.textBeforeBlueText} </span>
          <span className="text-5xl text-primary"> {textContent.title.blueText} </span>
          <span className="text-5xl"> {textContent.title.textAfterBlueText} </span>
        </Header>

        <h3 className="px-2 text-lg font-normal text-gray-80 sm:text-xl lg:mb-20">
          {textContent.subtitle.line1} <br className="hidden sm:flex" />
          {textContent.subtitle.line2} <br className="hidden sm:flex" />
          {textContent.subtitle.line3}
        </h3>
      </div>

      {/* Main title Mockup */}
      <div className="flex h-full flex-col px-5 py-16">
        <Image
          src={getImage('/images/meet/internxt_meet.webp')}
          width={1120}
          height={419}
          alt="Internxt secure cloud storage"
          draggable="false"
        />
      </div>

      {/* Download links */}
    </div>
  </section>
);

export default HeroSection;
