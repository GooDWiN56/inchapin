/** @type {import('next').NextConfig} */
import path from "path";

const isProd = (process.env.NODE_ENV = "production");

const sassOptions = {
  includePaths: [path.join(process.cwd(), "styles")],
};

const nextConfig = {
  basePath: isProd ? "/inchapin" : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  sassOptions,
};

export default nextConfig;
