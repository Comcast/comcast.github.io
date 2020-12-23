const fs = require('fs');
const getPathsObject = require('./getPathsObject');
const formatDate = require('./formatDate');

const pagesObj = getPathsObject('src/pages/');
const publicObj = getPathsObject('public/');
const today = formatDate(new Date());
const urlNode = (path) => `
  <url>
    <loc>https://comcast.github.io${path}</loc>
    <lastmod>${
  pagesObj[path].lastModified
    ? formatDate(new Date(pagesObj[path].lastModified))
    : today
}</lastmod>
    <changefreq>daily</changefreq>
  </url>`;

const sitemapXml = `<?xml version='1.0' encoding='UTF-8'?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://comcast.github.io/</loc>
    <lastmod>${pagesObj['/index'].lastModified
    ? formatDate(new Date(pagesObj['/index'].lastModified))
    : today}</lastmod>
    <changefreq>daily</changefreq>
  </url>${Object.keys(pagesObj).map((path) => (path.includes('index') || path.includes('_') || path.includes('404') || path.includes('sitemap.xml') || path.includes('styles') ? '' : urlNode(path))).join('')}
  <url>
    <loc>https://comcast.github.io/humans.txt</loc>
    <lastmod>${publicObj['/humans'].lastModified
    ? formatDate(new Date(publicObj['/humans'].lastModified))
    : today}</lastmod>
    <changefreq>monthly</changefreq>
  </url>
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemapXml);
