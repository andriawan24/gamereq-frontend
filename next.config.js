/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'gamereq-server.herokuapp.com',
    ],
  },
};

module.exports = nextConfig;
