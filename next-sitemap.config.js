/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: WEB_CORE_URL || "",
  generateRobotsTxt: true,
  sitemapSize: 5000,
};

module.exports = config;
