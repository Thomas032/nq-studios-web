/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://nqstudios.com',
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
      'https://nqstudios.com/server-sitemap.xml',
    ],
  },
  exclude: ['/api/*', '/server-sitemap.xml'],
  outDir: 'public',
  transform: async (config, path) => {
    // Custom transformation for pages
    if (path.includes('/vacancies')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }
    // Default transformation for other pages
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
