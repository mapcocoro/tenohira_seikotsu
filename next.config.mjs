/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/tenohira_seikotsu' : '',
  assetPrefix: isProd ? '/tenohira_seikotsu' : '',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/tenohira_seikotsu' : '',
  },
};

export default nextConfig;
