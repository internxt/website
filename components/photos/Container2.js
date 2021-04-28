import React from 'react';
import Link from 'next/link';
import styles from './Container2.module.css';
import PriceCard from '../cards/PriceCard';

const Container2 = ({ id, descriptions, cardDescriptions }) => {
  const description = descriptions.filter((desc) => desc.id === id);

  // Check if a number is odd
  const isOdd = (num) => num % 2 === 1;

  // Set the background color of the container depending on its id
  const background = isOdd(id) ? 'normal_container' : 'normal_container grey';

  return (
    <div className={background}>
      <div className={`${styles.main_container} sm:py-16 lg:pb-16`}>
        <h1
          data-aos="fade-up"
          data-aos-duration="300"
          className={`${styles.title} leading-9 sm:text-4xl sm:w-80 lg:text-5xl xl:leading-12`}
        >
          {description[0].title}
        </h1>

        <p
          data-aos="fade-up"
          data-aos-duration="300"
          className={`${styles.subtitle} sm:text-xl sm:w-80 lg:text-xl lg:w-7/12`}
        >
          {description[0].subtitle}
        </p>

        <div className="grid grid-cols-4 gap-x-4 sm:grid-cols-1 sm:gap-y-8 sm:my-16 lg:pb-12 lg:mt-12 xl:mt-16">
          <div data-aos="fade-up" data-aos-duration="300"><PriceCard free="true" size={10} individual descriptions={cardDescriptions} /></div>
          <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="50"><PriceCard size={20} pMonth="0.99" pre6months="0.95" preYear="0.89" descriptions={cardDescriptions} /></div>
          <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100"><PriceCard size={200} pMonth="4.49" pre6months="3.99" preYear="3.49" mostPopular="true" descriptions={cardDescriptions} /></div>
          <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="150"><PriceCard size={2000} pMonth="9.99" pre6months="9.49" preYear="8.99" descriptions={cardDescriptions} /></div>
        </div>

        <Link href="/pricing">
          <a
            data-aos="fade-up"
            data-aos-duration="300"
            className="flex hover:opacity-80 flex-row w-auto items-center sm:my-6 lg:text-base lg:mt-12 lg:mb-16 xl:my-24"
          >
            <p className={`${styles.margin} ${styles.link} sm:text-lg mr-2`}>
              {description[0].link}
            </p>
            <img src="/images/1440/Drive/Section 2/Section2 arrow.svg" alt="" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Container2;
