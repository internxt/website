import React, { useState } from 'react';
import Image from 'next/image';

import styles from './Container1.module.css';
import PriceCardOld from '../cards/PriceCard';
import PriceCard from './PriceCard';

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
    <section className="bg-neutral-10">

      <h1 className="pt-40 text-center text-4xl">Individual plans</h1>
      
      <div className="content flex flex-row justify-center justify-items-center items-end space-x-6 p-20 pt-20 py-40">
        <PriceCard planType="individual" storage="2GB" pricePerMonth="free" billingFrequency="12" />
        <PriceCard planType="individual" storage="20GB" pricePerMonth="0.89" billingFrequency="12" />
        <PriceCard planType="individual" storage="200GB" pricePerMonth="3.49" billingFrequency="12" popular />
        <PriceCard planType="individual" storage="2TB" pricePerMonth="8.99" billingFrequency="12" />
      </div>

      <h1 className="pt-20 text-center text-4xl">Business plans</h1>
      
      <div className="content flex flex-row justify-center justify-items-center items-end space-x-6 p-20 pt-20 py-40">
        <PriceCard planType="business" storage="2GB" pricePerMonth="free" billingFrequency="12" />
        <PriceCard planType="business" storage="20GB" pricePerMonth="0.89" billingFrequency="12" />
        <PriceCard planType="business" storage="200GB" pricePerMonth="3.49" billingFrequency="12" popular />
        <PriceCard planType="business" storage="2TB" pricePerMonth="8.99" billingFrequency="12" />
      </div>








      <div className="content hidden">

        <div className={`${styles.first_half} `}>
          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="500"
            className={`${styles.title} leading-9 sm:text-4xl sm:w-80`}
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
                  <PriceCardOld free="true" size={2} individual descriptions={cardDescriptions} />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="50">
                  <PriceCardOld size={20} pMonth="0.99" pre6months="0.95" preYear="0.89" descriptions={cardDescriptions} />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
                  <PriceCardOld size={200} pMonth="4.49" pre6months="3.99" preYear="3.49" mostPopular="true" descriptions={cardDescriptions} />
                </div>

                <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="150">
                  <PriceCardOld size={2000} pMonth="9.99" pre6months="9.49" preYear="8.99" descriptions={cardDescriptions} />
                </div>
              </div>
            )
            : (
              <div className="grid grid-cols-4 gap-3 sm:grid-cols-1 sm:gap-y-8">
                <section data-aos="fade-up" data-aos-duration="300" data-aos-delay="150">
                  <PriceCardOld teams teamMembers="200 GB of storage per user" size={200} pMonth="4.99" pre6months="3.99" preYear="3.49" descriptions={cardDescriptions} />
                </section>

                <section data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
                  <PriceCardOld teams teamMembers="2 TB of storage per user" size={2000} pMonth="9.99" pre6months="9.49" preYear="8.99" mostPopular="true" descriptions={cardDescriptions} />
                </section>

                <section data-aos="fade-up" data-aos-duration="300" data-aos-delay="50">
                  <PriceCardOld teams teamMembers="20 TB of storage per user" size={20000} pMonth="95" pre6months="94.49" preYear="93.99" descriptions={cardDescriptions} />
                </section>

                <section data-aos="fade-up" data-aos-duration="300">
                  <PriceCardOld teams teamMembers="Infinite team members" free="true" size={200000} individual={false} descriptions={cardDescriptions} />
                </section>
              </div>
            )

        }

      </div>
    </section>
  );
};

export default Container1;
