/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URL: "mongodb://0.0.0.0:27017/next13-auth",
    NEXTAUTH_SECRET: "codingwithnoman",
  },
};

module.exports = nextConfig;
