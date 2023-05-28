/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SLACK_URL: process.env.SLACK_URL,
  },
};

module.exports = nextConfig;
