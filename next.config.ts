
import type {NextConfig} from 'next';

// Get the repository name from package.json or environment variable
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'studio'; // Replace with your actual repository name if different

// Only add basePath and assetPrefix in production (GitHub Pages deployment)
const basePath = isProd ? `/${repoName}` : '';
const assetPrefix = isProd ? `/${repoName}/` : '';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Add this line to enable static HTML export
  basePath: basePath,
  assetPrefix: assetPrefix,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Disable Image Optimization for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
