import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd()
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.myjoyonline.com",
        pathname: "/wp-content/**"
      }
    ]
  }
};

export default nextConfig;
