const routes = require('next-routes');

module.exports = routes()
    .add('about-me', '/about-me', '/about-me')
    .add('blog-b-attack', '/blog/birthday-attack', '/blog/birthday-attack')
    .add('github-pages-js', '/blog/github-pages-nextjs', '/blog/github-pages-nextjs')
    .add('text-search-in-postgres', '/blog/text-search-in-postgresql', '/blog/text-search-in-postgresql')
    .add('social-banner-test-8', '/social-banner-test-8', '/social-banner-test-8')
    .add('social-banner-test-4', '/social-banner-test-4', '/social-banner-test-4')
    .add('social-banner-test-5', '/social-banner-test-5', '/social-banner-test-5')
    .add('social-banner-test-6', '/social-banner-test-6', '/social-banner-test-6')
    .add('home', '/', '/home');