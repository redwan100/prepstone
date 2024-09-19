/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "yt3.googleusercontent.com",
        pathname: "**",
      },
    ],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
