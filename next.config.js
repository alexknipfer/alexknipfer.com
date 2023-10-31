module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.scdn.co',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
