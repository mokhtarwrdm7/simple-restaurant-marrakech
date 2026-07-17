/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    // Project lives under OneDrive, which locks the webpack on-disk cache and
    // causes EPERM/EBUSY crashes. Disable the disk cache in dev for stability.
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
