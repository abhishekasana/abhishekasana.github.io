const routes = require('next-routes');

module.exports = routes()
    .add('about-me', '/about-me', '/about-me')
    .add('blog-b-attack', '/blog/birthday-attack', '/blog/birthday-attack')
    .add('github-pages-js', '/blog/github-pages-nextjs', '/blog/github-pages-nextjs')
    .add('text-search-in-postgres', '/blog/text-search-in-postgresql', '/blog/text-search-in-postgresql')
    .add('home', '/', '/home');