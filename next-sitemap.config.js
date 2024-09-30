// next-sitemap.config.js
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://fibertechservices.net', // Replace with your website's URL
    generateRobotsTxt: true, // Create a robots.txt file
    changefreq: 'daily', // How often the sitemap should update
    priority: 0.7, // Priority of URLs
    exclude: ['/admin/*', '/404'], // Exclude specific routes
    generateIndexSitemap: false, // Prevents sitemap index (grouping)
};
