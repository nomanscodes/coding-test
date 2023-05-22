/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_URI: "mongodb://localhost:27017/next13-auth",
    NEXTAUTH_SECRET: "codingwithnoman",
  },
};

module.exports = nextConfig;
