import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './InfoCard.module.css';

const InfoCard = ({ title, subtitle, subtitle2, linkText, link, linkText2, link2, image, width, heigth }) => {
  const url = `/images/1440/Drive/Section 7/${image}.webp`;
  const router = useRouter();

  return (
    <div
      className={`${styles.card} lg:h-100 relative sm:m-0 sm:h-auto sm:w-10/12 sm:border-0 sm:bg-transparent sm:p-0 sm:pb-16 sm:shadow-none lg:w-auto lg:p-0 lg:pl-10 lg:pt-12 lg:pb-6`}
    >
      <div className={`${styles.logo} sm:w-28 lg:w-4/12`}>
        <Image src={url} width={width} alt="Drive images" height={heigth} />
      </div>

      <h1 className={`${styles.title} sm:mt-24 sm:text-3xl lg:mt-10 lg:text-2xl`}>{title}</h1>

      <p className={`${styles.subtitle} sm:mt-4 sm:mb-8 sm:text-lg lg:w-10/12 lg:text-sm`}>{subtitle}</p>

      <p className={`${styles.subtitle} sm:m-0 sm:text-lg lg:w-10/12 lg:text-sm`}>{subtitle2}</p>

      <a
        href={link}
        target="_blank"
        className={
          router.pathname === '/lifetime'
            ? 'hidden'
            : 'absolute bottom-0 flex w-auto flex-row items-center hover:opacity-80 lg:m-0 lg:pb-6 lg:text-sm xl:mb-12'
        }
        rel="noreferrer"
      >
        <p className={`${styles.margin} ${styles.link} lg:text-13`}>{linkText}</p>
        <Image src="/images/1440/Drive/Section 2/Section2 arrow.svg" alt="Arrow icon" width={13} height={11} />
      </a>

      {linkText2 ? (
        <a
          href={link2}
          target="_blank"
          className={
            router.pathname === '/lifetime'
              ? 'hidden'
              : 'absolute bottom-0 right-0 flex w-auto flex-row items-center hover:opacity-80 lg:pr-16 lg:pb-6 lg:text-sm xl:mb-12 xl:mr-32'
          }
          rel="noreferrer"
        >
          <p className={`${styles.margin} ${styles.link} lg:text-13`}>{linkText2}</p>
          <Image src="/images/1440/Drive/Section 2/Section2 arrow.svg" alt="Arrow icon" width={13} height={11} />
        </a>
      ) : null}
    </div>
  );
};

export default InfoCard;
