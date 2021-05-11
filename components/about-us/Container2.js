import React from 'react';
import Image from 'next/image';
import styles from './Container2.module.css';

const Container2 = ({ id, descriptions }) => {
  const description = descriptions.filter((desc) => desc.id === id);

  // Esta funcion cambiara el color de una determinada palabra de texto
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
                    className={`${styles.colored}`}
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
    <div className={`${styles.main}`}>
      <h1
        data-aos="fade-up"
        data-aos-duration="300"
        className={`${styles.assosciated} sm:hidden lg:text-sm lg:mb-12`}
      >
        {description[0].title}
      </h1>

      <div className="flex justify-evenly items-center w-full mt-12 md:hidden lg:hidden xl:hidden">
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          className="w-40"
        >
          <Image
            src="/images/1440/About/Section 2/lanzadera.webp"
            width={177}
            height={23}
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="300"
          className="w-20"
        >
          <Image
            src="/images/1440/About/Section 2/stripe.webp"
            width={160}
            height={70}
          />
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="300"
        className="flex items-center sm:col-span-2 md:hidden lg:hidden xl:hidden mt-8"
      >
        <Image
          src="/images/1440/About/Section 2/venture.webp"
          width={235}
          height={42}
        />
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="300"
        className="flex items-center sm:col-span-2 mt-8 md:hidden lg:hidden xl:hidden"
      >
        <Image
          src="/images/1440/About/Section 2/combinator.webp"
          width={160}
          height={34}
        />
      </div>

      <div className="flex justify-evenly items-center w-full mt-8 md:hidden lg:hidden xl:hidden">
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          className="flex items-center sm:col-span-2"
        >
          <Image
            src="/images/1440/About/Section 2/blackberry.webp"
            width={179}
            height={31}
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="300"
          className="flex items-center sm:col-span-2 w-16"
        >
          <Image
            src="/images/1440/About/Section 2/500.webp"
            width={71}
            height={71}
          />
        </div>
      </div>

      <div className={`${styles.assosciated_logos} sm:hidden lg:mb-12`}>
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          className="flex items-center lg:w-32"
        >
          <Image
            src="/images/1440/About/Section 2/lanzadera.webp"
            width={177}
            height={23}
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="50"
          className="flex items-center lg:w-20"
        >
          <Image
            src="/images/1440/About/Section 2/stripe.webp"
            width={160}
            height={70}
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="100"
          className="flex items-center lg:w-16"
        >
          <Image
            src="/images/1440/About/Section 2/500.webp"
            width={71}
            height={71}
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="150"
          className="flex items-center lg:w-48"
        >
          <Image
            src="/images/1440/About/Section 2/venture.webp"
            width={235}
            height={42}
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="200"
          className="flex items-center lg:w-32"
        >
          <Image
            src="/images/1440/About/Section 2/blackberry.webp"
            width={179}
            height={31}
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="250"
          className="flex items-center lg:w-32"
        >
          <Image
            src="/images/1440/About/Section 2/combinator.webp"
            width={160}
            height={34}
          />
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="300"
        className={`${styles.subtitle} sm:text-xl sm:w-72 sm:mt-12 lg:text-xl lg:w-120 lg:mb-16`}
      >
        {formattedText(description[0].subtitle, description[0].colored)}
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="300"
        className="lg:px-32 xl:px-40"
      >
        <Image
          src="/images/1440/About/Section 2/about photos.webp"
          width={1250}
          height={850}
          className="rounded"
        />
      </div>

      <p
        data-aos="fade-up"
        data-aos-duration="300"
        className={`${styles.subtitle2} sm:text-13 sm:mt-4 sm:text-gray-600 sm:font-avertalight lg:text-xs lg:mt-2`}
      >
        {description[0].subtitle2}
      </p>
    </div>
  );
};

export default Container2;
