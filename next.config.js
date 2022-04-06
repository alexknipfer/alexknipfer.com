module.exports = {
  images: {
    domains: ['i.scdn.co'],
  },
  future: {
    strictPostcssConfiguration: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
