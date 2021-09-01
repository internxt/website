import React from 'react';
import Feed from 'rss-to-json';
import HeroSection from '../components/about/HeroSection';
import Articles from '../components/about/Articles';
import Footer from '../components/layout/Footer';
import Layout from '../components/layout/Layout';
import Navbar from '../components/layout/Navbar';
import cookies from '../lib/cookies';

const AboutUs = ({ lang, langJson, footerLang, navbarLang, metatagsDescriptions, articles, images }) => {
  const metatags = metatagsDescriptions.filter((desc) => desc.id === 'about');

  return (
    <Layout segmentName="about" title={metatags[0].title} description={metatags[0].description}>
      <Navbar textContent={navbarLang} lang={lang} cta={['default']} />
      <HeroSection textContent={langJson["HeroSection"]} />
      <Articles textContent={langJson["Articles"]} articles={articles} images={images} />
      <div className="bg-neutral-10">
        <Footer textContent={footerLang} lang={lang}/>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(ctx) {
  const POSTS_URL = 'https://medium.com/feed/Internxt';

  const rss = await Feed.load(POSTS_URL);
  const articles = rss.items;
  const images = [];

  const regex = /<img src="(.*)" width=/;

  articles.forEach((elem) => {
    if (elem.description) {
      const image = elem.description.match(regex)[1];
      images.push(image);
    } else images.push(null);
  });
  const lang = ctx.locale;
  const metatagsDescriptions = require(`../assets/lang/${lang}/metatags-descriptions.json`);
  const footerLang = require(`../assets/lang/${lang}/footer.json`);
  const navbarLang = require(`../assets/lang/${lang}/navbar.json`);
  const langJson = require(`../assets/lang/${lang}/about.json`);

  cookies.setReferralCookie(ctx);

  return {
    props: {
      articles: JSON.parse(JSON.stringify(articles)),
      images,
      metatagsDescriptions,
      footerLang,
      navbarLang,
      langJson
    },
  };
}

export default AboutUs;
