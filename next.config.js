/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS || false;
const repoName = "your-repo-name"; // 🔹 Replace with your actual GitHub repo name

const nextConfig = {
  reactStrictMode: true,

  // Fix asset and static file paths for GitHub Pages
  basePath: isGitHubPages ? `/${repoName}` : "",
  assetPrefix: isGitHubPages ? `/${repoName}/` : "",

  // Ensure static exports work properly
  trailingSlash: true,

  // Fix Next.js images for GitHub Pages
  images: {
    unoptimized: true, // Disable image optimization (GitHub Pages does not support it)
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
