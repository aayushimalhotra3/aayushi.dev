const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  distDir: 'docs',
  basePath: isProd ? '/aayushi' : '',
  assetPrefix: isProd ? '/aayushi/' : '',
  trailingSlash: true,
  images: { unoptimized: true },
};