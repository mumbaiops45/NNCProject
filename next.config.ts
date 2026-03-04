// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Required for Netlify static hosting
  images: {
    unoptimized: true,
  },

  // Prevents refresh 404 error on Netlify
  trailingSlash: true,
};

export default nextConfig;