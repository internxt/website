import React from 'react';
import styles from '/components/privacy/HeroSection.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = ({ textContent, lang }) => (
  <>
    <section className={`relative flex w-full flex-col overflow-hidden pt-10 filter ${styles.neonBlur}`}>
      <div className="flex h-[300px] w-screen flex-col items-center justify-center">
        <div className="flex w-screen flex-col px-10 text-center">
          <h1 className="text-4xl font-medium text-white lg:text-6xl">{textContent.title}</h1>
        </div>
      </div>
    </section>
    <section className="flex flex-col  py-16">
      <div className="flex flex-col items-center justify-center space-y-16 px-10">
        <div className="flex max-w-[720px] flex-col items-center justify-center space-y-16">
          <p className="text-center text-2xl font-semibold">{textContent.brief.intro}</p>
          <div className="flex flex-col justify-center">
            <p className="text-lg font-normal">{textContent.brief.body.paragraph1}</p>
            <p className="pt-7 text-lg font-normal">{textContent.brief.body.paragraph2}</p>
            <p className="text-lg font-normal">{textContent.brief.body.paragraph3}</p>
            <p className="pt-7 text-lg font-normal">{textContent.brief.body.paragraph4}</p>
          </div>
        </div>
        <div className="flex h-full max-w-[800px] flex-col-reverse items-center justify-center overflow-hidden rounded-3xl bg-gray-100 md:w-screen md:flex-row md:justify-between">
          <div className="flex flex-col items-center justify-center space-y-8 py-6 text-center md:items-start md:px-16 md:py-10 md:text-start ">
            <div className="flex w-full max-w-[441px] flex-col text-white">
              <p className=" text-4xl font-semibold text-white">{textContent.brief.body.card.title}</p>
            </div>
            <button className="flex w-36 cursor-pointer items-center justify-center rounded-lg bg-primary px-5 py-3">
              <Link href="https://internxt.com/privacy" rel={'noopener noreferrer'} target={'_blank'}>
                <p className="font-medium text-white">{textContent.brief.body.card.cta.line1}</p>
              </Link>
            </button>
          </div>
          <div className="flex h-full flex-col">
            <Image
              src="/images/privacy-directory/CardImage.png"
              width={320}
              height={285}
              quality={'100%'}
              layout="fixed"
              loading="eager"
              alt="Card image (Team working)"
              className="h-full w-full rounded-t-3xl object-cover md:rounded-t-none md:rounded-r-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default HeroSection;
