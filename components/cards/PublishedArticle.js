import React from 'react';
import moment from 'moment';
import styles from './PublishedArticle.module.css';

const PublishedArticle = ({ article, image }) => {

  return (
    <div className={`bg-white rounded-lg ring-1 ring-neutral-30 overflow-hidden h-full w-full md:w-80`}>
      <a href={article.link} target="_blank" rel="noreferrer">
        { image ? (
          <img
            className="w-full"
            src={image}
            alt=""
            draggable="false"
          />
        ) : (
          <img
            className="w-full"
            src="/images/about/articles/placeholder.png"
            alt=""
            draggable="false"
          />
        ) }

        <div className={`p-6`}>
          <p className={`text-xs`}>
            {moment(article.created).format('MMM DD YYYY')}
          </p>

          <p className={`pt-2 text-lg`}>
            {article.title}
          </p>

          <a
            href={article.link}
            target="_blank"
            className={`hover:opacity-80 absolute bottom-0 mb-6 sm:text-xs lg:text-xs mr-1`}
            rel="noreferrer"
          >
          </a>
        </div>
      </a>
      
    </div>
  );
};

export async function getServerSideProps(ctx) {

  cookies.setReferralCookie(ctx);

  return {
    props: {},
  };
}

export default PublishedArticle;
