/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
  async headers() {
    const longCache = [
      { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
    ];
    return [
      { source: "/rides/:path*", headers: longCache },
      { source: "/hero-bg.jpg", headers: longCache },
      { source: "/logo.png", headers: longCache },
    ];
  },
};

module.exports = nextConfig;
