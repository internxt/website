import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Container1.module.css'
import CheckoutForm from '../CheckoutForm';

const Container1 = ({ id, dealDescriptions }) => {
  const description = dealDescriptions.filter((desc) => desc.id === 'infinite');
  const isOdd = (num) => num % 2 === 1;
  // Set the background color of the container depending on its id
  const className = isOdd(id) ? 'normal_container' : 'normal_container grey';

  const formattedText = (text, values) => {
    const regex = new RegExp(/\[\[(.*?)\]\]/);

    if (!values.length) return text;

    return (
      <div>
        {text.split(regex)
          .reduce((prev, current, i) => {
            if (!i) return [current];

            return prev.concat(
              values.includes(current)
                ? (
                  <span
                    key={i + current}
                    className={`${styles.lineThrough}`}
                  >
                    {current}
                  </span>
                )
                : current,
            );
          }, [])}
      </div>
    );
  };

  return (
    <div className={`${className}`}>
      <div className={`${styles.main}`}>
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="500"
          className={`${styles.title} ${styles.levitate} sm:w-80 sm:text-4xl lg:text-8xl`}
        >
          {description[0].title}
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="500"
          className={`${styles.subtitle} ${styles.levitate2} sm:text-xl sm:w-80 sm:pt-8 lg:text-xl lg:w-7/12`}
        >
          {description[0].subtitle}
        </p>

        <div
          data-aos="fade"
          data-aos-delay="250"
          data-aos-duration="700"
          className={`${styles.star} ${styles.animation_star} sm:top-0 sm:ml-6 sm:mt-6 sm:w-6 sm:p-0 lg:ml-24`}
        >
          <Image src="/images/1440/Drive/Section 1/star icon.webp" width={47} height={50} />
        </div>

        <div
          data-aos="fade"
          data-aos-delay="250"
          data-aos-duration="700"
          className={`${styles.gear} ${styles.animation_gear} sm:p-0 sm:top-0 sm:w-6 sm:mr-12 sm:mt-3 lg:mt-8 lg:mr-22`}
        >
          <Image src="/images/1440/Drive/Section 1/cog icon.webp" width={37} height={38} />
        </div>

        <div
          data-aos="fade"
          data-aos-delay="250"
          data-aos-duration="700"
          className={`${styles.coin} ${styles.animation_coin} sm:hidden sm:p-0 sm:w-8 sm:mb-8 sm:ml-10 lg:w-12 lg:mb-20`}
        >
          <Image src="/images/1440/Drive/Section 1/coin icon.webp" width={81} height={76} />
        </div>

        <div
          data-aos="fade"
          data-aos-delay="250"
          data-aos-duration="700"
          className={`${styles.lock} ${styles.animation_lock} sm:hidden sm:p-0 sm:w-8 sm:mr-16 sm:mb-6 lg:mr-32`}
        >
          <Image src="/images/1440/Drive/Section 1/lock icon.webp" width={45} height={60} />
        </div>
      </div>

      <div className={`${styles.secondary} ${styles.maxWidth} sm:pb-12 sm:pt-0 sm:items-center lg:pb-44`}>
        <p className={`${styles.label} sm`}>
          {formattedText(description[0].subtitle2, description[0].lineThrough)}
        </p>

        <div className={`${styles.cloud} ${styles.animation_cloud} sm:bottom-0 sm:p-0 sm:mb-10 sm:ml-8 sm:w-8 lg:ml-48`}>
          <Image src="/images/1440/Drive/Section 1/cloud icon.webp" width={70} height={52} />
        </div>

        <div>
          <CheckoutForm
            product="infiniteLifetime"
            value={description[0].button}
            className={`${styles.button} sm:w-60 sm:px-5 sm:text-base sm:mt-5 lg:w-60 lg:h-10 lg:text-sm`}
          />
        </div>

        <div
          data-aos="fade-up-left"
          data-aos-delay="450"
          data-aos-duration="700"
          className={`${styles.hand} sm:hidden lg:w-84`}
        >
          <Image src="/images/1440/Drive/Section 1/purplehand.webp" width={482} height={310} />
        </div>
      </div>
    </div>
  );
};

export default Container1;
