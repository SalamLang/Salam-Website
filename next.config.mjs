import { createRequire } from "module";
const require = createRequire(import.meta.url);
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: false,
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ["logo.samandehi.ir"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logo.samandehi.ir",
        pathname: "/**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default withPWA(nextConfig);