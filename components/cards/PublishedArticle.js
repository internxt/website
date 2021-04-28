import React from 'react';
import moment from 'moment';
import styles from './PublishedArticle.module.css';

const PublishedArticle = ({ article, image, descriptions }) => {
  const description = descriptions.filter((desc) => desc.id === 'PublishedArticle');

  return (
    <div className={`${styles.card} col-span-1 overflow-hidden h-full sm:w-84 lg:w-72`}>
      { image ? (
        <img
          className="w-full object-cover lg:-36 xl:h-48"
          src={image}
          alt=""
        />
      ) : (
        <img
          className="w-full object-cover lg:h-36 xl:h-48"
          src="/images/1440/About/internxt.png"
          alt=""
        />
      ) }

      <div className={`${styles.description} sm:pl-6 sm:pt-2 lg:pl-4 lg:pt-4 xl:pl-6 xl:pt-6 relative`}>
        <p className={`${styles.date} sm:text-xs lg:text-xxs`}>
          {moment(article.created).format('MMM DD YYYY')}
        </p>

        <h1 className={`${styles.title} sm:text-lg sm:w-80 sm:pr-4 sm:pb-16 lg:text-sm lg:mb-10 lg:pr-4 xl:mb-16 xl:pr-6`}>
          {article.title}
        </h1>

        <a
          href={article.link}
          target="_blank"
          className={`${styles.link} hover:opacity-80 absolute bottom-0 mb-6 sm:text-xss lg:text-xxxs mr-1`}
          rel="noreferrer"
        >
          {description[0].link}
        </a>
      </div>
    </div>
  );
};

export default PublishedArticle;
