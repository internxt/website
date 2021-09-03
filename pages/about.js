import React from 'react';
import Feed from 'rss-to-json';
import HeroSection from '../components/about/HeroSection';
import TeamSection from '../components/about/TeamSection';
import Articles from '../components/about/Articles';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import cookies from '../lib/cookies';

const AboutUs = ({ lang, langJson, footerLang, navbarLang, metatagsDescriptions, articles, articleImages }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'about');

  return (
    <Layout segmentName="about" title={metatags[0].title} description={metatags[0].description}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} />
      <div className="heroSectionHome border-b border-neutral-20">
        <HeroSection textContent={langJson["HeroSection"]} />
      </div>
      <TeamSection textContent={langJson["TeamSection"]} />
      <Articles textContent={langJson["Articles"]} articles={articles} images={articleImages} />
      <Footer textContent={footerLang} lang={lang}/>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const POSTS_URL = 'https://medium.com/feed/Internxt';

  const rss = await Feed.load(POSTS_URL);
  const articles = JSON.parse(JSON.stringify(rss.items));
  const articleImages = [];
  const regex = /<img.*? src="([^"]+)"/;

  articles.map((article) => {
    if (article['description']) {
      articleImages.push(article.description)
    } else if (article['content']) {
      articleImages.push(article.content)
    } else if (article['content-encoded']) {
      articleImages.push(article.content)
    } else {
      console.warn('Can\'t find \'description\' or \'content\' in RRSS Feed')
    }
  })

  articleImages.map((content, index) => {
    if (content && content.match(regex)) {
      articleImages[index] = content.match(regex)[1]
    } else {
      articleImages[index] = null
    }
  })
  
  const lang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const langJson = require(`../assets/lang/${lang}/about.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      articles,
      articleImages,
      metatagsDescriptions,
      footerLang,
      navbarLang,
      langJson
    },
  };
}

export default AboutUs;
