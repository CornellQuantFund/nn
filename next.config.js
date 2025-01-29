/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS || false;
const repoName = "nn"; // Change this to your actual GitHub repo name

const nextConfig = {
  reactStrictMode: true,

  // Fix paths for GitHub Pages deployment
  basePath: isGitHubPages ? `/${repoName}` : "",
  assetPrefix: isGitHubPages ? `/${repoName}` : "",

  // Ensure static exports work properly
  trailingSlash: true,

  // Fix images (GitHub Pages does not support Next.js image optimization)
  images: {
    unoptimized: true,
  },

  // Fix server-side only modules in the frontend
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
