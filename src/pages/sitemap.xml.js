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
    pricing: '1.0',
    drive: '1.0',
    'temporary-email': '0.8',
    'file-converter': '0.8',
    about: '0.6',
  };

  const staticPages = fs
    .readdirSync('src/pages')
    .filter((staticPage) => Object.keys(pages).includes(path.parse(staticPage).name))
    .map((staticPagePath) => `${path.parse(staticPagePath).name}`);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(
          (page) => `
            <url>
              <loc>${page === 'index' ? `${baseUrl}/` : `${baseUrl}/${page}`}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>${pages[page]}</priority>
            </url>
          `,
        )
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
