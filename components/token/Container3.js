import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Container3.module.css';

const Container3 = ({ id, descriptions }) => {
  // Filter container specific descriptions
  const description = descriptions.filter((desc) => desc.id === id);

  // Check if a number is odd
  const isOdd = (num) => num % 2 === 1;

  // Set the background color of the container depending on its id
  const background = isOdd(id) ? 'normal_container' : 'normal_container grey';

  return (
    <div
      className={background}
      id="merch"
    >
      <div className={`${styles.container} sm:flex-col-reverse sm:items-center sm:pt-12 lg:py-12`}>
        <div className="sm:mt-12 sm:w-10/12 lg:w-104">
          <Image
            src="/images/1440/Token/Section 3/floating girl.webp"
            width={517}
            height={589}
          />
        </div>

        <div className={`${styles.main} sm:p-0 sm:items-center lg:pl-12 lg:pt-12`}>
          <h1
            data-aos="fade-up"
            data-aos-duration="300"
            className={`${styles.title} leading-10 sm:text-4xl sm:w-72 sm:text-center lg:text-5xl lg:max-w-none lg:w-104 xl:leading-13`}
          >
            {description[0].title}
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="300"
            className={`${styles.subtitle} sm:text-xl sm:text-center sm:w-80 sm:pt-4 lg:text-xl lg:w-100`}
          >
            {description[0].subtitle}
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="300"
            className={`${styles.subtitle} sm:text-xl sm:text-center sm:w-80 lg:text-xl lg:w-104`}
          >
            {description[0].subtitle2}
          </p>

          <Link href="/core">
            <a
              data-aos="fade-up"
              data-aos-duration="300"
              className="flex hover:opacity-80 flex-row w-auto items-center sm:my-10 lg:text-base lg:mt-12 lg:mb-16 xl:my-16"
            >
              <p className={`${styles.margin} ${styles.link} sm:text-lg mr-2`}>
                {description[0].subtitle3}
              </p>
              <img src="/images/1440/Drive/Section 2/Section2 arrow.svg" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Container3;
