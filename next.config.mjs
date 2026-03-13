/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig; 
// (Nota: Si tu archivo termina en module.exports = nextConfig;, déjalo así)
