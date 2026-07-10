import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const isGithubPagesBuild = process.env.GITHUB_PAGES_BUILD === "true";

const nextConfig: NextConfig = {
  ...(isGithubPagesBuild ? { output: "export" as const } : {}),
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
