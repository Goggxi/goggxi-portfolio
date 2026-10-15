/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages (goggxi.github.io)
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
