/* eslint-disable react/jsx-no-target-blank */
import { getImage } from '@/lib/getImage';
import Image from 'next/image';

const SocialProofSection = ({ textContent, lang }) => (
  <section className="overflow-hidden">
    <div className="content">
      <div className="flex w-full flex-shrink-0 flex-col items-center justify-center px-10 py-12 text-center md:px-0 md:py-24">
        <h3 className="mb-8 text-4xl font-medium">{textContent.title}</h3>

        <div className="flex flex-row flex-wrap justify-around sm:px-10">
          <div className="flex h-20 w-2/5 flex-shrink-0 items-center justify-center md:w-1/3 xl:w-auto xl:px-6">
            <Image
              width={126}
              height={24}
              loading="lazy"
              src={getImage('/logos/investors/telefonica.svg')}
              draggable="false"
              alt="telefonica logo"
            />
          </div>

          <div className="flex h-20 w-2/5 flex-shrink-0 items-center justify-center md:w-1/3 xl:w-auto xl:px-6">
            <Image
              width={72}
              height={28.5}
              loading="lazy"
              src={getImage('/logos/investors/eset-logo.svg')}
              className="mx-auto h-7"
              draggable="false"
              alt="eset logo"
            />
          </div>

          <div className="flex h-20 w-2/5 flex-shrink-0 items-center justify-center md:w-1/3 xl:w-auto xl:px-6">
            <Image
              width={101}
              height={23}
              loading="lazy"
              src={getImage('/logos/investors/revolut.svg')}
              className="mx-auto h-5"
              draggable="false"
              alt="Revolut logo"
            />
          </div>

          <div className="flex h-20 w-2/5 flex-shrink-0 items-center justify-center md:w-1/3 xl:w-auto xl:px-6">
            <Image
              width={133}
              height={21}
              loading="lazy"
              src={getImage('/logos/investors/ovhcloud.svg')}
              draggable="false"
              alt="ovh cloud logo"
            />
          </div>

          <div className="flex h-20 w-2/5 flex-shrink-0 items-center justify-center md:w-1/3 xl:w-auto xl:px-6">
            <Image
              width={111}
              height={17}
              loading="lazy"
              src={getImage('/logos/investors/angelscapital.svg')}
              draggable="false"
              alt="angels capital logo"
            />
          </div>

          <div className="flex h-20 w-2/5 flex-shrink-0 items-center justify-center md:w-1/3 xl:w-auto xl:px-6">
            <Image
              width={143}
              height={28}
              loading="lazy"
              src={getImage('/logos/investors/startpage-logo.svg')}
              draggable="false"
              alt="angels capital logo"
            />
          </div>

          {lang === 'es' && (
            <button
              className="flex flex-shrink-0 cursor-pointer items-center justify-center xl:w-auto xl:px-6"
              onClick={() => {
                window.open('https://opentrustedcloud.ovhcloud.com/es-es/', '_blank', 'noopener noreferrer');
              }}
            >
              <Image
                height={29}
                width={140}
                loading="lazy"
                src={getImage('/logos/investors/open–trusted-cloud.png')}
                draggable="false"
                alt="OTC logo"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default SocialProofSection;
