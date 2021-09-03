import React from 'react';
import moment from 'moment';

const Article = ({ article, image, linkLabel }) => {

  return (
    <div className={`flex flex-col bg-white rounded-lg ring-1 ring-neutral-30 overflow-hidden h-full w-full md:w-80`}>
      <a href={article.link} target="_blank" rel="noreferrer">
        { image ? (
          <img loading="lazy"
            className="w-full"
            src={image}
            alt=""
            draggable="false"
          />
        ) : (
          <img loading="lazy"
            className="w-full"
            src="/images/about/articles/placeholder.png"
            alt=""
            draggable="false"
          />
        ) }

        <div className={`flex flex-col p-6`}>
          <div>
            <p className={`text-xs`}>
              {moment(article.created).format('MMM DD YYYY')}
            </p>

            <p className={`pt-2 text-lg`}>
              {article.title}
            </p>
          </div>

          <p className={`pt-2 text-sm text-blue-50`}>
            {linkLabel}
          </p>
        </div>
      </a>
      
    </div>
  );
};

export async function getServerSideProps(ctx) {

  cookies.setReferralCookie(ctx);

  return {
    props: { },
  };
}

export default Article;
