import React from 'react';
import Image from 'next/image';
import styles from './Container3.module.css';

const Container3 = ({ id, descriptions }) => {
  // Filter container specific descriptions
  const description = descriptions.filter((desc) => desc.id === id);

  // Check if a number is odd
  const isOdd = (num) => num % 2 === 1;

  // Set the background color of the container depending on its id
  const background = isOdd(id) ? 'normal_container' : 'normal_container grey';

  return (
    <div className={background}>
      <div className={`${styles.container} sm:justify-center sm:flex-col-reverse max-w-1600`}>
        <div className={`${styles.image} sm:object-cover sm:w-auto lg:w-5/12`}>
          <Image src="/images/1440/Drive/Section 3/icons graphic.webp" width={742} height={722} />
        </div>

        <div className={`${styles.main} sm:items-center sm:m-0 lg:pl-16`}>
          <h1
            data-aos="fade-up"
            data-aos-duration="300"
            className={`${styles.title} leading-10 sm:text-center sm:w-84 sm:text-4xl sm:mt-12 lg:text-5xl lg:w-112 lg:leading-tight xl:leading-13`}
          >
            {description[0].title}
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="300"
            className={`${styles.subtitle} sm:hidden sm:text-center sm:w-80 sm:text-xl lg:text-lg lg:w-96`}
          >
            {description[0].subtitle}
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="300"
            className={`${styles.subtitle} hidden sm:flex sm:text-center sm:w-80 sm:text-xl`}
          >
            {description[0].subtitle_sm}
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="300"
            className={`${styles.subtitle} sm:text-center sm:w-84 sm:text-xl sm:mb-12 lg:text-lg lg:w-96`}
          >
            {description[0].subtitle2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container3;
