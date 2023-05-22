/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URI: "mongodb://localhost:27017/next13-auth",
    secretKey: "codingwithnoman",
  },
};

module.exports = nextConfig;
