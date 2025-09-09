import { getImage } from '@/lib/getImage';
import { CompanyLogosRecognitions } from '../shared/CompanyLogosRecognitions';
import Image from 'next/image';

const HeroSection = ({ textContent }): JSX.Element => (
  <section
    className="relative flex w-full flex-col overflow-hidden pt-10 lg:pt-20"
    style={{ background: 'linear-gradient(360deg, #FFFFFF 0%, #F4F8FF 100%)' }}
  >
    <div className="relative flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-12 px-6 pt-20">
        <div className="flex w-[345px] flex-col space-y-6 text-start lg:w-[976px] lg:text-center">
          <h1
            className="hidden w-full px-20 text-30 font-semibold leading-tight text-gray-100 lg:block lg:text-5xl"
            dangerouslySetInnerHTML={{
              __html: textContent.title.replace(/\*\*(.*?)\*\*/g, '<span class="text-primary">$1</span>'),
            }}
          />
          <h1
            className="block text-30 font-semibold leading-tight text-gray-100 lg:hidden lg:text-5xl"
            dangerouslySetInnerHTML={{
              __html: textContent.title.replace(/\*\*(.*?)\*\*/g, '<span class="text-primary">$1</span>'),
            }}
          ></h1>

          <p className="w-full text-start text-base font-normal leading-tight text-gray-55 lg:w-[976px] lg:text-center lg:text-xl">
            {textContent.description}
          </p>
        </div>

        <div className="hidden max-w-6xl grid-flow-row grid-cols-6 gap-6 lg:grid">
          <div className="col-span-6 h-60 select-none overflow-hidden rounded-3xl bg-red-old-10 sm:h-72 md:col-span-4 lg:h-80">
            <Image
              loading="eager"
              className="h-full w-full object-cover object-center"
              src={getImage('/images/about/photos/Marina-de-valencia.webp')}
              draggable="false"
              width={752}
              height={320}
              quality={100}
              alt="Internxt headquarters"
            />
          </div>
          <div className="col-span-6 h-60 select-none overflow-hidden rounded-3xl bg-red-old-10 sm:h-72 md:col-span-2 lg:h-80">
            <Image
              loading="eager"
              className="h-full w-full object-cover object-center"
              src={getImage('/images/about/photos/Edem-2.webp')}
              width={364}
              height={320}
              draggable="false"
              quality={100}
              alt="Internxt office"
            />
          </div>
          <div className="col-span-6 h-60 select-none overflow-hidden rounded-3xl bg-red-old-10 sm:h-72 md:col-span-3 lg:h-80">
            <Image
              loading="eager"
              className="h-full w-full object-cover object-center"
              src={getImage('/images/about/photos/Internxt-headquarters.webp')}
              width={558}
              height={320}
              draggable="false"
              quality={100}
              alt="Internxt team"
            />
          </div>
          <div className="col-span-6 h-60 select-none overflow-hidden rounded-3xl bg-red-old-10 sm:h-72 md:col-span-3 lg:h-80">
            <Image
              loading="eager"
              className="h-full w-full object-cover object-center"
              src={getImage('/images/about/photos/Edem-1.webp')}
              width={558}
              height={320}
              draggable="false"
              quality={100}
              alt="Team at Internxt"
            />
          </div>
        </div>

        <div className="flex h-min w-[345px] flex-col justify-center gap-8  py-10 lg:w-full lg:gap-16 lg:py-10">
          <h4 className="text-center text-2xl font-bold text-gray-100 lg:text-4xl lg:font-semibold">
            {textContent.recognitionsTitle}
          </h4>
          <CompanyLogosRecognitions />
        </div>
        <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-neutral-35 lg:left-32 lg:right-32 " />
      </div>
    </div>
  </section>
);

export default HeroSection;
