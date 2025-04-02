/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://nq-studios.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/*'],
      },
    ],
    additionalSitemaps: [
      'https://nq-studios.com/server-sitemap.xml',
    ],
  },
  exclude: ['/api/*', '/server-sitemap.xml'],
  outDir: 'public',
  transform: async (config, path) => {
    // Default transformation for other pages
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
