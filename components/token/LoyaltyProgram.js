import React from 'react';
import Image from 'next/image';
import styles from './LoyaltyProgram.module.css';
import StakeCard from '../cards/StakeCard';

const LoyaltyProgram = ({ id, descriptions, cardDescriptions }) => {
  // Filter container specific descriptions
  const description = descriptions.filter((desc) => desc.id === id);

  // Check if a number is odd
  const isOdd = (num) => num % 2 === 1;

  // Set the background color of the container depending on its id
  const background = isOdd(id) ? 'normal_container' : 'normal_container grey';

  // Esta funcion cambiara el color de una determinada cadena de texto
  const formattedText = (label, value) => {
    if (!value) {
      return label;
    }
    return (
      <span>
        { label.split(value)
          .reduce((prev, current, i) => {
            if (!i) {
              return [current];
            }
            return prev.concat(
              <span
                className={styles.colored_text}
                key={value + current}
              >
                {value}
              </span>, current,
            );
          }, [])}
      </span>
    );
  };

  return (
    <div
      className={`${background} relative`}
      id="loyaltyProgram"
    >

      <div className={`${styles.blue_coin} sm:hidden lg:w-36 lg:pl-16 lg:pt-48`}>
        <Image
          src="/images/1440/Token/Section 4/Coin blue.webp"
          width={64}
          height={60}
        />
      </div>

      <div className={`${styles.purple_coin} sm:hidden lg:pr-12 lg:pt-104 lg:w-24`}>
        <Image
          src="/images/1440/Token/Section 4/Coin purple.webp"
          width={62}
          height={59}
        />
      </div>

      <h1
        data-aos="fade-up"
        data-aos-duration="300"
        className={`${styles.title} leading-9 sm:text-4xl sm:mt-16 sm:w-80 lg:text-5xl lg:mt-16`}
      >
        {formattedText(description[0].title, description[0].colored)}
      </h1>

      <p
        data-aos="fade-up"
        data-aos-duration="300"
        className={`${styles.subtitle} sm:text-xl sm:w-80 lg:text-xl xl:mt-4`}
      >
        {description[0].subtitle}
      </p>

      <p
        data-aos="fade-up"
        data-aos-duration="300"
        className={`${styles.subtitle} sm:text-xl sm:w-80 lg:text-xl`}
      >
        {/* {description[0].subtitle2} */}
      </p>

      <div className={`${styles.card_container} grid grid-cols-4 sm:grid sm:grid-cols-1 sm:gap-y-12 sm:mt-12`}>
        <div data-aos="fade-up" data-aos-duration="300">
          <StakeCard bundle={description[0].tier1} percentage="10" inxtQty="100 INXT" descriptions={cardDescriptions} disc />
        </div>

        <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="50">
          <StakeCard bundle={description[0].tier2} percentage="20" inxtQty="500 INXT" descriptions={cardDescriptions} disc />
        </div>

        <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
          <StakeCard bundle={description[0].tier3} percentage="30" inxtQty="1000 INXT" descriptions={cardDescriptions} disc />
        </div>

        <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
          <StakeCard bundle={description[0].tier4} percentage="40" inxtQty="2000 INXT" descriptions={cardDescriptions} disc />
        </div>

      </div>

      <p
        data-aos="fade-up"
        data-aos-duration="300"
        className={`${styles.info} sm:text-xl sm:text-center sm:w-84 lg:text-base`}
      >
        {description[0].subtitle3}
      </p>

      <a
        data-aos="fade-up"
        data-aos-duration="300"
        href="mailto:idajggytsuz7jivosite@jivo-mail.com"
        target="_blank"
        className="flex hover:opacity-80 flex-row w-auto items-center sm:text-lg sm:my-16 lg:mt-12 lg:mb-20 xl:mt-16 xl:mb-24"
        rel="noreferrer"
      >
        <p className={`${styles.margin} ${styles.link} sm:text-lg mr-2 lg:text-base`}>
          {description[0].claim}
        </p>
        <img src="/images/1440/Drive/Section 2/Section2 arrow.svg" alt="" />
      </a>

    </div>
  );
};

export default LoyaltyProgram;
