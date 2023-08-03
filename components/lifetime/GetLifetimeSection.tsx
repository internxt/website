import React from 'react';
import RevealY from '../components/RevealY';
import { useRouter } from 'next/router';

const GetLifetimeSection = ({ textContent }) => {
  const router = useRouter();
  const lang = router.locale;
  const { title } = textContent;
  const splitTitle = title.split('!');
  const firstTitle = splitTitle[0];
  const secondTitle = splitTitle[1];

  return (
    <section className="bg-primary-dark">
      <div className="content flex flex-col items-center pt-20 pb-16">
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

        <RevealY className="flex h-full w-full flex-col pt-6">
          <picture>
            <source srcSet="/images/home/Internxt-secure-cloud-storage.webp" type="image/webp" />
            <img
              src="/images/home/Internxt-secure-cloud-storage.webp"
              alt="Internxt secure cloud storage"
              draggable={false}
            />
          </picture>
        </RevealY>
      </div>
    </section>
  );
};

export default GetLifetimeSection;
