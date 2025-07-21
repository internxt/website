import { getImage } from '@/lib/getImage';
import { CompanyLogosRecognitions } from '../shared/CompanyLogosRecognitions';
import Image from 'next/image';

const HeroSection = ({ textContent }): JSX.Element => (
  <section className="relative flex w-full flex-col overflow-hidden pt-10 lg:pt-20">
    <div className="relative flex flex-col items-center justify-center py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center space-y-16 px-6">
        <div className="flex flex-col space-y-6 text-center">
          <h1 className="text-3xl font-semibold text-gray-100 lg:text-5xl">
            {textContent.title.line1} <br />
            {textContent.title.line2} <span className="text-primary">{textContent.blueText}</span>
          </h1>

          <p className="text-xl font-normal text-gray-80">{textContent.description}</p>
        </div>

        <div className="grid max-w-6xl grid-flow-row grid-cols-6 gap-6">
          <div className="col-span-6 h-60 select-none overflow-hidden rounded-3xl bg-red-old-10 sm:h-72 md:col-span-4 lg:h-80">
            <Image
              loading="eager"
              className="h-full w-full object-cover object-center"
              src={getImage('/images/about/photos/Internxt-headquarters.webp')}
              draggable="false"
              width={752}
              height={320}
              alt="Internxt headquarters"
            />
          </div>
          <div className="col-span-6 h-60 select-none overflow-hidden rounded-3xl bg-red-old-10 sm:h-72 md:col-span-2 lg:h-80">
            <Image
              loading="eager"
              className="h-full w-full object-cover object-center"
              src={getImage('/images/about/photos/Internxt-office.webp')}
              width={364}
              height={320}
              draggable="false"
              alt="Internxt office"
            />
          </div>
          <div className="col-span-6 h-60 select-none overflow-hidden rounded-3xl bg-red-old-10 sm:h-72 md:col-span-3 lg:h-80">
            <Image
              loading="eager"
              className="h-full w-full object-cover object-center"
              src={getImage('/images/about/photos/Internxt-team.webp')}
              width={558}
              height={320}
              draggable="false"
              alt="Internxt team"
            />
          </div>
          <div className="col-span-6 h-60 select-none overflow-hidden rounded-3xl bg-red-old-10 sm:h-72 md:col-span-3 lg:h-80">
            <Image
              loading="eager"
              className="h-full w-full object-cover object-center"
              src={getImage('/images/about/photos/team-at-Internxt-1.webp')}
              width={558}
              height={320}
              draggable="false"
              alt="Team at Internxt"
            />
          </div>
        </div>

        {/* Recognitions */}
        <h4 className="text-center text-4xl font-semibold text-gray-100">{textContent.recognitionsTitle}</h4>
        <CompanyLogosRecognitions />
      </div>
    </div>
  </section>
);

export default HeroSection;
