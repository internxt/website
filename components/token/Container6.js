import React from 'react';
import Image from 'next/image';
import styles from './Container6.module.css';

const Container6 = ({ id, descriptions }) => {
  // Filter container specific descriptions
  const description = descriptions.filter((desc) => desc.id === id);
  // Check if a number is odd
  const isOdd = (num) => num % 2 === 1;

  // Set the background color of the container depending on its id
  const background = isOdd(id) ? 'normal_container grey' : 'normal_container';

  return (
    <div className={background}>
      <h1
        data-aos="fade-up"
        data-aos-duration="300"
        className={`${styles.title} leading-10 sm:text-4xl sm:w-72 lg:text-4.5xl lg:mt-16 xl:mt-24`}
      >
        {description[0].title}
      </h1>

      <div className={`${styles.circle} sm:hidden lg:w-32 lg:mt-16`}>
        <Image
          src="/images/1440/Token/Section 5/middle circle.webp"
          width={55}
          height={55}
        />
      </div>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-1 sm:gap-y-4 sm:mt-16 lg:px-40 lg:mt-16 xl:mt-20">
        <div data-aos="fade-up" data-aos-duration="300">
          <a href="https://global.bittrex.com/Market/Index?MarketName=BTC-INXT" target="_blank" rel="noreferrer">
            <div className={`${styles.card} cursor-pointer lg:w-48 lg:px-10 lg:h-24 col-span-1`}>
              <Image
                src="/images/1440/Token/Section 5/bittrex.png"
                width={154}
                height={41}
              />
            </div>
          </a>
        </div>

        <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="50">
          <a href="https://info.uniswap.org/pair/0x73994f935b23511686ce1dd59c295e5100031f4b" target="_blank" rel="noreferrer">
            <div className={`${styles.card} lg:w-48 lg:px-8 lg:h-24 col-span-1`}>
              <Image
                src="/images/1440/Token/Section 5/uniswap.webp"
                width={182}
                height={41}
              />
            </div>
          </a>
        </div>

        <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
          <a href="https://mercatox.com/exchange/INXT/BTC" target="_blank" rel="noreferrer">
            <div className={`${styles.card} lg:w-48 lg:px-6 lg:h-24 col-span-1`}>
              <Image
                src="/images/1440/Token/Section 5/mercatox.webp"
                width={187}
                height={19}
              />
            </div>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-1 sm:gap-y-4 sm:mt-16 lg:px-40 lg:mt-3 xl:mt-2">

        <div data-aos="fade-up" data-aos-duration="300">
          <a href="https://exrates.me/trading/INXTBTC" target="_blank" rel="noreferrer">
            <div className={`${styles.card} cursor-pointer lg:w-48 lg:px-10 lg:h-24 col-span-1`}>
              <Image
                src="/images/1440/Token/Section 5/exrates.webp"
                width={154}
                height={41}
              />
            </div>
          </a>
        </div>

        <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="150">
          <a href="https://latoken.com/exchange/INXT_BTC" target="_blank" rel="noreferrer">
            <div className={`${styles.card} lg:w-48 lg:px-10 lg:h-24 col-span-1`}>
              <Image
                src="/images/1440/Token/Section 5/latoken.webp"
                width={159}
                height={39}
              />
            </div>
          </a>
        </div>

        <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="200">
          <a href="https://yobit.net/en/trade/INXT/BTC" target="_blank" rel="noreferrer">
            <div className={`${styles.card} lg:w-48 lg:px-12 lg:h-24 col-span-1`}>
              <Image
                src="/images/1440/Token/Section 5/yobit.png"
                width={190}
                height={100}
              />
            </div>
          </a>
        </div>
      </div>
      <div className={`${styles.form_container} sm:w-100% lg:mt-16 xl:mt-24`}>
        <div className={`${styles.diamond} sm:hidden lg:w-16 lg:ml-16 lg:mt-16`}>
          <Image
            src="/images/1440/Token/Section 5/right diamond.webp"
            width={80}
            height={70}
          />
        </div>

        <div className={`${styles.cube} sm:hidden lg:w-16 lg:ml-16 lg:mt-12`}>
          <Image
            src="/images/1440/Token/Section 5/left cube.webp"
            width={84}
            height={89}
          />
        </div>

      </div>
    </div>
  );
};

export default Container6;
