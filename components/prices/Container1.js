import React, { useState } from 'react';
import Image from 'next/image';

import styles from './Container1.module.css';
import PriceCard from '../cards/PriceCard';

const Container1 = ({ id, descriptions, cardDescriptions }) => {
  const description = descriptions.filter((desc) => desc.id === id);
  const [individual, setIndividual] = useState(true);
  const [teams, setTeams] = useState(false);

  // ESTO SE PUEDE OPTIMIZAR, onClickTeams SOBRA, CON UNA VARIABLE ES SUFICIENTE
  const onClickIndividual = () => {
    individual ? null : setIndividual(true);
    setTeams(false);
  };

  const onClickTeams = () => {
    teams ? null : setTeams(true);
    setIndividual(false);
  };

  return (
    <div className={styles.main_container}>
      {
        individual
          ? (
            <div>
              <div
                data-aos="fade"
                data-aos-duration="700"
                className={`${styles.speech} sm:hidden lg:w-36 lg:pt-32 lg:pl-16`}
              >
                <img
                  className="xl:w-32"
                  src="/images/1440/Prices Individual/12.webp"
                  alt=""
                />
              </div>

              <div
                data-aos="fade"
                data-aos-duration="700"
                className={`${styles.letter} sm:hidden lg:pr-12 lg:w-32`}
              >
                <img
                  className="xl:w-24"
                  src="/images/1440/Prices Individual/13.webp"
                  alt=""
                />
              </div>
            </div>
          )
          : (
            <div>
              <section
                data-aos="fade"
                data-aos-duration="700"
                className={`${styles.face} sm:hidden lg:w-12 lg:mr-6`}
              >
                <Image src="/images/1440/Prices Teams/14.webp" width={66} height={67} />
              </section>

              <section
                data-aos="fade"
                data-aos-duration="700"
                className={`${styles.star} sm:hidden lg:w-8 lg:mr-24 lg:mt-36`}
              >
                <Image src="/images/1440/Prices Teams/15.webp" width={39} height={41} />
              </section>

              <section
                data-aos="fade"
                data-aos-duration="700"
                className={`${styles.mail} sm:hidden lg:w-20 lg:mt-40`}
              >
                <Image src="/images/1440/Prices Teams/16.webp" width={114} height={75} />
              </section>
            </div>
          )
      }

      <div className={`${styles.first_half} `}>
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="500"
          className={`${styles.title} leading-9 sm:text-4xl sm:w-80 lg:text-4.5xl`}
        >
          {
            individual ? description[0].individual_title : description[0].teams_title
          }
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="350"
          data-aos-duration="500"
          className={`${styles.subtitle} sm:text-xl sm:w-80 lg:text-lg xl:mt-4`}
        >
          {description[0].subtitle}
        </p>

        <p
          data-aos="fade-up"
          data-aos-delay="450"
          data-aos-duration="500"
          className={`${styles.subtitle} sm:text-xl sm:w-80 lg:text-lg`}
        >
          {description[0].subtitle2}
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="650"
          data-aos-duration="500"
          className={`${styles.switch_container} sm:mt-12 sm:w-auto sm:h-12 sm:px-2 lg:h-12 lg:w-72 lg:mt-16`}
        >
          <button
            onClick={onClickIndividual}
            className={individual
              ? `${styles.button} sm:text-sm sm:w-32 sm:h-10 lg:text-13 lg:h-10 lg:w-36 ${styles.grey}`
              : `${styles.button} sm:text-sm sm:text-xs sm:w-32 sm:h-10 lg:text-13 lg:h-10 lg:w-36`}
          >
            {description[0].individuals}
          </button>

          <button
            onClick={onClickTeams}
            className={
              teams
                ? `${styles.button} sm:text-sm sm:w-32 sm:h-10 lg:text-13 lg:h-10 lg:w-36 ${styles.grey}`
                : `${styles.button} sm:text-sm sm:text-xs sm:w-32 sm:h-10 lg:text-13 lg:h-10 lg:w-36`
            }
          >
            {description[0].teams}
          </button>
        </div>
      </div>

      {
        individual
          ? (
            <div
              data-aos="fade-up"
              data-aos-delay="850"
              data-aos-duration="500"
              className="grid grid-cols-4 gap-3 sm:grid-cols-1 sm:gap-y-8"
            >
              <div data-aos="fade-up" data-aos-duration="300">
                <PriceCard free="true" size={2} individual descriptions={cardDescriptions} />
              </div>

              <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="50">
                <PriceCard size={20} pMonth="0.99" pre6months="0.95" preYear="0.89" descriptions={cardDescriptions} />
              </div>

              <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
                <PriceCard size={200} pMonth="4.49" pre6months="3.99" preYear="3.49" mostPopular="true" descriptions={cardDescriptions} />
              </div>

              <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="150">
                <PriceCard size={2000} pMonth="9.99" pre6months="9.49" preYear="8.99" descriptions={cardDescriptions} />
              </div>
            </div>
          )
          : (
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-1 sm:gap-y-8">
              <section data-aos="fade-up" data-aos-duration="300" data-aos-delay="150">
                <PriceCard teams teamMembers="200 GB of storage per user" size={200} pMonth="4.99" pre6months="3.99" preYear="3.49" descriptions={cardDescriptions} />
              </section>

              <section data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
                <PriceCard teams teamMembers="2 TB of storage per user" size={2000} pMonth="9.99" pre6months="9.49" preYear="8.99" mostPopular="true" descriptions={cardDescriptions} />
              </section>

              <section data-aos="fade-up" data-aos-duration="300" data-aos-delay="50">
                <PriceCard teams teamMembers="20 TB of storage per user" size={20000} pMonth="95" pre6months="94.49" preYear="93.99" descriptions={cardDescriptions} />
              </section>

              <section data-aos="fade-up" data-aos-duration="300">
                <PriceCard teams teamMembers="Infinite team members" free="true" size={200000} individual={false} descriptions={cardDescriptions} />
              </section>
            </div>
          )

      }
    </div>
  );
};

export default Container1;
