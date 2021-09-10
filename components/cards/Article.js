import React from 'react';
import moment from 'moment';

const Article = ({ article, image, linkLabel }) => {

  return (
    <a href={article.link} target="_blank" rel="noreferrer" className={`flex flex-col bg-white rounded-lg ring-1 ring-neutral-30 h-full w-full md:w-80`}>
      
      <div className="flex flex-col">
        { image ? (
          <img loading="lazy"
            className="flex flex-col w-full rounded-t-lg"
            src={image}
            alt=""
            draggable="false"
          />
        ) : (
          <img loading="lazy"
            className="flex flex-col w-full"
            src="/images/about/articles/placeholder.png"
            alt=""
            draggable="false"
          />
        ) }
      </div>

      <div className="flex flex-col p-6">
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
  );
};

export async function getServerSideProps(ctx) {

  cookies.setReferralCookie(ctx);

  return {
    props: { },
  };
}

export default Article;
