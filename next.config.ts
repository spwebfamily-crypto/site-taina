import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    imageSizes: [32, 48, 64, 96, 128, 256, 280, 320, 384, 480, 560],
    qualities: [75, 100],
  },
};

export default nextConfig;
