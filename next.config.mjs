/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/backend/:path*",
        destination: "http://52.79.236.16:9000/:path*",
      },
    ];
  },
};

export default nextConfig;
