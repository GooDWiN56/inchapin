/** @type {import('next').NextConfig} */
import path from "path";

const sassOptions = {
  includePaths: [path.join(process.cwd(), "styles")],
};

const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  sassOptions,
};

export default nextConfig;
