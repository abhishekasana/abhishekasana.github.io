module.exports = {
  // next export -> /out/home/index.js -> /out/index.js
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/home' },
    }
  },
}

