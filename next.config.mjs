/** @type {import('next').NextConfig} */
import path from "path";

const isProd = process.env.NODE_ENV === "production";

const sassOptions = {
  basePath: isProd ? "/inchapin/" : "",
  output: "export",
  distDir: "dist",
  includePaths: [path.join(process.cwd(), "styles")],
};

const nextConfig = {
  sassOptions,
};

export default nextConfig;
