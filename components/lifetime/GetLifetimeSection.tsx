import React from 'react';
import RevealY from '../components/RevealY';
import { useRouter } from 'next/router';
import Image from 'next/image';
import RevealX from '../components/RevealX';

const GetLifetimeSection = ({ textContent }) => {
  const router = useRouter();
  const lang = router.locale;
  const { title } = textContent;
  const splitTitle = title.split('!');
  const firstTitle = splitTitle[0];
  const secondTitle = splitTitle[1];

  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #112D91 0%, #060C40)',
      }}
      className="overflow-hidden"
    >
      <div className="relative mx-auto flex max-w-screen-2xl flex-col">
        <div className="flex flex-col items-center py-16">
          <div className="mb-8 flex flex-col items-center px-6 text-center font-semibold text-white">
            {lang === 'it' || lang === 'de' || lang === 'ru' ? (
              <h2 className="max-w-[900px] text-5xl font-semibold leading-tight">
                {firstTitle}!{secondTitle}
              </h2>
            ) : (
              <h2 className="max-w-[800px] text-5xl font-semibold leading-tight">
                {firstTitle}!
                <br />
                {secondTitle}
              </h2>
            )}

            <p className="pt-4 text-xl font-normal">{textContent.description}</p>
          </div>

          <RevealY className="flex h-full w-full flex-col px-5 pt-6">
            <img
              src="/images/lifetime/Internxt-secure-cloud-storage.webp"
              alt="Internxt secure cloud storage"
              draggable={false}
            />
          </RevealY>
          <div className="absolute left-0 top-20 hidden  -translate-x-[98px] lg:flex">
            <Image
              src="/images/lifetime/Internxt_snow_globe.webp"
              width={300}
              height={300}
              alt="Internxt secure cloud storage"
              draggable={false}
            />
          </div>
          <div className="absolute right-0 top-32 hidden translate-x-12 lg:flex">
            <Image
              src="/images/lifetime/Internxt_candy_stick.webp"
              width={350}
              height={450}
              alt="Internxt secure cloud storage"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetLifetimeSection;
