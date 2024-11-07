import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  env: {
    API_URL: process.env.API_URL as string,
  }
};

export default nextConfig;
