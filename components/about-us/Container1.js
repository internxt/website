import React from 'react';
import styles from './Container1.module.css';

const Container1 = ({ id, descriptions, cardDescriptions }) => {
  const description = descriptions.filter((desc) => desc.id === id);

  return (
    <div className={`${styles.background} sm:h-120 lg:h-144`}>
      <div className={`${styles.main} xl:h-full`}>
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="500"
          className={`${styles.title} sm:text-4xl sm:w-80 lg:text-8xl lg:w-150`}
        >
          {description[0].title}
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="500"
          className={`${styles.subtitle} sm:text-xl sm:w-84 sm:mb-0 lg:text-xl`}
        >
          {description[0].subtitle}
        </p>
      </div>
    </div>
  );
};

export default Container1;
