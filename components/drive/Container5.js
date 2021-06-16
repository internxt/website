import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Container5.module.css';

const Container5 = ({ id, downloadUrl, descriptions }) => {
  // Filter container specific descriptions
  const description = descriptions.filter((desc) => desc.id === id);
  const router = useRouter();

  // Check if a number is odd
  const isOdd = (num) => num % 2 === 1;

  // Set the background color of the container depending on its id
  const background = isOdd(id) ? 'normal_container' : 'normal_container grey';

  return (
    <div className={background}>
      <div className={styles.container}>
        <div className={`${styles.main} items-center`}>
          <h1
            data-aos="fade-up"
            data-aos-duration="300"
            className={`${styles.title1} leading-10 sm:text-4xl sm:text-center sm:mt-12 sm:w-80 lg:text-5xl xl:mt-24`}
          >
            {description[0].title}
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="300"
            className={`${styles.subtitle1} sm:text-xl sm:text-center sm:w-80 lg:text-lg lg:w-10/12 lg:pt-2 xl:text-center`}
          >
            {description[0].subtitle}
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="300"
          className="mt-10 sm:hidden sm:mt-14"
        >
          <Image src="/images/1440/Drive/Section 5/Interface.webp" width={1212} height={575} />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="300"
          className="hidden sm:block sm:object-contain"
        >
          <Image src="/images/1440/Drive/Section 5/375p interface.webp" width={750} height={778} />
        </div>
      </div>

      <div className={`${styles.container2} max-w-1600 sm:py-12 sm:justify-center sm:flex-col-reverse lg:py-16`}>
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-delay="150"
          className={`${styles.hand} sm:w-11/12 lg:w-104`}
        >
          <Image src="/images/1440/Drive/Section 5/blue hand.webp" width={590} height={423} />
        </div>

        <div className={`${styles.main} sm:items-center lg:pl-32`}>
          <h1
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="100"
            className={`${styles.title2} leading-10 sm:text-4xl sm:text-center sm:w-80 lg:text-5xl lg:w-84 lg:leading-tight xl:leading-13 xl:mb-2`}
          >
            {description[0].title2}
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="100"
            className={`${styles.subtitle2} sm:text-xl sm:text-center sm:w-80 lg:text-lg lg:w-96`}
          >
            {description[0].subtitle3}
          </p>

          <p
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="100"
            className={`${styles.subtitle2} sm:text-xl sm:text-center sm:w-80 lg:text-lg lg:w-96`}
          >
            {description[0].subtitle4}
          </p>

          <div className={router.pathname === '/lifetime' ? 'hidden' : `${styles.links} sm:justify-evenly sm:w-80`}>
            <a
              data-aos="fade-up"
              data-aos-duration="300"
              href="https://drive.internxt.com/new"
              target="_blank"
              className={`${styles.link} hover:opacity-80 flex flex-row w-auto items-center sm:p-0 lg:text-lg lg:mb-16`}
              rel="noreferrer"
            >
              <p className={`${styles.margin} font-avertasemibold sm:text-lg mr-2`}>
                {description[0].link1}
              </p>
              <Image
                className={styles.image}
                src="/images/1440/Drive/Section 2/Section2 arrow.svg"
                width={14}
                height={11}
              />
            </a>

            <a
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-delay="50"
              href={downloadUrl}
              target="_blank"
              className={`${styles.link} hover:opacity-80 flex flex-row w-auto items-center sm:p-0 lg:text-lg lg:mb-16`}
              rel="noreferrer"
            >
              <p className={`${styles.margin} font-avertasemibold sm:text-lg mr-2`}>
                {description[0].link2}
              </p>
              <Image
                className={styles.image}
                src="/images/1440/Drive/Section 2/Section2 arrow.svg"
                width={14}
                height={11}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container5;
