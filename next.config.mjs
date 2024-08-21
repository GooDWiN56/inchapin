/** @type {import('next').NextConfig} */
import path from "path";

const sassOptions = {
  includePaths: [path.join(process.cwd(), "styles")],
};

const nextConfig = {
  sassOptions,
};

export default nextConfig;
