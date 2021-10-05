import fs from 'fs';
import path from 'path';

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const baseUrl = {
    development: 'http://localhost:3001',
    production: 'https://internxt.com',
  }[process.env.NODE_ENV];

  const pages = {
    index: '1.0',
    about: '1.0',
    legal: '0.5',
    lifetime: '0.8',
    pricing: '1.0',
    products: '0.8'
  };

  const staticPages = fs
    .readdirSync('pages')
    .filter((staticPage) => Object.keys(
      pages
    ).includes(path.parse(staticPage).name))
    .map((staticPagePath) => `${baseUrl}/${path.parse(staticPagePath).name}`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
    .map((url) => `
            <url>
              <loc>${url === 'index.js' ? '' : url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `)
    .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
