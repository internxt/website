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
      <div className={`${styles.container} max-w-1600 sm:flex-col sm:items-center`}>
        <div className={`${styles.main} sm:items-center sm:p-0 lg:pl-32 lg:py-16`}>
          <h1
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="100"
            className={`${styles.title} leading-10 sm:text-4xl sm:text-center sm:w-84 sm:mt-16 lg:text-5xl lg:max-w-none lg:w-104 xl:leading-14`}
          >
            {description[0].title}
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="100"
            className={`${styles.subtitle} sm:text-xl sm:text-center sm:w-80 lg:text-xl lg:w-100`}
          >
            {description[0].subtitle}
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="100"
            className={`${styles.subtitle} sm:text-xl sm:text-center sm:w-80 lg:text-xl lg:w-100 `}
          >
            {description[0].subtitle2}
          </p>
        </div>

        <div className={`${styles.image} sm:w-9/12 sm:mt-16 lg:w-2/6 lg:ml-12 lg:pt-12 xl:mt-24`}>
          <Image src="/images/1440/Photos/Section 3/box and apps graphic.webp" width={442} height={608} />
        </div>
      </div>
    </div>
  );
};

export default Container3;
