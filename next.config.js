const prod = process.env.NODE_ENV === 'production';
// const BASE_PREFIX_FOR_APP = prod ? '/out/' : '';
const BASE_PREFIX_FOR_APP = '';

module.exports = {
  assetPrefix: BASE_PREFIX_FOR_APP,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/home' },
      '/about-me': { page: '/about-me' },
      '/blog/birthday-attack': { page: '/blog/birthday-attack' },
      '/blog/github-pages-nextjs': { page: '/blog/github-pages-nextjs'},
      '/blog/text-search-in-postgresql': { page: '/blog/text-search-in-postgresql'},
      '/blog/deepdive-in-storage': { page: '/blog/deepdive-in-storage'},
      '/blog/currency-arbitrage': { page: '/blog/currency-arbitrage'},
    }
  },
};

