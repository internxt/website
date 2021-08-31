import React from 'react';
import Image from 'next/image';
import styles from './Container1.module.css';

const Container1 = ({ id, descriptions, cardDescriptions }) => {
  const description = descriptions.filter((desc) => desc.id === id);
  // Check if a number is odd
  const isOdd = (num) => num % 2 === 1;

  // Set the background color of the container depending on its id
  const className = isOdd(id) ? 'normal_container' : 'normal_container grey';

  return (
    <div className={`${className} relative`}>
      <div className={`${styles.main} sm:py-12`}>
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="500"
          className={`${styles.title} sm:text-4xl sm:pb-5 sm:w-80 lg:text-8xl`}
        >
          {description[0].title}
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="500"
          className={`${styles.subtitle} sm:text-xl sm:w-84 lg:text-xl lg:w-7/12`}
        >
          {description[0].subtitle}
        </p>

        <p
          data-aos="fade-up"
          data-aos-delay="350"
          data-aos-duration="500"
          className={`${styles.subtitle} sm:text-xl sm:w-84  lg:text-xl lg:w-7/12`}
        >
          {description[0].subtitle2}
        </p>

        <div
          data-aos="fade"
          data-aos-delay="350"
          data-aos-duration="700"
          className={`${styles.picture} ${styles.animation_picture} sm:hidden lg:w-32`}
        >
          <Image src="/images/1440/Photos/Section 1/1.webp" width={75} height={92} />
        </div>

        <div
          data-aos="fade"
          data-aos-delay="350"
          data-aos-duration="700"
          className={`${styles.weather} ${styles.animation_weather} sm:hidden lg:w-32 lg:pb-16`}
        >
          <Image src="/images/1440/Photos/Section 1/2.webp" width={68} height={65} />
        </div>

        <div
          data-aos="fade"
          data-aos-delay="350"
          data-aos-duration="700"
          className={`${styles.video} ${styles.animation_video} sm:hidden lg:w-16 xl:w-16`}
        >
          <Image src="/images/1440/Photos/Section 1/6.webp" width={110} height={134} />
        </div>

        <div
          data-aos="fade"
          data-aos-delay="350"
          data-aos-duration="700"
          className={`${styles.lgcross} ${styles.animation_cross} sm:hidden lg:w-72 lg:pl-48`}
        >
          <Image src="/images/1440/Photos/Section 1/cross 1.webp" width={19} height={19} />
        </div>

        <div
          data-aos="fade"
          data-aos-delay="350"
          data-aos-duration="700"
          className={`${styles.recorder} ${styles.animation_cross2} sm:hidden lg:pr-32 lg:pt-40`}
        >
          <Image src="/images/1440/Photos/Section 1/cross 4.webp" width={18} height={18} />
        </div>
      </div>

      <div
        data-aos="fade"
        data-aos-delay="350"
        data-aos-duration="700"
        className={`${styles.circles} ${styles.animation_circles} sm:hidden lg:w-40 lg:pr-16 lg:mr-6 lg:pt-84`}
      >
        <Image src="/images/1440/Photos/Section 1/5.webp" width={182} height={129} />
      </div>

      <div className={`${styles.secondary} sm:items-center sm:pb-16`}>
        <h1
          data-aos="fade-up"
          data-aos-delay="450"
          data-aos-duration="500"
          className={`${styles.subtitle2}  sm:text-xl sm:w-80 sm:m-0 lg:text-xl`}
        >
          {description[0].subtitle3}
        </h1>

        <div
          data-aos="fade"
          data-aos-delay="350"
          data-aos-duration="700"
          className={`${styles.recorder} ${styles.animation_recorder} sm:hidden lg:w-84 lg:pl-32 lg:pt-32`}
        >
          <Image src="/images/1440/Photos/Section 1/3.webp" width={133} height={104} />
        </div>

        <div
          data-aos="fade"
          data-aos-delay="350"
          data-aos-duration="700"
          className={`${styles.message} ${styles.animation_message} sm:hidden lg:w-92 lg:pr-72`}
        >
          <Image src="/images/1440/Photos/Section 1/4.webp" width={82} height={80} />
        </div>

        <div
          data-aos="fade"
          data-aos-delay="350"
          data-aos-duration="700"
          className={`${styles.cross} ${styles.animation_cross3} sm:hidden lg:pr-64`}
        >
          <Image src="/images/1440/Photos/Section 1/cross 3.webp" width={19} height={19} />
        </div>
      </div>
    </div>
  );
};

export default Container1;
