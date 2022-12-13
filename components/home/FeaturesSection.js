/* eslint-disable no-nested-ternary */
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { UilAngleRightB } from '@iconscout/react-unicons';
import styles from './FeaturesSection.module.scss';
import Image from 'next/image';

const FeaturesSection = ({ textContent, lang }) => {
  const router = useRouter();

  return (
    <section className="bg-gray-1">
      <div className="content flex flex-col px-6 pb-24">
        <div className="flex w-full flex-shrink-0 flex-col items-center justify-center py-20 pt-24 text-center md:py-24 md:pt-32">
          {/*
          <h4 className="mb-1 text-base font-medium text-neutral-50">
            {textContent.eyebrow}
          </h4>
          */}
          <h2 className="mb-6 text-4xl font-medium sm:text-5xl">
            {textContent.title.line1}
            <br className="hidden sm:flex" /> {textContent.title.line2}
          </h2>
          <h3 className="mb-6 text-lg text-neutral-500">
            {textContent.subtitle.line1}
            <br className="hidden sm:inline-flex" /> {textContent.subtitle.line2}
          </h3>

          <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-10">
            <Link href="/photos" lang={lang}>
              <a className="flex flex-row items-center space-x-1 text-lg text-primary sm:text-base">
                <span>{textContent.cta.photos}</span>
                <UilAngleRightB className="h-4 w-4" />
              </a>
            </Link>

            <Link href="/drive" lang={lang}>
              <a className="flex flex-row items-center space-x-1 text-lg text-primary sm:text-base">
                <span>{textContent.cta.drive}</span>
                <UilAngleRightB className="h-4 w-4" />
              </a>
            </Link>

            <Link href="https://send.internxt.com" lang={lang}>
              <a className="flex flex-row items-center space-x-1 text-lg text-primary sm:text-base">
                <span>{textContent.cta.send}</span>
                <UilAngleRightB className="h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 grid-rows-1 gap-6 sm:gap-10 lg:p-10">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="card-soft col-span-2 grid auto-cols-min grid-cols-1 grid-rows-2 gap-0 overflow-hidden rounded-3xl bg-white sm:grid-cols-2 sm:grid-rows-1"
          >
            <div className="flex flex-shrink-0 flex-col space-y-6 p-12 pb-0 sm:row-auto sm:pb-12 lg:p-16">
              <h3 className="text-4xl font-medium">
                {textContent.feature1.title.line1}
                <br />
                {textContent.feature1.title.line2}
              </h3>
              <span className="text-lg text-neutral-500">{textContent.feature1.description}</span>
              <a
                href="https://help.internxt.com/en/articles/5387164-what-is-zero-knowledge-encryption"
                target="_blank"
                className="text-lg text-primary"
                rel="noreferrer"
              >
                <div className="flex flex-row items-center">
                  {textContent.feature1.cta}
                  <img
                    loading="lazy"
                    className="mt-0.5 ml-2"
                    src="/icons/chevronBlue60.svg"
                    draggable="false"
                    alt="arrow right"
                  />
                </div>
              </a>
            </div>
            <div className={`${styles.securebydesignImage}`} role="img" aria-label="file being encrypted" />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="card-soft z-10 col-span-2 flex flex-col space-y-8 justify-self-start overflow-hidden rounded-3xl bg-white p-12 px-8 sm:col-span-1 md:flex-1 lg:p-16 lg:py-14"
          >
            <div className="flex flex-col">
              <Image
                loading="lazy"
                className="mb-6 flex lg:max-w-xs"
                src="/images/home/devicesDesc.webp"
                draggable="false"
                width={600}
                height={350}
                layout="responsive"
                alt="dektop, laptop and phone with Internxt app"
              />
            </div>
            <div className="flex flex-col space-y-6 text-left">
              <h3 className="text-4xl font-medium">
                {textContent.feature2.title.line1}
                <br className="flex sm:hidden" /> {textContent.feature2.title.line2}
              </h3>
              <span className="text-lg text-neutral-500">{textContent.feature2.description}</span>
              <a
                href={`${
                  router.pathname === '/products' ? '' : `${lang ? (lang === 'en' ? '' : `/${lang}`) : ''}/products`
                }`}
                className="text-lg text-primary"
              >
                <div className="flex flex-row items-center">
                  {textContent.feature2.cta}
                  <img
                    loading="lazy"
                    className="mt-0.5 ml-2"
                    src="/icons/chevronBlue60.svg"
                    draggable="false"
                    alt="arrow right"
                  />
                </div>
              </a>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="card-soft z-20 col-span-2 flex flex-col space-y-8 justify-self-start overflow-hidden rounded-3xl bg-white p-12 px-8 sm:col-span-1 md:flex-1 lg:p-16 lg:py-14"
          >
            <div className="relative flex flex-col">
              <Image
                loading="lazy"
                className="mb-6 flex lg:max-w-xs"
                src="/images/home/privacy-shield.webp"
                draggable="false"
                layout="responsive"
                width={600}
                height={350}
                alt="privacy green shield icon"
              />
            </div>
            <div className="flex flex-col space-y-6 text-left">
              <h3 className="text-4xl font-medium">
                {textContent.feature3.title.line1}
                <br className="hidden sm:flex" /> {textContent.feature3.title.line2}
              </h3>
              <span className="text-lg text-neutral-500">{textContent.feature3.description}</span>
              <a
                href={`${lang ? `/${lang}` : '/'}`}
                target="_blank"
                className="hidden text-lg text-primary"
                rel="noreferrer"
              >
                <div className="flex flex-row items-center">
                  {textContent.feature3.cta}
                  <img
                    loading="lazy"
                    className="mt-0.5 ml-2"
                    src="/icons/chevronBlue60.svg"
                    draggable="false"
                    alt="arrow right"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
