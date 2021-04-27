import React from 'react';
import Image from 'next/image';
import styles from './Container8.module.css';

const Container8 = ({ id, descriptions }) => {
  // Filter container specific descriptions
  const description = descriptions.filter((desc) => desc.id === id);

  // Check if a number is odd
  const isOdd = (num) => num % 2 === 1;

  // Set the background color of the container depending on its id
  const background = isOdd(id) ? 'normal_container' : 'normal_container grey';

  return (
    <div className={`${background} lg:pb-32 xl:pb-40 relative z-10`}>
      <div
        data-aos="fade-right"
        data-aos-duration="900"
        data-aos-delay="500"
        className={`${styles.left_image} sm:hidden lg:w-96 lg:mt-28 xl:w-120`}
      >
        <Image
          src="/images/1440/Token/Section 6/Left graph.webp"
          width={600}
          height={242}
        />
      </div>

      <div
        data-aos="fade-left"
        data-aos-duration="900"
        data-aos-delay="500"
        className={`${styles.right_image} sm:hidden lg:w-96 lg:mb-16 xl:w-120`}
      >
        <Image
          src="/images/1440/Token/Section 6/Right graph.webp"
          width={600}
          height={236}
        />
      </div>

      <h1
        data-aos="fade-up"
        data-aos-duration="300"
        className={`${styles.title} leading-10 sm:text-4xl lg:text-4.5xl lg:my-16 xl:mt-48`}
      >
        {description[0].title}
      </h1>

      <div className="grid grid-cols-4 gap-4 sm:grid-cols-1 sm:mb-24">
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          className={`${styles.card} lg:w-44 lg:h-28 lg:px-10`}
        >
          <Image
            src="/images/1440/Token/Section 6/coinbase.webp"
            width={133}
            height={29}
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="50"
          className={`${styles.card} lg:w-44 lg:h-28 lg:px-10`}
        >
          <Image
            src="/images/1440/Token/Section 6/cmc.webp"
            width={151}
            height={75}
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="100"
          className={`${styles.card} lg:w-44 lg:h-28 lg:px-10`}
        >
          <Image
            src="/images/1440/Token/Section 6/binance.webp"
            width={106}
            height={78}
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="150"
          className={`${styles.card} lg:w-44 lg:h-28 lg:px-10`}
        >
          <Image
            src="/images/1440/Token/Section 6/Blockfolio.webp"
            width={140}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};

export default Container8;
