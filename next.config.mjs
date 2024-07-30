/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "img.youtube.com",
      },
      {
        hostname: "static0.gamerantimages.com",
      },
      {
        hostname: "blogger.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
