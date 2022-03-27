const routes = require('next-routes');

module.exports = routes()
    .add('about-me', '/about-me', '/about-me')
    .add('blog-b-attack', '/blog/birthday-attack', '/blog/birthday-attack')
    .add('home', '/', '/home');