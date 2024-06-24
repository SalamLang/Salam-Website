import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};