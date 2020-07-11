const prod = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: prod ? '/out/' : '',
  // next export -> /out/home/index.js -> /out/index.js
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/home' },
    }
  },
};

