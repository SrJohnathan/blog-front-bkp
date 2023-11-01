/** @type {import('next').NextConfig} */
const nextConfig = {
  images :{domains :["stw-docs-plus.s3.amazonaws.com"]},
  env: {
    //NEXT_PUBLIC_BACKEND: process.env.NEXT_PUBLIC_BACKEND,
    API: process.env.API,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "svg-url-loader"],
    });
    return config;
  },
};
module.exports = nextConfig;
