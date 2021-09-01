import React from 'react';
import styles from './Container7.module.css';
import PublishedArticle from '../cards/PublishedArticle';

const Articles = ({ textContent, articles, cardDescriptions, images }) => {

  return (
    <section>
      <div className="content">
        <h1 className={`my-16 sm:text-4xl`}>
          {textContent.title}
        </h1>

        <div className="w-full grid grid-cols-3 gap-y-6 gap-x-3 sm:grid-cols-1">
          <div
            data-aos="fade-up"
            data-aos-duration="300"
            className="col-span-1"
          >
            <PublishedArticle
              article={articles[0]}
              image={images[0]}
              textContent={textContent.read}
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="50"
            className="col-span-1"
          >
            <PublishedArticle
              article={articles[1]}
              image={images[1]}
              textContent={textContent.read}
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="150"
            className="col-span-1"
          >
            <PublishedArticle
              article={articles[2]}
              image={images[2]}
              textContent={textContent.read}
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="200"
            className="col-span-1"
          >
            <PublishedArticle
              article={articles[3]}
              image={images[3]}
              textContent={textContent.read}
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="250"
            className="col-span-1"
          >
            <PublishedArticle
              article={articles[4]}
              image={images[4]}
              textContent={textContent.read}
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            className="col-span-1"
          >
            <PublishedArticle
              article={articles[5]}
              image={images[5]}
              textContent={textContent.read}
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="250"
            className="col-span-1"
          >
            <PublishedArticle
              article={articles[6]}
              image={images[6]}
              textContent={textContent.read}
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="300"
            className="col-span-1"
          >
            <PublishedArticle
              article={articles[7]}
              image={images[7]}
              textContent={textContent.read}
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-delay="350"
            className="col-span-1"
          >
            <PublishedArticle
              article={articles[8]}
              image={images[8]}
              textContent={textContent.read}
            />
          </div>
        </div>

        <a href="https://blog.internxt.com/" target="_blank" className={`${styles.link} hover:opacity-80 flex flex-row items-center sm:my-16 lg:text-lg lg:mb-16`} rel="noreferrer">
          <p className="mr-2 sm:text-lg">
            {textContent.link}
          </p>
        </a>
      </div>
    </section>
  );
};

export default Articles;
