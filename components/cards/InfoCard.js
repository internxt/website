import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './InfoCard.module.css';

const InfoCard = ({
  title, subtitle, subtitle2, linkText, link, linkText2, link2, image, width, heigth,
}) => {
  const url = `/images/1440/Drive/Section 7/${image}.webp`;
  const router = useRouter();

  return (
    <div className={`${styles.card} relative sm:h-auto sm:m-0 sm:p-0 sm:pb-16 sm:w-10/12 sm:bg-transparent sm:shadow-none sm:border-0 lg:p-0 lg:pl-10 lg:pt-12 lg:pb-6 lg:h-100 lg:w-auto`}>
      <div className={`${styles.logo} sm:w-28 lg:w-4/12`}>
        <Image src={url} width={width} height={heigth} />
      </div>

      <h1 className={`${styles.title} sm:text-3xl sm:mt-24 lg:text-2xl lg:mt-10`}>
        {title}
      </h1>

      <p className={`${styles.subtitle} sm:text-lg sm:mt-4 sm:mb-8 lg:text-sm lg:w-10/12`}>
        {subtitle}
      </p>

      <p className={`${styles.subtitle} sm:text-lg sm:m-0 lg:text-sm lg:w-10/12`}>
        {subtitle2}
      </p>

      <a
        href={link}
        target="_blank"
        className={router.pathname === '/lifetime' ? 'hidden' : 'flex hover:opacity-80 flex-row w-auto items-center absolute bottom-0 lg:pb-6 lg:text-sm lg:m-0 xl:mb-12'}
        rel="noreferrer"
      >
        <p className={`${styles.margin} ${styles.link} lg:text-13`}>
          {linkText}
        </p>
        <Image src="/images/1440/Drive/Section 2/Section2 arrow.svg" width={13} height={11} />
      </a>

      {
                linkText2
                  ? (
                    <a
                      href={link2}
                      target="_blank"
                      className={router.pathname === '/lifetime' ? 'hidden' : 'flex hover:opacity-80 flex-row w-auto items-center absolute bottom-0 right-0 lg:pr-16 lg:pb-6 lg:text-sm xl:mb-12 xl:mr-32'}
                      rel="noreferrer"
                    >
                      <p className={`${styles.margin} ${styles.link} lg:text-13`}>
                        {linkText2}
                      </p>
                      <Image src="/images/1440/Drive/Section 2/Section2 arrow.svg" width={13} height={11} />
                    </a>
                  )
                  : null
            }
    </div>
  );
};

export default InfoCard;
