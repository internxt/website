import React from 'react';
import moment from 'moment';

const Article = ({ article, image, linkLabel }) => (
  <a
    href={article.link}
    target="_blank"
    rel="noreferrer"
    className="flex h-full w-full flex-col rounded-lg bg-white ring-1 ring-neutral-30 md:w-80"
  >
    <div className="flex flex-col">
      {image ? (
        <img loading="lazy" className="flex w-full flex-col rounded-t-lg" src={image} alt="" draggable="false" />
      ) : (
        <img
          loading="lazy"
          className="flex w-full flex-col"
          src="/images/about/articles/placeholder.png"
          alt="Placeholder image"
          draggable="false"
        />
      )}
    </div>

    <div className="flex flex-col p-6">
      <div>
        <p className="text-xs">{moment(article.created).format('MMM DD YYYY')}</p>

        <p className="pt-2 text-lg">{article.title}</p>
      </div>

      <p className="pt-2 text-sm text-blue-50">{linkLabel}</p>
    </div>
  </a>
);

export default Article;
