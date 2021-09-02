import React from 'react';
import PublishedArticle from '../cards/PublishedArticle';

const Articles = ({ textContent, articles, images }) => {

  return (
    <section className="bg-neutral-10">
      <div className="content flex flex-col justify-center px-10 md:px-0">
        <h1 className={`flex justify-center my-16 text-2xl`}>
          {textContent.title}
        </h1>

        <div className="grid mx-auto w-auto justify-items-center grid-cols-1 grid-flow-row gap-6 md:grid-cols-2 lg:grid-cols-3 xl:max-w-5xl">
          <div>
            <PublishedArticle
              article={articles[0]}
              image={images[0]}
            />
          </div>

          <div>
            <PublishedArticle
              article={articles[1]}
              image={images[1]}
            />
          </div>

          <div>
            <PublishedArticle
              article={articles[2]}
              image={images[2]}
            />
          </div>

          <div>
            <PublishedArticle
              article={articles[3]}
              image={images[3]}
            />
          </div>

          <div>
            <PublishedArticle
              article={articles[4]}
              image={images[4]}
            />
          </div>

          <div>
            <PublishedArticle
              article={articles[5]}
              image={images[5]}
            />
          </div>

          <div>
            <PublishedArticle
              article={articles[6]}
              image={images[6]}
            />
          </div>

          <div>
            <PublishedArticle
              article={articles[7]}
              image={images[7]}
            />
          </div>

          <div>
            <PublishedArticle
              article={articles[8]}
              image={images[8]}
            />
          </div>
        </div>

        <p className="text-center my-10 sm:text-lg text-neutral-100">
          <a href="https://blog.internxt.com/" target="_blank" rel="noreferrer">
            {textContent.morePosts}
          </a>
        </p>
      </div>
    </section>
  );
};

export async function getServerSideProps(ctx) {
  const lang = ctx.locale;
  const textContent = require(`../../assets/lang/${lang}/about.json`);
  textContent = textContent["Articles"]

  cookies.setReferralCookie(ctx);

  return {
    props: {
      textContent
    },
  };
}

export default Articles;
