/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    READWISE_ACCESS_TOKEN: process.env.READWISE_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;

