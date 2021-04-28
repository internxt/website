import React from 'react';
import Link from 'next/link';
import styles from './Container2.module.css';
import PriceCard from '../cards/PriceCard';

const Container2 = ({ id, descriptions, cardDescriptions }) => {
  // Filter container specific descriptions
  const description = descriptions.filter((desc) => desc.id === id);

  // Check if a number is odd
  const isOdd = (num) => num % 2 === 1;

  // Set the background color of the container depending on its id
  const className = isOdd(id) ? 'normal_container' : 'normal_container grey';

  return (
    <div className={className}>
      <div className={styles.main}>
        <h1
          data-aos="fade-up"
          data-aos-duration="300"
          className={`${styles.title} sm:pt-16 sm:text-4xl sm:w-72 lg:text-5xl`}
        >
          {description[0].title}
        </h1>

        <p
          data-aos="fade-up"
          data-aos-duration="300"
          className={`${styles.subtitle} sm:text-xl w-10/12 sm:w-80 lg:text-lg lg:w-9/12`}
        >
          {description[0].subtitle}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-3 sm:grid-cols-1 sm:gap-y-10 sm:mt-16 lg:mt-16 xl:mt-20">
        <div data-aos="fade-up" data-aos-duration="300"><PriceCard free="true" size={10} individual descriptions={cardDescriptions} /></div>
        <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="50"><PriceCard size={20} pMonth="0.99" pre6months="0.95" preYear="0.89" descriptions={cardDescriptions} /></div>
        <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100"><PriceCard size={200} pMonth="4.49" pre6months="3.99" preYear="3.49" mostPopular="true" descriptions={cardDescriptions} /></div>
        <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="150"><PriceCard size={2000} pMonth="9.99" pre6months="9.49" preYear="8.99" descriptions={cardDescriptions} /></div>
      </div>

      <Link href="/pricing">
        <a
          data-aos="fade-up"
          data-aos-duration="300"
          className="hover:opacity-80 flex flex-row w-auto items-center sm:my-16 lg:text-base lg:mt-12 lg:mb-16 xl:my-24"
        >
          <p className={`${styles.link} sm:text-lg mr-2`}>
            {description[0].link}
          </p>
          <img src="/images/1440/Drive/Section 2/Section2 arrow.svg" alt="" />
        </a>
      </Link>
    </div>
  );
};

export default Container2;
